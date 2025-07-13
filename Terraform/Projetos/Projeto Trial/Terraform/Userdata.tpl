#!/bin/bash

# Update package index
apt-get update -y

# Install packages to allow apt to use a repository over HTTPS
apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# Add Docker's official GPG key
mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# Set up the repository
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

# Update package index again
apt-get update -y

# Install Docker Engine
apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Start and enable Docker service
systemctl start docker
systemctl enable docker

# Add ubuntu user to docker group (so you can run docker without sudo)
usermod -aG docker ubuntu

# Install Docker Compose (standalone version as backup)
DOCKER_COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep 'tag_name' | cut -d\" -f4)
curl -L "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Create a symbolic link for easier access
ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

# Verify installation by creating a test log
docker --version > /var/log/docker-install.log
docker-compose --version >> /var/log/docker-install.log

# Set up log rotation for Docker
cat > /etc/logrotate.d/docker << EOF
/var/lib/docker/containers/*/*.log {
    rotate 5
    daily
    compress
    size=10M
    missingok
    delaycompress
    copytruncate
}
EOF

# Configure Docker daemon for better logging and security
mkdir -p /etc/docker
cat > /etc/docker/daemon.json << EOF
{
    "log-driver": "json-file",
    "log-opts": {
        "max-size": "10m",
        "max-file": "3"
    },
    "live-restore": true
}
EOF

# Restart Docker to apply configuration
systemctl restart docker

# Test Docker installation
docker run hello-world >> /var/log/docker-install.log 2>&1

# Clean up
apt-get autoremove -y
apt-get autoclean

echo "Docker installation completed successfully" >> /var/log/docker-install.log
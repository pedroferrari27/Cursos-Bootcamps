module.exports = async (params) => {
    // Get access to necessary Obsidian APIs
    const { app, Notice } = this;
    const currentFile = app.workspace.getActiveFile();
    if (!currentFile) {
        new Notice("No file is currently open");
        return;
    }
    
    // Get the current editor and cursor position
    const editor = app.workspace.activeEditor.editor;
    const cursor = editor.getCursor();
    
    // Extract tags from current note's frontmatter
    const fileCache = app.metadataCache.getFileCache(currentFile);
    const frontmatter = fileCache?.frontmatter || {};
    const tags = frontmatter.tags || [];
    const tagString = Array.isArray(tags) ? tags.join(', ') : tags;
    
    // Get selected text or prompt for concept name
    let conceptName = editor.getSelection();
    if (!conceptName || conceptName.trim() === "") {
        // No selection, prompt for concept name
        conceptName = await params.quickAddApi.inputPrompt("Enter concept name:");
        if (!conceptName || conceptName.trim() === "") {
            new Notice("No concept name provided, operation cancelled");
            return;
        }
    }
    
    // Clean the concept name for use as a filename
    const cleanConceptName = conceptName.trim();
    
    // Updated folder path
    const conceptFolder = "Azure Databricks DIO/Conceitos";
    
    // Check if the concept folder exists, create if not (including parent folders)
    const folderPath = conceptFolder.split('/');
    let currentPath = "";
    
    for (const folder of folderPath) {
        if (currentPath) {
            currentPath += "/";
        }
        currentPath += folder;
        
        const folderExists = app.vault.getAbstractFileByPath(currentPath);
        if (!folderExists) {
            await app.vault.createFolder(currentPath);
            new Notice(`Created folder: ${currentPath}`);
        }
    }
    
    // Create the path for the new note
    const conceptPath = `${conceptFolder}/${cleanConceptName}.md`;
    
    // Check if a note with this name already exists
    const existingFile = app.vault.getAbstractFileByPath(conceptPath);
    let fileCreated = false;
    
    // Format date as DD-MM-YYYY for Date type in YAML
    const formatDate = (date) => {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
        const year = d.getFullYear();
        return `${day}-${month}-${year}`;
    };
    
    const currentDate = formatDate(new Date());
    
    if (!existingFile) {
        // Create content with ONLY frontmatter using the Date type
        const content = `---
tags: ${tagString}
source: "[[${currentFile.basename}]]"
created: ${currentDate}
---
`;

        // Create the new concept note
        await app.vault.create(conceptPath, content);
        fileCreated = true;
        new Notice(`Created concept note: ${cleanConceptName}`);
    } else {
        // File already exists - update the modified date
        const conceptContent = await app.vault.read(existingFile);
        
        // Add reference to current lecture if not present
        if (!updatedContent.includes(`[[${currentFile.basename}]]`)) {
            // Check if source already has content
            if (updatedContent.includes('source: "[[')) {
                // Append to existing source
                updatedContent = updatedContent.replace(
                    /source: "(\[\[.*?\]\])"/,
                    `source: "$1, [[${currentFile.basename}]]"`
                );
            } else {
                // Create new source field
                updatedContent = updatedContent.replace(
                    /tags: .*$/m,
                    `$&\nsource: "[[${currentFile.basename}]]"`
                );
            }
        }
        
        await app.vault.modify(existingFile, updatedContent);
        new Notice(`Updated concept note: ${cleanConceptName}`);
    }
    
    // Insert link to the concept at cursor position
    editor.replaceRange(`[[${cleanConceptName}]]`, cursor);
    
    // Open the concept note in a split view
    const conceptFile = app.vault.getAbstractFileByPath(conceptPath);
    if (conceptFile) {
        const leaf = app.workspace.splitActiveLeaf();
        await leaf.openFile(conceptFile);
    }
};

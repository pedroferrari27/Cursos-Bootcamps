module.exports = async (params) => {
    const { app, quickAddApi } = params;
    
    try {
      // Get current note's content and path
      const activeView = app.workspace.getActiveViewOfType(require('obsidian').MarkdownView);
      if (!activeView) {
        new Notice("No active markdown view");
        return false;
      }
      
      const currentNoteContent = activeView.getViewData();
      const currentNotePath = app.workspace.getActiveFile().path;
      const currentNoteBasename = app.workspace.getActiveFile().basename;
      
      // Configure the target folder and template
      const targetFolder = "/home/pedro/obsidian_mindmaps/Bootcamps/AWS Solutions Architect Associate/Conceitos"; // CHANGE THIS to your desired folder path
      const templatePath = "templates/Template_Linked"; // CHANGE THIS to your template path
      
      // Extract YAML tags from current note
      let currentNoteTags = [];
      const yamlRegex = /^---\n([\s\S]*?)\n---/;
      const yamlMatch = currentNoteContent.match(yamlRegex);
      
      if (yamlMatch) {
        const yamlContent = yamlMatch[1];
        const tagMatch = yamlContent.match(/tags:\s*\[(.*?)\]|tags:\s*\n([\s\S]*?)(?=\n\w|$)/);
        
        if (tagMatch) {
          if (tagMatch[1]) {
            // Handle inline array format: tags: [tag1, tag2]
            currentNoteTags = tagMatch[1].split(',').map(tag => tag.trim());
          } else if (tagMatch[2]) {
            // Handle list format:
            // tags:
            //   - tag1
            //   - tag2
            currentNoteTags = tagMatch[2]
              .split('\n')
              .filter(line => line.trim().startsWith('-'))
              .map(line => line.trim().substring(1).trim());
          }
        }
      }
      
      // Prompt for the new note title
      const newNoteTitle = await quickAddApi.inputPrompt(
        "Enter the title for the new note:",
        currentNoteBasename + " - Child"
      );
      
      if (!newNoteTitle) {
        new Notice("Operation cancelled");
        return false;
      }
      
      // Format the tags for YAML
      let tagsYaml = "";
      if (currentNoteTags.length > 0) {
        tagsYaml = "tags:\n";
        currentNoteTags.forEach(tag => {
          tagsYaml += `  - ${tag}\n`;
        });
      }
      
      // Check if the target folder exists, create it if it doesn't
      try {
        const folderExists = app.vault.getAbstractFileByPath(targetFolder);
        if (!folderExists) {
          // Create the folder structure if it doesn't exist
          const folders = targetFolder.split('/');
          let currentPath = "";
          
          for (const folder of folders) {
            if (!folder) continue;
            
            currentPath += folder;
            const exists = app.vault.getAbstractFileByPath(currentPath);
            
            if (!exists) {
              await app.vault.createFolder(currentPath);
            }
            
            currentPath += '/';
          }
          
          new Notice(`Created folder structure: ${targetFolder}`);
        }
      } catch (error) {
        console.error("Error checking/creating folder:", error);
        new Notice(`Error creating folder: ${error.message}`);
        return false;
      }
      
      const newNotePath = `${targetFolder}/${newNoteTitle}.md`;
      let templateContent = "";
      
      try {
        const templateFile = app.vault.getAbstractFileByPath(templatePath);
        if (templateFile) {
          templateContent = await app.vault.read(templateFile);
          
          // Add or replace tags in the template's YAML frontmatter
          if (templateContent.startsWith("---")) {
            // If template has YAML, replace or add tags
            if (templateContent.match(/tags:/)) {
              templateContent = templateContent.replace(/tags:.*?(?=\n\w|\n-|\n\n|$)/s, tagsYaml.trim());
            } else {
              templateContent = templateContent.replace(/---\n/, `---\n${tagsYaml}`);
            }
          } else {
            // If template doesn't have YAML, add it
            templateContent = `---\n${tagsYaml}---\n\n${templateContent}`;
          }
        } else {
          // If template doesn't exist, create basic content
          templateContent = `---\n${tagsYaml}---\n\n# ${newNoteTitle}\n\n`;
        }
      } catch (error) {
        console.error("Error reading template:", error);
        templateContent = `---\n${tagsYaml}---\n\n# ${newNoteTitle}\n\n`;
      }
      
      // Create the new note
      await app.vault.create(newNotePath, templateContent);
      
      // Add link to the new note in the current note
      const linkText = `[[${newNoteTitle}]]`;
      const editor = activeView.editor;
      const cursor = editor.getCursor();
      editor.replaceRange(linkText, cursor);
      
      // Provide feedback
      new Notice(`Created new note: ${newNoteTitle} in folder ${targetFolder}`);
      
      // Open the new note (optional)
      const newFile = app.vault.getAbstractFileByPath(newNotePath);
      if (newFile) {
        await app.workspace.getLeaf().openFile(newFile);
      }
      
      return true;
    } catch (error) {
      console.error("Error in QuickAdd script:", error);
      new Notice(`Error: ${error.message}`);
      return false;
    }
  };
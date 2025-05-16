async function setDateProperty(propertyName) {
    // Give Obsidian time to create the note
    await new Promise(r => setTimeout(r, 500));
    
    // Get the MetaEdit API
    const metaEdit = app.plugins.plugins.metaedit?.api;
    
    if (!metaEdit) {
        console.error("MetaEdit API not found. Is the plugin enabled?");
        return "";
    }
    
    try {
        // Get current file
        const file = tp.file.find_tfile(tp.file.path(true));
        
        // Change the property type
        await metaEdit.changePropertyType(file, propertyName, "date");
        return "";
    } catch (e) {
        console.error("Error setting property type:", e);
        return "";
    }
}

module.exports = setDateProperty;

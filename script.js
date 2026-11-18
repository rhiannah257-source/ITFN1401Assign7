function showLastModified() {
    let lastMod = document.lastModified;

    document.getElementById("lastModified").innerHTML = 
    "This page was last modified: " + lastMod;
    
}
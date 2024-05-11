function createDiv(width, height, text) {
    
    var div = document.createElement("div");
    
    div.style.width = width + "px";
    div.style.height = height + "px";
    div.style.color="white"
    div.style.backgroundColor="grey"
    div.textContent = text;
    
    document.getElementById("container").appendChild(div);
}

createDiv(600, 200, "Iam Laxmisneha Chilukuri");

Window.createDiv = createDiv;
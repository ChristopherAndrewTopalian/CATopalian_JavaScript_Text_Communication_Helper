// menu.js

function menu(whichArray, xPos, yPos)
{
    whichArray = eval(whichArray);

    let mainDiv = ce("div");

    mainDiv.style.position = "absolute";
    mainDiv.style.left = xPos + "px";
    mainDiv.style.top = yPos + "px";
    mainDiv.style.width = 75 + "px";
    mainDiv.style.borderStyle = "solid";
    mainDiv.style.borderWidth = 1 + "px";
    mainDiv.style.display = "flex";
    mainDiv.style.flexDirection = "column";
    mainDiv.style.overflowY = "scroll";
    mainDiv.style.height = 240 + "px";
    mainDiv.style.fontSize = 20 + "px";
    ba(mainDiv);

    //-//

    for (let x = 0; x < whichArray.length; x++)
    {
        let theButton = ce("span");
        theButton.innerHTML = whichArray[x];
        theButton.style.display = "flex";
        theButton.style.flexDirection = "row";
        mainDiv.append(theButton);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


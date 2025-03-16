// makeHighlightedWordButton.js

function makeHighlightedWordButton()
{
    let theHighlightedWordButton = ce("button");
    theHighlightedWordButton.style.position = "absolute";
    theHighlightedWordButton.style.left = 0 + "px";
    theHighlightedWordButton.style.top = 0 + "px";
    theHighlightedWordButton.innerHTML = "Show Highlighted Word";
    theHighlightedWordButton.onclick = function()
    {
        showResult('theResult');
    }
    ba(theHighlightedWordButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


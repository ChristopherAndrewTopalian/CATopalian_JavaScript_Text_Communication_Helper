// menuMakeAll.js

function menuMakeAll(whichArray)
{
    let xPos = 20;

    // whichArray = eval(whichArray);

    for (let x = 0; x < whichArray.length; x++)
    {
        menu(whichArray[x], xPos, 55);
        xPos += 120;
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


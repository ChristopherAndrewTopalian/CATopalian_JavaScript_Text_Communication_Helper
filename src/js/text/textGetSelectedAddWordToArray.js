// textGetSelectedAddWordToArray.js

function textGetSelectedAddWordToArray()
{
    let theSelection = document.getSelection() + " ";

    // add a new word to the array
    //arrayOfSelectedWords.push(theSelection);

    arrayOfSelectedWords[arrayOfSelectedWords.length-1] += theSelection;

    if (ge('theArrayResult'))
    {
        ge("theArrayResult").innerHTML = arrayOfSelectedWords.join(' '); // instead of commas we use join space
    }

    //return arrayOfSelectedWords;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


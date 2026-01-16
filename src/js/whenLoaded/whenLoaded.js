// whenLoaded.js

function whenLoaded()
{
    makeTitleOfApp();

    window.ondblclick = function()
    {
        //ge('theArrayResult').innerText = '';
        showResult('theResult');
        textGetSelectedAddWordToArray();
    };

    menuMakeAll(menusArray);

    // makeHighlightedWordButton();
    makeResultDiv();
    makeArrayResultDiv();
}

/*
    menu("nouns001", 20, 100);
    menu("verbs001", 180, 100);
    menu("prepositions001", 320, 100);
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


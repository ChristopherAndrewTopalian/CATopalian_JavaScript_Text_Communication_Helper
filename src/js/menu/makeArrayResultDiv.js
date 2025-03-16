// makeArrayResultDiv.js

function makeArrayResultDiv()
{
    let theArrayResultDiv = ce("div");
    theArrayResultDiv.contentEditable = 'true';
    theArrayResultDiv.style.position = "absolute";
    theArrayResultDiv.style.left = 400 + "px";
    theArrayResultDiv.style.top = 0 + "px";
    theArrayResultDiv.style.width = 350 + "px";
    theArrayResultDiv.style.height = 150 + "px";
    theArrayResultDiv.className = "theResult";
    theArrayResultDiv.id = "theArrayResult";
    
    let lastText = '';
    let wordArray = [];
    
    theArrayResultDiv.onblur = function()
    {
        let text = theArrayResultDiv.innerText.trim();

        if (text !== lastText)
        {
            let words = text.split(/\s+/); // split text into words

            arrayOfSelectedWords = [];

            for (let i = 0; i < words.length; i++)
            {
                let word = words[i];

                // add only uniuqe words
                //if (word && arrayOfSelectedWords.indexOf(word) === -1)
                //{

                arrayOfSelectedWords.push(word + ' '); 
            //}
            }
        }

        //showResult('theResult');

        //arrayOfSelectedWords[arrayOfSelectedWords.length-1] += theSelection;
        // textGetSelectedAddWordToArray();
    };
    ba(theArrayResultDiv);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


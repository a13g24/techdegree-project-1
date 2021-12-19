/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
author - Aaron Gomez
date - 12/17/2021
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [

  {
    quote: "Don't aim at success. The more you aim at it and make it a target, the more you are going to miss it. For success, like happiness, cannot be pursued; it must ensue, and it only does so as the unintended side effect of one's personal dedication to a cause greater than oneself or as the by-product of one's surrender to a person other than oneself. Happiness must happen, and the same holds for success: you have to let it happen by not caring about it. I want you to listen to what your conscience commands you to do and go on to carry it out to the best of your knowledge. Then you will live to see that in the long-run—in the long-run, I say!—success will follow you precisely because you had forgotten to think about it.",
    author: "Viktor E. Frankl",
    source: "Man's Search for Meaning",
    citation: "Book",
    year: "2006"
  },

  {
    quote: "...the sea's only gifts are harsh blows and, occasionally, the chance to feel strong. Now, I don't know much about the sea, but I do know that that's the way it is here. And I also know how important it is in life not necessarily to be strong but to feel strong, to measure yourself at least once, to find yourself at least once in the most ancient of human conditions, facing blind, deaf stone alone, with nothing to help you but your own hands and your own head...",
    author: "Primo Levi",
    source: "",
    citation: "GoodReads.com",
    year: ""
  },

  {
    quote: "We are going to die, and that makes us the lucky ones. Most people are never going to die because they are never going to be born. The potential people who could have been here in my place but who will in fact never see the light of day outnumber the sand grains of Arabia. Certainly those unborn ghosts include greater poets than Keats, scientists greater than Newton. We know this because the set of possible people allowed by our DNA so massively exceeds the set of actual people. In the teeth of these stupefying odds it is you and I, in our ordinariness, that are here.We privileged few, who won the lottery of birth against all odds, how dare we whine at our inevitable return to that prior state from which the vast majority have never stirred?",
    author: "Richard Dawkins",
    source: "Unweaving the Rainbow: Science, Delusion and the Appetite for Wonder",
    citation: "",
    year: ""
  },

  {
    quote: "If you fulfill your obligations everyday you don't need to worry about the future.",
    author: "Jordan Peterson",
    source: "",
    citation: "",
    year: ""
  },

  {
    quote: "By any objective standard, the theory of computational complexity ranks as one of the greatest intellectual achievements of humankind -- along with fire, the wheel, and computability theory.",
    author: "Scott Aaronson",
    source: "Quantum Computing Since Democritus",
    citation: "AZQuotes.com",
    year: ""
  },

  {
    quote: "If you can see a pattern, then all you have to remember is the pattern, and you can generate the original material.",
    author: "Kenneth L. Higbee",
    source: "Your Memory: How It Works & How to Improve It",
    citation: "Book",
    year: "1996"
  }

]

/***
 * Gets a random quote from an array.  This function is called at least twice
 * in order to ensure duplicate indices aren't called consecutively.  The chosen
 * object that's returned is from indices 0 inclusive to qArr.length exclusive.
 * 
 * @param {number} i - The index to search for duplicates. Call with default -1.
 * @param {Object[]} qArr - An array of objects containing quotes and attributions.
 * @returns {Object} Returns an object literal of a quote
***/
function getRandomQuote(i = -1, qArr) {
  const MIN = 0;
  const MAX = qArr.length;

  // Generate random number between [MIN,MAX)
  let dex = Math.floor(Math.random() * (MAX - MIN) + MIN);

  // Set function param to calculated index on first execution only
  if (i === -1) {
    i = dex;
  }

  // Only return if a repeated index is not found
  if (i !== dex) {
    return qArr[dex];
  } else { // Recursively calls function to avoid repeated quotes
    return getRandomQuote(i, qArr);
  }
}


// TODO - Refactor this function to not select DOM elements, but insert manually
//  into the page.  This is to ensure I don't use more advanced topics.

/***
 * Prints a random quote and attribution to the page.
***/
function printQuote() {
  // Get quote text box element
  let el = document.getElementById('quote-box');

  // Get quote element
  let quoteEl = el.firstElementChild;

  // Get source element
  let sourceEl = el.lastElementChild;

  // Generate a random quote object
  let quoteObj = getRandomQuote(undefined, quotes);

  // Insert quote into page
  quoteEl.innerText = `${quoteObj.quote}`;

  // Boolean test to determine if any source attributes exist
  let attributionExists = quoteObj.author   || 
                          quoteObj.source   || 
                          quoteObj.citation || 
                          quoteObj.year;

  // Insert source and citation (if available)
  let sourceText = '';

  // Set text for source info if it exists
  if (attributionExists) {
    sourceText = quoteObj.author;

    console.log('sourceText = ' + sourceText);

    // Insert citation if it exists
    if (quoteObj.citation) {
      sourceText += `<span class="citation">${quoteObj.citation}</span>`
      console.log('citation exists');
      console.log('sourceText = ' + sourceText);

      // Insert year if it exists
      if (quoteObj.year) {
        sourceText += `<span class="year">${quoteObj.year}</span>`;
        console.log('year exists');
        console.log('sourceText = ' + sourceText);
      }
    }

    sourceEl.innerHTML = sourceText;
  }
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
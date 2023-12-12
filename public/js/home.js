/*
This is a JS file for index.html. 

EXAMPLE: Modify innerHTML of an element on a page
*/

// get the container on our page
const container = document.getElementById("container")

// modify the innerHTML of it
container.innerHTML = `
<div id="homepage-div">
    <h2>This div was added within the script 'home.js'</h2>
    <p>ANYWAYS, here's a song that I'm really enjoying:</p>
    <a href="https://www.youtube.com/watch?v=dX3k_QDnzHE" target="_blank">Midnight City by M83</a>
</div>
`
// SIDE NOTE: target="_blank" in the <a> will open the link in a new tab
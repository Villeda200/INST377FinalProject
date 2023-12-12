/*
This is a JS file for catalog.html. 

EXAMPLE: touching an API within your code and then using the contents to modify
an element on your page
*/

// get the container on our page that we want to modify
const cat_container = document.getElementById("cat-container")


// source: https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
fetch("https://api.thecatapi.com/v1/images/search?limit=10")
.then(res => res.json())
.then(data => {
    // loop through all images and add them to the container we got earlier
    data.forEach(({url}) => {
        cat_container.innerHTML += `<img class="cat-image" src="${url}"></img>`
    })
})

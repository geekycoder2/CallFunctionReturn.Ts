"use strict";
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// Function to format city and country
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Call the function with at least three city-country pairs
const city1 = city_country("Lahore", "Pakistan");
const city2 = city_country("Paris", "France");
const city3 = city_country("Tokyo", "Japan");
// Print the values returned by the function
console.log(city1);
console.log(city2);
console.log(city3);

const axios = require("axios");

const apiUrl = "https://pokeapi.co/api/v2/pokemon/ditto";

// Function to make a GET request using axios
async function makeGetRequest(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Request to ${url} failed: ${error.message}`);
  }
}

// Assertion function for the response
function assertResponse(response) {
  // Your assertion logic here
  // For example, let's check if the name of the Pokémon is "Ditto"
  if (response.name === "ditto") {
    return true;
  } else {
    return false;
  }
}

// Example usage:
(async () => {
  try {
    // Make the GET request
    const response = await makeGetRequest(apiUrl);

    // Perform the assertion
    const isResponseValid = assertResponse(response);

    // Display the result
    if (isResponseValid) {
      console.log("Assertion passed! The Pokémon is Ditto.");
    } else {
      console.log("Assertion failed! The Pokémon is not Ditto.");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
})();

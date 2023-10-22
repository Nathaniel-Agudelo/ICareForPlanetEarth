// ...

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementsByClassName('button');
    const squareContainer = document.getElementById('squareContainer');

    button.addEventListener('click', function() {
        // Hide the button
        button.style.display = 'none';

        // Show the black square with text
        squareContainer.style.display = 'block';
        squareContainer.innerHTML = 'Black Square';
    });
});



// Function to handle button click
/* document.getElementByClass('button').addEventListener('click', function() {
    // Make an HTTP GET request to your backend
    axios.get(`${backendUrl}/your-backend-endpoint`)
        .then(response => {
            // Handle the response from the backend
            const responseText = response.data; // Assuming the response is text
            // Update the HTML element with the response text
            document.getElementById('responseText').innerText = responseText;
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
            // Optionally, update the HTML element with an error message
            document.getElementById('responseText').innerText = 'Error occurred while fetching data.';
        });
});
 */
// ...

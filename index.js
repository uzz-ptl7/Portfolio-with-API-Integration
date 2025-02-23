// Adding an event listener to the contact form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting normally

    const email = document.getElementById("email").value; // Get the email input value
    const message = document.getElementById("message").value; // Get the message input value
    
    // Check if the email contains "@"
    if (!email.includes("@")) {
        alert("Please enter a valid email."); // Show an alert if the email is invalid
        return; // Stop execution if email is invalid
    }
    
    // Check if the message length is at least 10 characters
    if (message.length < 10) {
        alert("Message must be at least 10 characters long."); // Show an alert if message is too short
        return; // Stop execution if message is too short
    }
    
    alert("Message Sent!"); // Show a success message if all validations pass
});

// Function to fetch and display blog posts from an API
async function loadPosts() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3"); // Fetch 3 posts from the API
    let posts = await response.json(); // Convert the response to JSON

    let postsHTML = ""; // Initialize an empty string to store HTML content

    // Loop through each post and create an HTML structure
    posts.forEach(post => {
        postsHTML += `<div class="p-4 bg-gray-200 rounded shadow">
            <h3 class="text-xl font-bold">${post.title}</h3>
            <p>${post.body}</p>
        </div>`;
    });

    // Insert the generated HTML into the "posts" div
    document.getElementById("posts").innerHTML = postsHTML;
}

// Call the function to load blog posts when the page loads
loadPosts();
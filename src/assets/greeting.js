// greeting.js

// Function to get the current time and return an appropriate greeting
function getGreeting() {
    const now = new Date();
    const hours = now.getHours();

    if (hours < 12) {
        return 'Good Morning!';
    } else if (hours < 18) {
        return 'Good Afternoon!';
    } else {
        return 'Good Evening!';
    }
}

// Function to render the greeting message with a call to action
function renderGreeting() {
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        const greetingMessage = `${getGreeting()} Sign up for sales to Luxury Stay hotel.`;
        greetingElement.innerHTML = `
            <div class="alert alert-info alert-dismissible fade show" role="alert">
                <strong>${greetingMessage}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
    } else {
        console.warn('Greeting element not found.');
    }
}

// Execute the greeting function when the page loads
document.addEventListener('DOMContentLoaded', renderGreeting);

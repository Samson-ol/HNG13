function updateTime() {
    // Get the current UTC time in milliseconds
    const now = Date.now();

    // Find the HTML element with data-testid="test-user-time"
    const timeElement = document.querySelector('[data-testid="test-user-time"]');

    // Update its text content with the current time
    if (timeElement) { // Check if the element was found
        timeElement.textContent = now;
    }
}

// Call updateTime once when the script loads
updateTime();

// Optionally, update the time every second (1000 milliseconds)
// The task says "at render or on an update tick (if you choose to update it, do so reasonably)"
// Updating every second is reasonable.
setInterval(updateTime, 1000);
function updateTime() {
    const now = Date.now();

    const timeElement = document.querySelector('[data-testid="test-user-time"]');

    if (timeElement) { // Check if the element was found
        timeElement.textContent = now;
    }
}

updateTime();
setInterval(updateTime, 1000);
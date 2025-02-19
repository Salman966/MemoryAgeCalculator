function calculateMemoryAge() {
    const memoryDate = document.getElementById("memoryDate").value;
    
    if (!memoryDate) {
        alert("Please select a date.");
        return;
    }

    const memoryTime = new Date(memoryDate);
    const currentTime = new Date();
    
    if (memoryTime > currentTime) {
        alert("You cannot select a future date.");
        return;
    }

    const timeDifference = currentTime - memoryTime;

    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor(timeDifference / (1000 * 60));
    const seconds = Math.floor(timeDifference / 1000);

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    document.getElementById("result").classList.remove("hidden");

    calculateCountdown(memoryTime);
}

function calculateCountdown(memoryTime) {
    const now = new Date();
    let nextAnniversary = new Date(memoryTime);
    nextAnniversary.setFullYear(now.getFullYear());

    if (nextAnniversary < now) {
        nextAnniversary.setFullYear(now.getFullYear() + 1);
    }

    const countdown = Math.ceil((nextAnniversary - now) / (1000 * 60 * 60 * 24));
    document.getElementById("countdownTimer").textContent = `${countdown} days left until the next anniversary!`;
}

function generateMemoryCard() {
    const memoryText = `It has been ${document.getElementById("years").textContent} years, ${document.getElementById("days").textContent} days since your memory!`;
    document.getElementById("memoryText").textContent = memoryText;
    document.getElementById("memoryCard").classList.remove("hidden");
}

function shareMemory() {
    const text = document.getElementById("memoryText").textContent;
    navigator.share({ title: 'Memory Age', text: text, url: window.location.href })
        .catch((error) => console.log('Sharing failed', error));
}

document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

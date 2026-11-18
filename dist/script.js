"use strict";
const studentName = "Ada";
let labsCompleted = 6;
let isEnrolled = false;
let likes = 0;
labsCompleted = labsCompleted + 1;
console.log(`${studentName} has completed ${labsCompleted} labs.`);
const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");
const likeMessage = document.querySelector("#like-message");
const locationBtn = document.querySelector("#location-btn");
const locationDisplay = document.querySelector("#location-display");
const LikeCounter = {
    likes: Number(localStorage.getItem("likes")) || 0,
    increment() {
        this.likes = this.likes + 1;
        localStorage.setItem("likes", this.likes.toString());
        this.render();
    },
    render() {
        likeCount.textContent = `${this.likes} likes`;
    },
};
LikeCounter.render();
likeBtn.addEventListener("click", function () {
    LikeCounter.increment();
});
const incrementLikes = () => {
    likes += 1;
    updateLikeDisplay();
};
const updateLikeDisplay = () => {
    likeCount.textContent = `${likes} likes`;
    if (likes >= 10) {
        likeMessage.textContent = "Wow, thanks for all the likes!";
    }
    else if (likes >= 5) {
        likeMessage.textContent = "Glad you like it!";
    }
    else {
        likeMessage.textContent = "";
    }
};
if (likeBtn && likeCount) {
    likeBtn.addEventListener("click", function () {
        LikeCounter.increment();
    });
}
else {
    console.warn("Like button or count element missing from the page");
}
function formatLikes(value) {
    if (typeof value === "string") {
        return `${parseInt(value, 10)}, likes`;
    }
    return `${value} likes`;
}
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}
function getStoredTheme() {
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
}
function applyStoredTheme() {
    if (getStoredTheme() === "dark") {
        document.body.classList.add("dark-mode");
    }
}
const themeBtn = document.querySelector("#theme-btn");
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
});
const goals = ["HTML", "CSS", "JavaScript"];
const goalsList = document.querySelector("#goals-list");
goals.forEach(function (goal) {
    const item = document.createElement("li");
    item.textContent = goal;
    goalsList.appendChild(item);
});
function getGreetingAfterDelay() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Hello from the future!");
        }, 800);
    });
}
async function showGreeting() {
    const message = await getGreetingAfterDelay();
    console.log(message);
}
showGreeting();
const factBtn = document.querySelector("#fact-btn");
const factDisplay = document.querySelector("#fact-display");
async function loadFact() {
    factDisplay.textContent = "Loading...";
    factBtn.disabled = true;
    try {
        const response = await fetch("https://catfact.ninja/fact");
        if (!response.ok) {
            throw new Error("Server responded with an error");
        }
        const data = (await response.json());
        factDisplay.textContent = data.fact;
    }
    catch (error) {
        factDisplay.textContent = "Couldn't load a fact right now. Try again.";
        console.error(error);
    }
    finally {
        factBtn.disabled = false;
    }
}
factBtn.addEventListener("click", loadFact);
locationBtn.addEventListener("click", function () {
    if (!("geolocation" in navigator)) {
        locationDisplay.textContent = "Geolocation isn't supported.";
        return;
    }
    navigator.geolocation.getCurrentPosition(function (position) {
        const here = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
        };
        locationDisplay.textContent = `You're near ${here.latitude.toFixed(2)}, ${here.longitude.toFixed(2)}`;
    }, function (error) {
        locationDisplay.textContent = "Location access was denied.";
        console.warn(error);
    });
});
//# sourceMappingURL=script.js.map
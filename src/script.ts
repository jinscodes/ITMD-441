const studentName = "Ada";
let labsCompleted = 6;
let isEnrolled = false;
let likes = 0;

labsCompleted = labsCompleted + 1;
console.log(`${studentName} has completed ${labsCompleted} labs.`);

const likeBtn = document.querySelector<HTMLButtonElement>("#like-btn");
const likeCount = document.querySelector<HTMLParagraphElement>("#like-count");
const likeMessage = document.querySelector("#like-message");
const locationBtn = document.querySelector("#location-btn");
const locationDisplay = document.querySelector("#location-display");

const LikeCounter = {
  likes: Number(localStorage.getItem("likes")) || 0,
  increment(): void {
    this.likes = this.likes + 1;
    localStorage.setItem("likes", this.likes.toString());
    this.render();
  },
  render(): void {
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
  } else if (likes >= 5) {
    likeMessage.textContent = "Glad you like it!";
  } else {
    likeMessage.textContent = "";
  }
};

if (likeBtn && likeCount) {
  likeBtn.addEventListener("click", function () {
    LikeCounter.increment();
  });
} else {
  console.warn("Like button or count element missing from the page");
}

function formatLikes(value: number | string): string {
  if (typeof value === "string") {
    return `${parseInt(value, 10)}, likes`;
  }
  return `${value} likes`;
}

type Theme = "light" | "dark";

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

function getStoredTheme(): Theme {
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

const goals: string[] = ["HTML", "CSS", "JavaScript"];
const goalsList = document.querySelector("#goals-list");

goals.forEach(function (goal: string) {
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

const factBtn = document.querySelector<HTMLButtonElement>("#fact-btn");
const factDisplay = document.querySelector<HTMLElement>("#fact-display");

interface CatFact {
  fact: string;
  length: number;
}

async function loadFact(): Promise<void> {
  factDisplay.textContent = "Loading...";
  factBtn.disabled = true;
  try {
    const response = await fetch("https://catfact.ninja/fact");
    if (!response.ok) {
      throw new Error("Server responded with an error");
    }

    const data = (await response.json()) as CatFact;
    factDisplay.textContent = data.fact;
  } catch (error) {
    factDisplay.textContent = "Couldn't load a fact right now. Try again.";
    console.error(error);
  } finally {
    factBtn.disabled = false;
  }
}

factBtn.addEventListener("click", loadFact);

interface UserLocation {
  latitude: number;
  longitude: number;
  accuracy?: number;
}

locationBtn.addEventListener("click", function () {
  if (!("geolocation" in navigator)) {
    locationDisplay.textContent = "Geolocation isn't supported.";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    function (position) {
      const here: UserLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy,
      };
      locationDisplay!.textContent = `You're near ${here.latitude.toFixed(2)}, ${here.longitude.toFixed(2)}`;
    },
    function (error) {
      locationDisplay.textContent = "Location access was denied.";
      console.warn(error);
    },
  );
});

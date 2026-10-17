const name = "Ada";
let labsCompleted = 6;
let isEnrolled = false;
let likes = 0;

labsCompleted = labsCompleted + 1;
console.log(`${name} has completed ${labsCompleted} labs.`);

const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");
const likeMessage = document.querySelector("#like-message");

const LikeCounter = {
  likes: 0,
  increment() {
    this.likes = this.likes + 1;
    this.render();
  },
  render() {
    likeCount.textContent = `${this.likes} likes`;
  }
};

likeBtn.addEventListener("click", function() {
  LikeCounter.increment();
});

const incrementLikes = () => {
  likes += 1;
  updateLikeDisplay();
}

const updateLikeDisplay = () => {
  likeCount.textContent = `${likes} likes`;
  
  if (likes >= 10) {
    likeMessage.textContent = "Wow, thanks for all the likes!";
  } else if (likes >= 5) {
    likeMessage.textContent = "Glad you like it!";
  } else {
    likeMessage.textContent = "";
  }

}

if (likeBtn) {
  likeBtn.addEventListener("click", incrementLikes);
} else {
  console.warn("like-btn not ofund on this page");
}

const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark");
});

const goals = ["HTML", "CSS", "JavaScript"];
const goalsList = document.querySelector("#goals-list");

goals.forEach(function(goal) {
  const item = document.createElement("li");
  item.textContent = goal;
  goalsList.appendChild(item);
});

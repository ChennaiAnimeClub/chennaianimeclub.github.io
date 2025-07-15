const questions = [
  {
    question: "What type of stories do you prefer?",
    options: [
      { text: "Emotional & character-driven", category: "Slice of Life" },
      { text: "Fast-paced and action-packed", category: "Action" },
      { text: "Mind-bending and mysterious", category: "Psychological" },
      { text: "Light and humorous", category: "Comedy" }
    ]
  },
  {
    question: "What setting do you enjoy?",
    options: [
      { text: "High school or everyday life", category: "Slice of Life" },
      { text: "Fantasy worlds or futuristic tech", category: "Action" },
      { text: "Dark urban environments", category: "Psychological" },
      { text: "Anywhere, as long as it's funny", category: "Comedy" }
    ]
  }
  // Add more questions here
];

const recommendations = {
  "Slice of Life": {
    title: "Your Lie in April",
    desc: "A beautiful, emotional story about music and growth.",
    img: "assets/images/your-lie-in-april.jpg"
  },
  "Action": {
    title: "Attack on Titan",
    desc: "Epic battles and complex themes in a brutal world.",
    img: "assets/images/aot.jpg"
  },
  "Psychological": {
    title: "Paranoia Agent",
    desc: "A surreal dive into the human psyche.",
    img: "assets/images/paranoia-agent.jpg"
  },
  "Comedy": {
    title: "KonoSuba",
    desc: "Ridiculous, chaotic adventures in a fantasy setting.",
    img: "assets/images/konosuba.jpg"
  }
};

let currentQuestion = 0;
let scores = {
  "Slice of Life": 0,
  "Action": 0,
  "Psychological": 0,
  "Comedy": 0
};

const quizBox = document.getElementById("quiz-box");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const resultBox = document.getElementById("result");

function loadQuestion() {
  const q = questions[currentQuestion];
  quizBox.innerHTML = `
    <h2>${q.question}</h2>
    <ul class="options">
      ${q.options.map((opt, index) => `
        <li>
          <label>
            <input type="radio" name="option" value="${opt.category}">
            ${opt.text}
          </label>
        </li>
      `).join('')}
    </ul>
  `;
}

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) return alert("Please select an answer!");

  scores[selected.value]++;

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizBox.classList.add("hidden");
  nextBtn.classList.add("hidden");
  resultContainer.classList.remove("hidden");

  const topCategory = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const anime = recommendations[topCategory];

  resultBox.innerHTML = `
    <h3>${anime.title}</h3>
    <img src="${anime.img}" alt="${anime.title}" style="width: 100%; border-radius: 8px;">
    <p>${anime.desc}</p>
  `;
}

// Initial load
loadQuestion();

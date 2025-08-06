function shuffle(arr) {
	return arr.sort(() => Math.random() - 0.5);
}

let questions = [];
fetch('data/qna.json')
	.then((res) => res.json())
	.then((data) => {
		questions = data;
	});
questions = shuffle(questions);

let animes = [];
fetch('data/anime.json')
	.then((res) => res.json())
	.then((data) => {
		animes = data;
	});

let userVibes = {};
let currentIndex = 0;
let currentQuestion = {};
let currentOptionSelected = {};

const startQuizSection = document.getElementById('start-quiz-section');
const quizSection = document.getElementById('quiz-section');
const resultSection = document.getElementById('result-section');

const startQuizBtn = document.getElementById('start-quiz-btn');
startQuizBtn.addEventListener('click', () => {
	startQuizSection.style.display = 'none';
	quizSection.style.display = 'flex';
	showQuestion();
});

const nextBtn = document.getElementById('next-btn');

function showQuestion() {
	currentQuestion = questions[currentIndex];

	document.getElementById('question-box').innerHTML = `
    <h2>${currentQuestion.question}</h2>
    ${currentQuestion.options
			.map(
				(opt, i) => `
      <button class="option-btn" data-index="${i}">${opt.text}</button>
    `
			)
			.join('')}
  `;

	nextBtn.style.display = 'none';
	document
		.querySelectorAll('.option-btn')
		.forEach((btn) =>
			btn.addEventListener('click', () => handleAnswer(currentQuestion, btn.dataset.index))
		);
}

function handleAnswer(question, optIndex) {
	currentOptionSelected = question.options[optIndex];

	document.querySelectorAll('.option-btn').forEach((btn) => {
		if (Number(btn.getAttribute('data-index')) == optIndex) {
			btn.classList.add('option-btn-selected');
		} else {
			btn.classList.remove('option-btn-selected');
		}
	});
	nextBtn.style.display = 'inline-block';
}

nextBtn.addEventListener('click', () => {
	for (let tag in currentOptionSelected.vibes) {
		userVibes[tag] = (userVibes[tag] || 0) + currentOptionSelected.vibes[tag];
	}

	currentIndex++;
	if (currentIndex < questions.length) {
		showQuestion();
	} else {
		showResults();
	}
});

function showResults() {
	quizSection.style.display = 'none';
	resultSection.style.display = 'flex';

	const recommendations = getRecommendations(animes, userVibes);
	let recommendation = recommendations[0];

	const resultContent = document.getElementById('result-content');
	resultContent.innerHTML =
		`<div>A good fit for you would be .. ` +
		recommendation['title'] +
		`</div><img class="anime-recc-img" src="` +
		recommendation['image'] +
		`">`;
	nextBtn.style.display = 'none';
}

function dotProduct(primary, secondary) {
	let sum = 0;
	for (const key in primary) {
		if (secondary.hasOwnProperty(key)) {
			sum += primary[key] * secondary[key];
		}
	}
	return sum;
}

function getRecommendations(animeList, userVector) {
	return animeList
		.map((anime) => ({
			...anime,
			score: dotProduct(userVector, anime.vibes)
		}))
		.sort((a, b) => b.score - a.score);
}

const retakeBtn = document.getElementById('retake-btn');
retakeBtn.addEventListener('click', () => {
	nextBtn.style.display = 'none';
	startQuizSection.style.display = 'flex';
	quizSection.style.display = 'none';
	resultSection.style.display = 'none';
	document.getElementById('question-box').innerHTML = '';

	questions = shuffle(questions);

	userVibes = {};
	currentIndex = 0;
	currentQuestion = {};
	currentOptionSelected = {};
});

const homeBtn = document.getElementById('home-btn');
homeBtn.addEventListener('click', () => {
	location.reload();
});

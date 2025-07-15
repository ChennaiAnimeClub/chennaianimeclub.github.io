window.onload = function() {
  const hamburger = document.getElementById("hamburger");
  const headings = document.getElementById("heading-section");
  const main = document.getElementById("main");
  const navbar = document.getElementById("navbar");

  function toggle_hamburger_menu() {
    headings.classList.toggle("show");
	 setTimeout(() => {
      const navHeight = navbar.offsetHeight;
      main.style.marginTop = `${navHeight}px`;
    }, 10);
  }

  hamburger.addEventListener("click", toggle_hamburger_menu);
  
  const logo = document.getElementById("logo");
  const nav_paxc25 = document.getElementById("nav-paxc25");
  const nav_ai25 = document.getElementById("nav-ai25");
  const nav_quiz = document.getElementById("nav-quiz");
  const nav_about = document.getElementById("nav-about");
  
  const home = document.getElementById("home");
  const paxc25 = document.getElementById("paxc25");
  const ai25 = document.getElementById("ai25");
  const quiz = document.getElementById("quiz");
  const about = document.getElementById("about");
  
  logo.addEventListener("click", () => {
	  paxc25.style.display = "none";
	  home.style.display = "block";
	  ai25.style.display = "none";
	  quiz.style.display = "none";
	  about.style.display = "none";
  });
  
  nav_paxc25.addEventListener("click", () => {
	  paxc25.style.display = "block";
	  home.style.display = "none";
	  ai25.style.display = "none";
	  quiz.style.display = "none";
	  about.style.display = "none";
  });
  nav_ai25.addEventListener("click", () => {
	  paxc25.style.display = "none";
	  home.style.display = "none";
	  ai25.style.display = "block";
	  quiz.style.display = "none";
	  about.style.display = "none";
  });
  nav_quiz.addEventListener("click", () => {
	  paxc25.style.display = "none";
	  home.style.display = "none";
	  ai25.style.display = "none";
	  quiz.style.display = "block";
	  about.style.display = "none";
  });
  nav_about.addEventListener("click", () => {
	  paxc25.style.display = "none";
	  home.style.display = "none";
	  ai25.style.display = "none";
	  quiz.style.display = "none";
	  about.style.display = "block";
  });
};

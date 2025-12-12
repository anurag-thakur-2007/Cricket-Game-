🏏 Cricket Game (JavaScript Learning Project)

This project is a simple and fun Cricket Game built using HTML, CSS, and JavaScript.
Its purpose is to help understand JavaScript fundamentals such as functions, DOM manipulation, events, conditional logic, and game logic.

🎯 Purpose of the Project

This project was created as part of my journey to learn JavaScript by building practical projects.
Through this game, I practiced:

Variables & data types

Functions

Event listeners

Conditional statements

Math.random() for generating results

Updating UI dynamically using JavaScript

Basic game logic design

🕹️ How the Game Works

The user selects a move: Bat, Ball, or Stump

The computer randomly picks its move

The winner is determined by predefined rules

The result is displayed on the screen

Simple scoreboard behavior can be added as an enhancement

🧠 Concepts Learned

This project helped solidify core JavaScript concepts:

✔️ Generating random values
const computer = Math.random();

✔️ Creating interactive buttons
document.querySelector(".bat-btn").addEventListener("click", playGame);

✔️ Conditional logic
if (playerMove === computerMove) {
   result = "It's a tie!";
}

✔️ Updating HTML dynamically
document.getElementById("result").innerText = result;

📁 Project Structure
cricket-game/
│
├── index.html     # UI layout
├── style.css      # Styling
└── script.js      # Game logic (JavaScript)

🚀 How to Run the Game

Download or clone the repository

Open index.html in your browser

Click any button (Bat, Ball, Stump)

See who wins — you or the computer 🏏



<img width="767" height="587" alt="image" src="https://github.com/user-attachments/assets/1c26c832-9830-4ea2-baa7-d5f120aff04f" />

✨ Possible Future Improvements

Add sound effects

Add animations

Improve UI/UX

Add more cricket actions



🙌 About This Project

This is a beginner-friendly project created to improve my JavaScript skills through hands-on coding.
Feedback, suggestions, and improvements are always welcome!

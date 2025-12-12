 let scoreStr = localStorage.getItem('score');
    let score;
    resetScore(scoreStr);

    function resetScore(scoreStr) {
      score = scoreStr ? JSON.parse(scoreStr) : {
        win: 0,
        lost: 0,
        tai: 0,
      };
      score.displayScore = function () {
        return (`Wins: ${score.win} | Losses: ${score.lost} | Ties: ${score.tai}`);
      }
    }

    function genratecomputerchoice() {
      let Random_number = Math.random() * 3;
      if (Random_number >= 0 && Random_number < 1) {
        return 'Ball';
      } else if (Random_number >= 1 && Random_number < 2) {
        return 'Stump';
      } else {
        return 'Bat';
      }
    }

    function getResult(userMove, computerMove) {
      if (userMove === 'Bat') {
        if (computerMove === 'Bat') {
          score.tai++;
          return 'tie';
        } else if (computerMove === 'Ball') {
          score.win++;
          return 'win';
        } else {
          score.lost++;
          return 'lose';
        }
      } else if (userMove === 'Ball') {
        if (computerMove === 'Bat') {
          score.lost++;
          return 'lose';
        } else if (computerMove === 'Ball') {
          score.tai++;
          return 'tie';
        } else {
          score.win++;
          return 'win';
        }
      } else {
        if (computerMove === 'Bat') {
          score.win++;
          return 'win';
        } else if (computerMove === 'Ball') {
          score.lost++;
          return 'lose';
        } else {
          score.tai++;
          return 'tie';
        }
      }

      
    }

    function show(userMove, computerMove, result_msg) {
      localStorage.setItem('score', JSON.stringify(score));
      
      let resultBox = document.getElementById('result');
      let messageText = '';

      if (result_msg === 'win') {
        messageText = `🎉 You Won!\n\nYou chose: ${userMove}\nComputer chose: ${computerMove}\n\n${score.displayScore()}`;
        resultBox.className = 'win';
      } else if (result_msg === 'lose') {
        messageText = `😞 You Lost!\n\nYou chose: ${userMove}\nComputer chose: ${computerMove}\n\n${score.displayScore()}`;
        resultBox.className = 'lose';
      } else {
        messageText = `🤝 It's a Tie!\n\nYou chose: ${userMove}\nComputer chose: ${computerMove}\n\n${score.displayScore()}`;
        resultBox.className = 'tie';
      }

      resultBox.innerText = messageText;
    }
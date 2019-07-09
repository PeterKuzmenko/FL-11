let prize, possiblePrize, totalPrize, attempt, maxNum, checkGame, num, random;
prize = '100';
possiblePrize = +prize;
maxNum = '8';
attempt = '3';
totalPrize = 0;
checkGame = confirm('Do you want to play a game?');
if(checkGame) {
	while(checkGame) {
		for (; attempt > 0; attempt--) {
			random = Math.floor(Math.random() * maxNum);
			num = prompt('Choose a roulette pocket number from 0 to ' + maxNum + '\nAttempts left: ' + attempt + 
			'\nTotal prize: ' + totalPrize + '$\nPossible prize on current attempt: ' + prize + '$' , '');
			if(num === null) {
				checkGame = num;
				alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
				checkGame = confirm('Do you want play again?');
				possiblePrize = +prize;
				maxNum = '8';
				prize = '100';
				totalPrize = 0;
				attempt = '3';
				break;
			} else if(+num === +random) {
				maxNum = parseInt(maxNum) + parseInt('4');
				totalPrize += +prize;
				attempt = '3';
				possiblePrize *= '2';
				prize = possiblePrize;
				checkGame = confirm('Congratulation, you won!   Your prize is: ' + totalPrize + 
				'$. Do you want to continue?');
				if(checkGame === false) {
					alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
					checkGame = confirm('Do you want play again?');
					prize = '100';
					possiblePrize = +prize;
					maxNum = '8';
					attempt = '3';
					totalPrize = 0;
				}
				break;
			} else {
				prize /= '2';
				if(attempt === 1) {
					alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
					checkGame = confirm('Do you want play again?');
					prize = '100';
					possiblePrize = +prize;
					maxNum = '8';
					attempt = '3';
					totalPrize = 0;
					break;
				}
			}
		}
	}
} else {
 alert('You did not become a billionaire, but can.'); 
}
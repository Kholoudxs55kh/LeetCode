/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
    let totalPlayer1 = 0, totalPlayer2 = 0;

    for (let i = 0; i < player1.length; i++) {
        if (player1[i - 1] === 10 || player1[i - 2] === 10) totalPlayer1 += (2 * player1[i])
        else  totalPlayer1 +=  player1[i]

         if (player2[i - 1] === 10 || player2[i - 2] === 10) totalPlayer2 += (2 * player2[i])
        else  totalPlayer2 +=  player2[i]
    }

    if (totalPlayer1 === totalPlayer2) return 0

    return totalPlayer1 > totalPlayer2 ? 1 : 2
};
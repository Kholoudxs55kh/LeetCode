/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function (n, commands) {
    let pos = 0

    for (let command of commands) {
        if (command === "LEFT") pos -= 1

        else if (command === "RIGHT") pos += 1

        else if (command === "UP") pos -= n

        else pos += n
    }

    return pos
};
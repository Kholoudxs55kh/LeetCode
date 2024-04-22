/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const deadendsSet = new Set(deadends);
    
    if (deadendsSet.has("0000")) return -1;
    if (target === "0000") return 0;

    const queue = ["0000"];
    const visited = new Set(queue);
    let level = 0;
    
    while (queue.length > 0) {
        level++;
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const current = queue.shift(); 
            for (let j = 0; j < 4; j++) {
                for (let k = -1; k <= 1; k += 2) {
                    const next = [...current];
                    next[j] = (parseInt(next[j]) + k + 10) % 10;
                    const nextStr = next.join('');
                    if (nextStr === target) return level;
                    if (!deadendsSet.has(nextStr) && !visited.has(nextStr)) {
                        queue.push(nextStr);
                        visited.add(nextStr);
                    }
                }
            }
        }
    }
    
    return -1;
};
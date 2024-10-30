var findRestaurant = function(list1, list2) {
    let res = [];
    let minIndexSum = Infinity;

    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                const currIdx = i + j;
                if (currIdx < minIndexSum) {
                    minIndexSum = currIdx;
                    res = [list1[i]];
                } else if (currIdx === minIndexSum) res.push(list1[i]);
            }
        }
    }
    return res;
};

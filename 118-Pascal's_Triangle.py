class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        res = []
        for i in range(numRows):
            numRow = [1] * (i + 1)
            for j in range(1, i):
                numRow[j] = res[i - 1][j - 1] + res[i - 1][j]
            res.append(numRow)
        return res

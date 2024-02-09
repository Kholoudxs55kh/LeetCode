class Solution:
    def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
        lenG = [1] * len(nums)
        prevE = [-1] * len(nums)
        maxIndex = 0
        res = []
        nums.sort()

        for i in range(len(nums)):
            for j in range(i):
                if nums[i] % nums[j] == 0:
                    if lenG[i] < 1 + lenG[j]:
                        lenG[i] = 1 + lenG[j]
                        prevE[i] = j
            if lenG[i] > lenG[maxIndex]:
                maxIndex = i

        while maxIndex != -1:
            res.insert(0, nums[maxIndex])
            maxIndex = prevE[maxIndex]

        return res
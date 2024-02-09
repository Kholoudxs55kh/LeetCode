class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        len_ = 0
        res = 0
        sum_ = sum(arr[: k - 1])
        for i in range(k - 1, len(arr)):
            sum_ += arr[i]
            if sum_ // k >= threshold:
                res += 1
            sum_ -= arr[len_]
            len_ += 1
        return res
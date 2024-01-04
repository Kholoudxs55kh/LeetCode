class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        dict_ = {}
        result = []

        if not nums:
            return result
        for i in nums:
            if i in dict_:
                dict_[i] += 1
            else:
                dict_[i] = 1

        sorted_hash = sorted(dict_.items(), key=lambda x: x[1], reverse=True)

        for i in range(k):
            result.append(sorted_hash[i][0])
        return result

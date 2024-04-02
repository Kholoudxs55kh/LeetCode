class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        dict_ ,existed = {}, set()
        for i, j in zip(s, t):
            if i in dict_:
                if dict_[i] != j:
                    return False
            else:
                if j in existed:
                    return False
                existed.add(j)
                dict_[i] = j

        return True
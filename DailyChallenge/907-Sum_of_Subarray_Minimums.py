class Solution:
    def sumSubarrayMins(self, arr: List[int]) -> int:
        summ, newArr = 0, []

        for ele in arr:
            if not newArr:
                newArr.append([ele, 1, 0]) # ele, count, count
            else:
                count = 0
                while newArr and newArr[-1][0] > ele:  # last ele is greater than the curr , not min
                    st, popped, top = newArr.pop()
                    summ += st * (count + popped) + (count * st * top)
                    count += popped # the popped

                newArr.append([ele, 1 + count, count])

        count = 0
        while newArr:
            st, popped, top = newArr.pop()
            summ += st * (count + popped) + (count * st * top)
            count += popped # the popped

        div = 10 ** 9 + 7 # over flow preventer # Chat

        return summ % div

# by help of chatttttttt

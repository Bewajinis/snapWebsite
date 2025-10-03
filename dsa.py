# Sorted Squared Array 

# Question:

# You are given an array of integers in which each subsequent value is not less than the previous value. Write afunction that takes this array as input and returns a new array containing the squares of each number from the input array, also sorted in non-decreasing order. and returens a new array with the squares of each number sorted in ascending order. 
#  Remember 
# You can solve this question in multiple ways.
# Think about the following:
# 1. What would be the brute force way of solving this question? 
#  b. What would be  the Time and Space complexity of this approach?

# 2. Is there a beter way to solve this with a more optimum Time complexity than the Brute force way?



def sorted_squared(array):
    for i in range(len(array)):
        array[i] = array[i] ** 2
    array.sort()


    print(array)

sorted_squared([1, 4])
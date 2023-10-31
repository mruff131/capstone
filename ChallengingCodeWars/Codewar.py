"""
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

"""

def solution(number):
    total = 0
    
    for num in range(2, number, 2):
        total += num

        print(num, total)
    
    for five in range(5, number, 5):
        if five % 3 != 0:
            total += five
            print(five, total)

    return total







print(solution(10))
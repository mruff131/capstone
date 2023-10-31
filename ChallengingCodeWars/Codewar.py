# take the numbers 3 & 5 and multiple them by range 1 through ...
# store the number in a list , if the number isn't already in the list
# tell program to stop once the multiple is greater than the number given



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
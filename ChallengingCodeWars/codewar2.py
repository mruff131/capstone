def likes(*names):
    if names:
        if len(names) == 1:
            return f'{names[0]} likes this'
        if len(names) == 2:
            return f'{names[0]} and {names[1]} likes this'

        if len(names) == 3:
            return f'{names[0]}, {names[1]}, and {names[2]} like this'
        
        
        return f'{names[0]}, {names[1]}, and {len(names)-2} others like this'
            
    else:
        return 'no one likes this'
    

print(likes('Jamie', 'Tonya', 'Patrick', 'Jonny', 'Amber', 'Miranda'))
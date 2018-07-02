text = input('Enter a string:')
reverse=''
for i in range(len(text)-1,-1,-1):
    reverse = reverse+text[i]
print(reverse)
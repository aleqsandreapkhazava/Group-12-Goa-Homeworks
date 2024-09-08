day = int(input("the day of the week: "))
hour = int(input("hour of the day: "))

if day <= 5:
    print("OPEN")
if hour >=10:
    print("open")
elif hour > 21:
    print("Open")
else:
    print("closed")
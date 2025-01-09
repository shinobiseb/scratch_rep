myDict = {
    "name": "",
    "elements": {
        "thing1": "Element",
        "thing2": "Element2",
        "thing3": "Element3",
    } 
}

myDict["elements"].update({"thing4": "Element4"})

print(myDict["elements"])
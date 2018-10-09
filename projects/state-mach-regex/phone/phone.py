import re # module for processing regular expressions https://docs.python.org/3/library/re.html

# Initial prompt to user
line = input("Enter a phone number to validate or 'exit' when done. ")

# TODO Define your regex
regex = r"(\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}|\(\d{3}\)\s*\d{3}[-\.\s]??\d{4}|\d{3}[-\.\s]??\d{4})"

while line != "exit":
    # TODO Find matches
    if re.search(regex, line):
        print("Valid phone number")
        print(f"{line}")
    else:
        print("Invalid phone number")
    
    # TODO If no match found, print that no number was found
    
    # TODO Else, break number up into area code, prefix, and suffic

    # As a stretch goal, you can modify your regex to search for country codes
    # too and print that out as well!
    
    
    # Done validating, read in a new line
    line = input("Enter a phone number to validate or 'exit' when done. ")
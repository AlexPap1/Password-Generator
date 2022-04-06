# Password Generator Starter Code

Password Generator Version 1.0
===============================================================================================================

This page is designed to create a randomly generated password given parameters based on character type and length
---------------------------------------------------------------------------------------------------------------
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
GIVEN I need a new, secure password:

https://alexpap1.github.io/Password-Generator/

---------------------------------------------------------------------------------------------------------------
![](Screenshot%202022-04-06%20155943.png)

---------------------------------------------------------------------------------------------------------------
WHEN I click the button to generate a password
<br />
THEN I am presented with a series of prompts for password criteria
<br />
WHEN prompted for password criteria
<br />
THEN I select which criteria to include in the password
<br />
First, the user will be alereted that the website will generate a new password for them 

---------------------------------------------------------------------------------------------------------------
WHEN prompted for the length of the password
<br />
THEN I choose a length of at least 8 characters and no more than 128 characters
<br />
The application is using if statements within window prompts to define character length (It will make sure the legnth is between 8 and 120 characters)

---------------------------------------------------------------------------------------------------------------
WHEN asked for character types to include in the password
<br />
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
<br />
Similarly, the application is using if statements in window prompts to define character type (uppercase, lowercase, numbers, special) along with any combination of characters. 

---------------------------------------------------------------------------------------------------------------
WHEN I answer each prompt
<br />
THEN my input should be validated and at least one character type should be selected
<br />
It will make sure that at least one is selected using an else statement.

---------------------------------------------------------------------------------------------------------------
WHEN the password is generated
<br />
THEN the password is either displayed in an alert or written to the page
<br />
The new password displays in textbox based on previously defined parameters using the writePassword function. 

---------------------------------------------------------------------------------------------------------------
WHEN all prompts are answered
<br />
THEN a password is generated that matches the selected criteria
<br/>
Finally, it creates a random password for strong protection of user accounts! :)
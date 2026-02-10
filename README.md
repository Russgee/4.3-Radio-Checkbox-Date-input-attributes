# 4.3 - Radio, Checkbox, Date input attributes

## Overview
In this lab, you will build a **Student Profile Form** using HTML and JavaScript.  
You will use different form inputs and write JavaScript that responds to user actions.

By the end of this lab, your webpage will:
- Collect information from a form
- Respond to a button click
- Display a personalized message without reloading the page

---


## Step 1: Add a Text Input
Inside the form:
- Change the "Your Name:" text to be a Label
- Give the input an ID so JavaScript and <label> can access it

---

## Step 2: Add Radio Buttons
Inside the form:
- Add `type="radio"` for all the Grade Level inputs
- Add an id for all the Grade Level inputs
- Add the `<label>` tag for each of the Grade Level inputs

Only one radio button should be selectable at a time.

---

## Step 3: Add Checkboxes
Inside the form:
- Add `type="checkbox"` for all the Interests inputs
- Add an id for all the Interests inputs
- Add the `<label>` tag for each of the Interests inputs

Multiple checkboxes should be selectable at the same time.

---

## Step 4: Add a Date Input
Inside the form:
- Add `type="checkbox"` for all the Interests inputs

---

## Step 5: Read the JavaScript Function
In the JavaScript file:
- There is a function named `showProfile`
- Uses JavaScript to:
  - Read the text input value
  - Determine which radio button is selected
  - Check which checkboxes are selected
  - Read the selected date
- Stores the information in variables
- Create a message using the user’s input
- Display the message in the output area on the page
- The page should update without refreshing

---

## Step 6: Test and Debug
1. Open the HTML file in a web browser
2. Fill out the form using different inputs
3. Click the submit button
4. Confirm that:
   - The page does not reload
   - The output message updates correctly
5. If something does not work:
   - Check that IDs match between HTML and JavaScript
   - Check for spelling errors
   - Use the browser console to look for errors

---

## Finished Project Checklist
Your completed project should:
- Use a form with multiple input types
- Include radio buttons, checkboxes, and a date input
- Use JavaScript to read form data
- Display a personalized message dynamically



## Lab Complete
Once everything works as expected, you have successfully completed the lab. Commit and Sync Changes

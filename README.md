# Interactive-form

This project is called an Interactive form. 

#  Requirements 
- <strong>JQuery</strong>
    - Utilize jQuery while coding the functionality for the form.
    
- <strong>Set Focus on the first text field</strong>
    * When the page first loads, the first text field should be in focus by default.
    
- <strong>"Job Role" Section</strong>
    * A text field that will be revealed when the "Other" option is selected from the "Job    Role" drop down menu. 
    
- <strong>"T-Shirt Info" section</strong>
    * For the T-Shirt "Color" menu, the color options that match the design selected in the "Design" menu are displayed.
    * If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
    * If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."
    * When a new theme is selected from the "Design" menu, the "Color" field and drop down menu is updated.

- <strong>”Register for Activities” section</strong>
  * Some events are at the same day and time as others. 
  If the user selects a workshop,  selection of a workshop at the same day and time is not allowed -- checkbox is disabled and  there's a visual indication that the workshop in the competing time slot isn't available.
  * When a user unchecks an activity, the competing activities (if there are any) are no longer disabled.
  * As a user selects activities, a running total is displayed below the list of checkboxes.
  For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300.

- <strong>"Payment Info" section</strong>
  * Payment sections based on the payment option chosen in the select menu are displayed.
  * The "Credit Card" payment option is selected by default. Display the #credit-card div, and hide the "PayPal" and "Bitcoin" information. Payment option in the select menu should match the payment option displayed on the page.
  * When a user selects the "PayPal" payment option, the PayPal information is displayed, and the credit card and “Bitcoin” information are hidden.
  * When a user selects the "Bitcoin" payment option, the Bitcoin information is displayed, and the credit card and “PayPal” information are hidden.

- <strong>Form Validation</strong>
    * If any of the following validation errors exist, the user is prevented from submitting the form:
        - Name field can't be blank.
        - Email field must be a validly formatted e-mail address
        - User must select at least one checkbox under the "Register for Activities" section                of the form.
        - If the selected payment option is "Credit Card,"  the user is required to supply a Credit Card number, a Zip Code, and a 3 number CVV value before the form can be submitted.
            - Credit Card field should only accept a number between 13 and 16 digits.
            - The Zip Code field should accept a 5-digit number.
            - The CVV should only accept a number that is exactly 3 digits long.

- <strong>Form validation messages</strong>
    *   There is some kind of indication when there's a validation error. 
    *   The following fields should have some obvious form of an error indication:
           -  Name field
           -  Email field
           -  Register for Activities checkboxes (at least one must be selected)
           -  Credit Card number (Only if Credit Card payment method is selected)
           -  Zip Code (Only if Credit Card payment method is selected)
           -  CVV (Only if Credit Card payment method is selected
           
-  <strong>Form works without JavaScript - Progressive Enhancement</strong>
    *  The user should has access to all form fields and payment information if JS isn't working for whatever reason. For example, when the JS is removed from the project:
           - The “Other” text field under the "Job Role" section should be visible
           - All information for Bitcoin, PayPal or Credit Card payments should be visible.





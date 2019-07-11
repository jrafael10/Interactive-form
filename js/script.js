
/***Focus on the first field ***/
$('input[type="text"]')[0].focus();

/***Job Role Section***/
$('#other-title').hide();

$('#title').on('change', function() {
    const otherJobRole = $('#other-title');
    const $selectedValue = $(this).val();
    if($selectedValue === 'other'){
        otherJobRole.show();
    } else {
        otherJobRole.hide();
    }

})
/****T-Shirt Section */

//Selecting the design menu
const designOption = $('#design option');
//hiding the first option of design menu: 'Select Theme'
designOption.eq(0).hide();

//selecting  the div that contains the color menu and options
const colorDiv = $('#colors-js-puns');
//selecting the color menu
const colorField = $('#color');
//Keep the color div hidden
colorDiv.hide();

//add option 'Please select a T-shirt theme' in the color menu
colorField.prepend("<option>Please select a T-shirt theme</option>");
//Selecting options in the color menu
const colorFieldOption = $('#color option');
//Hiding the colors 
for(let i = 1; i <=6; i++ ){
    colorFieldOption.eq(i).hide();
}
//showing the option 'Please select a T-shirt theme' in the color menu
colorFieldOption.eq(0).show();
//set the option 'Please select a T-shirt theme' as the selected option
colorFieldOption.eq(0).attr('selected', true);



const designMenu = $('#design');
 
designMenu.on('change', function(){
   const selectedTheme =  $(this).val();
   //if js puns is selected
    if(selectedTheme === 'js puns'){
        //show the color div and the color options
        colorDiv.show();
       console.log('js puns is selected');
        //hide the  'Please select a T-shirt theme' option
       colorFieldOption.eq(0).hide();
       
       for(let i = 1; i<=3; i++){
        //show the three 'js puns' option elements
        colorFieldOption.eq(i).show();
        //hide the 'heart js' option elements
        colorFieldOption.eq(i+3).hide();
       }
       
       //deselect 'Please select a T-shirt theme' option if it has been selected
       if(colorFieldOption.eq(0).attr('selected')){
           colorFieldOption.eq(0).removeAttr('selected');
       }

       //deselect the first 'heart js' option if it has been selected
       if(colorFieldOption.eq(4).attr('selected')){
        colorFieldOption.eq(4).removeAttr('selected');
    }

       //Make the first 'js puns' as selected option
       colorFieldOption.eq(1).attr('selected', true);

   } else if(selectedTheme === 'heart js') {
       //
    colorDiv.show();
    console.log('heart js is selected');
    //hide the very Please select a T-shirt theme option
    colorFieldOption.eq(0).hide();
    for(let i = 1; i<=3; i++){
        //show the three 'heart js' option elements
        colorFieldOption.eq(i+3).show();
        //hide the 'js puns' option elements
        colorFieldOption.eq(i).hide();
       }
       //deselect 'Please select a T-shirt theme' option if it has been selected
       if(colorFieldOption.eq(0).attr('selected')){
        colorFieldOption.eq(0).removeAttr('selected');
    }

    //deselect the first 'JS puns' option if it has been selected
       if(colorFieldOption.eq(1).attr('selected')){
     colorFieldOption.eq(1).removeAttr('selected');
        }
        //Make the first 'heart js' option as selected option
       colorFieldOption.eq(4).attr('selected', true);
    } 
})

/************* Activity Registration***********/

//select the fieldset with class activities
const activity = $('.activities');

//initializing the total registration fee variable
let totalFee = 0; 
//p tag is appended to the .activities class once when user 
//selects an activity
activity.one('change', 'input', function(){
    activity.append("<p></p>");
})

//Attaching an event handler for a change event 
//that will be triggered when the user checks or unchecks acheckbox
activity.on('change', 'input', function(e){
/*setting up the variables for clicked checkbox,
label of clicked checkbox, the input element of unselected checkbox,
label of each input, and  the day and time of the selected activity.
*/
     const clickedInput = $(e.target);
    const labelOfClickedInput = clickedInput.parent();
    const input = $('.activities label input');
    const label = input.parent();
    const registrationFee = labelOfClickedInput.text().match(/\d{3}/g)[0];
    const dayAndTimeOfInputClicked = labelOfClickedInput.text().match(/[A-Za-z]+\s\d(pm|am)-\d+(pm|am)/g);
    /*Initialize the variable for day and time of the activities that match 
       the checked/unchecked activity
    */
     let dayAndTimeOfInput = "";
     //function that disables any activity that matches the selected ones
     const disableActivity = (onOrOff) => {
         //looping through the label of each elements
        for(let i = 0; i<input.length; i++){
            //if text of label is not equal to the label of the selected input
            if(label.eq(i).text() !== labelOfClickedInput.text()){
             //get the the day and time of each activity 
             dayAndTimeOfInput = label.eq(i).text().match(/[A-Za-z]+\s\d(pm|am)-\d+(pm|am)/g);
             //check if day and time of each activity and the selected activity exists
              if(dayAndTimeOfInput && dayAndTimeOfInputClicked){
                  //check if day and time of the activity matched with the
                  //day and time of the selected activity
                  if(dayAndTimeOfInput[0] === dayAndTimeOfInputClicked[0]){
                        //if they match, add the disabled attribute to the
                        //input
                     input.eq(i).attr('disabled', onOrOff);
                     //check if input has already been disabled 
                     if(input.eq(i).attr('disabled')){
                        //change color of the label of
                        //the disabled activity
                     label.eq(i).css({"color": "gray"});
                     }
                     else {
                         //switch the color of the label of the enabled input
                         // back to black
                        label.eq(i).css({"color": "black"});
                     }

                  }
  
              }
            }
                   
        }
     }
     //check if the selected activity is checked
     if(clickedInput.is(':checked')){
        
        
        totalFee += parseInt(registrationFee);
       // console.log(total);

        //add the checked attribute to selected activity
        $(this).attr('checked', true);
        //disable the activity
        disableActivity(true);
     } else {
         //remove the checked attribute from the unchecked  activity
        $(this).removeAttr('checked');
        totalFee-= parseInt(registrationFee);
       
        //Enable the activity
       disableActivity(false);
    }
    //Displaying the total registration fee
    $('.activities p').text(`Total: $${totalFee}`);
    //Hide the total if fee <= 0
    if(totalFee <= 0){
        $('.activities p').hide();
    }else {
        //Show the total
        $('.activities p').show();
    }
    
});

/******** Displaying Payment Sections **********/

//Declaring the variables for payment menu and option
const payment = $('#payment');
const option = $('#payment option');
//hiding the 'Select Payment Method' option
option.eq(0).hide();

//selecting the credit card div
const creditCardDiv = $('#credit-card');
//show the credit card info by default
creditCardDiv.show();

//Selecting the paypal div
const payPalDiv = creditCardDiv.next();
//keep the paypal div hidden
payPalDiv.hide();

//Selecting the bitcoin div
const bitCoinDiv = payPalDiv.next();
//keep the
bitCoinDiv.hide();

//when user selects a payment method,
//only the information related to the selected payment method will be shown
payment.on('change', function(){
    //getting the value of the method
    const selectedMethod = $(this).val();
    
    //testing the value of the selected method
    switch(selectedMethod) {
        //if paypal is selected, paypal information will be 
        //shown and other will be hidden.
        case 'paypal':
        payPalDiv.show();
        creditCardDiv.hide();
        bitCoinDiv.hide();
        break;

        //if bitcoin is selected, bitcoin information will be 
        //shown and others will be hidden.
        case 'bitcoin':
        payPalDiv.hide();
        creditCardDiv.hide();
        bitCoinDiv.show();
        break;

        //if credit card(default payment method) is selected, credit card information will be 
        //shown and others will be hidden.
        default:
        payPalDiv.hide();
        creditCardDiv.show();
        bitCoinDiv.hide();
        break;


    }
    
})

/****Form Validation***/

//Creating the spans for every input field in the form
//Each span contains the error message that will show up when the user doesn't
//follow the requirements for each input.
//Initially, these error messages are hidden
$('#name').after('<span class ="errorName">Please enter your name.</span>');  
$('.errorName').hide();

$('#mail').after('<span class ="errorMail">Please enter a valid email address.</span>');
$('.errorMail').hide();

$('.activities legend').after('<span class="invalidAct">Please select at least one activity.</span>');
$('.invalidAct').hide();

$('#cc-num').after('<span class = "invalidCreditCard"> Please enter a valid credit card number</span>')
$('.invalidCreditCard').hide();

$('#zip').after('<span class = "invalidZipCode"> Please enter a valid zip code</span>')
$('.invalidZipCode').hide();

$('#cvv').after('<span class = "invalidCvv"> Please enter a valid CVV</span>');
$('.invalidCvv').hide();
//function that validates the name
//It checks if the user types a name
function validateNameField(name){ 
const validateName = name.trim().length > 0;
if(validateName === false){
    
    $('.errorName').show();
        $('#name').focus()
}  else {
    $('.errorName').hide();
}
return validateName;
}

//function that validates the email
function validateEmailAdd(email){
const validateMail = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email)
 if(validateMail === false) {
     $('.errorMail').show();
     $('#mail').focus()

 } else {
    $('.errorMail').hide();
 }

 if(email.length === 0){
     
    $('.errorMail').text("Please enter your email address.").show();
 }
  return validateMail;

 }

 //function that validates the activities
 //user is required to select at least on activity 
 //before submitting the form
 function validateActivities() {
     const countChecked = $('input:checked').length > 0;

     if(countChecked === false){
      
        $('.invalidAct').show();
        $('input[type="checkbox"]')[0].focus();
     }
     else {
        $('.invalidAct').hide();
     }
    return countChecked;

 }

 //function that validates the credit card number entered by user
 //user is required to enter 13 to 16 digits 
 function validateCreditCardNum(cardNumber) {
    const ccNum = /^[\d]{13,16}$/g.test(cardNumber);
   
    //const cVv = /^[\d]{3}$/g.test(cvv);
    if(ccNum ===false){
        $('.invalidCreditCard').show();
        $('#cc-num').focus();
        
    } else {
        $('.invalidCreditCard').hide();
    }

    if(cardNumber.length === 0) {
        $('.invalidCreditCard').text('Please enter your credit card number.').show();
        
    } 

    return ccNum;
}

//function that validates the zip code.
//user is required to enter 5-digit zip code
function validateZipCode(zipCode){
    const zCode = /^[\d]{5}$/g.test(zipCode);

    if(zCode === false){
        $('.invalidZipCode').show();
        $('#zip').focus();
     } else {
         $('.invalidZipCode').hide();
     }

     if(zipCode.length === 0){
        $('.invalidZipCode').text('Please enter your zip code').show();
     }

     return zCode;

}
//function that validates the cvv entered by user.
//User is required to enter 3-digit cvv
function validateCvv(cvv){
    const cVv = /^[\d]{3}$/g.test(cvv);

    if(cVv === false){
        if(cvv.length === 0){
            $('.invalidCvv').text('Please enter your CVV').show();
            $('#cvv').focus();
        } else {
            $('.invalidCvv').text('Please enter a valid CVV').show();
            $('#cvv').focus();
        }
        
    } else {
        $('.invalidCvv').hide();
    }

    return cVv;
}

 //function that validates all the required fields entered by user
function validateAllFields() {
    const $name = $('#name').val();
    const $email = $('#mail').val();
    const selectedMethod = payment.val();
    const creditCardNum = $('#cc-num').val();
    const zip = $('#zip').val();
    const cvv = $('#cvv').val();

    let valid = false;

    

    //the default payment method is credit card
    if(selectedMethod === 'credit card' || selectedMethod === 'select_method'){
//Calling all the functions that handle the validity of the required fields
    //to display the at least one error message of those invalid fields.
     validateNameField($name); 
    validateEmailAdd($email);
     validateActivities();
     validateCreditCardNum(creditCardNum);
     validateZipCode(zip) ;
     validateCvv(cvv);

     //check all the required   fields if user selects
      //credit card as the selected payment method
      if(
        validateNameField($name) &&
        validateEmailAdd($email) &&
         validateActivities() &&
         validateCreditCardNum(creditCardNum) &&
         validateZipCode(zip) &&
         validateCvv(cvv)
        ) {
            valid = true;
        } else {
              valid = false;
        }
    

     //if the user selects a payment method that is not credit card,
     //only the name, email address, and selected activity/activities
     //will be validated.
   }else {

    validateNameField($name); 
    validateEmailAdd($email); 
    validateActivities();
    if( validateNameField($name) && 
    validateEmailAdd($email)&&
    validateActivities()) {
        valid = true;
    } else {
        valid = false;
    }
   }
   return valid;
    
    
}
/***Input Events are triggered when user interacts with the input fields****/

//Show the error if the user fails to enter his name
$('#name').on('input', function(){
    const name = $(this).val();
    if(validateNameField(name) === false){
          $('.errorName').show();
 }
   
});

//Show the error message if the user leaves the email address field blank
//or enters and invalid email address
$('#mail').on('input', function(){
    const email = $(this).val();
    if(email.length === 0){
        $('.errorMail').text("Please enter your email address.").show();
       
    } else {
        if(validateEmailAdd(email) === false){
            $('.errorMail').text("Please enter a valid email address.").show();
      }
    }
})

//if user fails to select an activity, error message will show
activity.on('change', 'input', function(e){
    const countChecked = $('input:checked').length > 0;
    if(countChecked === false){
       $('.invalidAct').show();
       
    }
    else {
       $('.invalidAct').hide();
    }
   

})

//if the user enters an invalid credit card number or leave the field blank,
//error message will show
$('#cc-num').on('input', function(){
    const num = $(this).val();

    if(num.length === 0){
        $('.invalidCreditCard').text('Please enter your credit card number.').show();
    } else{
        if(validateCreditCardNum(num) === false){
        $('.invalidCreditCard').text('Please enter a valid credit card number').show();
        }
    }

})
//if the user enters the invalid zip code or leaves the field blank,
//error message will show up
$('#zip').on('input', function() {
    const zip = $(this).val();
    console.log(zip);
    if(zip.length === 0){
        $('.invalidZipCode').text('Please enter your zip code').show();
    } else {
        if(validateZipCode(zip) === false){
        $('.invalidZipCode').text('Please enter a valid zip code').show();
        }
    }

});


//if the user enters the invalid cvv or leaves the field blank,
//error message will show up.
$('#cvv').on('input', function(){
    const cvv = $(this).val();

    if(cvv.length === 0){
        $('.invalidCvv').text('Please enter the CVV').show();
    } else{
        if(validateCvv(cvv) === false){
            $('.invalidCvv').text('Please enter a valid CVV').show();
        }
    }
})

//When user  clicks the submit button, the form is submitted.
//Submit is prevented of one or more fields are invalid.
$('button').on('click', function(e){
    
    if(validateAllFields() === false){
    e.preventDefault();
    
    } else {
       $('form').submit();
    }
})




















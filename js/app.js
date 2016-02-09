//Problem: hints are shown even when form is valid
//Solution: hide and show hints at appropiate times

var $hints = $("form span"),
    $password = $("#password"),
    $confirmPassword = $("#confirm_password"),
    $username = $("#username");

//hide hints
$hints.hide();

function isUsernamePresent() {
  return $username.val().length > 0;
}

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching() && isUsernamePresent();
}

function passwordEvent() {
  //find out if password is valid
    if (isPasswordValid()) {
      //hide hint if valid
      $password.next().hide();     
    } else {
      //else show hint
      $password.next().show();
    }
}

function confirmPasswordEvent() {
  //find out if password and password match
  if(arePasswordsMatching()) {
    //hide hint if matched
     $confirmPassword.next().hide();
  } else {
    //else show the hint
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

function usernameEvent() {
  if(isUsernamePresent()) {
    $username.next().hide();
  } else {
    $username.next().show();
  } 
}

//when event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
//when event happens on confirmation 
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
  
$username.focus(usernameEvent).keyup(usernameEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
    
    

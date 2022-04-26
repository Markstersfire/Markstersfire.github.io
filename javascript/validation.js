function validate() {
  var emailID = document.myForm.EMail.value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");

  if (document.myForm.firstName.value.length < 2) {
    alert("Please provide your full name!");
    document.myForm.firstName.focus();
    return false;
  }

	else if (atpos < 1 || (dotpos - atpos < 2)) {
    alert("Please enter your email in the correct format!");
    document.myForm.EMail.focus();
    return false;
  }

  else if (document.myForm.phoneNumber.value == "" || isNaN(document.myForm.phoneNumber.value) ||
    document.myForm.phoneNumber.value.length != 10) {
      alert("Please provide a phone number in the format ##########!");
      return false;
    }

  else if (document.myForm.type.value == "") {
    alert("Please provide what the type is for your phone number!");
    return false;
  }

  return (true);
}

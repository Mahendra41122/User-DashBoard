// Sidebar Navigation

document.getElementById("menuProfile").onclick = function(){
document.getElementById("profileSection").scrollIntoView();
};

document.getElementById("menuSecurity").onclick = function(){
document.getElementById("securitySection").scrollIntoView();
};

document.getElementById("menuActivity").onclick = function(){
document.getElementById("activitySection").scrollIntoView();
};
// Login Date
document.getElementById("loginDate").innerHTML = new Date().toLocaleDateString();

// Update Profile

document.getElementById("updateProfile").onclick = function () {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name == "" || email == "") {
    let email = document.getElementById("email").value.toLowerCase();
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailRegex)) {
      alert("Please enter a valid email address");
      return;
    }
    alert("Please fill profile details");
    return;
  }

  alert("Profile Updated Successfully");
  document.getElementById("name").value="";
  document.getElementById("email").value="";
  document.getElementById("photo").value="";

  document.getElementById("profileDate").innerHTML = new Date().toLocaleDateString();
};

// Change Password

document.getElementById("changeBtn").onclick = function () {
  let oldPass = document.getElementById("oldPassword").value;
  let newPass = document.getElementById("newPassword").value;
  let confirmPass = document.getElementById("confirmPassword").value;

  if (oldPass == "" || newPass == "" || confirmPass == "") {
    alert("Fill all password fields");
    return;
  }

  if (newPass != confirmPass) {
    alert("Password does not match");
    return;
  }

  alert("Password Changed Successfully");
    document.getElementById("oldPassword").value="";
    document.getElementById("newPassword").value="";
    document.getElementById("confirmPassword").value="";
    document.getElementById("passwordDate").innerHTML = new Date().toLocaleDateString();
};
//<!-------Authentication Validation -------> 

//<!-------Name Field-------> 
function nameValidate(){
    var firstname = document.getElementById('firstname').value;
    if(firstname) {
      if(firstname.length <= 3){
        document.getElementById('partialName').style="display:block;"
        document.getElementById('firstname').style="display:block;border:1px Solid red;margin-left: 25%;"
        document.getElementById('emptyName').style="display:none;"
      } else {
        document.getElementById('partialName').style="display:none;"
        document.getElementById('firstname').style="display:block;border:none;margin-left: 25%;"
      }
    }
    else {
      document.getElementById('emptyName').style="display:block;"
      document.getElementById('firstname').style="display:block;border:1px Solid red;margin-left: 25%;"
      document.getElementById('partialName').style="display:none;"
    }
  }

    //<!-------Email Field------->
  function emailValidate(){
    var email = document.getElementById('emailid').value;
    var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email){
      var crtEmail = mailformat.test(email);
      if(crtEmail == 1){
        document.getElementById('emptyEmail').style="display:none;"
        document.getElementById('validEmail').style="display:none;"
        document.getElementById('emailid').style="display:block;border:none;margin-left: 25%;"
      }
      else{
        document.getElementById('emptyEmail').style="display:none;"
        document.getElementById('validEmail').style="display:block;"
        document.getElementById('emailid').style="display:block;border:1px Solid red;margin-left: 25%;"
      }
    }
    else{
      document.getElementById('emptyEmail').style="display:block;"
      document.getElementById('validEmail').style="display:none;"
      document.getElementById('emailid').style="display:block;border:1px Solid red;margin-left: 25%;"
    }
  }
  
    //<!-------Password Field------->
  function passValidate(){
    var password = document.getElementById('passwordfield').value;
    if(password) {
      if(password.length <= 7){
        document.getElementById('partialSub').style="display:block;"
        document.getElementById('passwordfield').style="display:block;border:1px Solid red;margin-left: 25%;"
        document.getElementById('emptySub').style="display:none;"
      } else {
        document.getElementById('partialSub').style="display:none;"
        document.getElementById('passwordfield').style="display:block;border:none;margin-left: 25%;"
      }
    }
    else {
      document.getElementById('emptySub').style="display:block;"
      document.getElementById('passwordfield').style="display:block;border:1px Solid red;margin-left: 25%;"
      document.getElementById('partialSub').style="display:none;"
    }
  }

    //<!-------phone number Field------->
    function numberValidate(){
        var number = document.getElementById('phonenumber').value;
        if(number) {
          if(number.length <= 9 ){
            document.getElementById('validPhone').style="display:block;"
            document.getElementById('emptyNubmer').style="display:none;"
            document.getElementById('phonenumber').style="display:block;border:1px Solid red;margin-left: 25%;"
          } else {
            document.getElementById('validPhone').style="display:none;"
            document.getElementById('phonenumber').style="display:block;border:none;margin-left: 25%;"
          }
          if(number.length > 10){
            document.getElementById('countsMore').style="display:block;"
            document.getElementById('phonenumber').style="display:block;border:1px Solid red;margin-left: 25%;"
          }
          else {
            document.getElementById('countsMore').style="display:none;"
            document.getElementById('phonenumber').style="display:block;border:none;margin-left: 25%;"
          }
        }
        else {
          document.getElementById('emptyNubmer').style="display:block;"
          document.getElementById('validPhone').style="display:none;"
          document.getElementById('phonenumber').style="display:block;border:1px Solid red;margin-left: 25%;"
        }
      }

  //<!-------Address Field------->
  function textValidate(){
    var text = document.getElementById('textfield').value;
    if(text) {
      if(text.length <= 10){
        document.getElementById('partialText').style="display:block;"
        document.getElementById('textfield').style="display:block;border:1px Solid red;margin-left: 25%;"
        document.getElementById('emptyText').style="display:none;"
      } else {
        document.getElementById('partialText').style="display:none;"
        document.getElementById('textfield').style="display:block;border:none;margin-left: 25%;"
      }
    }
    else {
      document.getElementById('emptyText').style="display:block;"
      document.getElementById('textfield').style="display:block;border:1px Solid red;margin-left: 25%;"
      document.getElementById('partialText').style="display:none;"
    }
  }

  //<!-------Image Field------->
  function loadFile() {
    var fileInput = document.getElementById('file');
    var filePath = fileInput.value;
  
    // Allowing file type
    if(filePath){
      var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
      if (!allowedExtensions.exec(filePath)) {
        document.getElementById('imageLabel').style="display:block";
        document.getElementById('imageLabel1').style="display:none";
          fileInput.value = '';
          return false;
      } 
      else {
        // Image preview
          if (fileInput.files && fileInput.files[0]) {
            document.getElementById('imageLabel').style="display:none";
            var reader = new FileReader();
            reader.onload = function(e) {
              document.getElementById('imagePreview').innerHTML = '<img src="' + e.target.result + '"/>';
            };   
            reader.readAsDataURL(fileInput.files[0]);
          }
      }
    }
    else{
      document.getElementById('imageLabel1').style="display:block";
      document.getElementById('imageLabel').style="display:none";
    }
    
}

//<!-------RadioButton Field------->
function radioValidate() {
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    var transgender = document.getElementById("transgender").checked;
    if(male == 1 || female == 1 || transgender == 1) {
        document.getElementById('radioButton').style="display:none;"
    }
    else{
        document.getElementById('radioButton').style="display:block;"
    }
}

function SignInLeftValidate() {
  document.getElementById('signupForm').style="display:none;"
  document.getElementById('signInLeft').style="display:none;"
  document.getElementById('signUpLeft').style="display:block;margin-left: 20%;"
  document.getElementById('signinForm').style="display:block;"
}

function SignUpLeftValidate() {
  document.getElementById('signupForm').style="display:block;"
  document.getElementById('signInLeft').style="display:block;margin-left: 80px;"
  document.getElementById('signUpLeft').style="display:none;"
  document.getElementById('signinForm').style="display:none;"
}

  function SignUpRightValidate() {
    var firstname = document.getElementById('firstname').value;
    var email = document.getElementById('emailid').value;
    var password = document.getElementById('passwordfield').value;
    var number = document.getElementById('phonenumber').value;
    var fileInput = document.getElementById('file');
    var text = document.getElementById('textfield').value;
    if(!firstname || !number || !email || !password || !text || !image || !male || !image){
      nameValidate();
      emailValidate();
      passValidate();
      numberValidate();
      textValidate();
      radioValidate();
      loadFile();
    }
    else {
      localStorage.setItem('Name', firstname);
      localStorage.setItem('EmailId', email);
      localStorage.setItem('Password', password);
      localStorage.setItem('PhoneNumber', number);
      localStorage.setItem('Image', fileInput);
      window.location.href="home.html";
    }
  }
  //<!------- SignIn Email Field------->
  function mailValidate(){
    var mail = document.getElementById('mailid').value;
    var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(mail){
      var crtEmail = mailformat.test(mail);
      if(crtEmail == 1){
        document.getElementById('emptyEmail1').style="display:none;"
        document.getElementById('validEmail1').style="display:none;"
        document.getElementById('mailid').style="display:block;border:none;margin-left: 25%;"
      }
      else{
        document.getElementById('emptyEmail1').style="display:none;"
        document.getElementById('validEmail1').style="display:block;"
        document.getElementById('mailid').style="display:block;border:1px Solid red;margin-left: 25%;"
      }
    }
    else{
      document.getElementById('emptyEmail1').style="display:block;"
      document.getElementById('validEmail1').style="display:none;"
      document.getElementById('mailid').style="display:block;border:1px Solid red;margin-left: 25%;"
    }
  }
  
    //<!------- SignIn Password Field------->
  function passwordValidate(){
    var pass = document.getElementById('passfield').value;
    if(pass) {
      if(pass.length <= 7){
        document.getElementById('partialSub1').style="display:block;"
        document.getElementById('emptySub1').style="display:none;"
        document.getElementById('passfield').style="display:block;border:1px Solid red;margin-left: 25%;"
      } else {
        document.getElementById('partialSub1').style="display:none;"
        document.getElementById('passfield').style="display:block;border:none;margin-left: 25%;"
      }
    }
    else {
      document.getElementById('emptySub1').style="display:block;"
      document.getElementById('partialSub1').style="display:none;"
      document.getElementById('passfield').style="display:block;border:1px Solid red;margin-left: 25%;"
    }
  }

function SignInRightValidate() {
  var mail = document.getElementById('mailid').value;
  var pass = document.getElementById('passfield').value;
  if(!mail || !pass){
    mailValidate();
    passwordValidate();
  }
  else {
    localStorage.setItem('EmailId', mail);
    localStorage.setItem('Password', pass);
    window.location.href="home.html";
  }
}
//<!-------Authentication Validation Ends -------> 

//<!-------Home Validation ------->


function addStudent(){
  document.getElementById('inputField').style="display:block;"
}

 //<!-------Date Field -------> 
  var mydate = new Date();
  var dateToString = mydate.toString();
  var dateArray =[];
  dateArray = dateToString.split('G');
  document.getElementById("lastTime").innerHTML+=dateArray[0];
  

  //<!-------Name Field -------> 
  var firstname = localStorage.getItem('Name');
  var email = localStorage.getItem('EmailId');
  var mail=[];
  mail = email.split("@");
  if(firstname){
    document.getElementById('userName').innerHTML+=" "+firstname.replace(firstname[0],firstname[0].toUpperCase());
  }
  else{
    document.getElementById('userName').innerHTML+=" "+mail[0].replace(mail[0][0],mail[0][0].toUpperCase());
  }

  function studentNameValidate(){
    var Sname = document.getElementById('studentName').value;
    if(Sname) {
      if(Sname.length <= 3){
        document.getElementById('partialSname').style="display:block;padding-left: 80%;"
        document.getElementById('studentName').style="display:inline;border:2px Solid red;"
        document.getElementById('emptySname').style="display:none;"
      } else {
        document.getElementById('partialSname').style="display:none;"
        document.getElementById('studentName').style="display:inline;border:none;"
      }
    }
    else {
      document.getElementById('emptySname').style="display:block;padding-left: 80%;"
      document.getElementById('studentName').style="display:inline;border:2px Solid red;"
      document.getElementById('partialSname').style="display:none;"
    }
  }

  function studentAgeValidate(){
      var Sage = document.getElementById('studentAge').value;
      if(Sage) {
        if(Sage.length <= 1 ){
          document.getElementById('partialSage').style="display:block;padding-left: 80%;"
          document.getElementById('emptySage').style="display:none;"
          document.getElementById('studentAge').style="display:inline;border:2px Solid red;"
        } else {
          document.getElementById('partialSage').style="display:none;"
          document.getElementById('studentAge').style="display:inline;border:none;"
        }
        if(Sage.length > 2){
          document.getElementById('valideAge').style="display:block;padding-left: 80%;"
          document.getElementById('studentAge').style="display:inline;border:2px Solid red;"
        }
        else {
          document.getElementById('valideAge').style="display:none;"
          document.getElementById('studentAge').style="display:inline;border:none;"
          document.getElementById('emptySage').style="display:none;"
        }
      }
      else {
        document.getElementById('emptySage').style="display:block;padding-left: 80%;"
        document.getElementById('partialSage').style="display:none;"
        document.getElementById('studentAge').style="display:inline;border:2px Solid red;"
      }
    }

  function studentDeptValidate(){
    var Sdept = document.getElementById('studentDept').value;
    if(Sdept) {
      if(Sdept.length <= 1){
        document.getElementById('partialSdept').style="display:block;padding-left: 80%;"
        document.getElementById('studentDept').style="display:inline;border:2px Solid red;"
        document.getElementById('emptySdept').style="display:none;"
      } else {
        document.getElementById('partialSdept').style="display:none;"
        document.getElementById('studentDept').style="display:inline;border:none;"
      }
    }
    else {
      document.getElementById('emptySdept').style="display:block;padding-left: 80%;"
      document.getElementById('studentDept').style="display:inline;border:2px Solid red;"
      document.getElementById('partialSdept').style="display:none;"
    }
  }

  function studentClgValidate(){
    var Scollage = document.getElementById('studentClg').value;
    if(Scollage) {
      if(Scollage.length <= 2){
        document.getElementById('partialSclg').style="display:block;padding-left: 80%;"
        document.getElementById('studentClg').style="display:inline;border:2px Solid red;"
        document.getElementById('emptySclg').style="display:none;"
      } else {
        document.getElementById('partialSclg').style="display:none;"
        document.getElementById('studentClg').style="display:inline;border:none;"
      }
    }
    else {
      document.getElementById('emptySclg').style="display:block;padding-left: 80%;"
      document.getElementById('studentClg').style="display:inline;border:2px Solid red;"
      document.getElementById('partialSclg').style="display:none;"
    }
  }

  var studentData=[];
  function addValidate() {
    var Sname = document.getElementById('studentName').value;
    var Sage = document.getElementById('studentAge').value;
    var Sdept = document.getElementById('studentDept').value;
    var Scollage = document.getElementById('studentClg').value;
    if(!Sname || !Sage || !Sdept || !Scollage){
      studentNameValidate();
      studentAgeValidate();
      studentDeptValidate();
      studentClgValidate();
    }
    else {
      var data ={
            name:Sname,
            age:Sage,
            Department:Sdept,
            college:Scollage,

        }
        studentData.push(data);
        document.forms[0].reset();
        //for display purposes only
        let pre = document.querySelector('#msg pre');
        pre.textContent = '\n' + JSON.stringify(studentData, '\t', 2);
        console.log(studentData);
        localStorage.setItem("studentDetails",JSON.stringify(studentData));
      }
    }
  
  function finalValidate() {
    console.log(studentData);
    if(studentData.length === 0){
      addValidate();
    }
    else {
      window.location.href="studentDetail.html";
    }
  }

//<!-------Home Validation Ends ------->


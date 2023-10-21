

// Contact.js

function validateform(){
  var name=document.getElementById("name").value;
  var Feedback=document.getElementById("feedback").value;
  var email=document.getElementById('email').value;
  var regex=/^[a-zA-Z ]{3,20}$/;
  var regex1=	/^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]{2,}$/;
  var regex3=/^[a-zA-Z ]{3,20}$/;

  if(name.match(regex) && email.match(regex1) && Feedback.match(regex3)){

      Swal.fire({

          icon: 'success',
          title: 'Form Submitted',

        })


  }
  else if(name==null || name.trim()=="" && email==null || email.trim()=="" && Feedback==null || Feedback.trim()==""){
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please fill out your initials.',

        })
  }
  else{
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Login Failed!',

        })
  }
}
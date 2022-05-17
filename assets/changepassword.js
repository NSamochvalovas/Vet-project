
const baseUrl = 'http://localhost:8080'
const token = localStorage.getItem("token");

if(!token){
  location.replace('index.html');
}


document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();

  const email = e.target.elements.email.value.trim().toLowerCase();
  const password = e.target.elements.password.value;
  const passwordNew = e.target.elements.newpassword.value;
  const confirmpassword = e.target.elements.confirmpassword.value;

  if(passwordNew !== confirmpassword){
    alert ('Password doesnt match')
  }
  changePass({ email, password, passwordNew});

});

const changePass = async passdetails => {
  try {
    const res =  await fetch(`${baseUrl}/change/password`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify(passdetails)
    })
    const data = await res.json()
    if (data.msg === 'Password changed'){
      location.replace('index.html');
    }

  } catch(err){
    alert(err);
  }
}
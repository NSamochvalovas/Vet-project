
const baseUrl = 'http://localhost:8080'

document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.elements.name.value.trim();
  const email = e.target.elements.email.value.trim().toLowerCase();
  const password = e.target.elements.password.value;
  const confirmpassword = e.target.elements.confirmpassword.value;


  if(password !== confirmpassword){
    alert ('Password doesnt match')
  }
  register({ name, email, password });

});

const register = async userData => {
  try{
    const res = await fetch(`${baseUrl}/users/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    const data = await res.json();

    if (data.msg === 'Successfully created account'){
      location.replace('/index.html');
    }
  } catch{
    alert (err || 'Server problems')
  }
}
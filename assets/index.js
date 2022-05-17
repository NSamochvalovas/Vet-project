const baseURL = "http://localhost:8080";

const login = async (userData) => {
  try{
    const res = await fetch(`${baseURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
    const data = await res.json()
  
    if (data.err) {
      return alert(data.err);
    }
    
    if(data.msg === 'You have logged in'){
      alert('you have logged in')
      localStorage.setItem("token", data.token);
      location.replace('home.html');
    }

    if(data.msg === 'Wrong password'){
      alert('Wrong password')
    }

    if(data.msg === 'User not found'){
      alert('User not found')
    }

    console.log(data.msg);
  } catch (err) {
    alert(err || 'Server problem')
  }
  }


document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();

  const email = e.target.elements.email.value.trim().toLowerCase();
  const password = e.target.elements.password.value;

  login({ email, password });
});
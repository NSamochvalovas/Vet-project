const baseUrl = 'http://localhost:8080';


const randomPass = async (userData) => {
  try{
    const res = await fetch(`${baseUrl}/forgot/reset-password`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    alert(data.msg);
  } catch(err) {
    alert(err)
  }
};

document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();

  const email = e.target.elements.email.value;

  randomPass ({ email })
});
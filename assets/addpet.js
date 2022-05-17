const baseUrl = 'http://localhost:8080';

const token = localStorage.getItem('token');

if(!token){
  location.replace('index.html');
}

document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.elements.petName.value.trim();
  const ownerEmail = e.target.elements.email.value.trim();

  const petDetails = {name, ownerEmail};

  addPets(petDetails);
});

const addPets = async petDetails => {
  try {
    const res =  await fetch(`${baseUrl}/pets/add`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify(petDetails)
    })
    const data = await res.json()
    if (data.msg === 'Successfully added a pet'){
      location.replace('pets.html');
    }

  } catch(err){
    alert(err);
  }
}
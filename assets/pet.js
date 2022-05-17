const baseUrl = 'http://localhost:8080';
const content = document.getElementById('content')
const token = localStorage.getItem("token");



const getData = async (token) => {
  try{
    const res = await fetch(`${baseUrl}/pets`, {
      headers:{
        authorization: `Beaners ${token}`,
      },
    });
    const data = await res.json();
 
    console.log(data);
    
  data.forEach((pet) => {
    const singleContent = document.createElement('div');
    singleContent.classList.add('single-content');
    const h3 = document.createElement('h3');
    h3.innerText= pet.name;
    singleContent.appendChild(h3);
    const p = document.createElement('p');
    p.classList.add('date');
    p.innerText = pet.created_at.substring(0, 10);
    singleContent.appendChild(p);
    const h4 = document.createElement('h4');
    h4.innerText = pet.ownerEmail;
    singleContent.appendChild(h4);
    const buttonField = document.createElement('div');
    buttonField.classList.add('button-field');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-pet', 'btn-second');
    deleteButton.innerText= 'Delete';
    buttonField.appendChild(deleteButton);
    singleContent.appendChild(buttonField);
    content.appendChild(singleContent)
  });
    if (data.err){
      return alert(data.err)
    }
  }catch(err){
   console.log(err)
  }
}

if (!token) {
  location.replace("index.html");
} else {
  getData(token);
}
window.onload = () => {
        randomUserGenerator()
}

// Define constants and variables
const generateBtn = document.getElementById('generate-btn');

// Generate random user when button is clicked
generateBtn.addEventListener('click', randomUserGenerator);

// Generate random user
function randomUserGenerator() {
  fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(data => {
      showRandomUserData(data);
    })
    .catch(error => console.log(error));
}

// Display random user data
function showRandomUserData(randomUser) {
  const user = randomUser.results[0];

  // Set gender icon
  const genderIcon = user.gender === "male" ? "<i class='fas fa-mars'></i>" : "<i class='fas fa-venus'></i>";
  document.getElementById('gender').innerHTML = genderIcon;

  // Set name
  document.getElementById('name').innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;

  // Set age
  document.getElementById('age').innerText = `${user.dob.age}`;

  // Set email
  document.getElementById('email').innerText = `${user.email}`;

  // Set phone number
  document.getElementById('phone').innerText = `${user.phone}`;

  // Set profile picture
  const img = document.createElement('img');
  img.src = user.picture.large;
  document.getElementById('profile-picture').innerHTML = '';
  document.getElementById('profile-picture').appendChild(img);
}

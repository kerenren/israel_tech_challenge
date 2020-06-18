//profile AJAX fetching
const GITHUB_URL = "https://api.github.com/users/kerenren";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
  });

//added events for the about page
if(document.querySelector('.about')) {
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const placeToGo = document.querySelectorAll('.place');
  // console.log('place to go' ,placeToGo)
  let currentSelected = 0;

  prevBtn.addEventListener('click' ,function () {
    nextBtn.disabled = false;
    placeToGo[currentSelected].classList.remove("active");
    currentSelected--;
    placeToGo[currentSelected].classList.add("active");
  
    if (currentSelected === 0) {
      prevBtn.disabled = true;
    }
  })

  nextBtn.addEventListener('click' , function () {
    prevBtn.disabled = false;
    placeToGo[currentSelected].classList.remove("active");
    currentSelected++;
    placeToGo[currentSelected].classList.add("active");
    
    if (placeToGo.length === currentSelected + 1) {
      nextBtn.disabled = true;
    }
  })
}

//added events for the cantact page.
if(window.location.href === "file:///Users/KellyRen/Desktop/ITC/Precourse/Ren_Kelei_ITCPrecourse/contact.html") {
  const submit = document.getElementById('submit');
  const firstName = document.getElementById('first_name');
  const lastName = document.getElementById('last_name');
  const email = document.getElementById('email');
  const selection = document.getElementById('selection');
  const comments = document.getElementById('comments');

  document.addEventListener('input', function () {
    if (firstName.value.length > 0 
        && email.value.length > 0
        && comments.value.length > 0
        && selection.value.length > 0
        ) {
      submit.disabled = false;
      console.log('form is valid. submit is disabled:' , submit.disabled)
    } else {
      submit.disabled = true;
      console.log('form is not valid. submit is disabled:' , submit.disabled)}
  });
  
  submit.addEventListener('click', function(event) {
    alert(`First Name : ${firstName.value}, Last Name: ${lastName.value}, Email: ${email.value}, Comment: ${comments.value}, To which degree do you enjoy this website? "${selection.value}". `);
  }) 

}

//footer
const codingArray = [
  "HTML",
  "CSS",
  "JavaScript"
]

const footerTxt = document.querySelector('.footer')

footerTxt.innerText=`This page was built using: ${codingArray[0]}, ${codingArray[1]} and ${codingArray[2]}`


//added animation for home page card
if (document.querySelector('.animation')) {
  const card = document.querySelector('.card');
 
  function hover () {
    card.addEventListener('mouseover' , function () {
      card.style.animation = "bounce 1s";
      card.style.boxShadow = "4px 4px 40px 0px #3d6ded";
      }
    )
  }
  
  function click () {
      card.addEventListener('click' , function () {
        card.style.boxShadow = "4px 4px 40px 0px #D0B2D5";
        card.style.animation = "scale 5s alternate"; 
        setTimeout(() => {
        card.style.animation = "rotation 3s alternate";
        card.style.boxShadow = "4px 4px 40px 0px #3d6ded";
        }, 5000);
        } 
      )
    }

  hover ();
  click ();
}


const GITHUB_URL = "https://api.github.com/users/joaquinkaplan";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    const myName = document.getElementById("myName");
    myName.innerHTML = data.name;
  });




  const footerjs = document.getElementById("footerjs");
  const languages = ['HTML', 'CSS', 'JavaScript'];

  languages.forEach(
    function (whichlanguage, index) {
if (index === languages.length - 1) {
  footerjs.innerHTML += `and ${whichlanguage}.`;
} 
      
else if (index === languages.length - 2) {
  footerjs.innerHTML += `${whichlanguage} `;
      
      else {
  footerjs.innerHTML += `${whichlanguage}, `;
}
    }
  );

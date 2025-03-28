let favoriteAdvice = "";
const displayAdvice = document.querySelector("#showAdvice");

const getAdvice = async () => {
  // alert('yes i am working')
  displayAdvice.innerHTML = `Loading...`;
  const generateAdvice = await fetch("https://api.adviceslip.com/advice");
  const objectAdvice = await generateAdvice.json();
  // console.log(objectAdvice);
  favoriteAdvice = objectAdvice.slip.advice;

  displayAdvice.innerHTML = `<p>${favoriteAdvice}</p>`;

  let saveBtn = document.createElement("button");
  saveBtn.className =
    "btn btn-danger bg-danger shadow-none form-control text-white fs-5";
  saveBtn.textContent = "Save";
  saveBtn.onclick = () => saveAdvice();

  displayAdvice.appendChild(saveBtn);
};

const saveAdvice = () => {
  let favoriteAdvice = displayAdvice.textContent;
  
  
  if (favoriteAdvice) {
    localStorage.setItem("FavoriteAdvice", favoriteAdvice); 
    console.log("Saved Advice: ", "favoriteAdvice"); 
  } else {
    console.log("No advice to save!"); 
  }
};

const showSaved = () => {
  // alert('yes i am working')
  let getSavedAdvice = localStorage.getItem("favoriteAdvice")
  // console.log(getSavedAdvice);
  if (getSavedAdvice) {
    displayAdvice.innerHTML = `<p>${getSavedAdvice}</p>`;
} else {
    displayAdvice.innerHTML = `<p>No saved advice yet!</p>`;
}
  
}

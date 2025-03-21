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
  let favoriteAdvice = displayAdvice.querySelector("p").textContent;
  localStorage.setItem("FavoriteAdvice", JSON.stringify(favoriteAdvice));
  console.log("Advice saved:", favoriteAdvice);
};

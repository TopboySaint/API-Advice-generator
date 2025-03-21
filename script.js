const displayAdvice = document.querySelector("#showAdvice");

const getAdvice = async () => {
  // alert('yes i am working')
  displayAdvice.innerHTML = `Loading...`;
  const generateAdvice = await fetch("https://api.adviceslip.com/advice");
  const objectAdvice = await generateAdvice.json();
  // console.log(objectAdvice);
  displayAdvice.innerHTML = `<p>${objectAdvice.slip.advice}</p>`;

  let saveBtn = document.createElement("button");
  saveBtn.className =
    "btn btn-danger bg-danger shadow-none form-control text-white fs-5";
  saveBtn.textContent = "Save";
  saveBtn.onclick = () => saveAdvice(objectAdvice);

  displayAdvice.appendChild(saveBtn);
};

const saveAdvice = () => {
  // alert('yes i work')
  let savedAdvice = localStorage.setItem(
    "FavoriteAdvice",
    JSON.stringify(objectAdvice)
  );
  console.log(saveAdvice);
};

let rating = document.querySelectorAll("ul li");
let submit = document.querySelector("button");
document.querySelector(".submit-box div :last-child").innerHTML = rating.length

let selected;

rating.forEach((e) => {
  e.addEventListener("click", function (){
    rating.forEach((ele) => {
      ele.classList.remove("bg-gray-400", "text-white");
    });
    e.classList.add("bg-gray-400", "text-white");
    if (e.classList.contains("bg-gray-400")) {
      selected = e;
    }
  });
});

submit.addEventListener("click", function (){
  document.querySelector(".submit-box").classList.remove("hidden")
  document.querySelector(".submit-box div :first-child").innerHTML = selected.textContent
})


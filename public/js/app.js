const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
// const password = document.querySelector("#ps")
// const cpassword = document.querySelector("#cps")

// if (cpassword == password) {
//    console.log("Success")
// } else {
//   alert("Check your Confirm Password")
// }

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const likeBtns = document.querySelectorAll(".like-btn");
likeBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
        btn.textContent = "liked"
    })
})
// const replyNums = document.getElementById("reply1");
// const replyWrapper =document.querySelector("hidden1"); 
// replyNums.addEventListener("click", function(){
//     replyWrapper.classList.toggle("hidden")
// })
const replyNums = document.querySelector("#reply1");
const replyWrapper = document.querySelector("#hidden1");

replyNums.addEventListener("click", function() {
    replyWrapper.classList.toggle("hidden");
});
const reply2 = document.querySelector("#reply2");
const replyTwo = document.querySelector("#hidden2");

reply2.addEventListener("click", function() {
    replyTwo.classList.toggle("hidden");
 });
const reply3 = document.querySelector("#reply3");
const replyThree = document.querySelector("#hidden3");

reply3.addEventListener("click", function() {
    replyThree.classList.toggle("hidden");
});
//  const modalSubscribeForm = document.getElementById("modalSubscribeForm");
//  const subscribebtn = document.getElementById("subscribebtn")


const openBtn = document.getElementById("subscribe-black");
const closeBtn = document.getElementById("closeSign");
const popup = document.getElementById("subscribe");
const redBtn = document.getElementById("subscribe-red");
const emailInput = document.getElementById("email");

// Open popup
openBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
});
form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop page refresh

  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
    alert("Please enter your email");
  } else {
    alert("Subscribed successfully!");
    popup.classList.add("hidden");
    emailInput.value = "";
  }
});




// Close popup
closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// Subscribe button action
redBtn.addEventListener("click", () => {
  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
    alert("Please enter your email");
  } else {
    alert("Subscribed successfully!");
    popup.classList.add("hidden");
    emailInput.value = "";
  }
});

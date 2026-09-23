const PASSWORD = "love";

const passwordInput = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");
const error = document.getElementById("error");

function unlock(){
  if(passwordInput.value.trim() === PASSWORD){
    error.textContent = "";
    // هنا هنضيف الصفحة الثانية بعد ما نعتمد شاشة الـUnlock.
    alert("تمام ❤️");
  }else{
    error.textContent = "كلمة السر غير صحيحة";
    passwordInput.animate(
      [
        {transform:"translateX(0)"},
        {transform:"translateX(-7px)"},
        {transform:"translateX(7px)"},
        {transform:"translateX(0)"}
      ],
      {duration:260}
    );
  }
}

unlockBtn.addEventListener("click", unlock);

passwordInput.addEventListener("keydown", (event)=>{
  if(event.key === "Enter") unlock();
});

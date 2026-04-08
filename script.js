const user = document.getElementById("user");
const pass = document.getElementById("pass");
const btn = document.getElementById("loginBtn");
const toggleEye = document.getElementById("toggleEye");

function checkInput() {
    btn.disabled = !(user.value && pass.value);
}

user.addEventListener("input", checkInput);
pass.addEventListener("input", checkInput);

toggleEye.addEventListener("click", () => {
    if (pass.type === "password") {
        pass.type = "text";
        toggleEye.textContent = "◠";
    } else {
        pass.type = "password";
        toggleEye.textContent = "👁";
    }
});

btn.addEventListener("click", () => {
    alert("你被騙啦！");
});
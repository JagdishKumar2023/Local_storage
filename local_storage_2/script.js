const input = document.getElementById("myInput");
const btn = document.getElementById("myBtn");
const deleteBtn = document.getElementById("delete");

const btnClick = () => {
  sessionStorage.setItem("key1", input.value);
};

btn.addEventListener("click", btnClick);

deleteBtn.addEventListener("click", () => {
  sessionStorage.removeItem("key1");
});

const arr = [{ key1: "abhi" }, { key2: "abhishek" }, {}];
if (sessionStorage.getItem("key1")) {
  alert(sessionStorage.getItem("key1"));
}

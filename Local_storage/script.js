//===SET ITEM AND GET ITEMS OR REMOVE

// console.log(window.localStorage);

//localStorage.setItem('them', 'light');

//localStoage.setItem('font',bold')

// localStorage.removeItem("font");

// localStorage.setItem("theme", "Span");

// // localStorage.clear();// clear is use for data clear

// const theme = localStorage.getItem("theme");

// console.log(theme);

//===JSON string // Data transfer to the storge in localToStrage

// const userSettings = {
//   theme: "dark",
//   font: "light",
//   score: 100,
// };

// const settingString = JSON.stringify(userSettings);
// localStorage.setItem("userSettings", settingString);

// // const settingString = JSON.stringify(userSettings);
// // console.log(settingString);

// const uSettings = JSON.parse(localStorage.getItem("userSettings"));

// console.log(uSettings.theme);

//IMP = ( CART, USERSETTINGS , FILTERS , FORM DATA  , SCROE include, NOT INCLUDE PASSWORD ,APL KEYS)

// SMALL PROJECT IN LOCAL STORAGE

// const themeSelector = document.querySelector("#themeSelector");

// themeSelector.addEventListener("change", (e) => {
//   localStorage.setItem("theme", e.target.value);
//   changeTheme(e.target.value);
// });

// function changeTheme(theme) {
//   if (theme === "dark") {
//     document.body.style.backgroundColor = "#222";
//   } else if (theme === "green") {
//     document.body.style.backgroundColor = "green";
//   } else {
//     document.body.style.backgroundColor = "#fff";
//   }
// }

// window.addEventListener('storage',(e) =>){
//     if(e.key === 'theme'){
//         changeTheme(e.newValue);
//         themeSelector.value = e.newValue;
//     }
// }

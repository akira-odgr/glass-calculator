import "./style.scss";

const input = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let string = "";
let arry = Array.from(buttons);

// arry.map((arr) => {
//     arr.addEventListener("click", (e) => {
//         if (e.target.innerHTML == "AC") {
//             string = "";
//             input.value = string;
//         } else if (e.target.innerHTML == "DEL") {
//             string = string.substring(0, string.length - 1);
//             input.value = string;
//         } else if (e.target.innerHTML == "=") {
//             string = eval(string);
//             input.value = string;
//         } else {
//             string += e.target.innerHTML;
//             input.value = string;
//         }
//     });
// });

// ... existing code ...

arry.forEach((button) => {
    button.addEventListener("click", ({ target }) => {
        // destructuring
        const value = target.innerHTML; // 値を変数に格納

        switch (value) {
            case "AC":
                string = "";
                break;
            case "DEL":
                string = string.slice(0, -1); // substringの代わりにsliceを使用
                break;
            case "=":
                try {
                    string = new Function("return " + string)(); // evalの代わり
                } catch {
                    string = "Error";
                }
                break;
            default:
                string += value;
        }

        input.value = string; // 共通の処理をループ外に
    });
});

// ... existing code ...

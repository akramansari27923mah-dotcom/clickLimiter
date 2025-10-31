// 
// encapsulation

let btn = document.querySelector("button")
let span = document.querySelector("span")
function clickLimiter() {
    let click = 1;
    return function () {
        if (5 > click) {
            let c = click++
            let maxClick = 5
            btn.addEventListener("click", function () {
                let lemetCount = span.textContent = c++
                if (lemetCount <= maxClick) {
                    return lemetCount;
                }
                else {
                    return span.textContent = "YOUR CLICK LIMIT OVER PLEASE TRY AFTER FEW MINTS"
                }

            });
        }
    };
};
let fnc = clickLimiter();
fnc()

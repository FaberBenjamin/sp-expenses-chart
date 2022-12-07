"use strict";
let mon = document.getElementById("mon_bar");
let tue = document.getElementById("tue_bar");
let wed = document.getElementById("wed_bar");
let thu = document.getElementById("thu_bar");
let fri = document.getElementById("fri_bar");
let sat = document.getElementById("sat_bar");
let sun = document.getElementById("sun_bar");
let visualPrice = document.createElement("div");
let totalValueDisplayed = document.getElementById("total_value");
fetch("./data.json")
    .then(res => res.json())
    .then(data => {
    data.map((data => {
        let bar = document.getElementById(data.day + "_bar");
        console.log(bar);
        if (data.day != null) {
            bar === null || bar === void 0 ? void 0 : bar.style.height = data.amount * 3 + "px";
        }
    }));
    let totalValue = data[0].amount + data[1].amount + data[2].amount + data[3].amount + data[4].amount + data[5].amount + data[6].amount;
    totalValueDisplayed.innerHTML = "$" + totalValue.toFixed(2);
    let currentDay = new Date();
    const days = [mon, tue, wed, thu, fri, sat, sun];
    days[currentDay.getDay() - 1].style.background = "hsl(186, 34%, 60%)";
    days.forEach(function (element) {
        element.addEventListener("mouseover", (event) => {
            event.target.style.opacity = 0.6;
            event.target.before(visualPrice);
            let numb = (event.target.style.height).slice(0, 5) / 3;
            visualPrice.innerHTML = "$" + numb.toFixed(2);
            visualPrice.classList.add("amount_container");
        });
        element.addEventListener("mouseout", (event) => {
            event.target.style.opacity = 1;
            visualPrice.classList.remove("amount_container");
            visualPrice.remove();
        });
    });
});

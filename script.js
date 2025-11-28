//your code here
let add = document.getElementById("add");
let total = document.getElementById("total");
let item_name_input = document.getElementById("item-name-input");
let item_price_input = document.getElementById("item-price-input");
let listBody = document.getElementById("list-body");

let sum = 0;

add.addEventListener("click",()=>{
	let name = item_name_input.value;
	let price = item_price_input.value;

	let tr = document.createElement("tr");
    tr.setAttribute("aria-role", "row");

    let tdItem = document.createElement("td");
    tdItem.textContent = name;
    tdItem.setAttribute("aria-role", "cell");

    let tdPrice = document.createElement("td");
    tdPrice.textContent = price;
    tdPrice.setAttribute("aria-role", "cell");

    tr.appendChild(tdItem);
    tr.appendChild(tdPrice);

    listBody.appendChild(tr);
	
	total.textContent = sum += Number(price);
	item_name_input.value = "";
	item_price_input.value = "";
	
})

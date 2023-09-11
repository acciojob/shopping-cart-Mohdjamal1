//your code here
let inpName = document.getElementById('item-name-input');
let inpQty = document.getElementById('item-qty-input');
let inpPrice = document.getElementById('item-price-input');
let tbody = document.getElementById('tbody');
let total = document.getElementById('priceT');
let itemList = [];
let totalPrice = 0;
let addbtn = document.getElementById('add');
addbtn.addEventListener('click', ()=> {
	if(inpName.value !== "" && inpQty !== ""){
	let obj = {item:`${inpName.value}`,qty:`${inpQty.value}`,price:inpPrice.value}
		totalPrice += Number(inpPrice.value);
		total.innerText = `Total Price: ${totalPrice}`;
	itemList.push(obj);
	inpName.value =""; 
	inpQty.value =""; 
	inpPrice.value ="";
	tbody.innerHTML = '';
	itemList.forEach((emp)=>{
	let tr = document.createElement('tr');
	tr.innerHTML = `<td id='item'>${emp.item}</td>
			 <td id='qtyy'>${emp.qty}</td>
			<td id='price'>${emp.price}</td>`
		tbody.append(tr);
	})
	}
})

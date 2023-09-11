//your code here
let inpName = document.getElementById('item-name-input');
let inpPrice = document.getElementById('item-qty-input');
let tbody = document.getElementById('tbody');
let total = document.getElementById('priceT');
let itemList = [];
let totalPrice = 0;
let addbtn = document.getElementById('add');
addbtn.addEventListener('click', ()=> {
	if(inpName.value !== "" && inpPrice !== 0){
	let obj = {item:`${inpName.value}`,price:inpPrice.value}
		totalPrice += Number(inpPrice.value);
		total.innerText = `Total: ${totalPrice}`;
	itemList.push(obj);
	inpName.value =""; 
	inpPrice.value ="";
	tbody.innerHTML = '';
	itemList.forEach((emp)=>{
	let tr = document.createElement('tr');
	tr.innerHTML = `<td id='item'>${emp.item}</td>
			<td id='price'>${emp.price}</td>`
		tbody.append(tr);
	})
	}
})

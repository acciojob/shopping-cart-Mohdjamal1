//your code here
let inpName = document.getElementById('item-name-input');
let inpPrice = document.getElementById('item-price-input');
let tbody = document.getElementById('tbody');
let itemList = [];
let addbtn = document.getElementById('add');
addbtn.addEventListener('click', ()=> {
	let obj = {item:`${inpName.value}`,price:inpPrice.value}
	itemList.push(obj);
	inpName.value ="";
	inpPrice.value ="";
	tbody.innerHTML = '';
	itemList.forEach((emp)=>{
	let tr = document.createElement('tr');
	tr.innerHTML = `<td>${emp.item}</td>
			<td>${emp.price}</td>`
		tbody.append(tr);
	})
})

//your code here
let inpName = document.getElementById('item-name-input');
let inpPrice = document.getElementById('item-price-input');
let h3 = document.getElementById('hh');
let itemList = [{item:'',price:0}]
let addbtn = document.getElementById('add');
addbtn.addEventListener('click', function() {
	itemList.item.push(inpName.value);
	itemList.price.push(Number(inpPrice.value));
	h3.innerText = itemList[0].item;
})

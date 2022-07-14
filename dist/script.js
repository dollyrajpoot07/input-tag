const input = document.getElementById('yourInput');
var listArray = [];
input.addEventListener("keyup", function(e) {
	if(e.keyCode === 13) {
		let inValue = e.target.value;
		listArray.push(inValue.replace(/\s/g,''));
		var newTagList = '';
		listArray.forEach(function(element, index) {
			newTagList += `<span>#${element}<i class = "fa fa-times" onclick = "dlt(${index})"></i></span>`;
		});
		document.querySelector(".tag").innerHTML = newTagList;
		input.value = '';
	}
});

function dlt(index) {
	listArray.splice(index, 1);
	var newTagList = '';
	listArray.forEach(element, index) => {
		newTagList += `<span>#${element}<i class = "fa fa-times" onclick = "dlt(${index})"></i></span>`;
	});
	document.querySelector('.tag').innerHTML = newTagList;
}
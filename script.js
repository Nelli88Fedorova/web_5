function count() 
{	let f1 = document.getElementsByName("val1");
	let f2 = document.getElementsByName("val2");
	let r = document.getElementById("result");	
    r.innerHTML = Number(f1[0].value) * Number(f2[0].value);
	alert("Итого: "+Number(f1[0].value) * Number(f2[0].value)+" рублей");
	return false;
}
	window.addEventListener('DOMContentLoaded', function (event) 
	{
		let b = document.getElementById("butt");
		b.addEventListener("click", count);
});



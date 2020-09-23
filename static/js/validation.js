const purchaseBtn = document.querySelector("button");
const itemName = document.querySelector("#item-name");
const customerName = document.querySelector("#customer-name");
const qty = document.querySelector("#qty");
const email = document.querySelector("#e-mail");
const error = document.querySelector("#error");

const nameRE = /\d/
const emailRE = /\S+@\S+\.\S+/

purchaseBtn.addEventListener
(
	"click",
	(e) =>
	{
		e.preventDefault();

		if(itemName.value === "" || customerName.value === "" || qty.value === "" || email.value === "")
			error.innerHTML = "Compulsory fields (<sup>*</sup>) cannot be empty...";

		else if(itemName.value.length < 2 || customerName.value.length < 2)
			error.innerText = "Name has to be more than 1 character in length...";

		else if(nameRE.test(name.value))
			error.innerText = "Numbers are not allowed in name...";

		else if(qty.value <= 0)
			error.innerText = "Quantity cannot be less than or equal to zero...";

		else if(!emailRE.test(email.value))
			error.innerText = "Please enter a correct e-mail ID...";
	}
);
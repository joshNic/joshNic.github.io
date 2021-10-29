let calcTip = () => {
  let subtotal = document.getElementById("subtotal").value;
  let tip = document.getElementById("tip").value / 100;
  let actualTip = subtotal * tip;
  document.getElementById("total").innerHTML = `$${actualTip}`;
};

var accountInfo = [];
var myCunc = (function () {
  function Account(accountName, balance) {
    this.accountName = accountName;
    this.balance = balance;
  }

  return {
    populateAccountInfo: () => {
      var name = document.getElementById("accountName").value;
      var balance = document.getElementById("depositAmount").value;
      accountInfo.push(new Account(name, balance));

      var display = "";

      accountInfo.forEach((eleme) => {
        display = display.concat(
          `Account name: ` +
            `${eleme.accountName}` +
            ` Balance: ` +
            `${eleme.balance}` +
            `\n`
        );
      });
      document.getElementById("display").innerHTML = display;
      document.getElementById("accountName").value = "";
      document.getElementById("depositAmount").value = "";
    },
  };
})();

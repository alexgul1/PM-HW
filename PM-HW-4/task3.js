function getMonth(ans) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  if (!isNaN(Number(ans))) {
    ans = Number(ans);
  }

  switch (typeof ans) {
    case "string":
      return months.indexOf(ans) + 1;
    case "number":
      return months[ans - 1];
  }
}

let month = prompt("Enter value:")
alert(getMonth(month))
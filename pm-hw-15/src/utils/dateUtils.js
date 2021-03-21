const monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const dateFormat = (date) => {
  const dateObj = new Date(date);

  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();

  return `${monthsArr[month]} ${year}`;
}

const sortByDate = (a, b) => {
  return new Date(b.startDate) - new Date(a.startDate);
}

export {dateFormat, sortByDate};

function ageCalculate() {
  let inputDate = new Date(document.getElementById('date-input').value);
  let birthMonth, birthDate, birthYear;
  let birthDetails = {
    date: inputDate.getDate(),
    month: inputDate.getMonth() + 1,
    year: inputDate.getFullYear,
  };
  let today = new Date();
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth();
  let currentDate = today.getDate();
  if (
      birthDetails.year > currentYear ||
      ()
  )
}

// imi formatez data primita de la API-ul Guardian in formatul dorit
export function getFormatedDate(dateString) {
  const currentDate = new Date(dateString);
  let month = currentDate.getMonth();
  month = month + 1;
  let day = currentDate.getDate();
  let year = currentDate.getFullYear();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return `${day}/${month}/${year}`;
}

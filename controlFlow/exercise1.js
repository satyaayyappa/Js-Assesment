//part-1
function businessHours(dayNumber, hourNumber) {
    if (dayNumber >= 1 && dayNumber <= 5) { // Monday to Friday
      if (hourNumber >= 9 && hourNumber < 18) { // 9am to 5:59pm
        console.log("It is business hours.");
        return true;
      }
    }
    console.log("It is not business hours.");
    return false;
  }
businessHours(4,14);

  //part-2
  function getDayNumber(janFirstDayNumber, yearDayNumber) {
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayIndex = (janFirstDayNumber + yearDayNumber) % 7;
    return weekDays[dayIndex];

  }
  

  //part-3
  function isBusinessHours(date) {
    const dayNumber = date.getDay(); // Sunday: 0, Monday: 1, etc.
    const hourNumber = date.getHours();
    if (dayNumber >= 1 && dayNumber <= 5) { // Monday to Friday
      if (hourNumber >= 9 && hourNumber < 18) { // 9am to 5:59pm
        console.log("It is business hours.");
        return true;
      }
    }
    console.log("It is not business hours.");
    return false;
  }

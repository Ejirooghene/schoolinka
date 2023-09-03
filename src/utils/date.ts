export const getMonthAndYear = (): string => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const currentDate = new Date();
    const currentMonth = months[currentDate.getMonth()];
    const currentYear = currentDate.getFullYear();

    return `${currentMonth} ${currentYear}`;
}

export const getCurrentDay = () => {
    const currentDate = new Date();
    return currentDate.getDate();
}

export const getDatesAndDaysOfWeekInCurrentMonth = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
  
    // Create a date object for the first day of the current month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  
    // Determine the day of the week for the first day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const firstDayOfWeek = firstDayOfMonth.getDay();
  
    // Get the total number of days in the current month
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const totalDaysInMonth = lastDayOfMonth.getDate();
  
    // Create an array to store date and day of the week objects
    const datesAndDaysOfWeek = [];
  
    // Fill in the date and day of the week objects for the current month
    for (let day = 1; day <= totalDaysInMonth; day++) {
      const dayOfWeek = (firstDayOfWeek + day - 1) % 7; // Calculate the day of the week
      const dateAndDayOfWeek = {
        date: day,
        dayOfWeek: getDayOfWeekName(dayOfWeek), // Convert day of the week number to name
      };
      datesAndDaysOfWeek.push(dateAndDayOfWeek); // Store the object in the array
    }
  
    return datesAndDaysOfWeek;
}
  
const getDayOfWeekName = (dayOfWeek: number) => {
    const daysOfWeekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeekNames[dayOfWeek];
}

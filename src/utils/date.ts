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

export const getToday = (_date: string): string => {

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const targetDate = new Date(_date);
    const date: string = String(targetDate.getDate());
    const month: number = targetDate.getMonth();
    const year: number = targetDate.getFullYear();
    return `${date}${date.endsWith('1') && date !== '11' ? 'st' : date.endsWith('2') && date !== '12' ? 'nd' : date.endsWith('3') && date !== '13' ? 'rd' : 'th'} ${months[month]} ${year}`
    // const month = targetDate.getMonth() + 1;
    // const date = targetDate.getDate();
    // const year = targetDate.getFullYear();
    // return `${month} ${date} ${year}`;
}

export const getDatesAndDaysOfWeekInCurrentMonth = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
  
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const totalDaysInMonth = lastDayOfMonth.getDate();
    const datesAndDaysOfWeek = [];
  
    for (let day = 1; day <= totalDaysInMonth; day++) {
        const dayOfWeek = (firstDayOfWeek + day - 1) % 7; 
        const dateAndDayOfWeek = {
            date: day,
            dayOfWeek: getDayOfWeekName(dayOfWeek), 
        };
        datesAndDaysOfWeek.push(dateAndDayOfWeek); 
    }
  
    return datesAndDaysOfWeek;
}
  
const getDayOfWeekName = (dayOfWeek: number) => {
    const daysOfWeekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeekNames[dayOfWeek];
}

const momentHelper = (day: string, duration: string, diff: number) => {
    const absDiff = Math.abs(diff);

    if (absDiff === 1) {
        return day;
    } else if (absDiff < 7) {
        return `${absDiff}d ${duration}`;
    } else {
        return `${Math.floor(absDiff / 7)}w ago`;
    }
}

export const moment = (_date: string): string => {
    const date: number = new Date(_date).getTime();
    const currentDate: number = new Date().getTime();

    const diff: number = Math.ceil((date - currentDate) / (1000 * 60 * 60 * 24));

    if (diff < 0) {
        return momentHelper('Yesterday', 'ago', diff);
    } else if (diff > 0) {
        return momentHelper('Today', 'from now', diff);
    } else {
        return 'Today'
    }
};

export const strikeThroughReminder = (_date: string | undefined, _time: string): boolean => {
    if(!_date) return false;
    const currentDate: any = new Date();

    const [hours, minutes] = _time.split(':').map(Number);

    const [year, month, day] = _date.split('/').map(Number);

    const targetDateTime: any = new Date(year, month - 1, day, hours, minutes); 
    const diff = Math.ceil((targetDateTime - currentDate) / (1000 * 60));
    if(diff < 10){
        return true;
    }

    return false;
}
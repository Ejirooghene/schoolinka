import React, { FC } from 'react';
import { Container, Date } from './calender.style';
import { getMonthAndYear, getCurrentDay, getDatesAndDaysOfWeekInCurrentMonth } from '../../utils/date';

const Calendar = () => {
    const days = getDatesAndDaysOfWeekInCurrentMonth();
    return (
        <Container>
            <h2>{getMonthAndYear()}</h2>
            <div>
                {
                    days.map((day: any) => (
                        <Date current={getCurrentDay() === day.date}>
                            <p>{day.dayOfWeek}</p>
                            <p>{day.date}</p>
                        </Date> 
                    ))
                }
            </div>
        </Container>
    )
}

export default Calendar;
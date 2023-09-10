import React, { FC, useRef, useLayoutEffect, useState } from 'react';
import { Container, Date } from './calender.style';
import { getMonthAndYear, getCurrentDay, getDatesAndDaysOfWeekInCurrentMonth } from '../../utils/date';

const Calendar: FC = () => {
    const days = getDatesAndDaysOfWeekInCurrentMonth();
    const dateRef = useRef<HTMLDivElement | null>(null); 
    const containerRef = useRef<HTMLDivElement | null>(null); 
    const [x, setX] = useState(null);

    window.onload = () => {
        // This code will run after all assets have loaded
        if (dateRef.current && containerRef.current) {
            const rect = dateRef.current.getBoundingClientRect();
            // Scroll to the left
            containerRef.current.scrollLeft = rect.left - 20;
        }
    };
    
    return (
        <Container> 
            <h2>{getMonthAndYear()}</h2>  
            <div ref={containerRef}> 
                {days.map((day: any) => (  
                    <Date key={day.date} current={getCurrentDay() === day.date} ref={(getCurrentDay() - 2) === day.date ? dateRef : null}> 
                        <p>{day.dayOfWeek}</p>
                        <p>{day.date}</p>
                    </Date>
                ))}
            </div>
        </Container>
    );
};

export default Calendar;

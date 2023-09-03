import React, { FC } from 'react';
import { Container, Date } from './calender.style';

const Calendar = () => {
    return (
        <Container>
            <h2>January 2023</h2>
            <div>
                <Date>
                    <p>Mon</p>
                    <p>1</p>
                </Date>
                <Date>
                    <p>Tue</p>
                    <p>2</p>
                </Date>
            </div>
        </Container>
    )
}

export default Calendar;
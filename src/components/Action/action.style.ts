import styled from 'styled-components';

type ReminderProp = {
    strikeReminder: boolean;
}


export const Container = styled.div`
    width: 100%;
    min-height: 50vh;
    background-color: #FFF;
    padding: 20px;
    border-radius: 30px 30px 0 0;
    position: absolute; 
    bottom: 0;
    z-index: 2;

    & .date {
        display: none;
    }

    @media (min-width: 768px){
        padding: 10px;
        border-radius: 10px;
        position: relative;
        border: 1px solid #F2F4F7;
        box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08);

        & .date {
            width: 100%;
            height: 100%;
            background-color: #fff;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 10px;
        }
    }
`

export const TextInput = styled.textarea`
    width: 100%;
    border-radius: 8px;
    background: #F9FAFB;
    border: 1px solid #D0D5DD;
    color: #667085;
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    padding: 20px;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    resize: none;
`

export const Reminder = styled.div<ReminderProp>`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        align-items: center;

        p {
            color: #667085;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            margin-left: 5px;
            text-decoration: ${prop => prop.strikeReminder ? 'line-through' : 'none'};
        }
    }

    & > img {
        cursor: pointer;
    }
`

export const DateTime = styled.div` 
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin: 15px 0;

    div {
        display: flex;
        padding: 10px 10px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border-radius: 8px;
        border: 1px solid #D0D5DD;
        background: #FFF;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
        cursor: pointer;

        p {
            color: var(--gray-500, #667085);
            font-family: Work Sans;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: 20px; 
        }
    }
`

export const Task = styled.div`
    color: #272727;
    font-family: Work Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 20px;
`

export const Date = styled.div`
    display: flex;
    align-items: center;

    p {
        color: #272727;
        font-family: Work Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        margin-left: 10px;
    }
`

export const Time = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;

    p {
        color: #272727;
        font-family: Work Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        margin-left: 10px;
    }
`
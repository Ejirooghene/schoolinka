import styled from 'styled-components';


export const Modal = styled.div`
    width: 100%;
    minHeight: 50vh;
    background-color: #FFF;
    padding: 20px;
    border-radius: 30px  30px 0 0;
    position: absolute; 
    bottom: 0;
`

export const TextInput = styled.textarea`
    width: 100%;
    border-radius: 8px;
    background: #F9FAFB;
    border: 1px solid #D0D5DD;
    padding: 20px;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    resize: none;
`

export const Reminder = styled.div`
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
            margin-left: 20px;
        }
    }
`

export const DateTime = styled.div` 
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin: 15px 0;

    div {
        display: flex;
        padding: 10px 16px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border-radius: 8px;
        border: 1px solid #D0D5DD;
        background: #FFF;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

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
    font-family: Satoshi;
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
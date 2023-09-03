import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

export const Modal = styled.div`
    width: 100%;
    minHeight: 50vh;
    background-color: #FFF;
    padding: 20px;
    border-radius: 30px  30px 0 0;
    position: absolute; 
    bottom: 0;
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    h2 {
        color: #101828;
        font-family: Work Sans;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px;
    }
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

export const BtnGroup = styled.div`
    display: flex;
    gap: 40px;
    margin-top: 30px;

    div {
        display: flex;
        padding: 10px 18px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        flex: 1 0 0;
        border-radius: 8px;

        p {
            font-family: Work Sans;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
        }
    }

`

export const BtnCancel = styled.div`
    border: 1px solid #D0D5DD;
    background: #FFF;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

    p {
        color: #344054;
    }

`

export const BtnAdd = styled.div`
    border: 1px solid #3F5BF6;
    background: #3F5BF6;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

    p {
        color: #fff;
    }
`

export const DateTime = styled.div` 
    display: flex;
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
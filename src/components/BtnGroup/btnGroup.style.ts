import styled from 'styled-components';

export const Container = styled.div`
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

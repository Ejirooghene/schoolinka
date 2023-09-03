import styled from 'styled-components';

export const Container = styled.section`
    margin: 40px 0;

    h2 {
        color: #101828;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px;
        margin: 20px 0 10px 0;
    }

    div {
        display: flex;
        gap: 10px;
    }
`

export const Date = styled.div`
    display: flex;
    width: 49.37px;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    padding: 7.963px 12.741px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6.37px;
    border-radius: 6.37px;
    border: 0.796px solid #D0D5DD;
    background: #FFF;
    box-shadow: 0px 0.7963px 1.59259px 0px rgba(16, 24, 40, 0.05);

    &:nth-child(2){
        display: flex;
        width: 49.37px;
        padding: 7.963px 12.741px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 6.37px;
        border-radius: 6.37px;
        border: 0.796px solid #3F5BF6;
        background: #3F5BF6;
        box-shadow: 0px 0.7963px 1.59259px 0px rgba(16, 24, 40, 0.05);
        color: #fff;
    }
` 
import styled from 'styled-components';

interface DateProps {
    current: boolean;
}

export const Container = styled.section`
    margin: 20px 0;
    
    h2 {
        color: #101828;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px;
        margin: 20px 0 10px 0;
    }

    & > div {
        overflow-x: scroll;

        &::-webkit-scrollbar {
            width: 0.1rem;
        }
    }
    
    div {
        display: flex;
        gap: 10px;
    }
`

export const Date = styled.div<DateProps>`
    display: flex;
    width: 49.37px;
    color: ${(prop) => prop.current ? '#fff' : '#000'};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    padding: 7.963px 26px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6.37px;
    border-radius: 6.37px;
    border: 0.796px solid ${(prop) => prop.current ? '#3F5BF6' : '#D0D5DD'} ;
    background: ${(prop) => prop.current ? '#3F5BF6' : '#fff'};
    box-shadow: 0px 0.7963px 1.59259px 0px rgba(16, 24, 40, 0.05);
` 
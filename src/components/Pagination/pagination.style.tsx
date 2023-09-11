import styled from 'styled-components';

type PageBtnProp = {
    focused: boolean;
}

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    & > main {
        display: flex;
        align-items: center;
        gap: 5px;

        @media (min-width: 768px){
            gap: 10px;
        }
    }

`

export const PageBtn = styled.span<PageBtnProp>`
    display: flex;
    width: 20px;
    height: 20px;
    background-color: ${(prop) => prop.focused ? '#EAEDFE' : 'transparent'};
    justify-content: center;
    align-items: center;
    color: #475467;
    text-align: center;
    font-family: Work Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; 
    border-radius: 50%;
    cursor: pointer;

    @media (min-width: 768px){
        font-size: 14px;
    }
`

export const Btn = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    color: #475467;
    font-family: Work Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; 
    cursor: pointer;

    
`
import styled from 'styled-components';

interface TaskProps {
  completed: boolean;
  focused: boolean;
}

export const Container = styled.div`
    height: 100vh;
    // display: flex;
    // flex-direction: column;
    position: relative;
`

export const Body = styled.div`
    height: calc(100vh - 190px);
    padding: 0 20px;
    display: flex;
    flex-direction: column;

    @media (min-width: var(--mobile)){
       display: none;
    }
`

export const Greeting = styled.p`
    color: #101828;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    margin: 20px 0 0 0;
`

export const SubText = styled.p`
    color: #475567;
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
`

export const Tasks = styled.section`
    // flex-grow: 1;
    padding-bottom: 30px;
    overflow-y: scroll;

    // & > div {
    //     height: 70px;

        &::-webkit-scrollbar {
            width: 0.1rem;
        }
    }

    h2 {
        color: #101828;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px;
        margin: 0 0 20px 0;
    }
`
export const Task = styled.div<TaskProps>` 
    height: 72px;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(prop) => prop.focused ? '#EAEDFE' : '#f9fafb'};
    // background-color: #f9fafb;
    margin-top: 10px;
    border-bottom: 2px solid #EAECF0;
    cursor: pointer;

    & > div { 
        display: flex;
        align-items: center;

        div {
            margin-left: 10px;

            &:last-child {
                color: ${(prop) => prop.completed ? '#D0D5DD' : '#475467'};
                text-decoration: ${(prop) => prop.completed ? 'line-through' : 'none'};
            }
        }
    }

    h4 {
        font-family: 'Work Sans', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;
        transition: transform 0.1s ease;
        transform: ${(prop) => prop.focused ? 'scaleY(1.1)' : 'scaleY(1)'};
        transform-origin: left bottom;
    }

    p {
        font-family: Work Sans;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        text-style: underline;
    }
`

export const Footer = styled.footer`
    height: 120px;
    background-color: #fff;
    padding: 20px;

    @media (min-width: var(--mobile)){
        display: none;
    }
`

export const Input = styled.div`
    height: 48px;
    display: flex;
    justify-content: space-between;
    color: #475467;
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    padding: 8px 12px;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    border: 1px solid #D0D5DD;
    background: #F9FAFB;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
`
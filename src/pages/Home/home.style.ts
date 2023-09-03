import styled from 'styled-components';

interface TaskProps {
  completed: boolean;
  focused: boolean;
}

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const Body = styled.div`
    flex: 3;
    padding: 0 20px;
`

export const Greeting = styled.p`
    color: #101828;
    font-family: Inter;
    font-size: 30px;
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
    line-height: 24px;
`

export const Tasks = styled.section`

    & > div {
        height: 200px;
        padding-bottom: 30px;
        overflow-y: scroll;

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
        margin: 20px 0 20px 0;
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
    flex: 1;
    background-color: #fff;
    padding: 30px 20px 10px 20px;
    // margin-top: 30px;
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
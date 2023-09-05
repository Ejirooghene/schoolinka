import styled from 'styled-components';

interface MenuProps {
    showMenu: boolean;
}

export const Container = styled.header`
    flex: none;
    height: 70px;
    display: flex;
    border-bottom: 1px solid #EAECF0;

    & > div:first-child {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
    }
`

export const Menu = styled.div<MenuProps>`
    height: 100%;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    background-color: #fff; 
    padding: 30px 40px;
    position: absolute;
    top: 71px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;

    & div {
        display: flex;

        & > p {
            margin-left:10px;
            color: #667085;
            font-family: Work Sans;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
        }
    }
`

export const Logo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoText = styled.h1`
    color: #000000;
    padding-left: 10px;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
`

export const Profile = styled.div`
    margin-bottom: 60px;

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 20px;

        & > h6 {
            color: #101828;
            font-family: Work Sans;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
        }

        & > p {
            color: #101828;
            font-family: Work Sans;
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
        }
    }
`

export const Notification = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    & span {
        width: 20px;
        height: 20px;
        background-color: red;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }
`
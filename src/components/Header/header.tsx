import React, { FC } from 'react';
import { Container, Logo, LogoText } from './header.style';

const Header = () => {
    return (
        <Container>
            <Logo>
                <img src='svgs/logo.svg' width='30px' height='30px' />
                <LogoText>ToDo</LogoText>
            </Logo>
            <img src='svgs/menu.svg' width='20px' height='20px' />
        </Container>
    )
}

export default Header;
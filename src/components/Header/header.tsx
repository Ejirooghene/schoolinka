import React, { FC, useState } from 'react';
import { Container, Logo, LogoText, Menu, Profile, Notification } from './header.style';

const Header = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <Container>
            <div>
                <Logo>
                    <img src='svgs/logo.svg' width='30px' height='30px' />
                    <LogoText>ToDo</LogoText>
                </Logo>
                <img src={`svgs/${showMenu ? 'close' : 'menu'}.svg`} width='20px' height='20px' onClick={() => setShowMenu(!showMenu)} />
            </div>
            {   
                showMenu && <Menu showMenu={showMenu}>
                    <Profile>
                        <img src='svgs/avatar.svg' width='80px' height='80px' />
                        <div>
                            <h6>Linda Yaccarino</h6>
                            <p>Twitter CEO</p>
                        </div>
                    </Profile>
                    <div>
                        <img src='svgs/settings.svg' width='30px' height='30px' />
                        <p>Settings</p>
                    </div>
                    <Notification>
                        <div>
                            <img src='svgs/bell-outline.svg' width='30px' height='30px' />
                            <p>Notifications</p>
                        </div>
                        <span>7</span>
                    </Notification>
                </Menu> 
            }
        </Container>
    )
}

export default Header;
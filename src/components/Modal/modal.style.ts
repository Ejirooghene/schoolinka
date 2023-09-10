import styled from 'styled-components';

interface ContainerProps   {
  visible: boolean;
  isDefault: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: ${(prop) => prop.visible ? 'flex' : 'none'};
    align-items: center;
    height: 100% ;
    background-color: ${prop => prop.isDefault ? 'rgba(0,0,0,0.5)' : '#fff'};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
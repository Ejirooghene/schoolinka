import styled from 'styled-components';
import React from 'react';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean;
}

export const Container = styled.div`
    display: ${(prop) => prop.visible ? 'block' : 'none'};
    height: 100% ;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
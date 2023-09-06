import React from 'react';
import Home from './pages/Home/home';
import GlobalStyle from './global.styles';
import TaskParent from './hooks/useTask';
import ActionParent from './hooks/useAction';
import ModalParent from './hooks/useModal'; 

function App() {
  return (
    <>
      <GlobalStyle />
      <ModalParent> 
        <TaskParent>
          <ActionParent>
              <Home />
          </ActionParent>
        </TaskParent>
      </ModalParent>
    </>
  );
}

export default App;

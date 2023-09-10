import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Home from './pages/Home/home';
import GlobalStyle from './global.styles';
import TaskParent from './hooks/useTask';
import ActionParent from './hooks/useAction';
import ModalParent from './hooks/useModal'; 


function App() {
  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <GlobalStyle />
      <ModalParent> 
        <TaskParent>
          <ActionParent>
              <Home />
          </ActionParent>
        </TaskParent>
      </ModalParent>
    </LocalizationProvider>
    </>
  );
}

export default App;

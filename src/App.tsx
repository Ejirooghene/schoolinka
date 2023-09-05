import React from 'react';
import Home from './pages/Home/home';
import GlobalStyle from './global.styles';
import TaskParent from './hooks/useTask';
import ActionParent from './hooks/useAction'

function App() {
return (
  <>
    <GlobalStyle />
    <TaskParent>
      <ActionParent>
        <Home />
      </ActionParent>
    </TaskParent>
  </>
  );
}

export default App;
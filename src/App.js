import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './lib/theme.js';
import { Home } from './sections';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        {/* <Header /> */}
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;

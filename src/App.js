import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './lib/theme.js';

import { Header } from './sections';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Header />
        The Underground Dance Centre
      </div>
    </ThemeProvider>
  );
}

export default App;

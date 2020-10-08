import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from '../src/components/GlobalStyles';
import '../src/mixins/chartjs';
import theme from '../src/theme';
import routes from '../src/routes';
import routes2 from '../src/routes2';

const App = () => {
  const routing = useRoutes(routes2);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
}

export default App;

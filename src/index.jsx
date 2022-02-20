import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import Home from './features/home/Home';
import Quotes from './features/quotes/Quotes';
import SingleQuotePage from './features/quotes/SingleQuotePage';
import Characters from './features/characters/Characters';
import SingleCharacterPage from './features/characters/SingleCharacterPage';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="/quotes" element={<Quotes />} />
              <Route path="/quotes/:quoteQuery" element={<SingleQuotePage />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/characters/:characterName" element={<SingleCharacterPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

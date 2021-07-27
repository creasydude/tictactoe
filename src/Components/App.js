import { Fragment, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Storage from 'local-storage-fallback';
import styled, { ThemeProvider } from 'styled-components';

//Components
import Game from './Game';
import MainPage from './MainPage';
import Header from './Header';
import Footer from './Footer';

const darkThemeColors = {
  bgColor: "#393E46",
  hfbSection: "#222831",
  hfbTxtColor: "#EEEEEE",
  mainSectionTxtColor: "#FFD369",
  selection: "#606366",
  selectionTxtColor: "#FFF",
}

const lightThemeColors = {
  bgColor: "#FAFAF6",
  hfbSection: "#3D6CB9",
  hfbTxtColor: "#FFFFFF",
  mainSectionTxtColor: "#000000",
  selection: "#AACAFF",
  selectionTxtColor: "#000",

}


const themeProvider = {
  dark: darkThemeColors,
  light: lightThemeColors,
}

const Btn = styled.button`
  
`;

function App() {

  const initialThemeHandler = () => {
    const savedTheme = Storage.getItem('theme-mode')
    return savedTheme ? savedTheme : "light"
  }
  const [theme, setTheme] = useState(initialThemeHandler);
  useEffect(() => {
    Storage.setItem('theme-mode', theme)
  }, [theme])

  const themeHandler = () => {
    setTheme(theme === 'dark' ? "light" : 'dark')
  }

  return (
    <Fragment>
      <ThemeProvider theme={themeProvider[theme]}>
        <Header theme={theme} themeHandler={themeHandler} />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/game">
          <Game />
        </Route>
      </Switch>
      <Footer />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;

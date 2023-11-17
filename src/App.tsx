import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Planets from "./Components/Planets";
import Favorites from "./Components/Favorites";
import NavBar from "./Components/NavBar";
import GlobalStyles from "./Components/styles/Global";
import { StyledAppContainer } from "./Components/styles/AppContainer.styled";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    darkBlue: "#154064",
    darkBlue2: "#1C5686",
    grey: "#E0E0E0",
    greyMedium: "#828282",
    greyDark: "#333333",
    pink: "#F2D7D7",
    red: "#BE2F2F",
    yellow: "#E4D237",
    greyLight: "#F2F2F2",
    white: "#FFFFFF",
  },
};
//background-color: ${({ theme }) => theme.colors.header};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <StyledAppContainer>
          <NavBar />
          <Routes>
            <Route path="planets" element={<Planets />} />
            <Route path="planets/:planetId" element={<Planets />} />
            <Route path="favorites" element={<Favorites />} />
          </Routes>
        </StyledAppContainer>
      </Router>
    </ThemeProvider>
  );
};

export default App;

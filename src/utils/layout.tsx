
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";

import { theme } from "../styles/theme";
import Banners from "../banners";
import Contact from "../banners/contact/contact";

const MainLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <header></header>
      <main>
        <Banners />
      </main>
      <footer><Contact/></footer>
    </ThemeProvider>
  );
};

export default MainLayout;

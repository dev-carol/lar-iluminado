
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";

import { theme } from "../styles/theme";
import Banners from "../banners";

const MainLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <header></header>
      <main>
        <Banners />
      </main>
      <footer></footer>
    </ThemeProvider>
  );
};

export default MainLayout;

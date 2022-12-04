import { ThemeProvider } from 'styled-components';
import Navigation from './components/Navigation';
import GLobalStyles from './styles/GlobalStyles';
import {light} from "./styles/Themes";

import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Roadmap from "./components/sections/Roadmap";
import Showcase from "./components/sections/Showcase";
import Faq from "./components/sections/Faq";
import Team from "./components/sections/Team";
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <>
    <GLobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap /> 
        <Showcase />
        <Team />
        <Faq />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

export default App;

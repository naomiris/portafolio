import SideBar from "./Components/SideBar";
import styled from "styled-components";
import HomePage from "./Pages/HomePaje";
import ContactPage from './Pages/ContactPage'
import PortfoliosPage from './Pages/PortfolioPage'
import ResumePage from './Pages/ResumePage'
import AboutPage from './Pages/AboutPage'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SideBar />
      <MainContentStyled className="main-content">
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route exact path="/about" element={<AboutPage />} />

        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/portfolios" element={<PortfoliosPage />} />

        <Route exact path="/resume" element={<ResumePage />} />
        </Routes>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  .lines {
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;

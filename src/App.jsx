import "./App.scss";

import Header from "./components/Header/Header";
import Tickets from "./components/Tickets/Tickets";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import Canvas from "./components/Canvas/Canvas";

import team from "./assets/data/team";

function App() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <>
      <Header />
      <Tickets teamData={team} />
      <Background />
      <Footer />
      <Canvas width={width} height={height} />
    </>
  );
}

export default App;

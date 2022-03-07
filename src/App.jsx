import "./App.scss";
import Header from "./components/Header/Header";
import Tickets from "./components/Tickets/Tickets";
import team from "./assets/data/team";

function App() {
  return (
    <>
      <Header />
      <Tickets teamData={team} />
    </>
  );
}

export default App;

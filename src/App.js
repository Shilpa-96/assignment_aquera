import "./App.css";
import PlanetsCard from "./components/PlanetsCard";
import PlanetsDirectory from "./components/PlanetsDirectory";

function App() {
  const quantity = 15;

  const renderFireflies = () => {
    const fireflies = [];
    for (let i = 1; i <= quantity; i++) {
      fireflies.push(
        <div key={i} className={`firefly move${i}`}>
          <div className="before"></div>
          <div className="after"></div>
        </div>
      );
    }
    return fireflies;
  };

  return (
    <>
      {renderFireflies()}
      <h1>Star war plnets </h1>
      <PlanetsDirectory />
    </>
  );
}

export default App;

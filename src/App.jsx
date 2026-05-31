import NavigationBar from "./components/NavigationBar";
import About from "./components/About";
import Education from "./components/Education";

function App() {
  return (
    <>
      <NavigationBar />
      <main>
        <About />
        <Education />
      </main>
    </>
  );
}

export default App;
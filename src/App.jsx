import NavigationBar from "./components/NavigationBar";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <NavigationBar />
      <main>
        <About />
        <Education />
        <Experience />
      </main>
    </>
  );
}

export default App;
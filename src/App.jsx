import NavigationBar from "./components/NavigationBar";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <NavigationBar />
      <main>
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
      </main>
    </>
  );
}

export default App;
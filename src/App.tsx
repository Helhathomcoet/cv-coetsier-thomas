import './App.scss'
import NavBar from './components/NavBar'
import MainDescription from './components/MainDescription'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <section id="Accueil" >
        <MainDescription></MainDescription>
      </section>
      <section id="Projets">
        <Projects ></Projects>
      </section>
      <section id="Présentation">
        <AboutMe></AboutMe>
      </section>
      <section id="Contact">
        <Footer></Footer>
      </section>

    </>
  )
}

export default App

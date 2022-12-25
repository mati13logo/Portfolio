import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Experience from './components/experience/Experience.jsx'
import Footer from './components/footer/Footer.jsx'





function App() {
  return (
    <>
        <Header />
        <Nav/>
        <About/>
        {/* <Portfolio/> */}
        <Experience/>
        <Contact/>
        <Footer />
    </>
  )
}

export default App

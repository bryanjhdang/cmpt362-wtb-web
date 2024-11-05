import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Downloads from './components/Downloads'
import Videos from './components/Videos'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <section id="Hero"><Hero /></section>
      <section id="Downloads"><Downloads /></section>
      <section id="Videos"><Videos /></section>
      <section id="Team"><Team /></section>
      <Footer />
    </>
  );
}

export default App

import {
  Contact,
  FooterNav,
  Hero,
  Naviagtion,
  Services,
  WhyUs,
} from './sections'

function App() {
  return (
    <>
      <header>
        <Naviagtion />
      </header>
      <main className='pt-[4.5rem]'>
        <Hero />
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <footer>
        <FooterNav />
      </footer>
    </>
  )
}

export default App

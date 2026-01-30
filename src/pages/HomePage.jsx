import {
  Hero,
  ScrollSections,
  Pricing,
  Modules,
  About,
  Contact
} from '../components/sections'

const HomePage = () => {
  return (
    <main className="relative z-10 bg-white mb-[100vh]">
      <Hero />
      <ScrollSections />
      <Pricing />
      {/* <Modules />
      <About /> */}
      {/* <Contact /> */}
    </main>
  )
}

export default HomePage

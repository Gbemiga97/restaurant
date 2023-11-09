import { About, Footer, Header, Hero, Menu, Reservation, Team, Testimonial } from "./sections";


function App() {
  return (
    <div className="h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden ">
    <Header />
     <Hero />
     <About />
     <Menu />
     <Team />
     <Testimonial />
     <Reservation />
     <Footer />
     <div className="min-h-[380px] h-[380]" />
    </div>
  );
}

export default App;

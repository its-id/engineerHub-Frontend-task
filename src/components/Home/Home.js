import Colleges from "./Colleges/Colleges";
import Hero from "./Hero/Hero";
import Companies from "./Companies/Companies";
import About from "./About/About";
import Features from "./Features/Features";

const Home = () => {
  return (
    <>
      <Hero />
      <Colleges />
      <Companies />
      <About />
      <Features />
    </>
  );
};

export default Home;

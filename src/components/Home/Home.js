import Colleges from "./Colleges/Colleges";
import Hero from "./Hero/Hero";
import Companies from "./Companies/Companies";
import About from "./About/About";
import Features from "./Features/Features";
import Resources from "./Resources/Resources";
import PlayStore from "./PlayStore/PlayStore";
import Members from "./Members/Members";
import Footer from "./Footer/Footer";

import { features, resources, membersData } from "../Data";

const Home = () => {
  return (
    <>
      <Hero />
      <Colleges />
      <Companies />
      <About />
      <Features features={features} />
      <Resources title={resources[0].title} desc={resources[0].desc} data={resources[0].data} />
      <Resources title={resources[1].title} desc={resources[1].desc} data={resources[1].data} />
      <Resources title={resources[2].title} desc={resources[2].desc} data={resources[2].data} />
      <PlayStore />
      <Members data={membersData} />
      <Footer />
    </>
  );
};

export default Home;

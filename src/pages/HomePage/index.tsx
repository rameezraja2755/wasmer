import Navbar from "@/Components/Navbar";
import Showcase from "@/Components/Showcase";
import Banner from "@/Components/Banner";
import PublishSection from "@/Components/PublishSection";
import DeploySection from "@/Components/DeploySection";
import Footer from "@/Components/Footer";
import GetStartedCard from "@/Components/GetStartedCard";
import DevelopersCard from "@/Components/DevelopersCard";
const HomePage = () => {
  return (
    <>
      <div className="backgroud">
        <Navbar />
        <Showcase />
      </div>
      <div className="banner-section-bg  ">
        <Banner />
        <PublishSection />
        <DeploySection />
      </div>
      <div className="Footer-section-bg">
        <GetStartedCard />
        <Footer />
      </div>
    </>
  );
};
export default HomePage;

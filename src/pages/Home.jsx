import BottomPreview from "../components/BottomPreview";
import Characteristics from "../components/Characteristics";
import Description from "../components/Description";
import Features from "../components/Features";
import Header from "../components/Header";
import HowToOrder from "../components/HowToOrder";
import Preview from "../components/Preview";
import Price from "../components/Price";
import Replies from "../components/Replies";
import TakeOrder from "../components/TakeOrder";
import VideoView from "../components/VideoView";

const Home = () => {
  return (
    <div className={`max-w-[480px] min-h-screen m-auto`}>
      <Header />
      <Preview />
      <div className="bg-gradient-to-b from-slate-950 to-slate-900 py-10">
        <Price />
        <Features />
        <TakeOrder />
      </div>
      <VideoView />
      <Characteristics />
      <Description />
      <Replies />
      <HowToOrder />
      <BottomPreview />
    </div>
  );
};
export default Home;

import Image from "next/image";
import Header from "./header/header";
import AcadmyMainPage from "./acadmyMainPage/acadmyMainpage";
import Reward from "./reward/reward";
import ProjectToFollow from "./projecToFollow/projectToFollow";
import CriptoDictionary from "./criptoDictionary/criptoDictionary";
import StickyBtn from "./stickyBtn/stickyBtn";
import Footer from "./footer/footer";
import Chat from "./chat/chat";
import AcadmyNew from "./acadmyNew/acadmyNew";
import Carousel from "./carousel/carousel";
import Narratives from "./narratives/narratives";
import Exploring from "./narratives/exploring";
import ExploringGrass from "./narratives/exploringGrass";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

store.subscribe(() => {
  console.log("pageredux:- ", store.getState());
});

export default function Home() {
  return (
    <Provider store={store}>
      <main className="bg-black relative min-h-screen">
        <Header />
        <Chat />
        <Carousel />
        <Narratives />
        <Exploring />
        <ExploringGrass />
        {/* <AcadmyMainPage /> */}
        {/* <Reward /> */}
        <AcadmyNew />
        <ProjectToFollow />
        <CriptoDictionary />
        <StickyBtn />
        <Footer />
      </main>
    </Provider>
  );
}

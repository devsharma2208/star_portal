import Image from "next/image";
import Header from "./header/header";
import AcadmyMainPage from "./acadmyMainPage/acadmyMainpage";
import Reward from "./reward/reward";
import ProjectToFollow from "./projecToFollow/projectToFollow";
import CriptoDictionary from "./criptoDictionary/criptoDictionary";
import StickyBtn from "./stickyBtn/stickyBtn";
import Footer from "./footer/footer";
import Chat from "./chat/chat";

export default function Home() {
  return (
    <main className="bg-black relative min-h-screen">
      <Header />
      <Chat />  
      <AcadmyMainPage />
      <Reward />
      <ProjectToFollow />
      <CriptoDictionary />
      <StickyBtn />
      <Footer />
    </main>
  );
}

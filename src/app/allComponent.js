"use client";
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
import { useSelector } from "react-redux";

export default function AllComponents() {
  const selector = useSelector((state) => state);
  return (
    <main className="bg-black relative min-h-screen">
      <Header />
      <Chat />

      {selector && !selector.toggle ? (
        <>
          <AcadmyMainPage />
          <Reward />
        </>
      ) : (
        <>
          <Carousel />
          <Narratives />
          <Exploring />
          <ExploringGrass />
        </>
      )}

      <AcadmyNew />
      <ProjectToFollow />
      <CriptoDictionary />
      <StickyBtn />
      <Footer />
    </main>
  );
}

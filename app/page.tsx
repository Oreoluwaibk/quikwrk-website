import Container from "@/component/Container";
import Banner from "@/component/home/Banner";
import DownloadApp from "@/component/home/DownloadApp";
import GetInTouch from "@/component/home/GetInTouch";
import KeyFeatures from "@/component/home/KeyFeatures";
import LearnMore from "@/component/home/LearnMore";
import Starting from "@/component/home/Starting";
import Team from "@/component/home/Team";
import Image from "next/image";

export default function Home() {
  return (
    <Container active="Home">
      <div className="px:4 md:px-0">
        <Banner />
        <DownloadApp  />
        <KeyFeatures />
        <Starting />
        <Team />
        <LearnMore />
        <GetInTouch />
      </div>
    </Container>
  );
}

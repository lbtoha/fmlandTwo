import Banner from "@/components/pages/home/Banner";
import Latestblog from "@/components/pages/home/Latestblog";
import LifeEventMusic from "@/components/pages/home/LifeEventMusic";
import MakeASponsor from "@/components/pages/home/MakeASponsor";
import MusicShow from "@/components/pages/home/MusicShow";
import Overview from "@/components/pages/home/Overview";
import PopularAlbum from "@/components/pages/home/PopularAlbum";
import PopularOnlineRadio from "@/components/pages/home/PopularOnlineRadio";
import PopularRadios from "@/components/pages/home/PopularRadios";
import PopularShow from "@/components/pages/home/PopularShow";
import Testimonial from "@/components/pages/home/Testimonial";
import Sponsor from "@/components/shared/Sponsor";

const page = () => {
  return (
    <>
      <Banner />
      <PopularShow />
      <PopularRadios />
      <PopularOnlineRadio />
      <MusicShow />
      <PopularAlbum />
      <LifeEventMusic />
      <Sponsor />
      <Testimonial />
      <MakeASponsor />
      <Latestblog />
      <Overview />
    </>
  );
};

export default page;

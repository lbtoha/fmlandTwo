import Banner from "@/components/pages/home/Banner";
import LifeEventMusic from "@/components/pages/home/LifeEventMusic";
import MakeASponsor from "@/components/pages/home/MakeASponsor";
import MusicShow from "@/components/pages/home/MusicShow";
import PopularAlbum from "@/components/pages/home/PopularAlbum";
import PopularOnlineRadio from "@/components/pages/home/PopularOnlineRadio";
import PopularRadios from "@/components/pages/home/PopularRadios";
import PopularShowOne from "@/components/pages/home/PopularShowOne";
import Latestblog from "@/components/shared/Latestblog";
import Overview from "@/components/shared/Overview";
import Sponsor from "@/components/shared/Sponsor";
import Testimonial from "@/components/shared/Testimonial";

const page = () => {
  return (
    <>
      <Banner />
      <PopularShowOne />
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

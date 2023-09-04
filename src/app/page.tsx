import Banner from "@/components/pages/home/Banner";
import LifeEventMusic from "@/components/pages/home/LifeEventMusic";
import MusicShow from "@/components/pages/home/MusicShow";
import PopularAlbum from "@/components/pages/home/PopularAlbum";
import PopularOnlineRadio from "@/components/pages/home/PopularOnlineRadio";
import PopularRadios from "@/components/pages/home/PopularRadios";
import PopularShow from "@/components/pages/home/PopularShow";
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
    </>
  );
};

export default page;

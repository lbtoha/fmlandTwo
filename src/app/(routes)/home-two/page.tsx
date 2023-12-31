import Banner from "@/components/pages/homeTwo/Banner";
import BestRadioStation from "@/components/pages/homeTwo/BestRadioStation";
import PopularOnlineStation from "@/components/pages/homeTwo/PopularOnlineStation";
import PopularShowTwo from "@/components/pages/homeTwo/PopularShowTwo";
import Testimonial from "@/components/pages/homeTwo/Testimonial";
import Latestblog from "@/components/shared/Latestblog";
import Overview from "@/components/shared/Overview";
import PopularRadioStation from "@/components/shared/PopularRadioStation";
import Sponsor from "@/components/shared/Sponsor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Two | Online Radio NextJs Template",
  description: "Online Radio NextJs Template",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

const page = () => {
  return (
    <>
      <Banner />
      <PopularOnlineStation />
      <PopularRadioStation />
      <PopularShowTwo />
      <BestRadioStation />
      <Sponsor />
      <Testimonial />
      <Latestblog />
      <Overview />
    </>
  );
};

export default page;

import BestRadioStation from "@/components/pages/about/BestRadioStation";
import Player from "@/components/pages/about/Player";
import PageBanner from "@/components/shared/PageBanner";
import PopularRadioStation from "@/components/shared/PopularRadioStation";
import Sponsor from "@/components/shared/Sponsor";
import Testimonial from "@/components/shared/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Online Radio NextJs Template",
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
      <PageBanner pageTitle="About us" />
      <BestRadioStation />
      <Player />
      <PopularRadioStation />
      <Sponsor />
      <Testimonial />
    </>
  );
};

export default page;

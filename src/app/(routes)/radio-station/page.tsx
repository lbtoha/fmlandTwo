import PopularRadios from "@/components/pages/radioStation/PopularRadios";
import PopularShowThree from "@/components/pages/radioStation/PopularShowThree";
import PageBanner from "@/components/shared/PageBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radio Station | Online Radio NextJs Template",
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
      <PageBanner pageTitle="Radio Station" />
      <PopularRadios />
      <PopularShowThree />
    </>
  );
};

export default page;

import RadioSectionDetails from "@/components/pages/radioStationDetails/RadioSectionDetails";
import PageBanner from "@/components/shared/PageBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radio Station Details | Online Radio NextJs Template",
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
      <PageBanner pageTitle="Radio Station Details" />
      <RadioSectionDetails />
    </>
  );
};

export default page;

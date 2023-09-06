import FAQ from "@/components/pages/faq/FAQ";
import PageBanner from "@/components/shared/PageBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faq | Online Radio NextJs Template",
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
      <PageBanner pageTitle="FAQ" />
      <FAQ />
    </>
  );
};

export default page;

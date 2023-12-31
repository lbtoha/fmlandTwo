import Contact from "@/components/pages/contactUs/Contact";
import ContactInfo from "@/components/pages/contactUs/ContactInfo";
import PageBanner from "@/components/shared/PageBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Online Radio NextJs Template",
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
      <PageBanner pageTitle="Contact Us" />
      <ContactInfo />
      <Contact />
    </>
  );
};

export default page;

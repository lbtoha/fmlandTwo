import Blog from "@/components/pages/blog/Blog";
import PageBanner from "@/components/shared/PageBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Online Radio NextJs Template",
  description: "Generated by create next app",
};

const page = () => {
  return (
    <>
      <PageBanner pageTitle="Blog" />
      <Blog />
    </>
  );
};

export default page;
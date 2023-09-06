import BlogDetails from "@/components/pages/blogDetails/BlogDetails";
import PageBanner from "@/components/shared/PageBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details | Online Radio NextJs Template",
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
      <PageBanner pageTitle="Blog Details" />
      <BlogDetails />
    </>
  );
};

export default page;

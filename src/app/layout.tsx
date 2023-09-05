"use client";
import "@/app/globals.css";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense, useEffect } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../styles/lib/all.min.css";
import "../styles/lib/remixicon.css";
import "../styles/scss/style.scss";
import Loading from "./loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Home | Online Radio NextJs Template</title>
      </head>
      <body>
        <NavBar />
        <Suspense fallback={<Loading />}>
          <main className="site-body">{children}</main>
        </Suspense>
        <Footer />
        <div className="scroll-top">
          <a href="#">
            <i className="ri-arrow-up-line"></i>
          </a>
        </div>
      </body>
    </html>
  );
}

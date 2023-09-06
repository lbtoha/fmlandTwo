import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Home | Online Radio NextJs Template",
  description: "Online Radio NextJs Template",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

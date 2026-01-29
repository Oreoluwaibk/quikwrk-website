import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { ConfigProvider, App as AntApp } from "antd";
import { theme } from "@/theme/themeConfig";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quikwrk - Get Your Work Done Quickly",
  description: "Quikwrk is your go-to platform for quick and efficient work solutions. Connect with professionals and get your tasks done in no time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
      <ConfigProvider theme={theme}>
        <AntApp>
        {children}
        </AntApp>
      </ConfigProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto_mono = Roboto_Mono({   
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StudyFlow",
  description: "A smart study management platform to organize subjects, tasks, exams, deadlines, and study sessions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${roboto_mono.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

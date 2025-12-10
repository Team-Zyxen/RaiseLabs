import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    default: "Raise Lab Equipment - Premium Laboratory Testing Instruments",
    template: "%s | Raise Lab Equipment"
  },
  description: "Leading manufacturer of pharmaceutical testing instruments including hardness testers, dissolution testers, friability testers, and powder testing equipment. ISO certified quality.",
  keywords: ["laboratory equipment", "pharmaceutical testing", "tablet hardness tester", "dissolution tester", "friability tester", "powder testing", "pharmaceutical instruments"],
  authors: [{ name: "Raise Lab Equipment" }],
  creator: "Raise Lab Equipment",
  publisher: "Raise Lab Equipment",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://raiselab.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Raise Lab Equipment",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@raiselab",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="34123594-b699-4877-9161-c2dbdbf01968"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="afterInteractive"
        />
        {children}
        <Toaster />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
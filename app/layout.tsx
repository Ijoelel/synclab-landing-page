import type { Metadata } from "next";
import {Poppins} from "next/font/google"
import "./globals.css";
import { Providers } from "./providers";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600'],
  subsets: ['latin'], // Specify the character subsets you need, e.g., 'latin'
  // display: 'swap', // Optional: for font display strategy
});

export const metadata: Metadata = {
  title: "SaaS Landing Template",
  description: "Landing Page template.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          defer
          data-domain="saas.gonzalochale.dev"
          src="https://plausible.gonzalochale.dev/js/script.outbound-links.js"
        ></script>
      </head>
      <body
        className={`${poppins.className} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

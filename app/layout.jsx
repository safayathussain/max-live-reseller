import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
export const metadata = {
  title: "Max Live Reseller",
  description: "Generated by create next app",
};



export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-[#EEF0F6] overflow-x-hidden`}>
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
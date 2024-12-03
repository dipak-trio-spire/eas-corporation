import "../../public/css/globals.css";
import "../../public/fonts/font.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer"; 
import { SpeedInsights } from "@vercel/speed-insights/next"
import Cookie from "@/component/Cookie";
import TopButton from "@/component/TopButton";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <SpeedInsights/>
        <Cookie/>
        <TopButton/>
        <Footer />
      </body>
    </html>
  );
}
// ===== import style registry  =====
import StyledJsxRegistry from "@/lib/styledJsx/StyleRegistry";

//  ==== import styles ====
import "@/styles/bootstrap.min.css";
import "@/styles/style.css";
import "@/styles/custom.css";

//  ==== import fonts ====
import { Inter } from "next/font/google";

//  ==== define fonts ====
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

//  ==== import components ====
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

//  ==== define metadata ====
export const metadata = {
  title: "Rehabana",
  description: "Rehabana is a platform for rehabilitation and therapy",
};

//  ==== define layout ====
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <StyledJsxRegistry>
          <Header />
          {children}
          <Footer />
        </StyledJsxRegistry>
      </body>
    </html>
  );
}

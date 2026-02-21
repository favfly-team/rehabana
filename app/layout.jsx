// ===== import style registry  =====
import StyledJsxRegistry from "@/lib/styledJsx/StyleRegistry";

//  ==== import styles ====
import "@/styles/bootstrap.min.css";
import "@/styles/style.css";
import "@/styles/custom.css";
import "@splidejs/react-splide/css";

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

import { createClient } from "@/prismicio";
import NextTopLoader from "nextjs-toploader";

//  ==== define metadata ====
export const metadata = {
  title: "Rehabana",
  description: "Rehabana is a platform for rehabilitation and therapy",
};

//  ==== define layout ====
const RootLayout = async ({ children }) => {
  const client = createClient();
  const doc = await client.getSingle("layout");

  return (
    <html lang="en">
      <body className={inter.variable}>
        <StyledJsxRegistry>
          <NextTopLoader color="#AE5190" />
          <Header data={doc.data} />
          {children}
          <Footer data={doc.data} />
        </StyledJsxRegistry>
      </body>
    </html>
  );
};

export default RootLayout;

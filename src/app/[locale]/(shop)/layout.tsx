import Footer from "@/components/(shop)/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";

interface ShopLayoutProps {
  children: ReactNode;
}

const ShopLayout = ({ children }: ShopLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default ShopLayout;

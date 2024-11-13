import React from "react";
import { Helmet } from "react-helmet";
import Header from "components/Header";
import FooterSection from "./FooterSection";
import ProfileSection from "./ProfileSection";

const GroupOnePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Bartosz Dadas&#39; Portfolio</title>
        <meta
          name="description"
          content="Jestem młodym programistą, który chce się rozwijać w branży IT i nie tylko. Znajdziesz tutaj moje projekty, które są dowodem na moje umiejętności."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[182px] md:gap-[136px] sm:gap-[91px]">
        <Header />
        <div className="flex flex-col gap-12">
          <ProfileSection />
          <FooterSection />
        </div>  
      </div>
    </>
  );
};

export default GroupOnePage;
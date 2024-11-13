import React from "react";
import { Text, Img } from "components/ui";

const FooterSection: React.FC = () => {
  const openLinkedinWindow = () => {
    window.open('https://www.linkedin.com/in/bartek-dadas-62a756281/');
  };

  const openGithubWindow = () => {
    window.open('https://github.com/BartekDadas?tab=repositories');
  };

  const openFacebookWindow = () => {
    window.open('https://www.facebook.com/profile.php?id=100013536152549');
  };

  return (
    <div>
      <div className="flex justify-center bg-green-a700 py-[54px] md:py-5">
        <div className="mx-auto flex w-full max-w-[1376px] justify-center self-end px-14 md:px-5">
          <div className="flex flex-col items-start">
            <Text size="texts" as="p" className="ml-[50px] text-[18px] font-normal text-white-a700 md:ml-0">
              Connect with me on:
            </Text>
            <div className="mt-2 flex items-center gap-4 self-center">
              <Img src="/images/img_frame.svg" alt="Facebook" className="h-[10px] w-[10px] cursor-pointer" onClick={openFacebookWindow}/>
              <Img src="/images/img_frame_white_a700_14x14.svg" alt="Linkedin" className="h-[14px] w-[14px] cursor-pointer" onClick={openLinkedinWindow} />
              <Img src="/images/img_frame_white_a700_16x16.svg" alt="Github" className="h-[16px] w-[16px] cursor-pointer" onClick={openGithubWindow}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
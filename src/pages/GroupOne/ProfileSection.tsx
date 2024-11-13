import React from "react";
import { Text, Button } from "components/ui";
import { useLinkClickHandler } from "react-router-dom";
import picture from "images/profile.png";

const ProfileSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mx-auto flex w-full max-w-[1376px] flex-col gap-4 md:px-1">
        <div>
          <div className="flex flex-col items-center" style={{padding: 0}}>
            <img 
              src={picture} 
              alt="Profile" 
              className="profile-pic" 
            />
            <h1 className="text-[32px] font-bold text-black-900 md:text-[30px] sm:text-[28px]">
              Bartosz Dadas
            </h1>
            <Text as="p" className="text-[16px] font-normal text-black-900">
              Junior Mobile Developer/Junior Software Tester
            </Text>
            <Text as="p" className="text-[16px] font-normal text-black-900">
              Telefon: +48 530 922 851
            </Text>
            <Text as="p" className="text-[16px] font-normal text-black-900">
              Email: bartosz.dadas@wp.pl
            </Text>
            <div className="mt-8 flex flex-col gap-3.5 w-full">
              <div className="flex justify-center">
                <Button shape="round" className="w-[calc(100%-1.75rem)] rounded-[20px] px-[34px] sm:px-5" onClick={useLinkClickHandler('/dev')}>
                  Developer
                </Button>
              </div>
              <div className="flex gap-3.5">
                <Button shape="round" className="w-full rounded-[20px] px-[34px] sm:px-5" onClick={useLinkClickHandler('/tester')}>
                  Tester
                </Button>
                <Button shape="round" className="w-full rounded-[20px] px-[34px] sm:px-5" onClick={useLinkClickHandler('/bio')}>
                  Bio
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[24px] bg-gray-100 p-6 sm:p-5">
          <div className="flex flex-col items-start gap-1">
            <Text size="textmd" as="p" className="text-[40px] font-normal text-black-900 md:text-[38px] sm:text-[36px]">
              Welcome to My Portfolio
            </Text>
            <div className="flex flex-col items-start self-stretch">
              <Text as="p" className="text-[16px] font-normal text-black-900">
                Jestem pełnym pasji developerem mobilnym, który potrafi tworzyć nowoczesne i intuicyjne aplikacje mobilne. 
                Moje doświadczenie obejmuje zarówno rozwój aplikacji, jak i pracę jako tester oprogramowania, 
                co pozwala mi na wszechstronne podejście do projektów. Znam się na różnych zagadnieniach związanych z IT 
                i sztuczną inteligencją, a także zawsze chętnie uczę się nowych rzeczy i podejmuję nowe wyzwania.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
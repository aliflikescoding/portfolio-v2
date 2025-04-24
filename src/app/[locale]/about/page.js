import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { AnimatePresence } from "framer-motion";
import FramerMotionWrapper from "@/components/FramerMotionWrapper";
import Image from "next/image";

const About = () => {
  const t = useTranslations("About");
  return (
    <AnimatePresence>
      <div className="h-screen flex flex-col items-center justify-center">
        <FramerMotionWrapper duration={1.5}>
          <div className="max-w-[80%] mx-auto flex items-center justify-center gap-10">
            <Image
              src={"/alif.png"}
              width={0}
              height={0}
              sizes="100vw"
              className="w-auto h-auto max-w-[25%] mask mask-circle shadow-lg"
            />
            <p className="font-light textarea-xl custom-shadow">
              {t("paragraph")}
            </p>
          </div>
        </FramerMotionWrapper>
      </div>
    </AnimatePresence>
  );
};

export default About;

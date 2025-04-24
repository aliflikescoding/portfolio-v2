import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { AnimatePresence } from "framer-motion";
import FramerMotionWrapper from "@/components/FramerMotionWrapper";
import Image from "next/image";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";

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
            <div>
              <p className="font-light text-2xl custom-shadow">
                {t("paragraph")}
              </p>
              <div className="mt-4 flex gap-3">
                <Link
                  href={`https://www.instagram.com/alifwbwo/`}
                  target="_blank"
                >
                  <IoLogoInstagram className="text-4xl text-primary" />
                </Link>
                <Link
                  href={`https://www.linkedin.com/in/alifwibowo/`}
                  target="_blank"
                >
                  <IoLogoLinkedin className="text-4xl text-primary" />
                </Link>
                <Link
                  href={`https://github.com/aliflikescoding`}
                  target="_blank"
                >
                  <IoLogoGithub className="text-4xl text-primary" />
                </Link>
              </div>
            </div>
          </div>
        </FramerMotionWrapper>
      </div>
    </AnimatePresence>
  );
};

export default About;

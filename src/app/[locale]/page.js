import { useTranslations, useLocale } from "next-intl";
import { AnimatePresence } from "framer-motion";
import FramerMotionWrapper from "@/components/FramerMotionWrapper";
import Typewriter from "@/components/Typewriter";
import { homeButtons } from "@/data/data-home";
import CustomButton from "@/components/CustomButton";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  return (
    <AnimatePresence>
      <div className="h-screen flex flex-col items-center justify-center">
        <FramerMotionWrapper duration={1.5}>
          <div className="flex flex-col items-center text-center gap-2">
            <h1 className="font-semibold text-6xl sm:text-8xl custom-shadow">
              <Typewriter text="Hi !" speed={100} />
            </h1>
            <p className="font-light text-2xl sm:text-4xl custom-shadow">
              {t("title")}
            </p>
            <div className="flex flex-wrap gap-3 mt-4 justify-center">
              {homeButtons.map((button, index) => (
                <CustomButton
                  key={index}
                  text={button[locale] || button.en} // fallback to 'en' if locale not found
                  type="link"
                  link={button.route}
                />
              ))}
            </div>
          </div>
        </FramerMotionWrapper>
      </div>
    </AnimatePresence>
  );
}

import IconsLinks from "./IconLinks";
import ConatctAccounts from "./ContactAccounts";
import { useTranslations } from "next-intl";
import { MdContactMail } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const t  = useTranslations();

  return (
    <footer
      className="flex relative top-[76px] sm:max-md:top-[120px] flex-col pt-10"
      id="contact"
      role="contentinfo"
    >
      {/* title */}
      <h2 className="text-dyTitle mx-auto w-fit font-bold text-p-color my-5">
        {t("contact.title")} 📲
      </h2>

      {/* description */}
      <p className="text-p-color/80 font-semibold mx-auto text-center w-[35ch] sm:w-[50ch] mb-5">
        {t("contact.description")}
      </p>

      <div className="bg-p-color px-dyp py-10 md:flex justify-between items-center">
        <p className="text-white font-bold text-3xl text-center flex items-center gap-2 my-5 max-lg:w-fit max-lg:mx-auto">
          {t("contact.getInTouch")} <MdContactMail />
        </p>

        <div className="flex max-md:flex-col gap-5 justify-center md:gap-9 items-center">
          {/* linked in */}
          <ConatctAccounts
            name="LinkedIn"
            accountName="Ali AbdElbagi"
            icon={<FaLinkedin size={30} color="white" />}
            href="https://www.linkedin.com/in/ali-abdelbagi-02313b223/"
          />
          {/* Gamil */}
          <ConatctAccounts
            name="Gmail"
            accountName="Ali AbuEl3iz"
            icon={<SiGmail size={30} color="white" />}
            href="mailto:aliroma849@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Ali%2C%0AI%20just%20visited%20your%20portfolio..."
          />
        </div>

        <div className="flex flex-col my-5 gap-5 items-center justify-center">
          <p className="text-sm text-white">{t("contact.orVisit")}</p>
          <div className="Links flex gap-4">
            <IconsLinks
              name="github"
              icon={<FaGithub size={30} color="white" />}
              href="https://github.com/ali007-depug"
            />
            <IconsLinks
              name="X"
              icon={<FaXTwitter size={30} color="white" />}
              href="https://x.com/AAbuel3iz?t=CuBNSxHRhlU9fmVw9JExdQ&s=09"
            />
            <IconsLinks
              name="Instagram"
              icon={<FaInstagram size={30} color="white" />}
              href="https://www.instagram.com/ali_abdelbagi?utm_source=qr&igsh=NnRsaHc2eDdoNDBz"
            />
            <IconsLinks
              name="Facebook"
              icon={<FaFacebookF size={30} color="white" />}
              href="https://www.facebook.com/ali.abdelbagiali.3"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}


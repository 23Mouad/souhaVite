// components/Footer.js

import { Link } from "react-router-dom"; // Use react-router-dom for navigation
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation("Footer");
    return (
        <footer className=" bg-transparent py-4 flex flex-col justify-center items-center gap-2 ">
            <svg
                width="102"
                height="1"
                viewBox="0 0 102 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line
                    x1="4.37114e-08"
                    y1="0.5"
                    x2="102"
                    y2="0.500009"
                    stroke="white"
                />
            </svg>

            <p className="text-white">{t("title")} </p>
            <div className="flex space-x-4">
                <Link
                    href="https://www.facebook.com/profile.php?id=100090694764125&mibextid=LQQJ4d"
                    target="_blank"
                >
                    <FaFacebook
                        className="text-white hover:text-gray-300"
                        size={24}
                    />
                </Link>

                <Link
                    href="https://www.instagram.com/biscuiterie_souha?igsh=cDVoMnJ0cDc5bnI1"
                    target="_blank"
                >
                    <FaInstagram
                        className="text-white hover:text-gray-300"
                        size={24}
                    />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;

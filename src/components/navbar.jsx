"use client";

import { Link, useLocation } from "react-router-dom"; // Use react-router-dom for navigation
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Halal from "../pics/icons/halal.png"; // Adjust the path as per Vite's structure
// import LanguageChanger from "./languagechg";
import Algeria from "../pics/icons/algeria.png";

function Navbar({ logoImg, bgColor }) {
    const { t } = useTranslation("Navbar");
    const { i18n } = useTranslation();

    const handleChange = (e) => {
        const newLocale = e.target.value;
        i18n.changeLanguage(newLocale);
    };
    // const currentLocale = i18n.language;

    const location = useLocation();
    const pathname = location.pathname;

    const isActive = (path) => {
        return pathname.includes(path);
    };

    const isActivee = (path) => {
        return path === pathname;
    };

    console.log(pathname);

    if (typeof window !== "undefined") {
        var width = window.innerWidth;
        console.log(width);
    }

    useEffect(() => {
        const handleResize = () => {
            width = window.innerWidth;
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            className="flex flex-wrap sm:justify-start sm:flex-col w-full bg-white text-xs pb-2 sm:pb-4"
            style={{ backgroundColor: bgColor }}
        >
            <Link to="/">
                {width < 640 ? (
                    <div className="flex items-center justify-center absolute w-full px-4 sm:px-6 lg:px-8 py-2">
                        <img
                            src={logoImg}
                            width={120}
                            height={120}
                            alt="logo"
                        />
                    </div>
                ) : (
                    <img
                        src={logoImg}
                        width={200}
                        height={200}
                        alt="logo"
                        className="absolute"
                    />
                )}
            </Link>
            <div className="max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-end gap-x-5 w-full py-2 px-12 sm:pt-2 sm:pb-0">
                    <img
                        src={Halal}
                        alt="halal icon"
                        width={50}
                        height={50}
                        className="hidden sm:inline-flex"
                    />
                    <img
                        src={Algeria}
                        alt="algeria icon"
                        width={50}
                        height={50}
                        className="hidden sm:inline-flex"
                    />
                    <select
                        value={i18n.language}
                        onChange={handleChange}
                        className="bg-transparent rounded-md mt-4 text-white text-lg mt-0 focus:outline-none"
                    >
                        <option value="EN" className="bg-slate-500">
                            En
                        </option>
                        <option value="FR" className="bg-slate-500">
                            Fr
                        </option>
                        <option value="AR" className="bg-slate-500">
                            Ar
                        </option>
                    </select>
                </div>
            </div>

            <nav
                className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
                aria-label="Global"
            >
                <div
                    id="navbar-collapse-with-animation"
                    className="hs-collapse overflow-hidden transition-all duration-300 basis-full grow mt-5 sm:mt-0"
                >
                    <div className="flex gap-y-1 gap-x-1 mt-5 flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-4 font-semibold sm:mt-0 sm:ps-7 justify-center pt-8 sm:pt-0">
                        <Link
                            className={`font-semibold sm:py-6 ${
                                isActivee("/") || isActivee("/en")
                                    ? " bg-yellow-900  rounded-full font-bold"
                                    : ""
                            }`}
                            to="/"
                            aria-current="page"
                            style={{ padding: "0.25rem 0.5rem" }}
                        >
                            {t("home")}
                        </Link>
                        <Link
                            className={`font-semibold sm:py-6 ${
                                isActive("/products")
                                    ? " bg-yellow-900  rounded-full font-bold"
                                    : ""
                            }`}
                            to="/products/1"
                            style={{ padding: "0.25rem 0.5rem" }}
                        >
                            {t("product")}
                        </Link>
                        <Link
                            className={`font-semibold sm:py-6 ${
                                isActive("/contact")
                                    ? " bg-yellow-900  rounded-full font-bold"
                                    : ""
                            }`}
                            to="/contact"
                            style={{ padding: "0.25rem 0.5rem" }}
                        >
                            {t("contact")}
                        </Link>
                        <Link
                            className={`font-semibold sm:py-6 ${
                                isActive("/location")
                                    ? " bg-yellow-900  rounded-full font-bold"
                                    : ""
                            }`}
                            to="/location"
                            style={{ padding: "0.25rem 0.5rem" }}
                        >
                            {t("location")}
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

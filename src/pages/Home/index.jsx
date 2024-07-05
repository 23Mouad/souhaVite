import Navbar from "../../components/navbar";
import logoMain from "../../pics/logoMain.png";
import Footer from "../../components/footer";
import heroImg from "../../pics/principle.png";
import { Link } from "react-router-dom"; // Use react-router-dom for navigation

import card1 from "../../pics/card1.png";
import card2 from "../../pics/card2.png";
import card3 from "../../pics/card3.png";
import card4 from "../../pics/card4.png";

import { useTranslation } from "react-i18next";

export default function Home() {
    const { t } = useTranslation("Navbar");

    return (
        <main className="bg-gradient-to-b from-sky-500 to-sky-800">
            <Navbar logoImg={logoMain} bgColor="#00A7E1" />
            <div className="grid grid-cols-12 pt-4 text-white">
                <div className="sm:col-span-6 col-span-12 py-0 sm:px-16 p-4 flex flex-col justify-center order-2 sm:order-1">
                    {t("heroContent1")}
                    <br />
                    <br />
                    {t("heroContent2")}
                    <br />
                    <button className="rounded bg-sky-700 px-4 py-2 mt-3 w-fit">
                        <Link to="/contact">{t("contact")}</Link>
                    </button>
                </div>

                <div className="sm:col-span-6 col-span-12 h-[300px] sm:h-[450px] flex justify-end order-1 sm:order-2">
                    <img
                        src={heroImg}
                        alt="Hero image"
                        width={500}
                        height={400}
                    />
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14 p-4">
                <Link
                    to="/products/2"
                    className="group flex flex-col shadow-sm rounded-xl hover:shadow-md transition hover:scale-[1.1]"
                    style={{ backgroundColor: "#0188b8" }}
                >
                    <div className="aspect-w-16 aspect-h-9">
                        <img
                            className="w-full object-cover rounded-t-xl"
                            src={card1}
                            alt=""
                        />
                    </div>
                </Link>

                <Link
                    to="/products/3"
                    className="group flex flex-col order shadow-sm rounded-xl hover:shadow-md transition hover:scale-[1.1]"
                    style={{ backgroundColor: "#977c1f" }}
                >
                    <div className="aspect-w-16 aspect-h-9">
                        <img
                            className="w-full object-cover rounded-t-xl"
                            src={card2}
                            alt=""
                        />
                    </div>
                </Link>

                <Link
                    to="/products/4"
                    className="group flex flex-col bg-white shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 hover:scale-[1.1]"
                    style={{ backgroundColor: "#977b4f" }}
                >
                    <div className="aspect-w-16 aspect-h-9">
                        <img
                            className="w-full object-cover rounded-t-xl"
                            src={card3}
                            alt=""
                        />
                    </div>
                </Link>

                <Link
                    to="/products/1"
                    className="group flex flex-col bg-white shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 hover:scale-[1.1] hover:overflow-hidden"
                >
                    <div className="aspect-w-16 aspect-h-9">
                        <img
                            className="w-full object-cover rounded-t-xl"
                            src={card4}
                            alt=""
                        />
                    </div>
                </Link>
            </div>
            <Footer bgColor="#005B7B" />
        </main>
    );
}


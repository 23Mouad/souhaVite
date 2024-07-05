import { useTranslation } from "react-i18next";
import Navbar from "../../components/navbar";
import LogoMain from "../../pics/logoMain.png";
import { Link } from "react-router-dom"; // Use react-router-dom for navigation
import Footer from "../../components/footer";
import location from "../../pics/icons/location.png";

function Location() {
    const { t } = useTranslation("Contact");
    return (
        <div
            style={{
                background: `linear-gradient(to bottom, #00A7E1, #005B7B)`,
            }}
            className=" min-h-screen"
        >
            <Navbar logoImg={LogoMain} bgColor="transparent" />
            <div className="max-w-[85rem] px-4  sm:px-6 lg:px-8  mx-auto">
                <div className="relative  md:p-16">
                    <div className="lg:flex gap-8 block ">
                        <div className="mb-10 lg:mb-0 col-span-12 lg:col-start-8 order-2 w-fit ">
                            <nav
                                className="grid gap-4 mt-5 md:mt-10"
                                aria-label="Tabs"
                                role="tablist"
                            >
                                <button
                                    type="button"
                                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start bg-slate-50 hover:bg-gray-200 md:p-2 rounded-xl "
                                    id="tabs-with-card-item-3"
                                    data-hs-tab="#tabs-with-card-3"
                                    aria-controls="tabs-with-card-3"
                                    role="tab"
                                >
                                    <span className="flex p-4">
                                        <svg
                                            width="65"
                                            height="65"
                                            viewBox="0 0 65 65"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_135_5)">
                                                <rect
                                                    width="65"
                                                    height="65"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M54.9467 46.7566C60.4934 48.5766 63.9167 51.0899 63.9167 53.8199C63.9167 59.3883 49.8334 63.9166 32.5 63.9166C15.1667 63.9166 1.08337 59.3883 1.08337 53.8199C1.08337 51.0683 4.50671 48.5766 10.0534 46.7566"
                                                    stroke="#20458C"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M32.5 1.08325C27.3972 1.08325 22.5035 3.11032 18.8953 6.71852C15.2871 10.3267 13.26 15.2205 13.26 20.3233C13.26 39.5633 32.5 54.9899 32.5 54.9899C32.5 54.9899 51.74 39.6066 51.74 20.3233C51.74 17.7966 51.2424 15.2947 50.2755 12.9604C49.3086 10.6261 47.8913 8.50512 46.1047 6.71852C44.3181 4.93192 42.1971 3.51471 39.8628 2.54781C37.5285 1.58091 35.0266 1.08325 32.5 1.08325Z"
                                                    stroke="#20458C"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M32.5 22.7498C35.4916 22.7498 37.9167 20.3247 37.9167 17.3332C37.9167 14.3416 35.4916 11.9165 32.5 11.9165C29.5085 11.9165 27.0834 14.3416 27.0834 17.3332C27.0834 20.3247 29.5085 22.7498 32.5 22.7498Z"
                                                    stroke="#20458C"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_135_5">
                                                    <rect
                                                        width="65"
                                                        height="65"
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        <span className="grow ms-6">
                                            <span className="block text-xs sm:text-sm font-semibold hs-tab-active:text-blue-600 text-gray-800 ">
                                                Ilot 26 Section 33 Boumaiza, Ben
                                                Azouz RN 44- Wilaya de Skikda -
                                                Algerie.
                                            </span>
                                            <span className="block text-xs mt-1 text-gray-800">
                                                {t("phoneContent2")}
                                            </span>
                                        </span>
                                    </span>
                                </button>
                            </nav>
                        </div>

                        <div className="lg:col-span-7 col-span-12  order-1 mt-6 flex justify-center ">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9965.102553522152!2d7.3541338!3d36.8147717!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f03fbcf83cc595%3A0xf0d85a2c730ae549!2sEURL%20BISCUITERIE%20SOUHA!5e1!3m2!1sen!2sdz!4v1716400232687!5m2!1sen!2sdz"
                                width="600"
                                height="450"
                                style={{ border: "0px" }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    <div className="absolute inset-0 grid grid-cols-12 size-full">
                        <div className="col-span-full lg:col-span-7 lg:col-start-6  w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full "></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Location;

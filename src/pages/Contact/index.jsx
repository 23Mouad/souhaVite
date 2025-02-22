
import { useTranslation } from "react-i18next";
import Navbar from "../../components/navbar";
import LogoMain from "../../pics/logoMain.png";
import { Link } from "react-router-dom"; // Use react-router-dom for navigation
import Footer from "../../components/footer";

function Contact() {
    const {t} = useTranslation("Contact");
    return (
        <div
            style={{
                background: `linear-gradient(to bottom, #00A7E1, #005B7B)`,
            }}
        >
            <Navbar logoImg={LogoMain} bgColor="transparent" />
            <div className="max-w-[85rem] px-4 py-8 sm:px-6 lg:px-8  mx-auto">
                <div className="relative p-6 md:p-16">
                    <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center ">
                        <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                            <nav
                                className="grid gap-4 mt-5 md:mt-10"
                                aria-label="Tabs"
                                role="tablist"
                            >
                                <button
                                    type="button"
                                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start bg-slate-50 hover:bg-gray-200 p-4 md:p-5 rounded-xl "
                                    id="tabs-with-card-item-1"
                                    data-hs-tab="#tabs-with-card-1"
                                    aria-controls="tabs-with-card-1"
                                    role="tab"
                                >
                                    <span className="flex">
                                        <svg
                                            width="105"
                                            height="105"
                                            viewBox="0 0 74 74"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M71.7136 26.4493C71.7136 26.4493 71.7136 26.4391 71.7136 26.4334C71.715 26.405 71.715 26.3765 71.7136 26.3481C71.7136 26.3481 71.7136 26.3365 71.7136 26.3307C71.7089 26.2957 71.7022 26.2609 71.6933 26.2267V26.2137C71.6857 26.1841 71.676 26.1552 71.6644 26.127L71.6557 26.1067C71.6442 26.0793 71.6312 26.0532 71.6167 26.0258C71.6149 26.0207 71.6125 26.0158 71.6095 26.0113C71.5918 25.98 71.5725 25.9496 71.5517 25.9203C71.53 25.8928 71.5069 25.8668 71.4823 25.8408L71.465 25.8234C71.4468 25.805 71.4275 25.7876 71.4072 25.7714L71.3811 25.7497C71.3623 25.7349 71.3425 25.7214 71.3219 25.7093L71.3002 25.6934L59.612 18.6012V3.52371C59.6116 3.28937 59.5182 3.06476 59.3524 2.89919C59.1865 2.73362 58.9618 2.64062 58.7274 2.64063H15.2857C15.0513 2.64062 14.8266 2.73362 14.6607 2.89919C14.4949 3.06476 14.4015 3.28937 14.4011 3.52371V18.5998L2.7129 25.6919L2.68544 25.7107L2.63485 25.7454L2.60305 25.7714L2.55102 25.8191L2.52934 25.8408C2.50622 25.8654 2.48309 25.8914 2.46141 25.9188C2.44061 25.9482 2.42131 25.9786 2.4036 26.0099L2.39493 26.0243C2.38192 26.0518 2.36891 26.0778 2.35735 26.1053L2.34868 26.1255C2.3371 26.1537 2.32745 26.1827 2.31977 26.2122V26.2252C2.31095 26.2595 2.30419 26.2942 2.29954 26.3293C2.29954 26.3293 2.29954 26.3409 2.29954 26.3466C2.2981 26.375 2.2981 26.4035 2.29954 26.4319C2.29954 26.4319 2.29954 26.442 2.29954 26.4478V70.4749C2.29954 70.4749 2.29954 70.4865 2.29954 70.4908C2.29954 70.4952 2.29954 70.5284 2.29954 70.5457C2.29883 70.5563 2.29883 70.567 2.29954 70.5775C2.29954 70.5963 2.29954 70.6166 2.30821 70.6368V70.6614C2.30821 70.683 2.31833 70.7033 2.32411 70.7235C2.32989 70.7438 2.32411 70.738 2.33133 70.7438C2.33752 70.7655 2.34525 70.7867 2.35446 70.8073V70.8247C2.36458 70.8449 2.37325 70.8652 2.38481 70.8854L2.39348 70.9013C2.40396 70.9217 2.41554 70.9414 2.42817 70.9605L2.43829 70.975L2.45563 71.001L2.47876 71.0299L2.49032 71.0429C2.5046 71.0613 2.52005 71.0786 2.53657 71.095L2.54813 71.1051C2.56406 71.1225 2.58147 71.1384 2.60016 71.1528L2.61173 71.1629C2.62907 71.1773 2.64786 71.1904 2.66665 71.2034L2.68255 71.2149L2.74614 71.2539L2.77071 71.267L2.8213 71.2915L2.85309 71.3045L2.89934 71.3204L2.93692 71.332L2.98173 71.3436L3.0193 71.3508L3.06989 71.3595H3.10313H3.16239H70.8276C70.8858 71.3594 70.9439 71.3536 71.001 71.3421H71.0082L71.0776 71.3248L71.0993 71.3175C71.1205 71.3111 71.1412 71.3034 71.1615 71.2944L71.1831 71.2857C71.2045 71.2771 71.2253 71.267 71.2453 71.2554L71.2597 71.2482C71.3285 71.2091 71.3912 71.1604 71.4462 71.1036L71.4548 71.095C71.4707 71.0805 71.4838 71.0646 71.4982 71.0487L71.5199 71.0227C71.5271 71.0149 71.5338 71.0067 71.5401 70.9981L71.5575 70.9721L71.5676 70.9577C71.5802 70.9386 71.5918 70.9188 71.6023 70.8984L71.6109 70.8839L71.6413 70.8218V70.8045C71.6505 70.7838 71.6582 70.7626 71.6644 70.7409C71.6644 70.7409 71.6644 70.7279 71.6716 70.7206C71.6789 70.7134 71.6832 70.6802 71.6875 70.6585V70.6339C71.6875 70.6137 71.6948 70.5934 71.6962 70.5746C71.6969 70.5641 71.6969 70.5534 71.6962 70.5429C71.6962 70.5255 71.6962 70.5067 71.6962 70.4879C71.6962 70.4691 71.6962 70.4778 71.6962 70.472L71.7136 26.4493ZM4.05559 28.2096L31.3633 48.5625L4.05559 68.7246V28.2096ZM33.3709 49.2852C34.4251 48.5166 35.6961 48.1024 37.0008 48.1024C38.3054 48.1024 39.5764 48.5166 40.6307 49.2852L68.1407 69.5904H5.85934L33.3709 49.2852ZM42.6368 48.5625L69.9445 28.2096V68.7246L42.6368 48.5625ZM69.245 26.5215L59.5961 33.7148V20.668L69.245 26.5215ZM16.1702 4.40824H57.8299V35.0344L41.1279 47.4858C39.8833 46.7316 38.456 46.3329 37.0008 46.3329C35.5456 46.3329 34.1182 46.7316 32.8737 47.4858L16.1196 34.9983C16.1528 34.9055 16.1699 34.8077 16.1702 34.7092V4.40824ZM14.4011 33.7148L4.75223 26.523L14.4011 20.668V33.7148Z"
                                                fill="#20458C"
                                            />
                                        </svg>

                                        <span className="grow ms-6">
                                            <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 ">
                                                {t("emailTitle")}
                                            </span>
                                            <span className="block mt-1 text-gray-800 ">
                                                {t("emailContent")}
                                            </span>
                                            <div className=" rounded-full py-1 mt-2 px-2 w-fit border border-orange-400">
                                                <Link
                                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@biscuiterie-souha.dz&su=Hello&body=I%20would%20like%20to%20contact%20you"
                                                    className="text-orange-400 text-sm sm:text-base "
                                                >
                                                    contact@biscuiterie-souha.dz
                                                </Link>
                                            </div>
                                        </span>
                                    </span>
                                </button>

                                <button
                                    type="button"
                                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start bg-slate-50 hover:bg-gray-200 p-4 md:p-5 rounded-xl"
                                    id="tabs-with-card-item-2"
                                    data-hs-tab="#tabs-with-card-2"
                                    aria-controls="tabs-with-card-2"
                                    role="tab"
                                >
                                    <span className="flex">
                                        <svg
                                            width="105"
                                            height="105"
                                            viewBox="0 0 77 77"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M48.2854 16.0416C51.4191 16.653 54.2991 18.1856 56.5567 20.4432C58.8144 22.7008 60.3469 25.5808 60.9583 28.7145M48.2854 3.20825C54.796 3.93153 60.8672 6.84706 65.5021 11.4762C70.137 16.1052 73.0602 22.1727 73.7917 28.6824M70.5833 54.2849V63.9099C70.587 64.8034 70.4039 65.6879 70.046 66.5066C69.688 67.3253 69.163 68.0602 68.5046 68.6642C67.8462 69.2683 67.0689 69.7282 66.2224 70.0144C65.376 70.3007 64.4791 70.407 63.5892 70.3266C53.7166 69.2539 44.2333 65.8803 35.9013 60.477C28.1494 55.5511 21.5771 48.9789 16.6513 41.227C11.2291 32.8571 7.85479 23.3277 6.80168 13.4108C6.7215 12.5235 6.82694 11.6294 7.11128 10.7851C7.39562 9.9409 7.85263 9.16513 8.45322 8.5072C9.0538 7.84928 9.7848 7.32361 10.5997 6.96368C11.4145 6.60374 12.2954 6.41742 13.1863 6.41659H22.8113C24.3683 6.40126 25.8778 6.95263 27.0583 7.96792C28.2389 8.98321 29.01 10.3931 29.2279 11.9349C29.6342 15.0151 30.3876 18.0395 31.4738 20.9503C31.9054 22.0987 31.9988 23.3467 31.743 24.5465C31.4871 25.7463 30.8926 26.8476 30.03 27.7199L25.9554 31.7945C30.5227 39.8267 37.1732 46.4773 45.2054 51.0445L49.28 46.9699C50.1523 46.1073 51.2536 45.5129 52.4534 45.257C53.6532 45.0011 54.9013 45.0945 56.0496 45.5262C58.9604 46.6124 61.9848 47.3658 65.065 47.772C66.6235 47.9919 68.0468 48.7769 69.0643 49.9777C70.0818 51.1786 70.6224 52.7115 70.5833 54.2849Z"
                                                stroke="#20458C"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>

                                        <span className="grow ms-6">
                                            <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 ">
                                                {t("phoneTitle")}
                                            </span>
                                            <span className="block mt-1 text-gray-800">
                                                {t("phoneContent")}
                                            </span>
                                            <div className=" rounded-full py-1 mt-2 px-2 w-fit border border-orange-400 text-orange-400 text-sm sm:text-base">
                                                +213 (0) 5 50 09 65 87
                                            </div>
                                        </span>
                                    </span>
                                </button>

                                <button
                                    type="button"
                                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start bg-slate-50 hover:bg-gray-200 p-4 md:p-5 rounded-xl "
                                    id="tabs-with-card-item-3"
                                    data-hs-tab="#tabs-with-card-3"
                                    aria-controls="tabs-with-card-3"
                                    role="tab"
                                >
                                    <span className="flex">
                                        <svg
                                            width="105"
                                            height="105"
                                            viewBox="0 0 105 105"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M92.0898 43.4357C83.5693 33.9924 74.2047 25.2927 64.26 17.5806C62.0683 15.8711 58.9055 16.0529 56.898 18.0011C42.7101 31.8463 29.0402 46.5598 16.267 61.738C14.4774 63.893 14.5302 67.0637 16.3871 69.1105C19.6529 72.743 23.0938 76.2627 26.6013 79.6395C13.164 80.9366 13.125 82.9326 13.125 83.7047C13.125 86.7992 25.8287 87.9729 36.4831 88.4126C39.6426 88.5544 43.1657 88.6266 46.9549 88.6266C50.744 88.6266 54.2656 88.5545 57.4235 88.4126C68.0812 87.9728 80.7849 86.7992 80.7849 83.7047C80.7849 82.9052 80.7785 80.829 66.3605 79.5513C75.1337 70.3853 83.8251 60.7333 92.2084 50.8121C94.0093 48.6636 93.9563 45.4921 92.0898 43.4357ZM17.5253 62.79C30.261 47.6575 43.8939 32.9831 58.0435 19.1773C59.4615 17.7978 61.7029 17.6672 63.2522 18.8752C63.8418 19.3325 64.4088 19.8256 64.9942 20.2898L57.6606 51.8968C56.773 55.7291 53.8858 58.8366 50.128 60.0054L19.1348 69.6454C18.6296 69.0961 18.1018 68.5644 17.6037 68.0106C16.2908 66.5631 16.2581 64.3168 17.5253 62.79ZM90.9536 49.7556C82.2186 60.0928 73.1502 70.1528 63.9987 79.6601C62.7073 81.0131 61.4079 82.3614 60.0958 83.7016C59.7785 84.0253 59.7849 84.5444 60.1086 84.8615C60.4337 85.1803 60.9545 85.1731 61.2685 84.8487C62.4926 83.5971 63.706 82.3376 64.911 81.0766C74.7662 81.8703 78.3951 83.0786 79.0735 83.7024C78.0834 84.6277 71.601 86.1858 57.3528 86.7738C54.2174 86.9147 50.7183 86.9861 46.9547 86.9861C43.1911 86.9861 39.692 86.9147 36.5535 86.7738C22.3102 86.1858 15.8278 84.6277 14.836 83.7024C15.4913 83.1055 18.9123 81.9448 28.1374 81.1422C29.5124 82.459 30.9483 83.7908 32.4206 85.1068C32.5767 85.2469 32.7723 85.3158 32.9669 85.3158C33.192 85.3158 33.4163 85.2236 33.5782 85.0418C33.8802 84.7045 33.8513 84.1862 33.5132 83.8842C31.9599 82.4951 30.4418 81.0876 28.9959 79.6962C26.0462 76.9059 23.1812 73.9669 20.381 70.9762L50.6149 61.5723C54.9271 60.2305 58.2389 56.6657 59.2594 52.2669L66.4118 21.4412C75.0988 28.4527 83.3319 36.1784 90.8736 44.5364C92.1938 45.9903 92.2274 48.2359 90.9536 49.7556Z"
                                                fill="#20458C"
                                            />
                                        </svg>

                                        <span className="grow ms-6">
                                            <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 ">
                                                {t("locationTitle")}
                                            </span>
                                            <span className="block mt-1 text-gray-800">
                                                {t("locationContent")}
                                            </span>
                                        </span>
                                    </span>
                                </button>
                            </nav>
                        </div>

                        <div className="lg:col-span-6">
                            <div className="relative text-white">
                                <h1 className="text-3xl font-bold mb-4">
                                    {t("title")}
                                </h1>
                                <br />
                                {t("content1")}
                                <br />
                                <br />
                                {t("content2")}
                            </div>
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

export default Contact;

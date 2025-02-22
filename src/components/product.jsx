import React from "react";
import { Link } from "react-router-dom"; // Use react-router-dom for navigation
import "animate.css";

import protection from "../pics/icons/protection.png";
import Footer from "../components/footer";
import { useTranslation } from "react-i18next";

function Product({
    id,
    name,
    savor,
    nutritionalInfo,
    ingredients,
    price,
    ProductImg,
    HeroImg,
    bgColorDiv,
    bgColorEnd,
    fontColor,
    fontFamily,
}) {
    const { t } = useTranslation();
    return (
        <div
            style={{
                background: `linear-gradient(to bottom, ${bgColorDiv}, ${bgColorEnd})`,
            }}
        >
            <div className="grid grid-cols-12 items-center">
                <div className="col-span-12 flex animate__animated animate__backInLeft justify-center mt-4 sm:m-0 sm:justify-end sm:col-span-6 sm:max-h-[170px] max-h-[120px]">
                    <img
                        src={fontFamily}
                        alt={name}
                        height={120}
                        className="w-[300px] sm:w-[450px]"
                    />
                </div>
                <div className="col-span-12 flex justify-end sm:col-span-6 h-[300px] sm:h-[450px]">
                    <img
                        src={HeroImg}
                        alt={name}
                        width={550}
                        height={550}
                        className="animate__pulse animate__animated w-350 sm:w-550"
                    />
                </div>
            </div>

            <div className="grid grid-cols-12 items-center">
                <div className="col-span-12 sm:col-span-6 grid grid-cols-12 h-min-[300px] items-center gap-8 order-1 sm:order-2 justify-center">
                    <div className="col-span-12 lg:col-span-6 justify-center order-2 sm:order-1 flex flex-col items-center">
                        {/* <h3
                            className="col-span-12 mb-5"
                            style={{ color: "white" }}
                        >
                            Price : {price} Da
                        </h3> */}

                        <img
                            src={protection}
                            alt="protection icon"
                            width={100}
                            height={100}
                        />
                        <div
                            className="w-fit p-2 border rounded-lg border-none mt-4 text-center pb-4 text-[8px]"
                            style={{
                                background:
                                    id === "4"
                                        ? "#FDCF85"
                                        : id === "3"
                                        ? "#E2AF00"
                                        : id === "2"
                                        ? "#00A7E1"
                                        : "#4325c7",
                            }}
                        >
                            valeur <br /> énergétique <br /> قيمة الطاقوية
                        </div>
                        <div className="bg-white w-fit mb-4 p-2 border rounded-lg text-black border-none text-center text-xs pb-4 z-10 -mt-3">
                            {t(`Product:${id - 1}:nutritionalInfo:energy`)}
                        </div>
                    </div>
                    <div className="py-8 col-span-12 lg:col-span-6 grid place-items-center order-1 sm:order-2">
                        <img
                            src={ProductImg}
                            alt={name}
                            width={300}
                            height={300}
                            className="animate__zoomInDown animate__animated"
                        />

                        {/* to swip products */}
                        <div className="flex flex-row justify-center space-x-4 p-5">
                            <label className="relative flex items-center cursor-pointer">
                                <Link to="/products/1" scroll={false}>
                                    <input
                                        checked={id === "1"}
                                        className="sr-only peer"
                                        name="futuristic-radio"
                                        type="radio"
                                        value="1"
                                    />
                                    <div className="w-6 h-6 bg-transparent border-2 border-white-500 rounded-full peer-checked:bg-purple-500 peer-checked:border-purple-500 peer-hover:shadow-lg peer-hover:shadow-purple-500/50 peer-checked:shadow-lg peer-checked:shadow-purple-500/50 transition duration-300 ease-in-out"></div>
                                </Link>
                            </label>

                            <label className="relative flex items-center cursor-pointer">
                                <Link to="/products/2" scroll={false}>
                                    <input
                                        checked={id === "2"}
                                        className="sr-only peer"
                                        name="futuristic-radio"
                                        type="radio"
                                        value="2"
                                    />
                                    <div className="w-6 h-6 bg-transparent border-2 border-white-500 rounded-full peer-checked:bg-sky-500 peer-checked:border-sky-500 peer-hover:shadow-lg peer-hover:shadow-sky-500/50 peer-checked:shadow-lg peer-checked:shadow-sky-500/50 transition duration-300 ease-in-out"></div>
                                </Link>
                            </label>

                            <label className="relative flex items-center cursor-pointer">
                                <Link to="/products/3" scroll={false}>
                                    <input
                                        checked={id === "3"}
                                        className="sr-only peer"
                                        name="futuristic-radio"
                                        type="radio"
                                        value="3"
                                    />
                                    <div className="w-6 h-6 bg-transparent border-2 border-white-900 rounded-full peer-checked:bg-yellow-900 peer-checked:border-yellow-900 peer-hover:shadow-lg peer-hover:shadow-yellow-500/50 peer-checked:shadow-lg peer-checked:shadow-yellow-900/50 transition duration-300 ease-in-out"></div>
                                </Link>
                            </label>

                            <label className="relative flex items-center cursor-pointer">
                                <Link to="/products/4" scroll={false}>
                                    <input
                                        checked={id === "4"}
                                        className="sr-only peer"
                                        name="futuristic-radio"
                                        type="radio"
                                        value="4"
                                    />
                                    <div className="w-6 h-6 bg-transparent border-2 border-white-800 rounded-full peer-checked:bg-yellow-800 peer-checked:border-yellow-800 peer-hover:shadow-lg peer-hover:shadow-yellow-800/50 peer-checked:shadow-lg peer-checked:shadow-yellow-900/50 transition duration-300 ease-in-out"></div>
                                </Link>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 sm:col-span-6 order-2 sm:order-1 flex px-6 justify-around">
                    <div className="gap-4 grid grid-cols-12">
                        <div className="flex flex-col col-span-12 lg:col-span-6">
                            <div className="table-container">
                                <div className="-m-1.5 overflow-x-auto">
                                    <div className="p-1.5 min-w-full inline-block align-middle">
                                        <div className="border rounded-lg shadow overflow-hidden">
                                            <table className="min-h-[400px] min-w-full divide-y divide-gray-200">
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-nowrap text-xs text-neutral-200">
                                                            {t(
                                                                `Product:4:energyTitle`
                                                            )}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-xs text-neutral-200">
                                                            {t(
                                                                `Product:${
                                                                    id - 1
                                                                }:nutritionalInfo:energy`
                                                            )}
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-neutral-200">
                                                            {t(
                                                                `Product:4:fatsTitle`
                                                            )}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-xs text-neutral-200">
                                                            {t(
                                                                `Product:${
                                                                    id - 1
                                                                }:nutritionalInfo:fats`
                                                            )}
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-neutral-200">
                                                            {t(
                                                                `Product:4:carbohydratesTitle`
                                                            )}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-xs text-neutral-200">
                                                            {t(
                                                                `Product:${
                                                                    id - 1
                                                                }:nutritionalInfo:carbohydrates`
                                                            )}
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-nowrap text-xs text-neutral-200">
                                                            {t(
                                                                `Product:4:proteinsTitle`
                                                            )}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-xs text-neutral-200">
                                                            {t(
                                                                `Product:${
                                                                    id - 1
                                                                }:nutritionalInfo:proteins`
                                                            )}
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-neutral-200">
                                                            {t(
                                                                `Product:4:saltTitle`
                                                            )}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-xs text-neutral-200">
                                                            {t(
                                                                `Product:${
                                                                    id - 1
                                                                }:nutritionalInfo:salt`
                                                            )}
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-neutral-200">
                                                            {t(
                                                                `Product:4:sugarsTitle`
                                                            )}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-xs text-neutral-200">
                                                            {t(
                                                                `Product:${
                                                                    id - 1
                                                                }:nutritionalInfo:sugars`
                                                            )}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between col-span-12 lg:col-span-6">
                            <div className="table-container">
                                <div className="-m-1.5 overflow-x-auto">
                                    <div className="p-1.5 min-w-auto inline-block align-middle">
                                        <div className="border rounded-lg shadow overflow-hidden">
                                            <table className="min-h-[400px] min-w-full divide-y divide-gray-200">
                                                <tbody className="min-w-full divide-y divide-gray-200">
                                                    <tr>
                                                        <td className="px-6 py-4 text-xs text-neutral-200">
                                                            <span className="text-sm font-bold">
                                                                {t(
                                                                    `Product:4:doughTitle`
                                                                )}
                                                            </span>
                                                            <br />
                                                            {t(
                                                                `Product:${
                                                                    id - 1
                                                                }:ingredients:dough`
                                                            )}
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="px-6 py-4 text-xs text-neutral-200">
                                                            <span className="text-sm font-bold">
                                                                {t(
                                                                    `Product:4:additivesTitle`
                                                                )}
                                                            </span>
                                                            <br />
                                                            {t(
                                                                `Product:${
                                                                    id - 1
                                                                }:ingredients:additives`
                                                            )}
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="px-6 py-4 text-xs text-neutral-200">
                                                            <span className="text-sm">
                                                                {t(
                                                                    `Product:4:flavoringsTitle`
                                                                )}
                                                            </span>
                                                            <br />
                                                            {t(
                                                                `Product:${
                                                                    id - 1
                                                                }:ingredients:flavorings`
                                                            )}
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="px-6 py-4 text-xs text-neutral-200">
                                                            <span className="text-sm">
                                                                {t(
                                                                    `Product:4:fillingTitle`
                                                                )}
                                                            </span>
                                                            <br />
                                                            {t(
                                                                `Product:${
                                                                    id - 1
                                                                }:ingredients:filling`
                                                            )}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Product;

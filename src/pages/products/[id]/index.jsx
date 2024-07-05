// DynamicPage.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../../../components/navbar";
import Product from "../../../components/product";

import logoMain from "../../../pics/logoMain.png"; // Adjust the import path as needed
import logo1 from "../../../pics/logo1.png"; // Adjust the import path as needed
import logo2 from "../../../pics/logo2.png"; // Adjust the import path as needed

import HeroImg1 from "../../../pics/HeroImg1.png"; // Adjust the import path as needed
import HeroImg2 from "../../../pics/HeroImg2.png"; // Adjust the import path as needed
import HeroImg3 from "../../../pics/HeroImg3.png"; // Adjust the import path as needed
import HeroImg4 from "../../../pics/HeroImg4.png"; // Adjust the import path as needed

import ProductImg1 from "../../../pics/ProductImg1.png"; // Adjust the import path as needed
import ProductImg2 from "../../../pics/ProductImg2.png"; // Adjust the import path as needed
import ProductImg3 from "../../../pics/ProductImg3.png"; // Adjust the import path as needed
import ProductImg4 from "../../../pics/ProductImg4.png"; // Adjust the import path as needed

import ProductTitle1 from "../../../pics/productTitle1.png"; // Adjust the import path as needed
import ProductTitle2 from "../../../pics/productTitle2.png"; // Adjust the import path as needed
import ProductTitle3 from "../../../pics/productTitle3.png"; // Adjust the import path as needed
import ProductTitle4 from "../../../pics/productTitle4.png"; // Adjust the import path as needed

const DynamicPage = () => {
    const { id } = useParams();
    const { t } = useTranslation("Product");

    const [logoImg, setLogoImg] = useState(logoMain);
    const [bgColorDiv, setBgColorDiv] = useState("Gray");
    const [bgColorEnd, setBgColorEnd] = useState("Gray");
    const [fontColor, setFontColor] = useState("black");
    const [fontFamily, setFontFamily] = useState(ProductTitle1);

    const HeroImg = [HeroImg4, HeroImg3, HeroImg2, HeroImg1];
    const ProductImg = [ProductImg4, ProductImg3, ProductImg2, ProductImg1];

    useEffect(() => {
        switch (id) {
            case "4":
                setLogoImg(logo1);
                setBgColorDiv("#FDCF85");
                setBgColorEnd("#977C4F");
                setFontColor("#863A20");
                setFontFamily(ProductTitle1);
                break;
            case "3":
                setLogoImg(logo2);
                setBgColorDiv("#E2AF00");
                setBgColorEnd("#7C6000");
                setFontColor("#863A20");
                setFontFamily(ProductTitle2);
                break;
            case "2":
                setLogoImg(logoMain);
                setBgColorDiv("#00A7E1");
                setBgColorEnd("#005B7B");
                setFontColor("white");
                setFontFamily(ProductTitle3);
                break;
            default:
                setLogoImg(logoMain);
                setBgColorDiv("#4325c7");
                setBgColorEnd("#211261");
                setFontColor("#FFC557");
                setFontFamily(ProductTitle4);
                break;
        }
    }, [id]);

    return (
        <div style={{ background: bgColorDiv }}>
            <Navbar logoImg={logoImg} bgColor="transparent" />
            <div className="flex justify-center items-center"></div>
            <Product
                id={id}
                name={t(`${id - 1}.name`)}
                savor={t(`${id - 1}.savor`)}
                nutritionalInfo={t(`${id - 1}.nutritionalInfo`)}
                ingredients={t(`${id - 1}.ingredients`)}
                ProductImg={ProductImg[id - 1]}
                HeroImg={HeroImg[id - 1]}
                bgColorDiv={bgColorDiv}
                bgColorEnd={bgColorEnd}
                fontColor={fontColor}
                fontFamily={fontFamily}
                price={t(`${id - 1}.price`)}
            />
        </div>
    );
};

export default DynamicPage;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    EN: {
  
            Navbar: {
                contact: "Contact",
                product: "Products",
                home: "Home",
                location: "Location",
                heroContent1:
                    "We understand that you might have burning questions or other things running through your mind. That's why our team of experts are on hand to lend a hand when you need it.",
                heroContent2:
                    "We take seriously the trust you place in us when you share your personal data with us. We always process your data fairly, respectfully, and proportionate to the purpose mentioned above.",
            },

            Contact: {
                title: "Our Dear Customers.",

                content1:
                    "We are aware that you might have burning questions or all sorts of things on your mind. That is why our team of experts is at your disposal to give you a helping hand whenever you need it.",

                content2:
                    "We take seriously the trust you place in us when you share your personal data with us. We always handle your data fairly, respectfully, and in a manner proportionate to the purpose mentioned above.",

                emailTitle: "Send Us an Email",
                emailContent:
                    "We will send the answers you are looking for directly to your inbox.",

                phoneTitle: "Call Us",
                phoneContent:
                    "Our advisors are available from Sunday to Thursday from 8 AM to 6 PM and on Friday from 8 AM to 4 PM at the following number.",
                phoneContent2:
                    "Our advisors are available from Sunday to Thursday from 8 AM to 6 PM and on Friday from 8 AM to 4 PM .",

                locationTitle: "Write to Us",
                locationContent:
                    "You will receive our expert advice directly at your home.",
            },
            Footer: {
                title: "Join us on",
            },
            Product: [
                {
                    id: "1",

                    name: " Galette",
                    savor: "Milk biscuit",
                    nutritionalInfo: {
                        energy: "475 kcal",
                        fats: "21 g",
                        carbohydrates: "65.2 g",
                        proteins: "7.2 g",
                        salt: "0.107 g",
                        sugars: "45.2 g",
                    },
                    ingredients: {
                        dough: "Wheat flour, sugar, vegetable fat, Sugar, invert sugar, whey (milk), salt",
                        additives:
                            "Flour IV, salts, sodium carbonates code E500 (ii), disodium phosphoric acid",
                        flavorings: "Butter, vanillin, preservative, enzyme",
                        filling:
                            "Sugar, vegetable fat, palm oil, natural cocoa butter",
                    },
                    rating: 5,
                    pricee: "50",
                },
                {
                    id: "2",
                    name: "Cacaoté Biscuit filled ",
                    savor: "with cream vanilla flavor",
                    nutritionalInfo: {
                        energy: "475 kcal",
                        fats: "21 g",
                        carbohydrates: "65.2 g",
                        proteins: "7.2 g",
                        salt: "0.107 g",
                        sugars: "45.2 g",
                    },
                    ingredients: {
                        dough: "Wheat flour, sugar, vegetable fat, Sugar, invert sugar, whey, salt",
                        additives:
                            "Flour IV, sodium carbonates code E500 (ii), disodium phosphoric acid",
                        flavorings: "Butter, vanillin, preservative, enzyme",
                        filling:
                            "Sugar, vegetable fat, palm oil, natural cocoa butter",
                    },
                    rating: 1,
                    pricee: "10",
                },
                {
                    id: "3",
                    name: "Biscuit filled ",
                    savor: "with cream flavor cocoa",
                    nutritionalInfo: {
                        energy: "495.2 kcal",
                        fats: "21 g",
                        carbohydrates: "65.2 g",
                        proteins: "7.2 g",
                        salt: "0.107 g",
                        sugars: "45.2 g",
                    },
                    ingredients: {
                        dough: "Wheat flour, sugar, vegetable fat, Sugar, invert sugar, whey (milk), salt",
                        additives:
                            "Flour IV, salts, sodium carbonates code E500 (ii), disodium phosphoric acid",
                        flavorings: "Butter, vanillin, preservative, enzyme",
                        filling:
                            "Sugar, vegetable fat, palm oil, natural cocoa butter",
                    },
                    rating: 5,
                    pricee: "10",
                },
                {
                    id: "4",
                    name: "Biscuit filled ",
                    savor: "with cream chocolate taste",
                    nutritionalInfo: {
                        energy: "479 kcal",
                        fats: "21 g",
                        carbohydrates: "65.2 g",
                        proteins: "7.2 g",
                        salt: "0.107 g",
                        sugars: "45.2 g",
                    },
                    ingredients: {
                        dough: "Wheat flour, sugar, vegetable fat, Sugar, invert sugar, whey, salt",
                        additives:
                            "Flour IV, sodium carbonates code E500 (ii), disodium phosphoric acid",
                        flavorings: "Butter, vanillin, preservative, enzyme",
                        filling:
                            "Sugar, vegetable fat, palm oil, natural cocoa butter",
                    },
                    rating: 5,
                    pricee: "50",
                },
                {
                    energyTitle: "Energy",
                    fatsTitle: "Fat",
                    carbohydratesTitle: "Carbohydrates",
                    proteinsTitle: "Proteins",
                    saltTitle: "Salt",
                    sugarsTitle: "Sugars",

                    doughTitle: "Dough Ingredients",
                    additivesTitle: "Food additives",
                    flavoringsTitle: "Artificial flavors",
                    fillingTitle: "Cream filling:",
                },
            ],
  
    },
    AR: {
     
            Navbar: {
                contact: "اتصل بنا",
                product: "المنتجات",
                home: "الرئيسية",
                location: " الموقع",
                heroContent1:
                    "نحن نتفهم أنه قد تكون لديك أسئلة ملحة أو أشياء أخرى تدور في ذهنك. ولهذا السبب فإن فريق الخبراء لدينا جاهز لتقديم المساعدة عندما تحتاج إليها.",
                heroContent2:
                    "نحن نأخذ على محمل الجد الثقة التي تضعها فينا عندما تشارك بياناتك الشخصية معنا. نحن دائمًا نعالج بياناتك بشكل عادل، ومحترم، ومتناسب مع الغرض المذكور أعلاه.",
            },
            Contact: {
                title: "عملاؤنا الأعزاء.",

                content1:
                    "نحن ندرك أنه قد تكون لديك أسئلة محرقة أو كل أنواع الأشياء في ذهنك. لهذا السبب فإن فريقنا من الخبراء جاهز لمساعدتك متى احتجت إلى ذلك.",

                content2:
                    "نحن نأخذ الثقة التي تضعها فينا عندما تشارك بياناتك الشخصية معنا على محمل الجد. نتعامل دائمًا مع بياناتك بشكل عادل واحترافي وبطريقة تتناسب مع الغرض المذكور أعلاه.",

                emailTitle: "أرسل لنا بريدًا إلكترونيًا",
                emailContent:
                    "سنرسل الإجابات التي تبحث عنها مباشرة إلى صندوق البريد الوارد الخاص بك.",

                phoneTitle: "اتصل بنا",
                phoneContent:
                    "مستشارونا متاحون من الأحد إلى الخميس من الساعة 8 صباحًا حتى 6 مساءً ويوم الجمعة من الساعة 8 صباحًا حتى 4 مساءً على الرقم التالي.",
                phoneContent2:
                    "مستشارونا متاحون من الأحد إلى الخميس من الساعة 8 صباحًا حتى 6 مساءً ويوم الجمعة من الساعة 8 صباحًا حتى 4 مساءً",

                locationTitle: "اكتب لنا",
                locationContent: "ستتلقى نصائح خبرائنا مباشرة في منزلك.",
            },
            Footer: {
                title: "انضم إلينا على",
            },
            Product: [
                {
                    id: "1",

                    name: "جاليت",
                    savor: "بسكويت حليب",
                    nutritionalInfo: {
                        energy: "475 سعرة حرارية",
                        fats: "21 جرام",
                        carbohydrates: "65.2 جرام",
                        proteins: "7.2 جرام",
                        salt: "0.107 جرام",
                        sugars: "45.2 جرام",
                    },
                    ingredients: {
                        dough: "دقيق القمح ، السكر ، دهون نباتية ، سكر ، سكر معكوس ، مصل اللبن (حليب) ، ملح",
                        additives:
                            "دقيق IV ، أملاح ، كربونات الصوديوم كود E500 (ii) ، حمض الفوسفوريك ثنائي الصوديوم",
                        flavorings: "زبدة ، فانيلين ، محافظ ، إنزيم",
                        filling:
                            "السكر ، الدهون النباتية ، زيت النخيل ، زبدة الكاكاو الطبيعية",
                    },
                    rating: 5,
                    pricee: "50",
                },
                {
                    id: "2",
                    name: "بسكويت كاكاوتي محشو",
                    savor: "بكريمة بنكهة الفانيليا",
                    nutritionalInfo: {
                        energy: "475 سعرة حرارية",
                        fats: "21 جرام",
                        carbohydrates: "65.2 جرام",
                        proteins: "7.2 جرام",
                        salt: "0.107 جرام",
                        sugars: "45.2 جرام",
                    },
                    ingredients: {
                        dough: "دقيق القمح ، السكر ، دهون نباتية ، سكر ، سكر معكوس ، مصل اللبن ، ملح",
                        additives:
                            "دقيق IV ، كربونات الصوديوم كود E500 (ii) ، حمض الفوسفوريك ثنائي الصوديوم",
                        flavorings: "زبدة ، فانيلين ، محافظ ، إنزيم",
                        filling:
                            "السكر ، الدهون النباتية ، زيت النخيل ، زبدة الكاكاو الطبيعية",
                    },
                    rating: 1,
                    pricee: "10",
                },
                {
                    id: "3",
                    name: "بسكويت محشو",
                    savor: "بكريمة بنكهة الكاكاو",
                    nutritionalInfo: {
                        energy: "495.2 سعرة حرارية",
                        fats: "21 جرام",
                        carbohydrates: "65.2 جرام",
                        proteins: "7.2 جرام",
                        salt: "0.107 جرام",
                        sugars: "45.2 جرام",
                    },
                    ingredients: {
                        dough: "دقيق القمح ، السكر ، دهون نباتية ، سكر ، سكر معكوس ، مصل اللبن (حليب) ، ملح",
                        additives:
                            "دقيق IV ، أملاح ، كربونات الصوديوم كود E500 (ii) ، حمض الفوسفوريك ثنائي الصوديوم",
                        flavorings: "زبدة ، فانيلين ، محافظ ، إنزيم",
                        filling:
                            "السكر ، الدهون النباتية ، زيت النخيل ، زبدة الكاكاو الطبيعية",
                    },
                    rating: 5,
                    pricee: "10",
                },
                {
                    id: "4",
                    name: "بسكويت محشو",
                    savor: "بكريمة بنكهة الشوكولاتة",
                    nutritionalInfo: {
                        energy: "479 سعرة حرارية",
                        fats: "21 جرام",
                        carbohydrates: "65.2 جرام",
                        proteins: "7.2 جرام",
                        salt: "0.107 جرام",
                        sugars: "45.2 جرام",
                    },
                    ingredients: {
                        dough: "دقيق القمح ، السكر ، دهون نباتية ، سكر ، سكر معكوس ، مصل اللبن ، ملح",
                        additives:
                            "دقيق IV ، كربونات الصوديوم كود E500 (ii) ، حمض الفوسفوريك ثنائي الصوديوم",
                        flavorings: "زبدة ، فانيلين ، محافظ ، إنزيم",
                        filling:
                            "السكر ، الدهون النباتية ، زيت النخيل ، زبدة الكاكاو الطبيعية",
                    },
                    rating: 5,
                    pricee: "50",
                },
                {
                    energyTitle: "الطاقة",
                    fatsTitle: "الدهون",
                    carbohydratesTitle: "الكربوهيدرات",
                    proteinsTitle: "البروتينات",
                    saltTitle: "الملح",
                    sugarsTitle: "السكريات",
                    doughTitle: "مكونات العجين",
                    additivesTitle: "إضافات غذائية",
                    flavoringsTitle: "نكهات اصطناعية",
                    fillingTitle: "حشوة الكريمة:",
                },
            ],
       
    },
    FR: {
    
            Navbar: {
                contact: "Contactez-nous",
                product: "Nos produits",
                home: "Accueil",
                location: "Localisation",
                heroContent1:
                    "Nous sommes conscients que vous pourriez avoir des questions brûlantes ou toute sorte de choses qui vous traversent l'esprit. C'est pourquoi notre équipe d'experts se tient à votre disposition pour vous donner un coup de main lorsque vous en avez besoin.",
                heroContent2:
                    "Nous prenons au sérieux la confiance que vous nous accordez lorsque vous partagez vos données personnelles avec nous. Nous traitons toujours vos données de manière juste, respectueuse, et proportionnée au but mentionné ci-dessus.",
            },

            Contact: {
                title: "Nos chéres clients.",

                content1:
                    "Nous sommes conscients que vous pourriez avoir des questions brûlantes ou toute sorte de choses qui vous traversent l'esprit. C'est pourquoi notre équipe d'experts se tient à votre disposition pour vous donner un coup de main lorsque vous en avez besoin. ",

                content2:
                    "Nous prenons au sérieux la confiance que vous nous accordez lorsque vous partagez vos données personnelles avec nous. Nous traitons toujours vos données de manière juste, respectueuse, et proportionnée au but mentionné ci-dessus.",

                emailTitle: "Envoyez-nous un email",
                emailContent:
                    "Nous enverrons les réponses que vous cherchez directement dans votre boîte de réception.",

                phoneTitle: "Appelez-nous",
                phoneContent:
                    "Nos conseillers sont disponibles du Dimanche au Jeudi de 8h à 18h et le vendredi de 8h à 16h en appelant le numéro suivant.",
                phoneContent2:
                    "Nos conseillers sont disponibles du Dimanche au Jeudi de 8h à 18h et le vendredi de 8h à 16h .",

                locationTitle: "Ecrivez-nous",
                locationContent:
                    "Vous recevrez nos conseils experts directement chez vous.",
            },
            Footer: {
                title: "Rejoignez-nous sur",
            },
            Product: [
                {
                    id: "1",
                    name: "Galette ",
                    savor: "Biscuit au lait",

                    nutritionalInfo: {
                        energy: "475 kcal",
                        fats: "21 g",
                        carbohydrates: "65.2 g",
                        proteins: "7.2 g",
                        salt: "0.107 g",
                        sugars: "45.2 g",
                    },
                    ingredients: {
                        dough: "Farine de blé, sucre, graisse végétale, Sucre, invert sucre, lactosérum (lait), sel",
                        additives:
                            "Farine IV, sels, carbonates à code de sodium  E500 (ii), phosphorique acide di sodium",
                        flavorings: "Beurre, vanilline, conservateur, enzyme",
                        filling:
                            "Sucre, graisse végétale, huile de palme, beurre de cacao naturel",
                    },
                    rating: 5,
                    pricee: "50",
                },
                {
                    id: "2",
                    name: "Biscuit Cacaoté",
                    savor: " fourré crème saveur vanille",
                    nutritionalInfo: {
                        energy: "475 kcal",
                        fats: "21 g",
                        carbohydrates: "65.2 g",
                        proteins: "7.2 g",
                        salt: "0.107 g",
                        sugars: "45.2 g",
                    },
                    ingredients: {
                        dough: "Farine de blé, sucre, graisse végétale, Sucre, invert sucre, lactosérum, sel",
                        additives:
                            "Farine IV, carbonates à code de sodium  E500 (ii) \n, phosphorique acide di sodium",
                        flavorings: "Beurre, vanilline, conservateur, enzyme",
                        filling:
                            "Sucre, graisse végétale, huile de palme, beurre de cacao naturel",
                    },
                    rating: 1,
                    pricee: "10",
                },
                {
                    id: "3",
                    name: "Biscuit fourré  ",
                    savor: " crème saveur cacao",
                    nutritionalInfo: {
                        energy: "495.2 kcal",
                        fats: "21 g",
                        carbohydrates: "65.2 g",
                        proteins: "7.2 g",
                        salt: "0.107 g",
                        sugars: "45.2 g",
                    },
                    ingredients: {
                        dough: "Farine de blé, sucre, graisse végétale, Sucre, invert sucre, lactosérum (lait), sel",
                        additives:
                            "Farine IV, sels, carbonates à code de sodium  E500 (ii), phosphorique acide di sodium",
                        flavorings: "Beurre, vanilline, conservateur, enzyme",
                        filling:
                            "Sucre, graisse végétale, huile de palme, beurre de cacao naturel",
                    },
                    rating: 5,
                    pricee: "10",
                },
                {
                    id: "4",

                    name: "Biscuit fourré",
                    savor: " à la crème goût chocolat",
                    nutritionalInfo: {
                        energy: "479 kcal",
                        fats: "21 g",
                        carbohydrates: "65.2 g",
                        proteins: "7.2 g",
                        salt: "0.107 g",
                        sugars: "45.2 g",
                    },
                    ingredients: {
                        dough: "Farine de blé, sucre, graisse végétale, Sucre,  invert sucre, lactosérum, sel",
                        additives:
                            "Farine IV, carbonates à code de sodium  E500 (ii), phosphorique acide de sodium",
                        flavorings: "Beurre, vanilline, conservateur, enzyme",
                        filling:
                            "Sucre, graisse végétale, huile de palme, beurre de cacao naturel",
                    },
                    rating: 5,
                    pricee: "50",
                },
                {
                    energyTitle: "Energie",
                    fatsTitle: "Lipides",
                    carbohydratesTitle: "Glucides",
                    proteinsTitle: "Protéines",
                    saltTitle: "Sel",
                    sugarsTitle: "Sucres",

                    doughTitle: "Ingrédients Pate",
                    additivesTitle: "Additifs alimentares",
                    flavoringsTitle: "Arômes artificielle",
                    fillingTitle: "Créme de fourrage:",
                },
            ],
        },

};

i18n.use(initReactI18next).init({
    resources,
    lng: "EN",

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;

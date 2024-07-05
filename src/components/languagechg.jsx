"use client";

import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "./navigation";

export default function LanguageChanger({ locale }) {
    const { i18n } = useTranslation();
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (e) => {
        const newLocale = e.target.value;
        i18n.changeLanguage(newLocale); // Change language in i18next
        router.push(pathname, { locale: newLocale });
        router.refresh();
    };

    return (
        <select
            value={locale}
            onChange={handleChange}
            className="bg-transparent rounded-md mt-4 text-white"
        >
            <option value="en" className="bg-slate-500">
                En
            </option>
            <option value="fr" className="bg-slate-500">
                Fr
            </option>
            <option value="ar" className="bg-slate-500">
                Ar
            </option>
        </select>
    );
}

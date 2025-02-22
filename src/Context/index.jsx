import { RouterProvider } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import router from "../router";

import i18n from "../i18n";

const Context = () => {
    return (
        <I18nextProvider i18n={i18n}>
            <RouterProvider router={router} />
        </I18nextProvider>
    );
};

export default Context;

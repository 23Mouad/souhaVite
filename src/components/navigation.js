// navigation.js or navigation.ts
import { useNavigate, useLocation } from "react-router-dom";

export const useRouter = () => {
    const navigate = useNavigate();
    return {
        push: (path, options) => navigate(path, options),
        refresh: () => window.location.reload(),
    };
};

export const usePathname = () => {
    const location = useLocation();
    return location.pathname;
};

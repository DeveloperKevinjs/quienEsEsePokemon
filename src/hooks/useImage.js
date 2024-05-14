import { useEffect, useState } from "react";
import { getUrlImage } from "../logic/getUrlImage";
export function useImage() {
    const [urlImage, setUrlImage] = useState(null);
    const refresh = () => {
        getUrlImage().then((newUrlImg) => setUrlImage(newUrlImg));
    };
    useEffect(() => {
        refresh();
    }, []);
    return { urlImage, refresh };
}

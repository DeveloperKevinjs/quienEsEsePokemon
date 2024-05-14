import { useEffect, useState } from "react";
import { getOption } from "../logic/getOption";
export function useOptions({ urlImage }) {
    const [option, setOption] = useState(null);
    useEffect(() => {
        if (!urlImage) return;
        console.log(getOption());
        getOption().then((newOption) => setOption(newOption));
    }, [urlImage]);
    return { option };
}

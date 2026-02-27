import { useState, useEffect } from "react";


export default function UseLocalStorage(key, defaultValue) {

    const [value, setValue] = useState(() => {
        let Currentvalue;
        try{
            Currentvalue = JSON.parse(localStorage.getItem(key) || String(defaultValue));

        }catch(e) {
            Currentvalue = defaultValue;
        }
        return Currentvalue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value]);

    return [value, setValue]
}

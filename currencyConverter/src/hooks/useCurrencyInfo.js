import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    let [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/4030d517d36c416fca2e061d/latest/${currency}`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]));
        console.log(data);
    }, [currency]);
    console.log(data);
    return data;
}

export default useCurrencyInfo;
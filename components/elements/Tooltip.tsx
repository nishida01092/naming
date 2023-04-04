// components/Button.tsx
import {css} from "@emotion/css";
import axios,{AxiosRequestConfig} from "axios";
import { useState,useEffect } from "react";

type Tooltip = {
    id:number;
    word:string;
    description:string;
    asking: string;
    feedback:{
        feedback_name: string | number | readonly string[] | undefined;key: string
}[];
}
type Props = {
    id:number;
}
const options:AxiosRequestConfig ={
    url:"http://localhost:3100/tooltip",
    method:"GET"
}

function Tooltip(props:Props){
    const [tooltip,setTooltip] = useState<Tooltip[]>([]);
    useEffect(() => {
        axios(options)
        .then(response => setTooltip(response.data))
        .catch();
    }, []);
    const pallet = tooltip[tooltip.findIndex(data => data.id === props.id)];
    console.log(pallet)
    if(pallet == undefined){return <></>;}

    return(
        <div>
            <dl>
                <dt>{pallet.word}</dt>
                <dd>{pallet.description}</dd>
            </dl>
            <div>
                <p>{pallet.asking}</p>
                <form action="">
                    {pallet.feedback.map((object)=><input value={object.feedback_name}/>)}
                </form>
            </div>
        </div>
    )
}
export default Tooltip;
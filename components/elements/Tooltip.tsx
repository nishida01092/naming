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
        feedback_id: number;
        feedback_name: string | readonly string[] ;key: string
}[];
}
type Props = {
    id:number;
}
const GETOPTION:AxiosRequestConfig ={
    url:"http://localhost:3100/tooltip",
    method:"GET"
}
const POSTOPTION:AxiosRequestConfig ={
    url:"http://localhost:3100/tooltip",
    method:"POST"
}

function Tooltip(props:Props){
    const [tooltip,setTooltip] = useState<Tooltip[]>([]);
    useEffect(() => {
        axios(GETOPTION)
        .then(response => setTooltip(response.data))
        .catch();
    }, []);
    const pallet = tooltip[tooltip.findIndex(data => data.id === props.id)];
    if(pallet == undefined){return <></>;}
    const postFeedback = (e:any)=>{
        const target = e.currentTarget.getAttribute('data-id')
        axios.post('http://localhost:3100/tooltip',{
            feedback_id:target
        })
        .catch();
    }

    return(
        <div>
            <dl>
                <dt>{pallet.word}</dt>
                <dd>{pallet.description}</dd>
            </dl>
            <div>
                <p>{pallet.asking}</p>
                <form action="http://localhost:3100/tooltip" method="POST">
                    {pallet.feedback.map(
                        (box)=>{
                            return <input key={box.feedback_id}
                                          value={box.feedback_name}
                                          type="button"
                                          data-id={box.feedback_id}
                                          onClick={postFeedback}
                                    />
                                })
                    }
                </form>
            </div>
        </div>
    )
}
export default Tooltip;
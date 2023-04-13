import axios,{AxiosRequestConfig} from "axios";
import { useState,useEffect } from "react";
import { API_URL } from "@/config/config";

type Tooltip = {
    id:number;
    word:string;
    description:string;
    asking: string;
    feedbacks:{
        feedback_id: number;
        feedback_name: string | readonly string[] ;
        key: string
}[];
}
type Props = {
    tooltipId:number;
}
const GETOPTION:AxiosRequestConfig ={
    url:`${API_URL}tooltip/index`,
    method:"GET"
}
const POSTOPTION:AxiosRequestConfig ={
    url:`${API_URL}tooltip/feedback`,
    method:"POST"
}

export function Tooltip(props:Props){
    const tooltipId:number = props.tooltipId;
    //ツールチップAPIを叩いて、ツールチップを生成する。
    const [tooltip,setTooltip] = useState<Tooltip[]>([]);
    useEffect(() => {
        axios(GETOPTION)
        .then(response => setTooltip(response.data.body))
        .catch();
    }, []);
    const pallet = tooltip[tooltip.findIndex(data => data.id === tooltipId)];
    if(pallet == undefined){return <></>;}
    const postFeedback = (feedbackId:number,tooltipId:number)=>{
        axios.post(`${API_URL}tooltip/feedback`,{
            feedback_id:feedbackId
        })
        .then(()=>{hideTooltip(tooltipId)})
        .catch();
    }
    const hideTooltip = (tooltipId:number)=>{
        const elem = document.querySelector(`.tooltip${tooltipId}`);
        if(elem){elem.style.display="none"}
      }
    return(
        <div style={{display:'none'}}
             className={`tooltip tooltip${tooltipId}`}
            >
            <span className="close" onClick={()=>hideTooltip(tooltipId)}></span>
            <dl>
                <dt>{pallet.word}</dt>
                <dd>{pallet.description}</dd>
            </dl>
            <div>
                <p>{pallet.asking}</p>
                <form action="http://localhost:3100/tooltip" method="POST">
                    {pallet.feedbacks.map(
                        (box)=>{
                            return <input key={box.feedback_id}
                                          value={box.feedback_name}
                                          type="button"
                                          onClick={()=>postFeedback(box.feedback_id,tooltipId)}
                                    />
                                })
                    }
                </form>
            </div>
        </div>
    )
}
// export default Tooltip;
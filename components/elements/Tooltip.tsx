// components/Button.tsx
import {css} from "@emotion/react";
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
        feedback_name: string | readonly string[] ;key: string
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

const useTooltip = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const showTooltip = () => {
      console.log("click")
      setIsVisible(true);
    };
  
    const hideTooltip = () => {
      setIsVisible(false);
    };
  
    return {
      isVisible,
      showTooltip,
      hideTooltip
    };
  }
function Tooltip(props:Props){
    
    const { isVisible, showTooltip, hideTooltip } = useTooltip();
    const [tooltip,setTooltip] = useState<Tooltip[]>([]);
    useEffect(() => {
        axios(GETOPTION)
        .then(response => setTooltip(response.data.body))
        .catch();
    }, []);
    const pallet = tooltip[tooltip.findIndex(data => data.id === props.tooltipId)];
    if(pallet == undefined){return <></>;}
    const postFeedback = (e:any)=>{
        const target = e.currentTarget.getAttribute('data-tooltipId')
        axios.post('http://localhost:3100/tooltip',{
            feedback_id:target
        })
        .catch();
    }
    const style = css`
        ${isVisible?'visibility: visible;':'visibility: hidden;'}
    `;
    return(
        <div css={style}
             className="tooltip" id={`tip`+String(props.tooltipId)} 
            >
            <span className="close" onClick={hideTooltip}></span>
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
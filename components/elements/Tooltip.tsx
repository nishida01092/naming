// components/Button.tsx

import {css} from "@emotion/css";

const style = css`
  background-color: #4caf50;
  color: white;
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.3em;
  cursor: pointer;
  &:hover {
    background-color: #3e8e41;
  }
`;

function Tooltip(){
    return(
        <div>
            <dl>
                <dt></dt>
                <dd></dd>
            </dl>
            <div>
                <p></p>
                <form action="">
                    <input type="text" />
                    <input type="text" />
                </form>
            </div>
        </div>
    )
}
export default Tooltip;
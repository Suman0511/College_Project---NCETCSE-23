import "./Comit.css";
import comit from "../asserts/tree.png";
import ADVISORY from "../asserts/committee.png";

function Comit(){
    return(
        <div className="committee">
            <img src={comit} alt=""/>
            <img src={ADVISORY} alt=""/>
        </div>
    )
}

export default Comit;
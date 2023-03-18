import "./query.css";
import Dates from "../asserts/dates.png";
import Map from "../asserts/contact.png";
function Query(){
    return( 
        <div className="query">
           <img src={Dates} alt=""/>
           <img src={Map} alt=""/>

        </div>
    );
}

export default Query;
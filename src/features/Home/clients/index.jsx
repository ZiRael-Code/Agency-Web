import style from "./index.module.css"
import logo from "../../../assets/clients/Logo.png"
import logo1 from "../../../assets/clients/Logo (1).png"
import logo2 from "../../../assets/clients/Logo (2).png"
import logo3 from "../../../assets/clients/Logo (3).png"
import logo4 from "../../../assets/clients/Logo (4).png"
import logo5 from "../../../assets/clients/Logo (5).png"
import logo6 from "../../../assets/clients/Logo (6).png"

const Clients = ()=>{

    return(
       <div>
           <div className={style.headPara}>
               <h1>Our clients</h1>
               <p>We have been working with some Fortune 500+ clients</p>
           </div>
           <br/>
           <div className={style.image}>
               <img src={logo} alt={" "}/>
               <img src={logo1} alt={" "}/>
               <img src={logo2} alt={" "}/>
               <img src={logo3} alt={" "}/>
               <img src={logo4} alt={" "}/>
               <img src={logo5} alt={" "}/>
               <img src={logo6} alt={" "}/>
           </div>
       </div>
    )

}

export default Clients;
import style from "./index.module.css"
import FilledButton from "../../../component/reUseAble/filledButton";
import hero from "../../../assets/hero/Illustration.svg";

const Hero = ()=>{
    return(
        <div className={style.mainCont}>

            <div className={style.innerCont}>
                <h1>Lessons and insights <span style={{color: "#4CAF4F", display: "block"}}>from 8 years</span></h1>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <FilledButton color={"#4CAF4F"} textColor={"#FFFFFF"} text={"Register"} padding={"17px 18px 10px 25px"} border={"none"}/>
            </div>

            <div className={style.heroImg}>
               <img src={hero} alt={" "}/>
            </div>
        </div>
    )
}

export default Hero;
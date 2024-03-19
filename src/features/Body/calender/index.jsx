import pana from "../../../assets/body/pana.png"
import FilledButton from "../../../component/reUseAble/filledButton";
import style from "./index.module.css"

const Calender = ()=>{
    return(
        <div className={style.mainCont}>
            <div className={style.imags}>
               <img src={pana} alt={" "}/>
            </div>

            <div className={style.secondCont}>
                <h1>How to design your site footer like <br/>we did</h1>
                <p>
                    Donec a eros justo. Fusce egestas tristique ultrices.
                    Nam tempor, augue nec tincidunt <br/>molestie, massa nunc varius arcu,
                    at scelerisque elit erat a magna. Donec quis erat at <br/>libero ultrices mollis.
                    In hac habitasse platea dictumst. Vivamus vehicula leo dui,
                    at porta <br/>nisi facilisis finibus. In euismod augue vitae nisi ultricies,
                    non aliquet urna tincidunt. Integer <br/>in nisi eget nulla commodo faucibus efficitur quis massa.
                    Praesent felis est, finibus et nisi <br/>ac, hendrerit venenatis libero.
                    Donec consectetur faucibus ipsum id gravida.

                </p>
                <FilledButton color={"#4CAF4F"} textColor={"#FFF"} text={"Learn more"} border={"3px"} padding={"14px 19px 8px"}/>
            </div>
        </div>
    )
}
export default Calender;
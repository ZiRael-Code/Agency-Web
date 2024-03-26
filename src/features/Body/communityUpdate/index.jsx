import style from "./index.module.css"
import img1 from "../../../assets/body/1.png"
import img2 from "../../../assets/body/2.png"
import img3 from "../../../assets/body/3.png"

const CommunityUpdate = ()=>{
    return(
        <div>
            <div className={style.firstCont}>
                <h1>Caring is the new marketing</h1>
                <p>
                    The Nexcent blog is the best place to read about the latest membership insights,<br/> trends and more.
                    See who's joining the community, read about how our community are <br/>increasing their membership income and lot's more.
                    ​
                </p>
            </div>

            <div className={style.secondCont}>
                <img src={img1} alt={" "}/>
                <img src={img2} alt={" "}/>
                <img src={img3} alt={" "}/>
            </div>
        </div>
    )

}

export default CommunityUpdate;
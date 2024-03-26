import style from "./index.module.css"
import {Content} from "./Data";

const Achievements = ()=>{
    return(
        <div className={style.mainCont}>
            <div className={style.secondDiv}>
                <h1>Helping a local <span style={{display: "block", color: "#4CAF4F", fontWeight: "500", fontSize: "24px", lineHeight: "44px"}}>
                    business reinvent itself
                </span></h1>
                <p className={style.paragraph}>We reached here with our hard work and dedication</p>
            </div>

            <div>
                {
                    Content.map((items, index) => {
                        return (
                            <div key={index} className={style.content}>
                                <img src={items.image} alt={""}/>
                                <div className={style.contentDiv}>
                                <h4 style={{color: "#4D4D4D"}}>{items.h1}</h4>
                                <p style={{color: "#717171"}}>{items.p}</p>
                                </div>
                            </div>

                        )
                    })

                }
            </div>

        </div>
    )

}

export default Achievements;
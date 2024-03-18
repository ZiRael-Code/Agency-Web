import style from "./index.module.css"
import {Content} from "./data";

const Community = ()=>{
    return(
        <div>
            <div className={style.communityHead}>
                <br/>
                <h1>Manage your entire community<br/>in a single system</h1>
                <p>Who is Nexcent suitable for?</p>
            </div>

            <div style={{display: "flex", flexDirection: "row", gap: "30px"}}>
                {
                    Content.map((items, index) => {
                        return (
                            <div key={index} className={style.content}>
                                <img className={style.imgs} src={items.image} alt={""}/>
                                <h1 style={{color: "#4D4D4D"}}>{items.header}</h1>
                                <p style={{color: "#717171", display: "block"}}>{items.paragraph}</p>
                            </div>

                        )
                    })

                }
            </div>
        </div>
    )
}

export default Community;
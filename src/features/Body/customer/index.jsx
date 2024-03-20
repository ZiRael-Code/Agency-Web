import image from "../../../assets/body/image 9.png"
import logo from "../../../assets/clients/Logo.png"
import logo1 from "../../../assets/clients/Logo (1).png"
import logo2 from "../../../assets/clients/Logo (2).png"
import logo3 from "../../../assets/clients/Logo (3).png"
import logo4 from "../../../assets/clients/Logo (4).png"
import logo5 from "../../../assets/clients/Logo (5).png"
import style from "./index.module.css"
import logos from "../../../assets/body/arrow.svg"

const Customer = ()=>{
    return(
        <div className={style.mainCont}>
           <img src={image} alt={" "}/>
            <div className={style.secondCont}>
                <p className={style.firstP}>
                    Maecenas dignissim justo eget nulla rutrum molestie.
                    Maecenas lobortis sem dui, vel rutrum risus <br/>tincidunt ullamcorper.
                    Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida <br/>enim.
                    Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie,<br/>
                    nec molestie mi blandit.
                    Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales.
                    <br/> Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
                    Quisque malesuada enim sapien,<br/> vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                    eget efficitur libero condimentum <br/>id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </p>
                <h3>Tim Smith</h3>
                <p className={style.secondP}>British Dragon Boat Racing Association</p>

                <div className={style.images}>
                    <img src={logo} alt={" "}/>
                    <img src={logo1} alt={" "}/>
                    <img src={logo2} alt={" "}/>
                    <img src={logo3} alt={" "}/>
                    <img src={logo4} alt={" "}/>
                    <img src={logo5} alt={" "}/>
                    <h3>Meet all customers</h3>
                    <img className={style.arrow} src={logos} alt={" "}/>
                </div>

            </div>

        </div>
    )
}

export default Customer;
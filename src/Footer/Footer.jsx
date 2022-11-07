import { Component } from "react"
import styles from "./Footer.module.css"
export class Footer extends Component {
    render() {
        return <>

            <section className={`pt-5 ${styles.bg}`}>
                <div className="container py-5">
                    <div className="row justify-content-between text-center">
                        <div className="col-md-4">
                            <h2>LOCATION</h2>
                            <p>2215 John Daniel Drive Clark,<br></br> MO 65243</p>
                        </div>
                        <div className="col-md-4">
                            <h2>AROUND THE WEB</h2>
                            <div className="w-50 m-auto py-3">
                                <div className="d-flex justify-content-between">

                                    <div className={`${styles.iconSize}`}>
                                        <i class="fa-brands  fa-facebook"></i>
                                    </div>
                                    <div className={`${styles.iconSize}`}>
                                        <i class="fa-brands fa-twitter"></i>
                                    </div>
                                    <div className={`${styles.iconSize}`}>
                                        <i class="fa-brands fa-linkedin-in"></i>                                    </div>
                                    <div className={`${styles.iconSize}`}>
                                        <i class="fa-solid fa-basketball"></i>                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-4">
                            <h2>ABOUT FREELANCER</h2>
                            <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.footerBG} py-5 text-center`}>
                    <p className={`${styles.footerBG}`}>Copyright © Your Website 2021</p>
                </div>
            </section>

        </>
    }
}



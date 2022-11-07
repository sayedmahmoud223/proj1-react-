import React, { Component } from 'react'
import cssPortfolio from './Portfolio.module.css'
import image1 from "./image/cabin.png"
import image2 from "./image/cake.png"
import image3 from "./image/circus.png"
import image4 from "./image/game.png"
import image5 from "./image/safe.png"
import image6 from "./image/submarine.png"
export default class Portfolio extends Component {
    render() {
        return (<>
            <div className='py-5'>
                <h1 className='text-center'>PORTFOLIO</h1>

            </div>
            <div className="container py-5">
                <div className="row g-1">
                    <div className="col-md-4">
                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            {/* <div className="col-md-4"> */}
                            <div className='position-relative'>
                                <img className='img-fluid' src={image1} />
                                <div className={`position-absolute top-0 start-0 d-flex justify-content-center align-items-center w-100 h-100  ${cssPortfolio.layout}`}>
                                    <p>
                                        <i className="fa-solid text-white fa-3x fa-plus"></i>
                                    </p>
                                </div>
                            </div>
                            {/* </div> */}
                        </button>

                        {/* <!-- Modal --> */}
                        
                            <div className="modal w-100 fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className={`modal-dialog ${cssPortfolio.model}`}>
                                <div className="col-md-12">
                                    <div className="modal-content w-100">
                                        <div className={`modal-header w-100 ${cssPortfolio.border_bottom}`}>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div>
                                            <h1 className='text-center'>LOG CABIN</h1>
                                        </div>
                                        <div className="modal-body container">
                                            <img className='img-fluid' src={image1} />
                                            <p className='text-center py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        </div>
                                        <div className={`modal-footer w-100 ${cssPortfolio.border_bottom}`}>
                                            <button type="button" className="btn m-auto btn-success" data-bs-dismiss="modal"> <i className="fa-solid text-white fa-plus"></i> Close window</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                       
                        

                    </div>
                    <div className="col-md-4">
                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModa2">
                            {/* <div className="col-md-4"> */}
                            <div className='position-relative'>
                                <img className='img-fluid' src={image2} />
                                <div className={`position-absolute top-0 start-0 d-flex justify-content-center align-items-center w-100 h-100  ${cssPortfolio.layout}`}>
                                    <p>
                                        <i className="fa-solid text-white fa-3x fa-plus"></i>
                                    </p>
                                </div>
                            </div>
                            {/* </div> */}
                        </button>

                        {/* <!-- Modal --> */}
                        <div className="modal w-100 fade" id="exampleModa2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className={`modal-dialog ${cssPortfolio.model}`}>
                                <div className="modal-content w-100">
                                    <div className={`modal-header w-100 ${cssPortfolio.border_bottom}`}>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div>
                                        <h1 className='text-center'>LOG CABIN</h1>
                                    </div>
                                    <div className="modal-body container">
                                        <img className='img-fluid' src={image2} />
                                        <p className='text-center py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    </div>
                                    <div className={`modal-footer w-100 ${cssPortfolio.border_bottom}`}>
                                        <button type="button" className="btn m-auto btn-success" data-bs-dismiss="modal"> <i className="fa-solid text-white fa-plus"></i> Close window</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModa3">
                            {/* <div className="col-md-4"> */}
                            <div className='position-relative'>
                                <img className='img-fluid' src={image3} />
                                <div className={`position-absolute top-0 start-0 d-flex justify-content-center align-items-center w-100 h-100  ${cssPortfolio.layout}`}>
                                    <p>
                                        <i className="fa-solid text-white fa-3x fa-plus"></i>
                                    </p>
                                </div>
                            </div>
                            {/* </div> */}
                        </button>

                        {/* <!-- Modal --> */}
                        <div className="modal w-100 fade" id="exampleModa3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className={`modal-dialog ${cssPortfolio.model}`}>
                                <div className="modal-content w-100">
                                    <div className={`modal-header w-100 ${cssPortfolio.border_bottom}`}>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div>
                                        <h1 className='text-center'>LOG CABIN</h1>
                                    </div>
                                    <div className="modal-body container">
                                        <img className='img-fluid' src={image3} />
                                        <p className='text-center py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    </div>
                                    <div className={`modal-footer w-100 ${cssPortfolio.border_bottom}`}>
                                        <button type="button" className="btn m-auto btn-success" data-bs-dismiss="modal"> <i className="fa-solid text-white fa-plus"></i> Close window</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModa4">
                            {/* <div className="col-md-4"> */}
                            <div className='position-relative'>
                                <img className='img-fluid' src={image4} />
                                <div className={`position-absolute top-0 start-0 d-flex justify-content-center align-items-center w-100 h-100  ${cssPortfolio.layout}`}>
                                    <p>
                                        <i className="fa-solid text-white fa-3x fa-plus"></i>
                                    </p>
                                </div>
                            </div>
                            {/* </div> */}
                        </button>

                        {/* <!-- Modal --> */}
                        <div className="modal w-100 fade" id="exampleModa4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className={`modal-dialog ${cssPortfolio.model}`}>
                                <div className="modal-content w-100">
                                    <div className={`modal-header w-100 ${cssPortfolio.border_bottom}`}>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div>
                                        <h1 className='text-center'>LOG CABIN</h1>
                                    </div>
                                    <div className="modal-body container">
                                        <img className='img-fluid' src={image4} />
                                        <p className='text-center py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    </div>
                                    <div className={`modal-footer w-100 ${cssPortfolio.border_bottom}`}>
                                        <button type="button" className="btn m-auto btn-success" data-bs-dismiss="modal"> <i className="fa-solid text-white fa-plus"></i> Close window</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModa5">
                            {/* <div className="col-md-4"> */}
                            <div className='position-relative'>
                                <img className='img-fluid' src={image5} />
                                <div className={`position-absolute top-0 start-0 d-flex justify-content-center align-items-center w-100 h-100  ${cssPortfolio.layout}`}>
                                    <p>
                                        <i className="fa-solid text-white fa-3x fa-plus"></i>
                                    </p>
                                </div>
                            </div>
                            {/* </div> */}
                        </button>

                        {/* <!-- Modal --> */}
                        <div className="modal w-100 fade" id="exampleModa5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className={`modal-dialog ${cssPortfolio.model}`}>
                                <div className="modal-content w-100">
                                    <div className={`modal-header w-100 ${cssPortfolio.border_bottom}`}>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div>
                                        <h1 className='text-center'>LOG CABIN</h1>
                                    </div>
                                    <div className="modal-body container">
                                        <img className='img-fluid' src={image5} />
                                        <p className='text-center py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    </div>
                                    <div className={`modal-footer w-100 ${cssPortfolio.border_bottom}`}>
                                        <button type="button" className="btn m-auto btn-success" data-bs-dismiss="modal"> <i className="fa-solid text-white fa-plus"></i> Close window</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div>
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal6">
                                {/* <div className="col-md-4"> */}
                                <div className='position-relative'>
                                    <img className='img-fluid' src={image6} />
                                    <div className={`position-absolute top-0 start-0 d-flex justify-content-center align-items-center w-100 h-100  ${cssPortfolio.layout}`}>
                                        <p>
                                            <i className="fa-solid text-white fa-3x fa-plus"></i>
                                        </p>
                                    </div>
                                </div>
                                {/* </div> */}
                            </button>


                            <div className="modal w-100 fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className={`modal-dialog ${cssPortfolio.model}`}>
                                    <div className="modal-content w-100">
                                        <div className={`modal-header w-100 ${cssPortfolio.border_bottom}`}>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div>
                                            <h1 className='text-center'>LOG CABIN</h1>
                                        </div>
                                        <div className="modal-body container">
                                            <img className='img-fluid' src={image6} />
                                            <p className='text-center py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        </div>
                                        <div className={`modal-footer ${cssPortfolio.border_bottom}`}>
                                            <button type="button" className="btn m-auto btn-success" data-bs-dismiss="modal"> <i className="fa-solid text-white fa-plus"></i> Close window</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        

                        {/* <!-- Modal --> */}
                       

                    </div>
                </div>
            </div>
            
            
                       
        </>


        )
    }
}

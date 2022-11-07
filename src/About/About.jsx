import React, { Component } from 'react'
import cssAbout from "./About.module.css"
export default class About extends Component {
  render() {
    return <>
        <section className={`${cssAbout.bg} py-5`}>
        <h1 className='text-center text-white'>ABOUT</h1>
            <div className={`w-50 m-auto py-4 text-white`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className={`${cssAbout.font}`}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                        <div className="col-md-6">
                            <p className={`${cssAbout.font}`}>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    
    </>
      
    
  }
}

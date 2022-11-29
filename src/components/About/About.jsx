import { Component } from "react";


 

 export class  About extends Component {


  

render(){
    return <>
  <section className="About py-4 text-white">
  <div className="container w-50">
  <h2 className="fw-bold text-center mt-5">ABOUT</h2>
    <div className="divider-custom m-auto">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon "> <i className="fas fa-star"></i> </div>
                    <div className="divider-custom-line"></div>

                </div>

                <div className="row g-4 my-4">
               <div className="col-md-6">
                <div className="about-text">
                <p >Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
               </div>


               <div className="col-md-6">
                <div className="about-text">
                <p >You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                </div>
               </div>
          

               </div>


               </div>

    
  </section>
    </>
}

}

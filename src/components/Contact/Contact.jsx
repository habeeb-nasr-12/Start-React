import { Component } from "react";


 

 export class  Contact extends Component {










      

 

render(){
    return <>
    <section className="Contact py-5">
    <div className="container w-75">
        <h2 className="text-center fw-bold mt-5">CONTACT ME</h2>
        <div className="divider-custom m-auto">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon "> <i className="fas fa-star"></i> </div>
                    <div className="divider-custom-line"></div>
                </div>
                <form >
                    <label htmlFor="name-input" className="namelabel">Name</label>
    <input type="text" id="name-input"  name="Name" className="form-control nameinput my-2 p-4" required  placeholder="Name" />


    
 <label htmlFor="Email-input">Email</label>
    <input type="email" id="Email-input" name="Email" className="form-control emailinput my-2 p-4" required  placeholder="Email" />
   
   
    <label htmlFor="Phone-Number">Phone</label>
    <input type="text" id="Phone-Number"  name="phonenumber" className="form-control  mt-2 mb-3 p-4" required  placeholder="PhoneNumber" />
    
    
    <label htmlFor="message">Message</label>
    <textarea placeholder="Message" className="form-control" name="message" id="message" cols="15" rows="5"></textarea>
    
    <button type="submit" className="btn-primary btn  p-4  my-5">Send</button>
                </form>
    </div>
    </section>
  
  
    



    </>
}

}
import { Component } from "react";


 

 export class  Home extends Component {


  

render(){
    return <>
   <header >
    <div className="container w-75 d-flex flex-column align-items-center">
        
        <img src={require('../../../images/avataaars.jpg') } className="ms-3 mt-5  avataaars" alt="smilingface" />
        <h1 className="my-4 text-white  fw-bold">START REACT</h1>
        <div className="divider-custom m-auto">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon text-white"> <i className="fas fa-star"></i> </div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="text-white my-4 mb-2">Graphic Artist - Web Designer - Illustrator </p>
       
</div>

   </header>
    
    </>
}

}
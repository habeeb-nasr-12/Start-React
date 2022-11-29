import { Component } from "react";


 

 export class  Footer extends Component {


  

render(){
    return <>
    <footer>
        <div className="container w-75">
            <div className="row g-5">
                <div className="col-md-4">
                    <div className="footer-content">
                        <h2 className="fw-bold">LOCATION</h2>
                        <p className="my-3">2215 John Daniel DriveClark, MO 65243</p>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="footer-content">
                        <h2 className="fw-bold">AROUND THE WEB</h2>
                        <div className="icons d-flex mx-auto my-3">
                <div className="icon mx-2"> <i class="fa-brands fa-facebook fa-2x "></i></div>
                <div className="icon mx-2"> <i class="fa-brands fa-twitter fa-2x "></i></div>
                <div className="icon mx-2"> <i class="fa-brands fa-linkedin  fa-2x "></i></div>
                <div className="icon mx-2"> <i class="fa-solid fa-earth-africa fa-2x"></i></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="footer-content">
                        <h2 className="fw-bold"> ABOUT FREELANCER</h2>
                        <p className="my-3">Freelance is a free to use, MIT licensed Bootstrap theme created by Habeeb</p>
                    </div>
                </div>




               

            </div>

        </div>
        
    </footer>
    <div className="last-footer py-2">
            <p className="text-center text-white">Copyright © Your Website 2022</p>
        </div>
    
    </>
}

}
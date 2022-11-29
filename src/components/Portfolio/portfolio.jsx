import { Component } from "react";


 

 export class   Portfoilo extends Component {


  

render(){
    return <>
   <section className="py-4 portfolio">
   <div className="container">
    <h2 className="text-center fw-bold">portfolio</h2>
    <div className="divider-custom m-auto">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon "> <i className="fas fa-star"></i> </div>
                    <div className="divider-custom-line"></div>
                </div>
        <div className="row my-3 g-5">
            <div className="col-md-4 ">
                <div className="item position-relative  " data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src={require("../../images/cabin.png")} className="w-100 rounded" alt="portfolio-img" />
                <div className="layer position-absolute top-0 bottom-0 end-0 start-0 d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-plus text-white fa-2x"></i>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="item position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                <img src={require("../../images/cake.png")} className="w-100 rounded" alt="portfolio-img" />
                <div className="layer position-absolute top-0 bottom-0 end-0 start-0 d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-plus text-white fa-2x"></i>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="item position-relative"  data-bs-toggle="modal" data-bs-target="#exampleModal2">
                <img src={require("../../images/circus.png")} className="w-100 rounded" alt="portfolio-img" />

                 <div className="layer position-absolute top-0 bottom-0 end-0 start-0 d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-plus text-white fa-2x"></i>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="item position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                <img src={require("../../images/game.png")} className="w-100 rounded" alt="portfolio-img" />
                 <div className="layer position-absolute top-0 bottom-0 end-0 start-0 d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-plus text-white fa-2x"></i>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="item position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                <img src={require("../../images/safe.png")} className="w-100 rounded" alt="portfolio-img" />
                 <div className="layer position-absolute top-0 bottom-0 end-0 start-0 d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-plus text-white fa-2x"></i>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="item position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                <img src={require("../../images/submarine.png")} className="w-100 rounded" alt="portfolio-img" />
                 <div className="layer position-absolute top-0 bottom-0 end-0 start-0 d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-plus text-white fa-2x"></i>
                </div>
                </div>
            </div>
        </div>





        





{/*    
<button type="button" class="btn btn-primary" >

</button> */}





   
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">

</button>

   
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">

</button> */}














<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className=" close-model btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body  text-center ">
        <h2 className="fw-bold text-center my-2">LOG CABIN</h2>
           <div className="divider-custom m-auto my-2">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon "> <i className="fas fa-star"></i> </div>
                    <div className="divider-custom-line"></div>
                </div>

                <img src={require("../../images/cabin.png")} className="w-50 my-3" alt="portfoilo-img" />
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officia modi ratione optio dignissimos est. Excepturi commodi facere nam aliquid beatae autem tempora ratione labore dicta perspiciatis vero, omnis esse?</p>

     
        <button type="button" className="btn btn-primary Close-Window" data-bs-dismiss="modal">Close Window</button>
        </div>
     
    </div>
  </div>
</div>


<div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className=" close-model btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body  text-center ">
        <h2 className="fw-bold text-center my-2">TASTY CAKE</h2>
           <div className="divider-custom m-auto my-2">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon "> <i className="fas fa-star"></i> </div>
                    <div className="divider-custom-line"></div>
                </div>

                <img src={require("../../images/cake.png")} className="w-50 my-3" alt="portfoilo-img" />
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officia modi ratione optio dignissimos est. Excepturi commodi facere nam aliquid beatae autem tempora ratione labore dicta perspiciatis vero, omnis esse?</p>

     
        <button type="button" className="btn btn-primary Close-Window" data-bs-dismiss="modal">Close Window</button>
        </div>
     
    </div>
  </div>
</div>

<div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className=" close-model btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body  text-center ">
        <h2 className="fw-bold text-center my-2">CIRCUS TENT</h2>
           <div className="divider-custom m-auto my-2">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon "> <i className="fas fa-star"></i> </div>
                    <div className="divider-custom-line"></div>
                </div>

                <img src={require("../../images/circus.png")} className="w-50 my-3" alt="portfoilo-img" />
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officia modi ratione optio dignissimos est. Excepturi commodi facere nam aliquid beatae autem tempora ratione labore dicta perspiciatis vero, omnis esse?</p>

     
        <button type="button" className="btn btn-primary Close-Window" data-bs-dismiss="modal">Close Window</button>
        </div>
     
    </div>
  </div>
</div>

<div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className=" close-model btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body  text-center ">
        <h2 className="fw-bold text-center my-2">CONTROLLER</h2>
           <div className="divider-custom m-auto my-2">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon "> <i className="fas fa-star"></i> </div>
                    <div className="divider-custom-line"></div>
                </div>

                <img  src={require("../../images/game.png")} className="w-50 my-3" alt="portfoilo-img" />
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officia modi ratione optio dignissimos est. Excepturi commodi facere nam aliquid beatae autem tempora ratione labore dicta perspiciatis vero, omnis esse?</p>

     
        <button type="button" className="btn btn-primary Close-Window" data-bs-dismiss="modal">Close Window</button>
        </div>
     
    </div>
  </div>
</div>


<div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className=" close-model btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body  text-center ">
        <h2 className="fw-bold text-center my-2">LOCKED SAFE</h2>
           <div className="divider-custom m-auto my-2">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon "> <i className="fas fa-star"></i> </div>
                    <div className="divider-custom-line"></div>
                </div>

                <img  src={require("../../images/safe.png")} className="w-50 my-3" alt="portfoilo-img" />
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officia modi ratione optio dignissimos est. Excepturi commodi facere nam aliquid beatae autem tempora ratione labore dicta perspiciatis vero, omnis esse?</p>

     
        <button type="button" className="btn btn-primary Close-Window" data-bs-dismiss="modal">Close Window</button>
        </div>
     
    </div>
  </div>
</div>


<div className="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className=" close-model btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body  text-center ">
        <h2 className="fw-bold text-center my-2">SUBMARINE</h2>
           <div className="divider-custom m-auto my-2">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon "> <i className="fas fa-star"></i> </div>
                    <div className="divider-custom-line"></div>
                </div>

                <img  src={require("../../images/submarine.png")} className="w-50 my-3" alt="portfoilo-img" />
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officia modi ratione optio dignissimos est. Excepturi commodi facere nam aliquid beatae autem tempora ratione labore dicta perspiciatis vero, omnis esse?</p>

     
        <button type="button" className="btn btn-primary Close-Window" data-bs-dismiss="modal">Close Window</button>
        </div>
     
    </div>
  </div>
</div>






   </div>
   </section>
    
    </>
}

}
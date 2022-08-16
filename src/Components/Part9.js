import React from 'react'
import "./THEGEMS.css"
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { IoCall } from "@react-icons/all-files/io5/IoCall";
import { GoMail } from "@react-icons/all-files/go/GoMail";
import { AiOutlineClockCircle } from "@react-icons/all-files/ai/AiOutlineClockCircle";


const Part9 = () => {
  return (
    <>
      <div className=' text-center container-fluid' id='part9div'>

<div className='div9'>

        <CardGroup>
          <Card>

            <Card.Body>
              <div className='mx-1 ' >

                <form >
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input placeholder='Name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /><span></span>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Telephone</label>
                    <input placeholder='Telephone' type="text" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div class="input-group mb-3">

                    <select class="form-select" id="inputGroupSelect01">
                      <option selected>Guest</option>
                      <option value="1">2</option>
                      <option value="2">3</option>
                      <option value="3">4</option>
                      <option value="4">5</option>
                      <option value="5">6</option>


                    </select>
                  </div>
                  <div className=" ms-auto justify-self-end"><button type="submit" class="btn btn-lg bg-warning fw-bold text-light">SUBMIT MESSAGE</button></div>
                </form>

              </div>
            </Card.Body>

          </Card>
          <Card>
          <div className='mx-1' data-aos="fade-up"><img src={require("../imgGems/food-pizza-restaurant-eating.jpg")} alt="" id='pizzaimg' /></div>


          </Card>
          <Card>

            <Card.Body>
            <div className='mx-1' >
  <h1>CONTACTS</h1> 
<h5 className='h4 text-warning ' ><IoCall /></h5>
                    <br />
  <h6 >Phone: +1 916-875-2235</h6>
<h5 className='h4 text-warning ' ><GoMail/></h5>
   
<h6>Email: info@domain.ltd</h6>
   <h1>WORK HOURS</h1>
   <h5 className='h4 text-warning ' ><AiOutlineClockCircle/></h5>
   
   <h6>Monday-Sunday: 10:00 – 22:00</h6>
</div>

            </Card.Body>

          </Card>
        </CardGroup>







        </div>
        <iframe className="container-fluid m-0 p-0" src={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13613.183713773946!2d74.3031169!3d31.4610447!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa04cb7841faae29c!2ssoftvalley%20software%20house!5e0!3m2!1sen!2s!4v1653480166904!5m2!1sen!2s"} width="100%" height="600"  ></iframe>
      </div>

    </>
  )
}

export default Part9
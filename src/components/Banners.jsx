import React from 'react'
import image01 from '../assets/image/category-1.jpg'
import image02 from '../assets/image/category-2.jpg'
import image03 from '../assets/image/category-3.jpg'
import image04 from '../assets/image/category-4.jpg'
import image05 from '../assets/image/category-5.jpg'
import '.././assets/css/banners.css'
import Carousel from 'react-bootstrap/Carousel'
import slider01 from '../assets/image/slider01.jpg'
import slider02 from '../assets/image/slider02.jpg'
import slider03 from '../assets/image/slider03.jpg'

const Banners = () => {
  return (
    <section>
      <div className="cont">
        <div className="row mask">
          <div className="col-lg-6 col-md-12 col-sm-12 image1">
            {/* <img className='img1' alt='image01' src={image01} /> */}
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slider01}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slider02}
                  alt="Second slide"
                />

                
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slider03}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="row col-lg-6 col-md-12 col-sm-12 image2 images">
            <div className="col-lg-6 col-md-6 col-sm-6 img2">
              <img alt="image01" src={image02} />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 img2">
              <img alt="image01" src={image03} />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 img2">
              <img alt="image01" src={image04} />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 img2">
              <img alt="image01" src={image05} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banners

// import React from 'react';
// import image01 from '../assets/image/category-1.jpg'
// import image02 from '../assets/image/category-2.jpg'
// import image03 from '../assets/image/category-3.jpg'
// import image04 from '../assets/image/category-4.jpg'
// import image05 from '../assets/image/category-5.jpg'
// import './banners.css';

// const Banners = () => {
//     return (
//         <section>
//             <div className='  cont'>

//                 <div className=' image1'>
//                     <img className='img1' alt='image01' src={image01} />
//                 </div>

//                 <div className=' image2'>
//                     <div className='img2'>
//                         <img alt='image01' src={image02} />
//                     </div>
//                     <div className=' img2'>
//                         <img alt='image01' src={image03} />
//                     </div>
//                     <div className=' img2'>
//                         <img alt='image01' src={image04} />
//                     </div>
//                     <div className=' img2'>
//                         <img alt='image01' src={image05} />
//                     </div>
//                 </div>

//             </div>
//         </section>

//     )
// }

// export default Banners;

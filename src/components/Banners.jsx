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
      <div className="cont container">
        <div className="row mask m-0">
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 image1">
            {/* <img className='img1' alt='image01' src={image01} /> */}
            <Carousel>
              <Carousel.Item>
                <img
                  className="imgSlider "
                  src={slider01}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>کالکشن جدید برندهای منتخب</h3>
                  <p>
                  تا 40% تخفیف
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="imgSlider "
                  src={slider02}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>ناربن یک انتخاب راحت</h3>
                  <p>
                  تا 50% تخفیف
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="imgSlider "
                  src={slider03}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>زیبو بهترین انتخاب برای تو</h3>
                  <p>
                    تا 60% تخفیف
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="row col-xl-6 col-lg-12 col-md-12 col-sm-12 image2">
            <div className="col-lg-6 col-md-6 col-sm-12 img2">
              <img alt="image01" src={image02} className="img02" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 img2">
              <img alt="image01" src={image03} className="img02"/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 img2">
              <img alt="image01" src={image04} className="img02"/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 img2">
              <img alt="image01" src={image05} className="img02"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banners
import React from 'react';
import image01 from '../assets/image/category-1.jpg'
import image02 from '../assets/image/category-2.jpg'
import image03 from '../assets/image/category-3.jpg'
import image04 from '../assets/image/category-4.jpg'
import image05 from '../assets/image/category-5.jpg'
import '.././assets/css/banners.css';

const Banners = () => {
    return (
        <section>
            <div className='cont'>
               <div className='row mask'>
                <div className='col-lg-6 col-md-6 col-sm-12 image1'>
                    <img className='img1' alt='image01' src={image01} />
                </div>

                <div className='row col-lg-6 col-md-6 col-sm-12 image2 images'>
                    <div className='col-lg-6 col-md-6 col-sm-6 img2'>
                        <img alt='image01' src={image02} />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 img2'>
                        <img alt='image01' src={image03} />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 img2'>
                        <img alt='image01' src={image04} />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 img2'>
                        <img alt='image01' src={image05} />
                    </div>
                </div>
                    </div>
            </div>
        </section>
        
    )
}

export default Banners;



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

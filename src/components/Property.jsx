import React from 'react'
import tahvil from '../assets/image/tahvil.svg'
import zemanat from '../assets/image/zemanat.svg'
import bazgasht from '../assets/image/bazgasht.svg'
import '.././assets/css/property.css'


const Property = () => {

    return (
        <div className='container'>
        <hr/>
                <div className="box-wrap">
                    <div className="box" >
                        <img src={tahvil} alt="tahvil" width="60px" />
                        <h6 className='mt-4'>تحویل سریع و آسان</h6>
                    </div>
                    <div className="box" >
                        <img src={zemanat} alt="zemanat" width="60px" />
                        <h6 className='mt-4 fs'>۱۴ روز ضمانت بازگشت کالا</h6>
                    </div>
                    <div className="box" >
                        <img src={bazgasht} alt="bazgasht" width="60px" />
                        <h6 className='mt-4'>ضمانت اصل بودن کالا</h6>
                    </div>
                </div>
        <hr/>

        </div>
    )
}

export default Property

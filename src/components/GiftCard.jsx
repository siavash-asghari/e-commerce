import React from 'react'
import giftCart from '../assets/image/giftCart.png'

const GiftCard = () => {
    return (
        <section style={{ marginTop: '20px', cursor: 'pointer' }}>
            <div>
                <a href='#'>
                    <img alt="giftCart" src={giftCart} width="100%" />
                </a>
            </div>
        </section>
    )
}

export default GiftCard

import React from 'react';
import img1 from './../../../assets/img/Batuk dan Flu.png'
import img2 from './../../../assets/img/Saluran Pencernaan.png'
import img3 from './../../../assets/img/Vitamin & Suplemen (1).png'
import img4 from './../../../assets/img/Langganan.png'
import img5 from './../../../assets/img/Hemat Borongan.png'
import img6 from './../../../assets/img/Donasi.png'
import SmallCard from './SmallCard';

const CardContainer = () => {

    const cardsArr =[
        {
            img: img1,
            title: "BATUK DAN FLU"
        },
        {
            img: img2,
            title: "SALURAN PENCERNAAN"
            
        },
        {
            img: img3,
            title: "VITAMIN & SUPLEMEN"
            
        },
        {
            img: img4,
            title: "LANGGANAN"
            
        },
        {
            img: img5,
            title: "HEMAT BORONGAN"
        },
        {
            img: img6,
            title: "LEHAT SEMUA"
        },
    ]

    return (
        <section className='mx-10 my-10'>
            <div>
                <h1 className='text-xl'>Obat & Vitamin</h1>
                <p className='text-lg text-gray-500'>Dapatkan informasi seputar kandungan, aturan, petunjuk penggunaan obat dan vitamin di sini</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
                {
                    cardsArr.map(card=> <SmallCard key={card.img} card={card}></SmallCard>)
                }
            </div>
        </section>
    );
};

export default CardContainer;
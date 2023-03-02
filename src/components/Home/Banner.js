import React from 'react';
import banner from './../../assets/img/home-banner-v3.svg'
import card1 from './../../assets/img/tanya-dokter.png'
import card2 from './../../assets/img/pd.png'
import card3 from './../../assets/img/rumah-sakit.png'
import card4 from './../../assets/img/janji-medis.png'
import BannerCard from './BannerCard';
import BannerLongCard from './BannerLongCard';

const Banner = () => {

    const cardDetails = [
        {
            img:card1,
            name: "Chat Dengan Dokter"
        },
        {
            img:card2,
            name: "Toko Kesehatan"
        },
        {
            img:card3,
            name: "Buat Janji RS"
        },
        {
            img:card4,
            name: "Janji Medis"
        },
    ]

    return (
        <div style={{backgroundImage: `url(${banner})`, backgroundRepeat: "no-repeat",}} className="h-[100vh] px-20 pt-20">
            <h1 className='text-3xl font-semibold mb-3'>Solusi Kesehatan Terlengkap</h1>
            <p className='text-gray-600'>Chat dokter, kunjungi rumah sakit, beli obat, cek lab dan update <br /> informasi seputar kesehatan, semua bisa di Halodoc!</p>

            <div className='grid grid-cols-1 md:grid-cols-5 gap-2 w-3/5 mt-10'>
                {
                    cardDetails.map(card=> <BannerCard key={card.img} card={card}></BannerCard>)
                }
                <BannerLongCard></BannerLongCard>
            </div>
            
        </div>
    );
};

export default Banner;
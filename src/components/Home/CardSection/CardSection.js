import React from 'react';
import img1 from './../../../assets/img/langka-terjadi-ini-fakta-aspermia-yang-perlu-dipahami-pria-halodoc.jpg'
import img2 from './../../../assets/img/Kenali Astenoteratozoospermia_ Gangguan pada Pergerakan Sperma.png'
import img3 from './../../../assets/img/Minum kopi hijau baik untuk kesehatan.jpg'
import Card from './Card';

const CardSection = () => {

    const Buttons = [
        {
            text: "Popular"
        },
        {
            text: "Kehamilan"
        },
        {
            text: "Kolesterol"
        },
        {
            text: "Flu Babi"
        },
    ]
    const Cards = [
        {
            img: img1,
            title: "Langka Terjadi, Ini Fakta Aspermia yang Perlu Dipahami Pria",
            text: "Kesuburan",
        },
        {
            img: img2,
            title: "Kenali Astenoteratozoospermia, Gangguan pada Pergerakan Sperma",
            text: "Reproduksi",
        },
        {
            img: img3,
            title: "7 Manfaat Kopi Hijau untuk Kesehatan Tubuh",
            text: "Minuman Sehat",
        },
    ]

    return (
        <section>
            <div className='flex justify-between items-center mx-10'>
                <h1 className='text-3xl font-bold'>Baca 100+ Artikel Baru</h1>
                <button className="btn px-5 btn-sm border-none rounded bg-gray-200 text-thirdColor">Lihat Semua</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-5 mx-10 w-1/2 mt-5'>
                <button className='btn btn-sm bg-thirdColor border-none rounded-full px-3 text-white text-sm'>Terbaru</button>
                {
                    Buttons.map(button=> <button key={button.text} className='btn btn-sm  px-3 mx-auto text-center border-thirdColor bg-white rounded-full text-thirdColor hover:bg-thirdColor hover:text-white text-sm'>{button.text}</button>)
                }
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mx-10 my-10'>
                {
                    Cards.map(card=> <Card key={card.text} card={card}></Card>)
                }
            </div>
        </section>
    );
};

export default CardSection;
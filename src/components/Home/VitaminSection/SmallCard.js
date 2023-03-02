import React from 'react';

const SmallCard = ({card}) => {
    return (
        <div className='border rounded hover:shadow-2xl hover:border-none flex justify-start items-center gap-3 p-7'>
            <img src={card.img} className="w-10" alt="" />
            <p>{card.title}</p>
        </div>
    );
};

export default SmallCard;
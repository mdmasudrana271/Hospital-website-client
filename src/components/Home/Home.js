import React from 'react';
import Banner from './Banner';
import CardSection from './CardSection/CardSection';
import CardContainer from './VitaminSection/CardContainer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CardSection></CardSection>
            <CardContainer></CardContainer>
        </div>
    );
};

export default Home;
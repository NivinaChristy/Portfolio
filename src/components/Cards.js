import React from 'react';
import './Cards.css';
import CardItem from './Carditem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/result_111_10.png'
              text='Stereo Image Depth Estimation using U-Net feature extraction.'
              label='Computer Vision'
              path='/Education'
            />
            <CardItem
              src='images/nlp.jpeg'
              text='Propaganda Detection on news articles.'
              label='Natural Language Processing'
              path='/Education'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/sml.jpg'
              text='Fashion Outfit Generation using Machine Learning Recommendation.'
              label='Recommendation System'
              path='/Education'
            />
            <CardItem
              src='images/automotive.jpg'
              text='AUTOSAR Diagnostic Stack Development'
              label='Automotive'
              path='/WorkExperience'
            />
            <CardItem
              src='images/auto1.jpg'
              text='DC-DC Converter Research Program for Electric Vehicle'
              label='Automotive'
              path='/WorkExperience'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
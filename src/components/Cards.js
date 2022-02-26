import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>PLANNING ON WATCHING A MOVIE THIS WEEKEND? CHECK OUT OUR REVIEWS BEFORE YOU PICK ONE</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/deathonthenile1.jpg'
              text='Search for a murderer when a picture-perfect couples idyllic honeymoon is tragically cut short.'
              label='Mystery'
              path='/trending'
            />
            <CardItem
              src='/images/powerofthedog1.jpg'
              text='Western psychological drama film written and directed by Jane Campion.'
              label='Drama'
              path='/trending'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/ds.jpg'
              text='Follow Tanjirou and his friends in their new adventure'
              label='Adventure'
              path='/trending'
            />
            <CardItem
              src='/images/batman.jpg'
              text='Batman vs a sadistic killer leaves behind a trail of cryptic clues.'
              label='Dark'
              path='/upcoming'
            />
            <CardItem
              src='/images/radheshyam.jpg'
              text='Ride through the battle between love and destiny'
              label='Romance'
              path='/upcoming'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
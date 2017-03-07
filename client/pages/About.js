import React from 'react';
import { withTranslate } from 'react-redux-multilingual';

const original = 'https://res.cloudinary.com/rockchalkwushock/image/upload/f_auto,q_70,w_316/v1488749512/profile_pic.jpg 316w';
const options = 'https://res.cloudinary.com/rockchalkwushock/image/upload/f_auto,q_70,w_316/v1488749512/profile_pic.jpg 316w, https://res.cloudinary.com/rockchalkwushock/image/upload/f_auto,q_70,w_400/v1488749512/profile_pic.jpg 400w, https://res.cloudinary.com/rockchalkwushock/image/upload/f_auto,q_70,w_800/v1488749512/profile_pic.jpg 800w';

const About = ({ translate }) => (
  <div className="aboutpage">
    <div className="pic">
      <img
        className='profile-pic'
        src={original}
        srcSet={options}
        sizes='(max-width: 30em) 30em, 100vw'
        alt='profile-pic'
      />
    </div>
    <div className="description">
      <p>{translate('description')}</p>
    </div>
  </div>
);


export default withTranslate(About);

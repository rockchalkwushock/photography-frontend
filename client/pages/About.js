import React from 'react';
import { Image, ProfilePic, TextArea } from '../commons';

const src = 'https://s-media-cache-ak0.pinimg.com/736x/73/db/97/73db97c0c4a9c9b009d69f21ea48ecdc.jpg';

const About = () => (
  <div className="aboutpage">
    <ProfilePic>
      <Image src={src} />
    </ProfilePic>
    <TextArea>
      <p>This is where the about me section will be!</p>
    </TextArea>
  </div>
);

export default About;

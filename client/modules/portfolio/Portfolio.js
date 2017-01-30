import React, { Component } from 'react';
import Slider from 'react-slick';
import { Image, Label } from 'semantic-ui-react/dist/es';

const images = [
  'http://funnyasduck.net/wp-content/uploads/2012/11/funny-darth-vader-drinking-tea-dark-side-star-wars-great-pics.jpg',
  'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3iop4RLrnBZxyZkNp_US9p_Mr7edxvMe-LnOQkkGpxTe_tRpqvnajvHY',
  'http://images.amcnetworks.com/amc.com/wp-content/uploads/2015/05/exclusives_bb_s5_podcast.jpg',
  'https://www.askideas.com/media/48/Donald-Trump-Very-Funny-Angry-Face-Picture.jpg'
];

class Portfolio extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const photos = images.reduce((array, item) => {
      if (item === undefined) {
        array.push(
          <Image key={item} size='tiny'>
            <Label content='Image not found!' icon='warning' />
          </Image>
        );
      }
      array.push(
        <Image key={item} src={item} />
      );
      return array;
    }, []);
    return (
      <div className="portfolio">
        <Slider {...settings}>
          {photos}
        </Slider>
      </div>
    );
  }
}

export default Portfolio;

/*
When the user chooses one of the 3-4 collection options they will be
redirected to this component and the route '/portfolio'.
On their selection a GET Request must be made to the backend to supply
the collection of images to append.
Location & routing will need to be handled through :collection param.
Collections:
  1) Travel
  2) Family
  3) Portfolio
  4) Wedding
*/

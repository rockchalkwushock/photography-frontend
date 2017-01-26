import React from 'react';

const Portfolio = () => (
  <div className="portfolio">
    The view here will be dependent on the user's selection.
  </div>
);

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

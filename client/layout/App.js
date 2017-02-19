import React from 'react';
import Footer from './Footer';
import Header from './Header';

/*
  Home, About, Portfolio, & Page404 will be injected as children
  on route changes pertaining to the dynamic routing via react-router
  and webpack 2.
*/

const App = ({ children }) => (
  <div className="application">
    <Header />
    {children}
    <Footer />
  </div>
);

export default App;

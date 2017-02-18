import React from 'react';
import Footer from './Footer';
import Header from './Header';

const App = ({ children }) => (
  <div className="application">
    <Header />
    {children}
    <Footer />
  </div>
);

export default App;

import React from 'react';
import styled from 'styled-components';

const UnstyledLoader = () => (
  <div className='loader'>
    <h1>Loading...</h1>
  </div>
);

const Loader = styled(UnstyledLoader)`
  padding: 0.5em;
  font-size: 1.5em;
  background-color: lightblue;
`;

export default Loader;

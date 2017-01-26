import React, { Component, PropTypes } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { NavBar } from '../layout';

class App extends Component {
  render() {
    const { children, location } = this.props;
    return (
      <div className="application">
        <Grid>
          <Grid.Row className='header' color='orange'>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Header className='heading1' as='h1'>Masha Eltsova</Header>
              <Header className='heading2' as='h4'>Photography</Header>
              <NavBar path={location.pathname} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className='content' color='blue'>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              {children}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className='footer' color='orange'>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              Footer
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

export default App;

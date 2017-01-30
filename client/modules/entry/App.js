import React, { Component, PropTypes } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { Footer, NavBar } from '../layout';

class App extends Component {
  render() {
    const { children, translate } = this.props;
    return (
      <div className="application">
        <Grid>
          <Grid.Row className='header'>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Header className='heading1' as='h1'>{translate('title')}</Header>
              <Header className='heading2' as='h3'>{translate('sub-title')}</Header>
              <NavBar />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className='content'>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              {children}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className='footer'>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Footer />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  translate: PropTypes.func
};

export default App;

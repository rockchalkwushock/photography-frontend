import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="application">
        <Grid>
          <Grid.Row className='header' color='orange'>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              Header
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className='content' color='blue'>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              Content
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

export default App;

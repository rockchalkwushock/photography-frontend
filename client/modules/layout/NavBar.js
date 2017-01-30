import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router/es';
import { IntlActions, withTranslate } from 'react-redux-multilingual';
import { Dropdown, Menu } from 'semantic-ui-react';
import { store } from '../../redux/store';

const NavBar = ({ translate }) => (
  <Menu borderless className='nav'>
    {/* HOME BUTTON */}
    <Menu.Menu>
      <Menu.Item
        onClick={() => browserHistory.push('/')}
      >
        {translate('home-btn')}
      </Menu.Item>
    </Menu.Menu>
    {/* ABOUT BUTTON */}
    <Menu.Menu>
      <Menu.Item
        onClick={() => browserHistory.push('/about')}
      >
        {translate('about-btn')}
      </Menu.Item>
    </Menu.Menu>
    {/* LANGUAGE MENU */}
    <Menu.Menu position='right'>
      <Menu.Item>
        <Dropdown item text={translate('lang')}>
          <Dropdown.Menu>
            <Dropdown.Item
              flag='ru'
              text={translate('russian')}
              onClick={() => store.dispatch(IntlActions.setLocale('ru'))}
            />
            <Dropdown.Item
              flag='us'
              text={translate('english')}
              onClick={() => store.dispatch(IntlActions.setLocale('en'))}
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

NavBar.propTypes = {
  translate: PropTypes.func
};

export default withTranslate(NavBar);

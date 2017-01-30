import React from 'react';
import { Menu } from 'semantic-ui-react';

const SocialBar = () => (
  <div className="socialbar">
    <Menu size='massive' borderless icon fluid widths={5}>
      <Menu.Item icon='facebook f' href='https://www.facebook.com/' />
      <Menu.Item icon='instagram' href='https://www.instagram.com/?hl=ru' />
      <Menu.Item icon='envelope' href='mailto:mashaeltsova@mail.ru' />
    </Menu>
  </div>
);

export default SocialBar;

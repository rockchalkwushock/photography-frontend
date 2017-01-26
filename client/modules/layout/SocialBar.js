import React from 'react';
import { Menu } from 'semantic-ui-react';

const SocialBar = () => (
  <div className="socialbar">
    <Menu size='massive' borderless icon fluid widths={5}>
      <Menu.Item icon='vk' href='https://vk.com/' />
      <Menu.Item icon='facebook f' href='https://www.facebook.com/' />
      <Menu.Item icon='instagram' href='https://www.instagram.com/?hl=ru' />
      <Menu.Item icon='google plus' href='https://plus.google.com/collections/featured' />
      <Menu.Item icon='twitter' href='https://twitter.com/?lang=ru' />
    </Menu>
  </div>
);

export default SocialBar;

import React from 'react';
import { Linking } from 'react-native';
import { Menu, MenuGroup, MenuItem, Icon, IndexPath, Layout } from '@ui-kitten/components';

const SmartphoneIcon = (props) => (
  <Icon {...props} name='smartphone-outline'/>
);

const BrowserIcon = (props) => (
  <Icon {...props} name='browser-outline'/>
);

const ColorPaletteIcon = (props) => (
  <Icon {...props} name='color-palette-outline'/>
);

const StarIcon = (props) => (
  <Icon {...props} name='star'/>
);

export const MenuGroupsShowcase = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0, 0));

  return (
    <Layout>

      <Menu
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <MenuGroup title='Akveo React Native' accessoryLeft={SmartphoneIcon}>
          <MenuItem title='UI Kitten' accessoryLeft={StarIcon} onPress={() => Linking.ope}/>
          <MenuItem title='Kitten Tricks' accessoryLeft={StarIcon}/>
        </MenuGroup>
        <MenuGroup title='Akveo Angular' accessoryLeft={BrowserIcon}>
          <MenuItem title='Nebular' accessoryLeft={StarIcon}/>
          <MenuItem title='ngx-admin' accessoryLeft={StarIcon}/>
          <MenuItem title='UI Bakery' accessoryLeft={StarIcon}/>
        </MenuGroup>
        <MenuGroup title='Akveo Design' accessoryLeft={ColorPaletteIcon}>
          <MenuItem title='Eva Design System' accessoryLeft={StarIcon}/>
          <MenuItem title='Eva Icons' accessoryLeft={StarIcon}/>
        </MenuGroup>
      </Menu>

    </Layout>
  );
};

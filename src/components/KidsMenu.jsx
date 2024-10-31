import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const KidsMenu = () => (
  <Menu>
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
      Kids
    </MenuButton>
    <MenuList>
      <MenuItem>
        <Link to="/kids/topwear">Topwear</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/kids/westernwear">Westernwear</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/kids/bottomwear">Bottomwear</Link>
      </MenuItem>
    </MenuList>
  </Menu>
);

export default KidsMenu;

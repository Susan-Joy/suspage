import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const WomenMenu = () => (
  <Menu>
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
      Women
    </MenuButton>
    <MenuList>
      <MenuItem>
        <Link to="/women/topwear">Topwear</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/women/westernwear">Westernwear</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/women/bottomwear">Bottomwear</Link>
      </MenuItem>
    </MenuList>
  </Menu>
);

export default WomenMenu;

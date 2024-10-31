import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const MenMenu = () => (
  <Menu>
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
      Men
    </MenuButton>
    <MenuList>
      <MenuItem>
        <Link to="/men/topwear">Topwear</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/men/westernwear">Westernwear</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/men/bottomwear">Bottomwear</Link>
      </MenuItem>
    </MenuList>
  </Menu>
);

export default MenMenu;
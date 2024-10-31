import { useState, createContext, useContext } from 'react';
import {
  ChakraProvider, Box, Button, Flex, Spacer, Heading, Modal, ModalOverlay, ModalContent,
  ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Input, Avatar, Text, Menu,
  MenuButton, MenuList, MenuItem, IconButton, Divider, extendTheme, useBreakpointValue
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import RegisterPage from './pages/RegisterPage';
import Orders from './pages/Orders';
import Wishlist from './pages/Wishlist';
import Men from './pages/Men/Men';
import Women from './pages/Women/Women';
import Kids from './pages/Kids/Kids';
import MenMenu from './components/MenMenu'; // Import MenMenu
import WomenMenu from './components/WomenMenu'; // Import WomenMenu
import KidsMenu from './components/KidsMenu'; // Import KidsMenu
import MenTopwear from './pages/Men/MenTopwear';
import MenWesternwear from './pages/Men/MenWesternwear';
import MenBottomwear from './pages/Men/MenBottomwear';
import WomenTopwear from './pages/Women/WomenTopwear';
import WomenWesternwear from './pages/Women/WomenWesternwear';
import WomenBottomwear from './pages/Women/WomenBottomwear';
import KidsTopwear from './pages/Kids/KidsTopwear';
import KidsWesternwear from './pages/Kids/KidsWesternwear';
import KidsBottomwear from './pages/Kids/KidsBottomwear';

const ModalContext = createContext();
export const useModalContext = () => useContext(ModalContext);
// Theme from the previous version
const theme = extendTheme({
  colors: {
    primary: {
      100: "#E2DFF0",
      500: "#6B46C1",
      900: "#44337A",
    },
    secondary: {
      100: "#FEF3C7",
      500: "#ED8936",
      900: "#9C4221",
    },
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Roboto', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
    },
  },
});

function Header({ isLoggedIn, onOpen }) {
  const navigate = useNavigate();

  // Wishlist and Cart navigation handlers
  const handleWishlistClick = () => {
    if (!isLoggedIn) {
      onOpen();
    } else {
      navigate("/pages/Wishlist");
    }
  };

  const handleCartClick = () => {
    if (!isLoggedIn) {
      onOpen();
    } else {
      navigate("/pages/Cart");
    }
  };
 
  return (
    <Box as="header" height="70px" backgroundColor="gray.200" marginBottom={8}>
      <Flex gap={4} as="header" padding="4" backgroundColor="white" boxShadow="md" alignItems="center">
        <Heading size="lg" color="primary.500">
          <Link to="/">MyWebsite</Link>
        </Heading>
        <Spacer />
                <MenMenu />
                <WomenMenu />
                <KidsMenu />
        <Spacer />
        {/* Search Bar */}
        <Flex gap="1" alignItems="center" width="400px">
          <Input placeholder="Search for shops, brands and more" />
          <IconButton color={'green'} aria-label="Search" icon={<SearchIcon />} />
        </Flex>

        <Spacer />

        {/* Wishlist and Cart Icons */}
        <Flex gap={4} alignItems="center">
          <IconButton
            aria-label="Wishlist"
            icon={<FaHeart />}
            onClick={handleWishlistClick}
          />
          <Text fontSize="sm" fontWeight="medium">Wishlist</Text>

          <IconButton
            aria-label="Cart"
            icon={<FaShoppingCart />}
            onClick={handleCartClick}
          />
          <Text fontSize="sm" fontWeight="medium">Cart</Text>
        </Flex>

        <Spacer />

        {/* Profile Section */}
        <Flex gap="4">
          {isLoggedIn ? (
            <Menu>
              <MenuButton>
                <Flex flexDirection="column" alignItems="center">
                  <Avatar src="https://bit.ly/broken-link" />
                  <Text fontSize="sm" fontWeight="medium">Profile</Text>
                </Flex>
              </MenuButton>
              <MenuList minWidth="200px" backgroundColor="white" borderColor="gray.200" shadow="md">
                <MenuItem>
                  <Text>Hello, User123!</Text>
                </MenuItem>
                <MenuItem>
                  <Link to="/pages/Orders">Orders</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/pages/Wishlist">Wishlist</Link>
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => window.location.href = '/edit-profile'}>Edit Profile</MenuItem>
                <MenuItem onClick={() => console.log('Logout')}>Logout</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Button colorScheme="primary" onClick={onOpen}>
              Login/Signup
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    onClose();
    navigate("/");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <ChakraProvider theme={theme}>
      <ModalContext.Provider value={{ onOpen, onClose, isOpen }}>
        <Router>
          <Header isLoggedIn={isLoggedIn} onOpen={onOpen} />

          <Flex direction="column" height="100vh">
            {/* Main Content */}
            <Box as="main" flex="1" overflow="auto">
              <Routes>
                <Route path="/" element={<Box>Home</Box>} />
                <Route path="/pages/Orders" element={<Orders />} />
                <Route path="/pages/Wishlist" element={<Wishlist />} />
                <Route path="/men" element={<Men />} />
                <Route path="/women" element={<Women />} />
                <Route path="/kids" element={<Kids />} />
                <Route path="/men/topwear" element={<MenTopwear />} />
                <Route path="/men/westernwear" element={<MenWesternwear />} />
                <Route path="/men/bottomwear" element={<MenBottomwear />} />
                <Route path="/women/topwear" element={<WomenTopwear />} />
                <Route path="/women/westernwear" element={<WomenWesternwear />} />
                <Route path="/women/bottomwear" element={<WomenBottomwear />} />
                <Route path="/kids/topwear" element={<KidsTopwear />} />
                <Route path="/kids/westernwear" element={<KidsWesternwear />} />
                <Route path="/kids/bottomwear" element={<KidsBottomwear />} />
                <Route path="/pages/register" element={<RegisterPage />} />
              </Routes>
            </Box>

            {/* Footer */}
            <Box as="footer" height="30px" backgroundColor="gray.200">
              Footer
            </Box>
          </Flex>

          {/* Login/Signup Modal */}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Login</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <>
                    <Input placeholder="Email" mb="3" />
                    <Input placeholder="Password" type="password" mb="3" />
                  </>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="primary" mr={3} onClick={handleLogin}>
                    Login
                  </Button>
                  <Link to="/pages/register" onClick={() => onClose()}>
                  <Button variant="ghost">Register for new account</Button>
                  </Link>                
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Router>
        </ModalContext.Provider>
    </ChakraProvider>
  );
}

export default App;

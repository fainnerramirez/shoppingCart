import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  Container
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";

type props = {
    brand: string
}

const Navbar: React.FC<props> = ({ brand }: props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue('gray.50', 'gray.900')
  const color = useColorModeValue('blue.600', 'blue.100');
  const colorText = useColorModeValue('purple.600', 'gray.50');
  
  return (
    <Container maxW="container.xl">
      <Box bg={bg} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex>
            <Text
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="2xl"
                fontWeight="extrabold"
            >
                { brand }
            </Text>
          </Flex>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Flex flexDir="row" w={250} justifyContent="space-around">
                <Text color={colorText} fontSize='1.2em' fontWeight="bold" mt={2}>
                  <Link to="/">Inicio</Link>
                </Text>
                <Text color={colorText} fontSize='1.2em' fontWeight="bold" mt={2}>
                  <Link to="/products">Productos</Link>
                </Text>
              </Flex>

              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon color={color}/> : <SunIcon color={color}/>}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                  >
                  <Avatar
                    size={'sm'}
                    src={'https://i.imgur.com/l4LFUyW.jpg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://i.imgur.com/l4LFUyW.jpg'}
                    />
                  </Center>
                  <br />
                  <Center color={color}>
                    <p>Fainner Ramirez</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem color={color}>Perfil</MenuItem>
                  <MenuItem color={color}>Account Settings</MenuItem>
                  <MenuItem color={color}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}

export default Navbar;
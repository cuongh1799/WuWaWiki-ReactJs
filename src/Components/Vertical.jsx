import { Container, NavbarBrand, NavLink } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import WuWaLogo from '../Assets/logo.png'

function Vertical() {
  return (
    <Container>
        <Stack gap={4}>
            <NavbarBrand>WuWaWiki</NavbarBrand>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>News</NavLink>
        </Stack>
    </Container>
    
  );
}

export default Vertical;
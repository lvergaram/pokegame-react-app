import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { useRouter } from 'next/router'




export const MainMenu = () => {
  
  const router = useRouter()

  return (
    <Navbar isBordered variant="sticky">
        {/* <Navbar.Brand>
          
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand> */}
        <Navbar.Content enableCursorHighlight activeColor="primary" hideIn="xs" >
          <Navbar.Link  isActive={router.pathname==="/"}  href="/" >Juego</Navbar.Link>
          <Navbar.Link isActive={router.pathname==="/mappage"}  href="/mappage">Mapa</Navbar.Link>
          <Navbar.Link isActive={router.pathname==="/bagpage"}  href="/bagpage">Inventario</Navbar.Link>
          <Navbar.Link isActive={router.pathname==="/mypokemonspage"}  href="/mypokemonspage">Mis Pokemons</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
  )
}

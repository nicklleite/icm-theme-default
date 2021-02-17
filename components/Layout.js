import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Layout = ({children}) => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">ICM Default Theme</Navbar.Brand>
                <Navbar.Toggle aria-controls="mainNavigation" />
                <Navbar.Collapse id="mainNavigation">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            {children}
        </>
    )
}

export default Layout;

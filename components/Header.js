import React, { useState, useEffect } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
        if (window.scrollY > 180) {
            setSticky(true);
        } else if (window.scrollY < 180) {
            setSticky(false);
        }
    }

    return (
        <Navbar color="light" light container="md" expand="md" sticky={sticky ? "top" : ""}>
            <NavbarBrand href="/"><img src="/assets/logo.png" alt="" className="img-fluid mx-auto d-block" width="50"/></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <Nav className="m-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#feature">Funktionsweise</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#service">Formel</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#about">Kontakt</NavLink>
                        </NavItem>
                    </Nav>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;
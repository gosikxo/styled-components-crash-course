import React from 'react'
import { Logo, Nav, StyledHeader } from './styles/Header.style'
import { Container } from './styles/Container.style'
import { Button } from './styles/Buttton.style'

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' alt='Logo' />
                    <Button>Try it free</Button>
                </Nav>
            </Container>
        </StyledHeader>
    )
}

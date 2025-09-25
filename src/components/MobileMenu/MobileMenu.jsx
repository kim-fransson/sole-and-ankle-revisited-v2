import React from "react";
import styled from "styled-components";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import * as Dialog from "@radix-ui/react-dialog";
import { COLORS, WEIGHTS } from "../../constants";

const MobileMenu = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <UnstyledButton>
          <VisuallyHidden>Open menu</VisuallyHidden>
          <Icon id='menu' />
        </UnstyledButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />
        <Content>
          <CloseBtnWrapper asChild>
            <UnstyledButton>
              <VisuallyHidden>Close menu</VisuallyHidden>

              <Icon id='close' />
            </UnstyledButton>
          </CloseBtnWrapper>
          <VisuallyHidden>
            <Dialog.Title>Mobile navigation</Dialog.Title>
            <Dialog.Description>Mobile navigation</Dialog.Description>
          </VisuallyHidden>
          <Filler />
          <Nav>
            <NavLink href='/sale'>Sale</NavLink>
            <NavLink href='/new'>New&nbsp;Releases</NavLink>
            <NavLink href='/men'>Men</NavLink>
            <NavLink href='/women'>Women</NavLink>
            <NavLink href='/kids'>Kids</NavLink>
            <NavLink href='/collections'>Collections</NavLink>
          </Nav>
          <Footer>
            <FooterLink href='/terms'>
              Terms and Conditions
            </FooterLink>
            <FooterLink href='/privacy'>Privacy Policy</FooterLink>
            <FooterLink href='/contact'>Contact Us</FooterLink>
          </Footer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const Overlay = styled(Dialog.Overlay)`
  background: hsla(220, 5%, 40%, 0.8);
  position: fixed;
  inset: 0;
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${COLORS.white};
  width: ${300 / 16}rem;
  padding: 32px;
`;

const CloseBtnWrapper = styled(Dialog.Close)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  text-transform: uppercase;
  font-weight: ${WEIGHTS.medium};
  font-size: ${18 / 16}rem;
  color: ${COLORS.gray[900]};
  text-decoration: none;

  &:first-child {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  flex: 1;
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Filler = styled.div`
  flex: 1;
`;

const FooterLink = styled.a`
  font-weight: ${WEIGHTS.medium};
  font-size: ${14 / 16}rem;
  color: ${COLORS.gray[700]};
  text-decoration: none;
`;

export default MobileMenu;

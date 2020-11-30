import React from 'react';
import Container from './Container';
import Content from './Content';
import Header from './Header';
import Logo from './Logo';

interface ILayoutProps {
  children: React.ReactNode
}

function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Header>
        <Container>
          <Logo to="/" />
        </Container>
      </Header>
      <Content>
        <Container>
          {children}
        </Container>
      </Content>
    </>
  );
}

export default Layout;

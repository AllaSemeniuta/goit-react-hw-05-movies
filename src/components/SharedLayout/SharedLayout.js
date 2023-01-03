import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { NavItem } from './SharedLayout.styled';
import { Box } from 'components/Box/Box';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

export default function SharedLayout() {
  return (
    <>
      <Box
        as="nav"
        display="flex"
        alignItems="center"
        justifyContent="start"
        mb={5}
        p={5}
        borderBottom="1px solid black"
      >
        {navItems.map(({ href, text }) => (
          <NavItem key={text} to={href}>
            {text}
          </NavItem>
        ))}
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}

import { Box } from 'components/Box/Box';
import { Outlet } from 'react-router-dom';
import { NavItem } from './SharedLayout.styled';

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
      <Outlet />
    </>
  );
}

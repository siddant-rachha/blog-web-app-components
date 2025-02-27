'use client';
import { HeaderNav } from 'blog-web-app-components';

const navItems = ['Home', 'About', 'Contact'];
const avatarItems = ['Profile', 'Account', 'Dashboard', 'Logout'];
const searchItems = [
  'title1',
  'title2',
  'title3',
  'title4',
  'title5',
] as string[];

export default function Home() {
  const handleNavItem = (item: string) => {
    console.log(item);
  };
  const handleAvatarItem = (item: string) => {
    console.log(item);
  };
  const handleSearchItem = (item: string) => {
    console.log(item);
  };

  const handleSearchInput = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <HeaderNav
        imgSrc="/default-logo.png"
        navItems={navItems}
        navActive={navItems[0]}
        avatarItems={avatarItems}
        searchItems={searchItems}
        handleNavItem={handleNavItem}
        handleAvatarItem={handleAvatarItem}
        handleSearchItem={handleSearchItem}
        handleSearchInput={handleSearchInput}
      >
        <div>test</div>
      </HeaderNav>
    </div>
  );
}

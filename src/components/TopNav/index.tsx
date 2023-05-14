import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { BlockchainType } from '@liqnft/candy-shop-sdk';
import { ConnectButton } from '@/components/ConnectButton';
import { RouteName } from '@/constant/routeNames';
import { NETWORK } from '@/utils/candy-shop';
import { getBlockchain } from '@/utils/shop';

const ROUTES_ETH = [
  { url: RouteName.home, name: 'Marketplace' },
  { url: RouteName.sell, name: 'Sell' },
];

const ROUTES_SOLANA = [
  { url: RouteName.home, name: 'Marketplace' },
  { url: RouteName.sell, name: 'Sell' },
  { url: RouteName.auctionsView, name: 'Auctions' },
  { url: RouteName.drop, name: 'Edition Drops' },
];

const getRoutes = () => {
  if (getBlockchain(NETWORK) === BlockchainType.EVM) {
    return ROUTES_ETH;
  }

  return ROUTES_SOLANA;
};

const TopNav: React.FC = () => {
  const [open] = useState(false);
  const anchorRef = useRef<HTMLLIElement>(null);

  const { pathname } = useLocation();
      

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <HeaderBar>
      <Logo>
        <Link to={RouteName.home}>
          <img alt="" src="/a-nft.png" />
        </Link>
      </Logo>
      <Menu>
        {getRoutes().map((item) => (
          <li key={item.url} className={pathname === item.url ? 'active' : ''}>
            <Link to={item.url}>{item.name}</Link>
          </li>
        ))}
      </Menu>
      <Wallet>
        <ConnectButton />
      </Wallet>
    </HeaderBar>
  );
};

const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const Wallet = styled.ul`
  flex: 0 0 auto;
  margin: 0;
  padding: 0;
`;

const Logo = styled.div`
  flex: 0 0 auto;
  margin-right: 15px;

  img {
    height: 60px;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: inline-flex;
  flex: 1 0 auto;
  margin-bottom: 10;
  place-items: center;
  

  > .active {
    border-bottom: 4px solid var(--title-text-color);
  }

  > .active-submenu {
    background-color: rgba(255, 255, 255, 0.08);
  }

  > li {
    margin: 0 12px;
    padding: 5px;

    a {
      color: var(--main-text-color);
      list-style-image: none;
      list-style-position: outside;
      list-style-type: none;
      outline: none;
      text-decoration: none;
      text-size-adjust: 100%;
      touch-action: manipulation;
      transition: color 0.3s;

      img {
        max-height: 26px;
      }
    }

    &:hover,
    &:active {
      border-bottom: 4px solid var(--title-text-color);
    }

    &:hover > a {
      color: rgb(51, 204, 204);
    }
  }
`;

export default TopNav;

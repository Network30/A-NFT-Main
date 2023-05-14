import styled from 'styled-components';
import { Orders, Stat } from '@liqnft/candy-shop';
import { ConnectButton } from '@/components/ConnectButton';
import { useUserWallet } from '@/hooks/useUserWallet';
import { useShopStore } from '@/store/useShopStore';

const MarketplaceWithFilter: React.FC = () => {
  const userWallet = useUserWallet();
  const candyShop = useShopStore((s) => s.candyShop);
  if (!candyShop) return null;

  return (
    <DesContainer>
      <Stat
        candyShop={candyShop}
        title={''}
        description={'Providing new use cases for NFTs'}
        style={{ paddingBottom: 50 }}
      />
      <Orders
        wallet={userWallet}
        candyShop={candyShop}
        walletConnectComponent={<ConnectButton />}
        filters={FILTERS}
        filterSearch
        search
      />
    </DesContainer>
  );
};

export default MarketplaceWithFilter;

const FILTERS = [
  { name: 'Tickets', collectionId: '1', identifier: 1 },
  { name: 'Artists', collectionId: '2', identifier: 2 },
  { name: 'Gaming', collectionId: '3', identifier: 3 },
  { name: 'Architects', collectionId: '4', identifier: 4 }
];

const DesContainer = styled.div`
  width: 100%;

  .candy-filter {
    color: #fff;

    li:hover {
      color: #7522f5;
    }

    .candy-search input {
      padding: 10px 4px 10px 24px;
      width: 100%;
    }
  }
`;

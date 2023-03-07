import { Blockchain } from '@liqnft/candy-shop-types';

const CANDY_SHOP_CREATOR_ADDRESS = process.env.REACT_APP_CANDY_SHOP_CREATOR_ADDRESS!;
const CANDY_SHOP_TREASURY_MINT = process.env.REACT_APP_CANDY_SHOP_TREASURY_MINT!;
const CANDY_SHOP_PROGRAM_ID = process.env.REACT_APP_CANDY_SHOP_PROGRAM_ID!;
const NETWORK = process.env.REACT_APP_NETWORK! as Blockchain;
const RPC_HOST = process.env.REACT_APP_RPC_HOST!;

export {
  CANDY_SHOP_CREATOR_ADDRESS,
  CANDY_SHOP_TREASURY_MINT,
  CANDY_SHOP_PROGRAM_ID,
  NETWORK,
  RPC_HOST,
};

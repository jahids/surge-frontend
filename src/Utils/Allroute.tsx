import OrderReview from '../Components/orderReview/OrderReview';
import PlaidInit from '../Components/plaid/plaidinit';
import StockBuy from '../Components/sellbuy/StockBuy';
import StockSell from '../Components/sellbuy/StockSell';
import Addfund from '../Pages/AddFund/Addfund';
import AllAssetsPage from '../Pages/AllAssetsPage/AllAssetsPage';
import AllStockPage from '../Pages/AllStockPage/AllStockPage';
import AllUserPage from '../Pages/AllUserPage/AllUserPage';

import CompleteProfilePage from '../Pages/CompleteProfilePage/CompleteProfilePage';
import ExplorePage from '../Pages/ExplorePage/ExplorePage';
import FriendListsPage from '../Pages/FriendListsPage/FriendListsPage';
import MainPage from '../Pages/MainPage/MainPage';
import MostTradedOnSharesPage from '../Pages/MostTradedOnSharesPage/MostTradedOnSharesPage';
import MultistepForm from '../Pages/MultistepForm/MultistepForm';
import NotificationPage from '../Pages/NotificationPage/NotificationPage';
import PostDetails from '../Pages/PostDetails/PostDetails';
import SocialPage from '../Pages/SocialPage/SocialPage';
import StockBuyPage from '../Pages/StockBuyPage/StockBuyPage';
import TopMoversPage from '../Pages/TopMoversPage/TopMoversPage';
import UserFullWatchList from '../Pages/UserFullWatchList/UserFullWatchList';
import Statement from '../Pages/statement/Statement';



export const allRoute = [
  {
    path: '/multistep',
    component: MultistepForm,
  },
  {
    path: '/plaid',
    component: PlaidInit,
  },
  {
    path: '/main',
    component: MainPage,
  },
  {
    path: '/social',
    component: SocialPage,
  },
  {
    path: '/post/:id',
    component: PostDetails,
  },
  {
    path: '/explore',
    component: ExplorePage,
  },
  {
    path: '/profile',
    component: CompleteProfilePage,
  },
  {
    path: '/assets',
    component: AllAssetsPage,
  },
  {
    path: '/user-watchlist',
    component: UserFullWatchList,
  },
  // {
  //   path: '/portfolio',
  //   component: () => <p>hello portfolio</p>, // If you need to render JSX with a function component
  // },
  {
    path: '/addfund',
    component: Addfund,
  },
  {
    path: '/buy/:symbol',
    component: StockBuy,
  },
  {
    path: '/sell/:symbol',
    component: StockSell,
  },
  {
    path: '/statement',
    component: Statement,
  },
  {
    path: '/friend-list',
    component: FriendListsPage,
  },
  {
    path: '/all-user-list',
    component: AllUserPage,
  },
  {
    path: '/top-movers',
    component: TopMoversPage,
  },
  {
    path: '/all-stock',
    component: AllStockPage,
  },
  {
    path: '/buy-stock',
    component: StockBuyPage,
  },
  {
    path: '/most-traded-share',
    component: MostTradedOnSharesPage,
  },
  {
    path: '/order-review',
    component: OrderReview,
  },
  {
    path: '/notification',
    component: NotificationPage,
  },
];

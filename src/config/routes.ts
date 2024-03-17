import Splash from '../pages/Splash';
import NewsFeed from '../pages/NewsFeed';
import Bubble from '../pages/BubbleBackground';
// import { Dashboard } from '../material-tailwind/src/layouts/Dashboard'

const mainRoutes = [
  {
    path: "/",
    component: Splash,
    name: "Splash Page",
  },
  {
    path: "/newsfeed",
    component: NewsFeed,
    name: "NewsFeed",
  },
  {
    path: "/bubble",
    component: Bubble,
    name: "bubble",
  },
  // {
  //   path: "/dashboard",
  //   component: Dashboard,
  //   name: "Dashboard",
  // },
];

export default mainRoutes

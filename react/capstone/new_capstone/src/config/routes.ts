import Splash from '../pages/Splash';
import NewsFeed from '../pages/NewsFeed';
import Bubble from '../pages/BubbleBackground';
import likes from '../pages/Likes';




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
  {
    path: "/likes",
    component: likes,
    name: "profile likes",
  },
];

export default mainRoutes


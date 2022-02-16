import Home from "../modules/Home/index";
import Events from './../modules/Events/index';
import Blogs from './../modules/Blogs/index';
import Membars from './../modules/Membars/index';
import Contact from './../modules/Contact/index';
import Committies from './../modules/Committies/index';
import Participants from './../modules/Participants/index';
import Form from './../modules/Forms/index';
const routes = [
  {
    path: "/",
    component: <Home/>
  },
  {
    path: "/blogs",
    component: <Blogs/>
  },
  {
    path: "/events",
    component: <Events/>
  },
  {
    path: "/membars",
    component: Membars
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    path: "/committies",
    component: Committies
  },
  {
    path: "/participants",
    component: Participants,
  },
  {
    path: "/form",
    component: Form,
  }
];

export default routes;
import Home from "../modules/Home/index";
import Events from '../modules/Events/index';
import Blogs from '../modules/Blogs/index';
import Members from './../modules/Members/index';
import Contact from '../modules/Contact/index';
import Committies from '../modules/Committies/index';
import Participants from '../modules/Participants/index';
import Form from '../modules/Forms/index';
import MemberProfile from './../modules/Members/Components/member/index';
import ViewResponses from './../modules/Forms/Components/ViewResponses/index';
import ViewForms from './../modules/Forms/Components/ViewForms/index';
import ResponseTable from './../modules/Forms/Components/ViewResponses/Components/member/index';
const routes = [
  {
    path: "/",
    component: Home,
    display: true,
  },
  {
    path: "/blogs",
    component: Blogs,
    display: true,
  },
  {
    path: "/events",
    component: Events,
    display: true,
  },
  {
    path: "/members",
    component: Members,
    display: true,
  },
  {
    path: "/contact",
    component: Contact,
    display: true,
  },
  {
    path: "/committies",
    component: Committies,
    display: true,
  },
  {
    path: "/participants",
    component: Participants,
    display: true,
  },
  {
    path: "/form",
    component: Form,
    display: true,
  },
  {
    path: "/form/viewform",
    component: ViewForms,
    display: false,
  },
  {
    path: "/form/formresponse",
    component: ViewResponses,
    display: false,
  },
  {
    path: "/form/formresponse/:name",
    component: ResponseTable,
    display: false,
  },
  {
    path: "/memberprofile/:id",
    component: MemberProfile,
    display: false,
  },
];

export default routes;
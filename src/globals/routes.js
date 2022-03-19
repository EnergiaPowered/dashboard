import Home from "../modules/Home";
import Events from "../modules/Events";
import Blogs from "../modules/Blogs";
import Members from "./../modules/Members";
import Contact from "../modules/Contact";
import Committees from "../modules/Committees";
import Participants from "../modules/Participants";
import Form from "../modules/Forms";
import MemberProfile from "./../modules/Members/Components/member";
import ViewResponses from "./../modules/Forms/Components/ViewResponses";
import ViewForms from "./../modules/Forms/Components/ViewForms";
import ResponseTable from "./../modules/Forms/Components/ViewResponses/Components/member";
import FormGen from "./../modules/Forms/Components/FormGen";
import Email from './../modules/SendMails/index';

const routes = [
  {
    path: "/",
    component: Home,
    label: "Home",
    display: true,
  },
  {
    path: "/blogs",
    component: Blogs,
    label: "Blogs",
    display: true,
  },
  {
    path: "/events",
    component: Events,
    label: "Events",
    display: true,
  },
  {
    path: "/members",
    component: Members,
    label: "Members",
    display: true,
  },
  {
    path: "/contact",
    component: Contact,
    label: "Contact",
    display: true,
  },
  {
    path: "/committees",
    component: Committees,
    label: "Committees",
    display: true,
  },
  {
    path: "/participants",
    component: Participants,
    label: "Participants",
    display: true,
  },
  {
    path: "/form",
    component: Form,
    label: "Forms",
    display: true,
    sub: [
      {
        path: "/form/view-form",
        component: ViewForms,
        label: "View Forms",
        display: true,
      },
      {
        path: "/form/create",
        component: FormGen,
        label: "Create Form",
        display: true,
      },
      // {
      //   path: "/form/application/:title",
      //   component: FormApp,
      //   label: " ",
      //   display: false,
      // },
      {
        path: "/form/form-responses",
        component: ViewResponses,
        label: "View Responses",
        display: true,
      },
      {
        path: "/form/form-responses/:name",
        component: ResponseTable,
        label: "Response Table",
        display: false,
      },
    ],
  },
  {
    path: "/form/view-form",
    component: ViewForms,
    label: "View Forms",
    display: false,
  },
  {
    path: "/form/create",
    component: FormGen,
    label: "Create Form",
    display: false,
  },
  // {
  //   path: "/form/application/:title",
  //   component: FormApp,
  //   label: " ",
  //   display: false,
  // },
  {
    path: "/form/form-responses",
    component: ViewResponses,
    label: "View Responses",
    display: false,
  },
  {
    path: "/form/form-responses/:name",
    component: ResponseTable,
    label: "Response Table",
    display: false,
  },
  {
    path: "/email",
    component: Email,
    label: "Send Email",
    display: true,
  },
  {
    path: "/member/profile/:id",
    component: MemberProfile,
    label: "Member Profile",
    display: false,
  },
];

export default routes;

import Home from "../modules/Home/index";
import Events from "../modules/Events/index";
import Blogs from "../modules/Blogs/index";
import Members from "./../modules/Members/index";
import Contact from "../modules/Contact/index";
import Committies from "../modules/Committies/index";
import Participants from "../modules/Participants/index";
import Form from "../modules/Forms/index";
import MemberProfile from "./../modules/Members/Components/member/index";
import ViewResponses from "./../modules/Forms/Components/ViewResponses/index";
import ViewForms from "./../modules/Forms/Components/ViewForms/index";
import ResponseTable from "./../modules/Forms/Components/ViewResponses/Components/member/index";
import FormGen from "./../modules/Forms/Components/FormGen/index";

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
    path: "/committies",
    component: Committies,
    label: "Committies",
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
    label: "Form",
    display: true,
    sub: [
      {
        path: "/form/viewform",
        component: ViewForms,
        label: "View Forms",
        display: true,
      },
      {
        path: "/form/creation",
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
        path: "/form/formresponse",
        component: ViewResponses,
        label: "View Responses",
        display: true,
      },
      {
        path: "/form/formresponse/:name",
        component: ResponseTable,
        label: "Response Table",
        display: false,
      },
    ],
  },
  {
    path: "/form/viewform",
    component: ViewForms,
    label: "View Forms",
    display: false,
  },
  {
    path: "/form/creation",
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
    path: "/form/formresponse",
    component: ViewResponses,
    label: "View Responses",
    display: false,
  },
  {
    path: "/form/formresponse/:name",
    component: ResponseTable,
    label: "Response Table",
    display: false,
  },

  {
    path: "/memberprofile/:id",
    component: MemberProfile,
    label: "Member Profile",
    display: false,
  },
];

export default routes;

import Home from "../modules/Home";
import Events from "../modules/Events";
import Blogs from "../modules/Blogs";
import Contacts from "../modules/Contacts";
import Committees from "../modules/Committees";
import CommitteeDetails from "../modules/Committees/Components/CommitteeDetails";
import Participants from "../modules/Participants";
import Form from "../modules/Forms";
import FormGen from "./../modules/Forms/Components/FormGen";
import ViewForms from "./../modules/Forms/Components/ViewForms";
import ViewResponses from "./../modules/Forms/Components/ViewResponses";
import ResponseTable from "../modules/Forms/Components/ViewResponses/Components/ResponseTable";
import Members from "./../modules/Members";
import MemberProfile from "../modules/Members/Components/MemberProfile";

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
    path: "/contacts",
    component: Contacts,
    label: "Contacts",
    display: true,
  },
  {
    path: "/committees",
    component: Committees,
    label: "Committees",
    display: true,
  },
  {
    path: "/committees/:title",
    component: CommitteeDetails,
    label: "",
    display: false,
  },
  {
    path: "/participants",
    component: Participants,
    label: "Participants",
    display: false,
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
    path: "/member/profile/:id",
    component: MemberProfile,
    label: "Member Profile",
    display: false,
  },
];

export default routes;

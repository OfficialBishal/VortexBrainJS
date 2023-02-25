import { Dashboard, FormPage, Homepage, Login, Summary } from "../Pages";

export const routingItems = [
  {
    to: "/",
    title: "Home",
    component: <Homepage />,
    exact: true,
  },
  {
    to: "/login",
    title: "Login",
    component: <Login />,
    exact: false,
  },
];
export const privateRoutings = [
  {
    to: "/user",
    title: "Dashboard",
    component: <Dashboard />,
    exact: true,
  },
  {
    to: "/user/form",
    title: "Form",
    component: <FormPage />,
    exact: false,
  },
  {
    to: "/user/summary",
    title: "Summary",
    component: <Summary />,
    exact: false,
  },
];

export const sectionItems = [
  {
    id: 1,
    sentence: "Scientific",
    to: "/user/form",
    state: {
      redirected: true,
      formType: "Scientific",
    },
  },
  // {
  //   id: 2,
  //   sentence:
  //     "Through team work, we collaborate and deliver quality projects of high standards",
  // },
  // {
  //   id: 3,
  //   sentence: "Flexible payment plan is applicable to all our services",
  // },
];

export const HeroContent = {
  title: "This will have Header",
  body: "This will have body",
  buttons: [
    {
      name: "Get Started",
      to: "/login",
      variant: "contained",
      color: "primary",
    },
  ],
};

export const FormAllData = {
  scientific: [
    {
      question: "What is the universe made of?",
      name: "q1",
    },
    {
      question: "How did life begin?",
      name: "q2",
    },
    {
      question: "Are we alone in the universe?",
      name: "q3",
    },
  ],
};

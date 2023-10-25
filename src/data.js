const STATUS_ON_DECK = { id: 1, name: "On Deck", color: "blue.300" };
const STATUS_IN_PROGRESS = {
  id: 2,
  name: "In Progress",
  color: "yellow.400",
};
const STATUS_TESTING = { id: 3, name: "Testing", color: "pink.300" };
const STATUS_DEPLOYED = { id: 4, name: "Deployed", color: "green.300" };
export const STATUSES = [
  STATUS_ON_DECK,
  STATUS_IN_PROGRESS,
  STATUS_TESTING,
  STATUS_DEPLOYED,
];

const DATA = [
  {
    task: "Write Integration Tests",
    status: STATUS_ON_DECK,
    due: new Date("2023/10/15"),
    notes: "This is a note",
    money: 1000000,
    link: 'mnacf12'
  },
  {
    task: "Write Integration Tests",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Use Jest",
    money: 1234124
  },
  {
    task: "Add Instagram Integration",
    status: STATUS_DEPLOYED,
    due: null,
    notes: "",
    money: 4400000
  },
  {
    task: "Cleanup Database",
    status: null,
    due: new Date("2023/02/15"),
    notes: "Remove old data",
    money: 45500000
  },
  {
    task: "Refactor API Endpoints",
    status: STATUS_TESTING,
    due: null,
    notes: "",
    money: 500000
  },
  {
    task: "Add Documentation to API",
    status: null,
    due: new Date("2023/09/12"),
    notes: "Add JS Docs to all endpoints",
    money: 6025000
  },
  {
    task: "Update NPM Packages",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Upgrade React & Chakra UI",
    money: 512831
  },
  {
    task: "Optimize Database Queries",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Optimize slow queries.",
    money: 189237
  },
  {
    task: "Implement User Authentication",
    status: STATUS_ON_DECK,
    due: new Date("2023/11/08"),
    notes: "OAuth2 and JWT auth.",
    money: 23874892
  },
  {
    task: "Design User Interface Mockups",
    status: null,
    due: new Date("2023/09/30"),
    notes: "Create UI mockups.",
    money: 1972893
  },
  {
    task: "Fix Cross-Browser Compatibility Issues",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Resolve browser issues.",
    money: 3847589
  },
  {
    task: "Perform Security Audit",
    status: null,
    due: new Date("2023/10/22"),
    notes: "Security audit.",
    money: 23847892
  },
  {
    task: "Create User Onboarding Tutorial",
    status: STATUS_ON_DECK,
    due: new Date("2023/11/15"),
    notes: "User onboarding guide.",
    money: 128347918
  },
  {
    task: "Optimize Frontend Performance",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Improve performance.",
    money: 19728931
  },
  {
    task: "Conduct Code Review",
    status: null,
    due: new Date("2023/10/05"),
    notes: "Code review meeting.",
    money: 0
  },
  {
    task: "Implement Continuous Integration",
    status: STATUS_ON_DECK,
    due: new Date("2023/11/01"),
    notes: "Set up CI/CD pipelines.",
    money: 434895
  },
  {
    task: "Migrate to Cloud Hosting",
    status: STATUS_DEPLOYED,
    due: null,
    notes: "Cloud migration.",
    money: 12551
  },
  {
    task: "Create User Feedback Survey",
    status: null,
    due: new Date("2023/09/25"),
    notes: "User feedback survey.",
    money: 4534232
  },
  {
    task: "Update User Documentation",
    status: STATUS_TESTING,
    due: null,
    notes: "Revise documentation.",
    money: 6745
  },
  {
    task: "Bug Fixing and QA Testing",
    status: null,
    due: new Date("2023/10/10"),
    notes: "Fix bugs and QA.",
    money: 63452
  },
  {
    task: "Implement Mobile App Support",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Add mobile support.",
    money: 1235
  },
  {
    task: "Refine User Permission System",
    status: null,
    due: new Date("2023/09/18"),
    notes: "Enhance permissions.",
    money: 56456
  },
];

export default DATA;

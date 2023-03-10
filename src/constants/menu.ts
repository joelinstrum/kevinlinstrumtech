export interface IMenu {
  url: string;
  label: string;
}

const MENU: IMenu[] = [
  {
    url: "",
    label: "Home",
  },
  {
    url: "services",
    label: "Services",
  },
  {
    url: "projects",
    label: "Projects",
  },
  {
    url: "about",
    label: "About",
  },
];

export default MENU;

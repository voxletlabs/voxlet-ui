import {
  ExternalLink,
  BookText,
  Circle,
  LayoutList,
  FileTextIcon,
  LayoutPanelTop,
} from "lucide-react";
import { ComponentsData } from "./componentsData";
import { slugify } from "@/utils/slugify";
import { BlocksData } from "./blocksData";

type LinkItem = {
  title: string;
  href: string;
  external?: boolean;
};

type NavigationGroup = {
  title: string;
  icon: React.ElementType;
  links: LinkItem[];
};

const components = ComponentsData.map((component) => ({
  title: `${component.name}`,
  href: `/components/${slugify(component.name)}`
}));

const blocks = BlocksData.map((blocksCategory) => ({
  title: `${blocksCategory.categoryName}`,
  href: `/blocks/${slugify(blocksCategory.categoryName)}`
}));

const Navigation = [
  {
    title: "Follow For Updates",
    icon: ExternalLink,
    links: [
      {
        title: "Muhammad Kaif Nazeer",
        href: "https://bento.me/muhammadkaifnazeer",
        external: true,
      },
    ],
  },
  {
    title: "Components",
    icon: Circle,
    links: [
      ...components
    ],
  },
  {
    title: "Blocks",
    icon: LayoutList,
    links: [
      ...blocks
    ],
  },
  // {
  //   title: "Templates",
  //   icon: LayoutPanelTop,
  //   links: [
  //     { title: "Kaif UI Docs", href: "/templates/kaif-ui-docs" },
  //     { title: "Fluxis Studios", href: "/templates/fluxis-studios" },
  //   ],
  // },
  {
    title: "Explore",
    icon: FileTextIcon,
    links: [
      { title: "Components", href: "/components" },
      { title: "Blocks", href: "/blocks" },
      { title: "Templates", href: "/templates" },
      { title: "Sponsers", href: "/sponsers" },
    ],
  },
];

export default Navigation;
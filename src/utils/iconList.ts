import Menu from "/public/svg/menu.svg?raw";
import Media from "/public/svg/media.svg?raw";
import FAQ from "/public/svg/faq.svg?raw";
import Community from "/public/svg/community.svg?raw";
import Other from "/public/svg/other.svg?raw";
import Buy from "/public/svg/buy.svg?raw";
import type { IconList } from "../types/types";

export const iconList: IconList = {
  menu: {
    path: "/",
    label: "Menu",
    icon: Menu,
  },
  media: {
    path: "/media",
    icon: Media,
    label: "Media",
  },
  faq: {
    path: "/faq",
    icon: FAQ,
    label: "FAQ",
  },
  community: {
    path: "/community",
    icon: Community,
    label: "Community",
  },
  other: {
    path: "/stay-connected",
    icon: Other,
    label: "Stay Connected",
  },
  buy_now: {
    path: "/buy-now",
    icon: Buy,
    label: "Buy Now",
  },
};

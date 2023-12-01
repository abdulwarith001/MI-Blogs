import React from "react";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";
import { AiOutlineDashboard, AiOutlineUnorderedList } from "react-icons/ai";
import { GoGear } from "react-icons/go";

import { HiOutlinePencilSquare } from "react-icons/hi2";
const links = [
  { text: "dashboard", path: ".", icon: <AiOutlineDashboard /> },
  { text: "all posts", path: "posts", icon: <AiOutlineUnorderedList /> },
  { text: "create post", path: "create-post", icon: <HiOutlinePencilSquare /> },
  { text: "profile", path: "profile", icon: <ImProfile /> },
  { text: "settings", path: "setttings", icon: <GoGear /> },
  { text: "admin", path: "admin", icon: <MdAdminPanelSettings /> },
];

export default links;

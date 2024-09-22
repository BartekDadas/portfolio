import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import GroupOne from "pages/GroupOne";
import Bio from "pages/Bio";
import Tester from "pages/Tester";


const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <GroupOne />,
    },
    {
      path: "/bio",
      element: <Bio />,
    },
    {
      path: "/tester",
      element: <Tester />
    }
  ]);

  return element;
};

export default ProjectRoutes;

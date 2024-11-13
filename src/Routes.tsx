import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import GroupOne from "pages/GroupOne";
import Bio from "pages/Bio";
import Tester from "pages/Tester";
import Developer from "pages/Developer";

const ProjectRoutes: React.FC = () => {
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
    },
    {
      path: "/dev",
      element: <Developer />
    }
  ]);

  return element;
};

export default ProjectRoutes;
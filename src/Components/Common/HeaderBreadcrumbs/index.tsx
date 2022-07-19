import { Breadcrumbs } from "@mui/material";
import React, { FC, ReactNode } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface HeaderBreadcrumbsProps {
  children: ReactNode;
}

export const HeaderBreadcrumbs: FC<HeaderBreadcrumbsProps> = ({ children }) => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {children}
    </Breadcrumbs>
  );
};

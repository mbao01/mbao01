"use client";
import { usePathname } from "next/navigation";

import { getBreadcrumbs } from "./constant";
import type { BreadcrumbsProps } from "./types";
import { Link } from "../Link";

export const Breadcrumbs = ({ root, labels }: BreadcrumbsProps) => {
  const pathname = usePathname();
  const breadcrumbs = getBreadcrumbs(pathname, labels);

  return (
    <div className="breadcrumbs -ml-1 w-fit px-1 text-sm">
      <ul>
        {root && (
          <li>
            <Link hover href="/">
              {root}
            </Link>
          </li>
        )}
        {breadcrumbs.map((crumb) => (
          <li key={crumb.href.pathname}>
            <Link hover href={crumb.href} className="capitalize">
              {crumb.segment}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

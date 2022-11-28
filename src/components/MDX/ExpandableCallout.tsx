import { useRef } from "react";
import * as React from "react";
import cn from "classnames";
import { IconNote } from "../Icon/IconNote";
import { IconWarning } from "../Icon/IconWarning";
import { IconPitfall } from "../Icon/IconPitfall";
const variantMap = {
  deprecated: {
    title: 'Deprecated',
    Icon: IconWarning,
    containerClasses: 'bg-red-300 dark:bg-red-60 dark:bg-opacity-20',
    textColor: 'text-red-500 dark:text-red-40',
    overlayGradient:
      'linear-gradient(rgba(249, 247, 243, 0), rgba(249, 247, 243, 1)',
  },
  note: {
    title: 'Note',
    Icon: IconNote,
    containerClasses:
      'bg-green-300 dark:bg-green-300 dark:bg-opacity-20 text-primary dark:text-primary-dark text-lg',
    textColor: 'text-green-600 dark:text-green-40',
    overlayGradient:
      'linear-gradient(rgba(245, 249, 248, 0), rgba(245, 249, 248, 1)',
  },
  pitfall: {
    title: 'Pitfall',
    Icon: IconPitfall,
    containerClasses: 'bg-yellow-100 dark:bg-yellow-60 dark:bg-opacity-20',
    textColor: 'text-yellow-300 dark:text-yellow-40',
    overlayGradient:
      'linear-gradient(rgba(249, 247, 243, 0), rgba(249, 247, 243, 1)',
  },
  wip: {
    title: 'Under Construction',
    Icon: IconNote,
    containerClasses: 'bg-yellow-100 dark:bg-yellow-60 dark:bg-opacity-20',
    textColor: 'text-yellow-300 dark:text-yellow-40',
    overlayGradient:
      'linear-gradient(rgba(249, 247, 243, 0), rgba(249, 247, 243, 1)',
  },
};
function ExpandableCallout({ children, type }) {
  const contentRef = useRef<HTMLDivElement>(null);
    const variant = variantMap[type];
  return (
    <div
      className={cn(
        "expandable-callout",
        "pt-8 pb-4 px-5 sm:px-8 my-8 relative rounded-none shadow-inner -mx-5 sm:mx-auto sm:rounded-lg",
        variant.containerClasses
      )}>
      <h3 className={cn("mb-2 text-2xl font-bold", variant.textColor)}>
        <variant.Icon
          className={cn("inline mr-3 mb-1 text-lg", variant.textColor)}
        />
        {variant.title}
      </h3>
      <div className="relative">
        <div ref={contentRef} className="py-2">
          {children}
        </div>
      </div>
    </div>
  );
}
export const Wip = ({ children }: { children: React.ReactNode }) => (
  <ExpandableCallout type="wip">{children}</ExpandableCallout>
);
export const Pitfall = ({ children }: { children: React.ReactNode }) => (
  <ExpandableCallout type="pitfall">{children}</ExpandableCallout>
);
export const Deprecated = ({ children }: { children: React.ReactNode }) => (
  <ExpandableCallout type="deprecated">{children}</ExpandableCallout>
);
export const Note = ({ children }: { children: React.ReactNode }) => (
  <ExpandableCallout type="note">{children}</ExpandableCallout>
);

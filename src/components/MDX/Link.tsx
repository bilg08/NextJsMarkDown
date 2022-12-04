import cn from "classnames";
export function Link({ children }: any) {
  return (
    <a
      className={cn(
        "inline text-[#149ECA] decoration-1 hover:underline  dark:text-secondary-dark px-1 rounded-md no-underline"
      )}>
      {children}
    </a>
  );
}

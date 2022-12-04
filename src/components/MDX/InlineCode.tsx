import cn from 'classnames'
export function InlineCode({ children }: any) {
  return (
    <code
      className={cn(
        "inline text-base  text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline",
        "bg-gray-500 bg-opacity-10 py-px"
      )}>
      {children}
    </code>
  );
}
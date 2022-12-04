import cn from 'classnames'
export function CodeBlock({ children }: any) {
    return (
      <div
        className={cn(
          "rounded-lg p-5 h-full m-auto overflow-x-auto flex items-center dark:bg-gray-95 shadow-xl"
        )}>
        <code>{children}</code>
      </div>
    );
}
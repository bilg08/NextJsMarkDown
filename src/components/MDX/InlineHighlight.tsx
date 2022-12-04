import cn from 'classnames';
import React from 'react';
import { StringDecoder } from 'string_decoder';
interface VariantMapsType {
  [key: string]: VariantMapType;
}
interface VariantMapType {
    className:string
}
const variants: VariantMapsType = {
  blue: {
    className:
      "border-b-blue-400 w-max 	 bg-blue-50 rounded border-blue-40 text-blue-60 dark:text-blue-30",
  },
  yellow: {
    className:
      "border-b-yellow-400	w-max  bg-yellow-50 border-yellow-40 text-yellow-60 dark:text-yellow-30",
  },
  green: {
    className:
      "border-b-green-400 w-max  bg-green-50 border-green-40 text-green-60 dark:text-green-30",
    }, red: {
    className :"border-b-red-400	w-max  bg-red-50 border-purple-40 text-purple-60 dark:text-purple-30",

  },
  purple: {
    className:
      "border-b-purple-400	w-max  bg-purple-50 border-purple-40 text-purple-60 dark:text-purple-30",
  },
};

export function InlineHighlight({ children, type }: {children:React.ReactNode,type:string}) {
    const variant = variants[type?type:'green'];
    return (
      <div
            className={cn(
            variant.className,
          "border-2 p-1  relative rounded-none shadow-inner"
        )}>
        <p>{children}</p>
      </div>
    );
}
export const GreenInlineHighlight = ({ children }: {children:React.ReactNode}) => (
  <InlineHighlight type="green">{children}</InlineHighlight>
); 
export const YellowInlineHighlight = ({ children }: {children:React.ReactNode}) => (
  <InlineHighlight type='yellow'>{children}</InlineHighlight>
); 
export const BlueInlineHighlight = ({ children }: {children:React.ReactNode}) => (
  <InlineHighlight type="blue">{children}</InlineHighlight>
); 
export const PurpleInlineHighlight = ({ children }: {children:React.ReactNode}) => (
  <InlineHighlight type="purple">{children}</InlineHighlight>
);
export const RedInlineHighlight = ({
  children,
}: {
  children: React.ReactNode;
}) => <InlineHighlight type="red">{children}</InlineHighlight>;  

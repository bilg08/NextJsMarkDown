import * as React from "react";

export interface IntroProps {
  children?: React.ReactNode;
}

export function Intro({ children }: IntroProps) {
    return <div className="shadow-inner text-lg shadow-md p-5">{children}</div>;
}


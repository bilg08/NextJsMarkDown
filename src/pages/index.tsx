import { MDXProvider } from "@mdx-js/react";
import React from "react";
import UseEffectMd from '../content/useEffect.mdx';
import { H1 } from '../components/MDX/Heading';
import {Wip,Pitfall,Note,Deprecated} from "../components/MDX/ExpandableCallout";
export default function Home(props: any) {
  // const H1 = ({ children }: any) => <h1 style={{color:'red'}}>{children}</h1>
  const components = {
    H1: H1,
    Pitfall:Pitfall
  }
  return (
    <div className="bg-[#23272F] h-[100vh]">
      <MDXProvider components={components}>
        <main {...props} />
        <UseEffectMd />
      </MDXProvider>
    </div>
  );
}

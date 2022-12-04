import { MDXProvider } from "@mdx-js/react";
import React from "react";
import UseEffectMd from './learn/useEffect.mdx';
import { Link } from "../components/MDX/Link";
import { H1,H2,H3 } from '../components/MDX/Heading'
import { Intro } from '../components/MDX/Intro';
import { CodeBlock } from "../components/MDX/Codeblock";
import { InlineCode } from "../components/MDX/InlineCode";
import { GreenInlineHighlight,RedInlineHighlight,PurpleInlineHighlight,BlueInlineHighlight,YellowInlineHighlight, InlineHighlight } from "../components/MDX/InlineHighlight";
import {Wip,Pitfall,Note,Deprecated} from "../components/MDX/ExpandableCallout";
export default function Home(props: any) {
  const components = {
    Wip: Wip,
    Pitfall: Pitfall,
    Note: Note,
    Deprecated: Deprecated,
    InlineCode: InlineCode,
    Link: Link,
    H1: H1,
    H2: H2,
    H3: H3,
    Intro: Intro,
    CodeBlock: CodeBlock,
    InlineHighlight: InlineHighlight,
    GreenInlineHighlight: GreenInlineHighlight,
    PurpleInlineHighlight: PurpleInlineHighlight,
    BlueInlineHighlight: BlueInlineHighlight,
    YellowInlineHighlight: YellowInlineHighlight,
    RedInlineHighlight: RedInlineHighlight,
  };
  return (
    <div className="w-4/6 m-auto">
      <MDXProvider components={components}>
        <UseEffectMd />
      </MDXProvider>
    </div>
  );
}

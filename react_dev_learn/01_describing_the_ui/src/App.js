/* Exporting and importing a component 
1) Make a new JS file to put the components in.
2) Export your function component from that file (using either default or named exports).
3) Import it in the file where you’ll use the component (using the corresponding technique for importing default or named exports).

- You may use either a default or a named export for Profile, but make sure that you use the corresponding import syntax in both App.js and Gallery.js! You can refer to the table from the deep dive above:
Syntax	Export statement	Import statement
Default	export default function Button() {}	import Button from './Button.js';
Named	export function Button() {}	import { Button } from './Button.js';

- import Gallery from './Gallery'; --> Either './Gallery.js' or './Gallery' will work with React, though the former is closer to how native ES Modules work.
*/

import Gallery from "./Gallery.js";
import { Profile } from "./Gallery.js";
import { TitleComponentDemo } from "./Gallery.js";
import { EndlineComponentDemo  } from "./Gallery.js";
import { TodoListJSXDemo } from "./WritingMarkupWithJSXDemo.js";
import BioJSXDomo  from "./WritingMarkupWithJSXDemo.js";
import JavaScriptInJSXWithCurlyBracesDemo from "./JavaScriptInJSXwithCurlyBracesDemo.js";
import PassingPropsToAComponentDemo from "./PassingPropsToComponentDemo"
import ConditionalRenderingDemo from "./ConditionalRenderingDemo"
import RenderingListsDemo from "./RederingLists"
import KeepingComponentsPureDemo from "./KeepingComponentsPure.js";

export default function App() {
  return (
    <section>
      <Gallery />
      <TitleComponentDemo textTitle="Export Component Demo" />
      <Profile />
      <EndlineComponentDemo />

      <TitleComponentDemo textTitle="Writing Markup with JSX Demo" />
      <TodoListJSXDemo />
      <BioJSXDomo />
      <EndlineComponentDemo />

      <TitleComponentDemo textTitle="JavaScript in JSX with Curly Braces Demo" />
      <JavaScriptInJSXWithCurlyBracesDemo />
      <EndlineComponentDemo />

      <TitleComponentDemo textTitle="Passing Props to a Component Demo" />
      <PassingPropsToAComponentDemo />
      <EndlineComponentDemo />

      <TitleComponentDemo textTitle="Conditional Rendering Demo" />
      <ConditionalRenderingDemo />
      <EndlineComponentDemo />

      <TitleComponentDemo textTitle="Rendering List Demo" />
      <RenderingListsDemo />
      <EndlineComponentDemo />

      <TitleComponentDemo textTitle="Keeping Components Pure Demo" />
      <KeepingComponentsPureDemo />
      <EndlineComponentDemo />
    </section>
    );
}

/* JSX VS HTML
- React components group rendering logic together with markup because they are related.
- JSX is similar to HTML, with a few differences. You can use a converter if you need to.
- Error messages will often point you in the right direction to fixing your markup.
 */

export function TodoListJSXDemo() {
  return (
    <>
    <h1>Hedy Lamarr's Todos</h1>
    <img 
      src="https://i.imgur.com/yXOvdOSs.jpg" 
      alt="Hedy Lamarr" 
      className="photo"
    ></img>
    <ul>
      <li>Invent new traffic lights</li>
      <li>Rehearse a movie scene</li>
      <li>Improve the spectrum technology</li>
    </ul>
    </>
  );
}

export default function BioJSXDomo() {
  return (
    <div>
    <div className="intro">
      <h1>Welcome to my website!</h1>
    </div>
    <p className="summary">
      You can find my thoughts here.
      <br /><br />
      <b>And <i>pictures</i> </b> of scientists!
    </p>
    </div>
  );
}

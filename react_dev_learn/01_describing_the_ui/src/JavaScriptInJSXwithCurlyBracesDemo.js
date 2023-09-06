/* NOTE : JavaScript in JSX with Curly Braces
1) Where to use curly braces : You can only use curly braces in two ways inside JSX:
1.1) As text directly inside a JSX tag: <h1>{name}'s To Do List</h1> works, but <{tag}>Gregorio Y. Zara's To Do List</{tag}> will not.
1.2) As attributes immediately following the = sign: src={avatar} will read the avatar variable, but src="{avatar}" will pass the string "{avatar}".

2) Recap --> Now you know almost everything about JSX:
2.1) JSX attributes inside quotes are passed as strings.
2.2) Curly braces let you bring JavaScript logic and variables into your markup.
2.3) They work inside the JSX tag content or immediately after = in attributes.
2.4) {{ and }} is not special syntax: it’s a JavaScript object tucked inside JSX curly braces.
*/

// Passing strings with quotes 
export function AvatarPassingStringsWithQuotesDemo() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}

// Using curly braces: A window into the JavaScript world 
export function TodoListUsingCurlyBracesDemo() {
  const name = 'Gregorio Y. Zara';
  return (
    <h1>{name}'s To Do List</h1>
  );
}

// Using curly braces with functions
const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export function TodoListUsingCurlyBracesIncludingFuctionsDemo() {
  return (
    <h1>To Do List with with function for {formatDate(today)}</h1>
  );
}

// Using “double curlies”: CSS and other objects in JSX 
export function TodoListDoubleCurliesDemo() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Demo for double curlies</li>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}

// More fun with JavaScript objects and curly braces --> You can move several expressions into one object, and reference them in your JSX inside curly braces:
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'gray',
    color: 'pink'
  }
};

export function TodoListWithJavaScriptObjectAndCurlyBracesDemo() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Demo for using Java script Object and Curly Braces</li>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

// Try out some challenges
/* 
Challenge 1 : This code crashes with an error saying Objects are not valid as a React child
Challenge 2 : Extract the image URL into the person object.
Challenge 3 :
- In the object below, the full image URL is split into four parts: base URL, imageId, imageSize, and file extension.
- We want the image URL to combine these attributes together: base URL (always 'https://i.imgur.com/'), imageId ('7vQD0fP'), imageSize ('s'), and file extension (always '.jpg'). However, something is wrong with how the <img> tag specifies its src.
- src="https://i.imgur.com/7vQD0fPs.jpg"
*/

const personChallenges = {
  name: 'Lee McCormick',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  },
  imageUrl: 'https://picsum.photos/200',
  imageDescription: 'Random Image'
};

const baseUrl = 'https://i.imgur.com/';
const personChallenge3Gregorio = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export function TodoListCurlyBracesChallengesDemo() {
  return (
    <div style={personChallenges.theme}>
      <h1>{personChallenges.name}'s Challenges Demo</h1>
      <section>
      <img
        className="avatar"
        src={personChallenges.imageUrl}
        alt={personChallenges.imageDescription}
      />
      <img
        className="avatar"
        src={baseUrl + personChallenge3Gregorio.imageId + personChallenge3Gregorio.imageSize + '.jpg'}
        alt={personChallenge3Gregorio.name}
      />
      </section>
      <ul>
        <li>Fix the mistake</li>
        <li>Extract imfomation into an object</li>
        <li>Write an expression inside JSX curly braces</li>
      </ul>
    </div>
  );
}

// Main Default for JavaScriptInJSXWithCurlyBracesDemo
export default function JavaScriptInJSXWithCurlyBracesDemo() {
  return (
    <div>
      <AvatarPassingStringsWithQuotesDemo />
      <TodoListUsingCurlyBracesDemo />
      <TodoListUsingCurlyBracesIncludingFuctionsDemo />
      <TodoListDoubleCurliesDemo />
      <TodoListWithJavaScriptObjectAndCurlyBracesDemo />
      <TodoListCurlyBracesChallengesDemo />
    </div>
  );
}
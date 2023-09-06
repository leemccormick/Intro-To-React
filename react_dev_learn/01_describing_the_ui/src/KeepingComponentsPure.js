/* NOTE : Keeping Components Pure
- A component must be pure, meaning:
--> It minds its own business. It should not change any objects or variables that existed before rendering.
--> Same inputs, same output. Given the same inputs, a component should always return the same JSX.
- Rendering can happen at any time, so components should not depend on each others’ rendering sequence.
- You should not mutate any of the inputs that your components use for rendering. That includes props, state, and context. To update the screen, “set” state instead of mutating preexisting objects.
- Strive to express your component’s logic in the JSX you return. When you need to “change things”, you’ll usually want to do it in an event handler. As a last resort, you can useEffect.
- Writing pure functions takes a bit of practice, but it unlocks the power of React’s paradigm.
*/

import { useState, useEffect } from 'react';

// Recap
export function RecapKeepingComponentsPure() {
  return (
    <div className="my-container">
      <ul className="custom-ul">
        <li>A component must be pure, meaning : It minds its own business. It should not change any objects or variables that existed before rendering.</li>
        <li>A component must be pure, meaning : Same inputs, same output. Given the same inputs, a component should always return the same JSX.</li>
        <li>Rendering can happen at any time, so components should not depend on each others’ rendering sequence.</li>
        <li>You should not mutate any of the inputs that your components use for rendering. That includes props, state, and context. To update the screen, “set” state instead of mutating preexisting objects.</li>
        <li>Strive to express your component’s logic in the JSX you return. When you need to “change things”, you’ll usually want to do it in an event handler. As a last resort, you can useEffect.</li>
        <li>Writing pure functions takes a bit of practice, but it unlocks the power of React’s paradigm.</li>
      </ul>
    </div>
  );
}

// Purity: Components as formulas
function Recipe({ drinkers }) {
  return (
    <ol>    
      <li>Boil {drinkers} cups of water.</li>
      <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

export function PurityKeepingComponentsPure() {
  return (
    <section>
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
    </section>
  );
}

// Side Effects: (un)intended consequences 
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export function SideEffectsKeepingComponentsPure() {
  return (
    <>
    <Cup guest={1} />
    <Cup guest={2} />
    <Cup guest={3} />
  </>
  );
}

// Local mutation: Your component’s little secret 
function CupLocal({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export function LocalMutationKeepingComponentsPure() {
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<CupLocal key={i} guest={i} />);
  }
  return cups;
}

// Where you can cause side effects 
export function WhereCauseSideEffectsKeepingComponentsPure() {
  return (
    <div className="my-container">
      <p>
      In React, side effects usually belong inside event handlers. Event handlers are functions that React runs when you perform some action—for example, when you click a button. Even though event handlers are defined inside your component, they don’t run during rendering! So event handlers don’t need to be pure.
      </p>
    </div>
  );
}

// Try out some challenges
/*
Challenge 1 of 3: Fix a broken clock 
- This component tries to set the <h1>’s CSS class to "night" during the time from midnight to six hours in the morning, and "day" at all other times. However, it doesn’t work. Can you fix this component?
- You can verify whether your solution works by temporarily changing the computer’s timezone. When the current time is between midnight and six in the morning, the clock should have inverted colors!
*/
export function FixedClock({ time }) {
  let hours = time.getHours();
  let className;
  if (hours >= 0 && hours <= 6) {
    className = 'night';
  } else {
   className = 'day';
  }
  return (
    <h1 className={className}>
      {time.toLocaleTimeString()}
    </h1>
  );
}

// import { useState, useEffect } from 'react';
function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function Challenges1FixBrokenClickKeepingComponentsPure() {
  const time = useTime();
  return (
    <FixedClock time={time} />
  );
}

// Try out some challenges
/*
Challenge 2 of 3: Fix a broken profile 
- Two Profile components are rendered side by side with different data. Press “Collapse” on the first profile, and then “Expand” it. You’ll notice that both profiles now show the same person. This is a bug.
- Find the cause of the bug and fix it.
*/
export function Panel({ children }) {
  const [open, setOpen] = useState(true);
  return (
    <section className="panel">
      <button onClick={() => setOpen(!open)}>
        {open ? 'Collapse' : 'Expand'}
      </button>
      {open && children}
    </section>
  );
}

export function FixedProfile({ person }) {
  return (
    <Panel>
      <HeaderProfile person={person}/>
      <AvatarProfile person={person}/>
    </Panel>
  )
}

function HeaderProfile({ person })  {
  return <h1>{person.name}</h1>;
}

function getImageUrlProfile(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

function AvatarProfile({ person })  {
  return (
    <img
      className="avatar"
      src={getImageUrlProfile(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}

export function Challenges2FixBrokenProfileKeepingComponentsPure() {
  return (
    <>
      <FixedProfile person={{
        imageId: 'lrWQx8l',
        name: 'Subrahmanyan Chandrasekhar',
      }} />
      <hr></hr>
      <FixedProfile person={{
        imageId: 'MK3eW3A',
        name: 'Creola Katherine Johnson',
      }} />
    </>
  );
}

// Try out some challenges
/*
Challenge 3 of 3: Fix a broken story tray 
- The CEO of your company is asking you to add “stories” to your online clock app, and you can’t say no. You’ve written a StoryTray component that accepts a list of stories, followed by a “Create Story” placeholder.
- You implemented the “Create Story” placeholder by pushing one more fake story at the end of the stories array that you receive as a prop. But for some reason, “Create Story” appears more than once. Fix the issue.
*/
export function StoryTray({ stories }) {
  return (
    <ul>
      {stories.map(story => (
        <li className="story-li" key={story.id}>
          {story.label}
        </li>
      ))}
      <li className="story-li">Create story </li>
    </ul>
  );
}

let initialStories = [
  {id: 0, label: "Ankit's Story" },
  {id: 1, label: "Taylor's Story" },
];

export function Challenges3FixBrokenStoryTrayKeepingComponentsPure() {
  let [stories, setStories] = useState([...initialStories])
  let time = useTime();

  // HACK: Prevent the memory from growing forever while you read docs.
  // We're breaking our own rules here.
  if (stories.length > 100) {
    stories.length = 100;
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        textAlign: 'center',
      }}
    >
      <h2>It is {time.toLocaleTimeString()} now.</h2>
      <StoryTray stories={stories} />
      <hr></hr>
    </div>
  );
}

// Try out some challenges
export function ChallengesKeepingComponentsPure() {
  return (
    <div className="my-container">
      <h2>Fixed a broken clock</h2>
      <Challenges1FixBrokenClickKeepingComponentsPure />

      <h2>Fixed a broken profile</h2>
      <Challenges2FixBrokenProfileKeepingComponentsPure />

      <h2>Fixed a broken story trey</h2>
      <Challenges3FixBrokenStoryTrayKeepingComponentsPure />
    </div>
  );
}

// Main Default For Keeping Components Pure Demo
export default function KeepingComponentsPureDemo() {
  return (
    <div className="my-container">
      <h2 className="h2TopicTitle">Recap</h2>
      <RecapKeepingComponentsPure />

      <h2 className="h2TopicTitle">Purity: Components as formulas</h2>
      <PurityKeepingComponentsPure />

      <h2 className="h2TopicTitle">Side Effects: (un)intended consequences </h2>
      <SideEffectsKeepingComponentsPure />

      <h2 className="h2TopicTitle">Local mutation: Your component’s little secret </h2>
      <LocalMutationKeepingComponentsPure />

      <h2 className="h2TopicTitle">Where you can cause side effects </h2>
      <WhereCauseSideEffectsKeepingComponentsPure />

      <h2 className="h2TopicTitle">Try out some challenges</h2>
      <ChallengesKeepingComponentsPure />
    </div>
  );
}

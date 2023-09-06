/* NOTE : Passing Props to a Component
- React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.
- Familiar props --> Props are the information that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an <img>
- Passing props to a component --> Step 1: Pass props to the child component | Step 2: Read props inside the child component 
- To pass props, add them to the JSX, just like you would with HTML attributes.
- To read props, use the function Avatar({ person, size }) destructuring syntax.
- You can specify a default value like size = 100, which is used for missing and undefined props.
- You can forward all props with <Avatar {...props} /> JSX spread syntax, but don’t overuse it!
- Nested JSX like <Card><Avatar /></Card> will appear as Card component’s children prop.
- Props are read-only snapshots in time: every render receives a new version of props.
- You can’t change props. When you need interactivity, you’ll need to set state.
*/

import { getImageUrl } from './utils.js';
import { getImageUrlWithId } from './utils.js';
import Avatar from './Avatar.js';
import { useState, useEffect } from 'react';
import Clock from './Clock.js';

// Familiar props --> Props are the information that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an <img>:
function AvatarPropsDemo() {
  return (
    <div> 
    <h3>Props are the information that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an image</h3>
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
    </div>
  );
}

// Passing props to a component 
/*
Step 1: Pass props to the child component --> First, pass some props to Avatar. For example, let’s pass two props: person (an object), and size (a number):
Step 2: Read props inside the child component --> You can read these props by listing their names person, size separated by the commas inside ({ and }) directly after function Avatar. This lets you use them inside the Avatar code, like you would with a variable.
*/
function AvatarPassingPropsDemo({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

// Specifying a default value for a prop --> If you want to give a prop a default value to fall back on when no value is specified, you can do it with the destructuring by putting = and the default value right after the parameter:
function AvatarPassingPropsWithDefaultValueDemo({ person, size = 100 }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

// Forwarding props with the JSX spread syntax 
/*
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}
*/

// Passing JSX as children 
// import Avatar from './Avatar.js';
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

// How props change over time 
// import { useState, useEffect } from 'react';
// import Clock from './Clock.js';
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

// Try out some challenges
/*
Challenge 1 of 3: Extract a component
- This Gallery component contains some very similar markup for two profiles. Extract a Profile component out of it to reduce the duplication. You’ll need to choose what props to pass to it.
Challenge 2 of 3: Adjust the image size based on a prop 
- In this example, Avatar receives a numeric size prop which determines the <img> width and height. The size prop is set to 40 in this example. However, if you open the image in a new tab, you’ll notice that the image itself is larger (160 pixels). The real image size is determined by which thumbnail size you’re requesting.
- Change the Avatar component to request the closest image size based on the size prop. Specifically, if the size is less than 90, pass 's' (“small”) rather than 'b' (“big”) to the getImageUrl function. Verify that your changes work by rendering avatars with different values of the size prop and opening images in a new tab.
Challenge 3 of 3: Passing JSX in a children prop 
- Extract a Card component from the markup below, and use the children prop to pass different JSX to it:
*/

const scientists1 = {
  name: 'Maria Skłodowska-Curie',
  imageId: 'szV5sdG',
  professionDescription: 'physicist and chemist',
  awardsCount: 4,
  awardsDescription: '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
  discoveredDescription: 'polonium (element)',
};

const scientists2 = {
  name: 'Katsuko Saruhashi',
  imageId: 'YfeOqp2',
  professionDescription: 'geochemist',
  awardsCount: 2,
  awardsDescription: '(Miyake Prize for geochemistry, Tanaka Prize)',
  discoveredDescription: 'a method for measuring carbon dioxide in seawater',
};

export function GalleryChallenges1ExtractProfile({scientist, size}) {
  let thumbnailSize = 's';
  if (size > 90) {
    thumbnailSize = 'b';
  } 
  return (
  <section className="profile">
  <h2>{scientist.name}</h2>
  <img
    className="avatar"
    src={getImageUrlWithId(scientist.imageId, thumbnailSize)}
    alt={scientist.name}
    width={size}
    height={size}
  />
  <ul>
    <li>
      <b>Profession: </b> 
      {scientist.professionDescription}
    </li>
    <li>
      <b>Awards: {scientist.awardsCount} </b> 
      {scientist.awardsDescription}
    </li>
    <li>
      <b>Discovered: </b>
      {scientist.discoveredDescription}
    </li>
  </ul>
  </section>
  );
}

// Challenge 3 of 3: Passing JSX in a children prop 
function CardChallenge({ children }) {
  return (
    <div className="card">
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export function Challenges3ExtractProfileCard() {
  return (
    <div>
      <CardChallenge>
      <h1>Photo</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={100}
          height={100}
        />
      </CardChallenge>

      <CardChallenge>
      <h1>About</h1>
      <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </CardChallenge>
    </div>
  );
}

export function GalleryChallenges() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      {/* <GalleryChallenges1ExtractProfile 
      name={scientists1.name} 
      imageId={scientists1.imageId}
      professionDescription={scientists1.professionDescription}  
      awardsCount={scientists1.awardsCount} 
      awardsDescription={scientists1.awardsDescription} 
      discoveredDescription={scientists1.discoveredDescription} 
      /> */}
      <GalleryChallenges1ExtractProfile scientist={scientists1} />
      <GalleryChallenges1ExtractProfile scientist={scientists2} />
      <Challenges3ExtractProfileCard />
    </div>
  );
}

// Main Default For PassingPropsToAComponentDemo
export default function PassingPropsToAComponentDemo() {
  const time = useTime();
  const [color, setColor] = useState('lightcoral');

  return (
    <div>
    <AvatarPropsDemo />

    <AvatarPassingPropsDemo
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />

    <AvatarPassingPropsDemo
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />

   <AvatarPassingPropsDemo
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />

  <AvatarPassingPropsWithDefaultValueDemo
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />

  <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>

   <p> Pick a color:{' '}
        <select value={color} onChange={e => setColor(e.target.value)}>
          <option value="lightcoral">lightcoral</option>
          <option value="midnightblue">midnightblue</option>
          <option value="rebeccapurple">rebeccapurple</option>
        </select>
    </p>
    <Clock color={color} time={time.toLocaleTimeString()} />
    
    <GalleryChallenges />
    </div>
  );
}
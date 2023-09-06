/* NOTE : Rendering List Demo
- How to move data out of components and into data structures like arrays and objects.
- How to generate sets of similar components with JavaScript’s map().
- How to create arrays of filtered items with JavaScript’s filter().
- Why and how to set key on each component in a collection so React can keep track of each of them even if their position or data changes.
*/
import { people } from './data.js';
import { getImageUrl } from './utils.js';
import { recipes } from './data.js';
import { Fragment } from 'react';

// Rendering data from arrays
const peopleNotSafeGotErrorWarningAboutKey = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

export function RenderingDataFromArrays() {
  const listItemsNotSafe = peopleNotSafeGotErrorWarningAboutKey.map(person => <li key={crypto.randomUUID()}>{person}</li>);

  return (
    <div>
        <h1>Data before putting in array</h1>
        <ul>
        <li>Creola Katherine Johnson: mathematician</li>
        <li>Mario José Molina-Pasquel Henríquez: chemist</li>
        <li>Mohammad Abdus Salam: physicist</li>
        <li>Percy Lavon Julian: chemist</li>
        <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
        </ul>
    
        <h1>Data from listItems that not safe</h1>
        <ul>{listItemsNotSafe}</ul>
    </div>
  );
}

// Filtering arrays of items
// import { people } from './data.js';
// import { getImageUrl } from './utils.js';
/*
1) Create a new array of just “chemist” people, chemists, by calling filter() on the people filtering by person.profession === 'chemist':
2) Now map over chemists: listItems
3) Lastly, return the listItems from your component:
*/

export function FilteringArraysOfItems() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = chemists.map(person => 
    <li key={person.name}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}

// Keeping list items in order with key
export function KeepingListItemsInOrderWithKey() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}

// Keys Info
export function KeysInfo() {
  return (
    <div>
        <h1>Where to get your key</h1>
        <ul className="custom-ul"> 
        <li>Data from a database: If your data is coming from a database, you can use the database keys/IDs, which are unique by nature.</li>
        <li>Locally generated data: If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, crypto.randomUUID() or a package like uuid when creating items.</li>
        </ul>

        <h1>Rules of keys</h1>
        <ul className="custom-ul"> 
        <li>Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.</li>
        <li>Keys must not change or that defeats their purpose! Don’t generate them while rendering.</li>
        </ul>

        <h1>Why does React need keys?</h1>
        <ul className="custom-ul"> 
        <li>Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.</li>
        <li>File names in a folder and JSX keys in an array serve a similar purpose. They let us uniquely identify an item between its siblings. A well-chosen key provides more information than the position within the array. Even if the position changes due to reordering, the key lets React identify the item throughout its lifetime.</li>
        </ul>

        <h1>Recap</h1>
        <ul className="custom-ul"> 
        <li>How to move data out of components and into data structures like arrays and objects.</li>
        <li>How to generate sets of similar components with JavaScript’s map().</li>
        <li>How to create arrays of filtered items with JavaScript’s filter().</li>
        <li>Why and how to set key on each component in a collection so React can keep track of each of them even if their position or data changes.</li>
        </ul>
    </div>
  );
}

// Try out some challenges
/*
Challenge 1 of 4: Splitting a list in two 
- This example shows a list of all people.
- Change it to show two separate lists one after another: Chemists and Everyone Else. Like previously, you can determine whether a person is a chemist by checking if person.profession === 'chemist'.
Challenge 2 of 4: Nested lists in one component 
- Make a list of recipes from this array! For each recipe in the array, display its name as an <h2> and list its ingredients in a <ul>.
Challenge 3 of 4: Extracting a list item component 
- This RecipeList component contains two nested map calls. To simplify it, extract a Recipe component from it which will accept id, name, and ingredients props. Where do you place the outer key and why?
Challenge 4 of 4: List with a separator 
- This example renders a famous haiku by Katsushika Hokusai, with each line wrapped in a <p> tag. Your job is to insert an <hr /> separator between each paragraph. Your resulting structure should look like this:
*/

export function RenderingListsChallenges1() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );

  const nonChemists = people.filter(person =>
    person.profession !== 'chemist'
  );

  const listChemists = chemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );

  const listEveryoneElse= nonChemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
 
  return (
    <article>
      <h1>Chemist</h1>
      <ul>{listChemists}</ul>

      <h1>Other Scientists</h1>
      <ul>{listEveryoneElse}</ul>
    </article>
  );
}

export function RenderingListsChallenges2() { 
  return (
    <div>
    <h1>Recipes Challenge 2</h1>
    {recipes.map(recipe =>
      <div key={recipe.id}>
        <h2>{recipe.name}</h2>
        <ul>
          {recipe.ingredients.map(ingredient =>
            <li key={ingredient}>
              {ingredient}
            </li>
          )}
        </ul>
      </div>
    )}
    </div>
  );
}

function RecipeChalleges3({recipe}) {
  return (
    <div key={recipe.id}>
        <h2>{recipe.name}</h2>
        <ul>
          {recipe.ingredients.map(ingredient =>
            <li key={ingredient}>
              {ingredient}
            </li>
          )}
        </ul>
      </div>
  );
}

export function RenderingListsChallenges3() { 
  return (
    <div>
    <h1>Recipes Challenge 3 : Simplify</h1>
    {recipes.map(recipe =>
      <RecipeChalleges3 recipe={recipe} key={recipe.id}/>
    )}
    </div>
  );
}

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export function Poem() {
  let output = [];

  // Fill the output array
  poem.lines.forEach((line, i) => {
    output.push(
      <hr key={i + '-separator'} />
    );
    output.push(
      <p key={i + '-text'}>
        {line}
      </p>
    );
  });
  // Remove the first <hr />
  output.shift();

  return (
    <article>
      {output}
    </article>
  );
}

export function PoemWithFragment() {
  return (
    <article>
      {poem.lines.map((line, i) =>
        <Fragment key={i}>
          {i > 0 && <hr />}
          <p>{line}</p>
        </Fragment>
      )}
    </article>
  );
}


export function RenderingListsChallenges() {
  return (
    <div className="my-container">
    <RenderingListsChallenges1 />
    <RenderingListsChallenges2 />
    <RenderingListsChallenges3 />
    <Poem />
    <PoemWithFragment />
    </div>
  );
}

// Main Default For Rendering List Demo
export default function RenderingListsDemo() {
  return (
    <div className="my-container">
      <h2 className="h2TopicTitle">Rendering data from arrays</h2>
      <RenderingDataFromArrays />

      <h2 className="h2TopicTitle">Filtering arrays of items </h2>
      <FilteringArraysOfItems />

      <h2 className="h2TopicTitle">Keeping list items in order with key</h2>
      <KeepingListItemsInOrderWithKey />

      <h2 className="h2TopicTitle">Keys</h2>
      <KeysInfo />

      <h2 className="h2TopicTitle">Try out some challenges</h2>
      <RenderingListsChallenges />
    </div>
  );
}
/* NOTE : Conditional Rendering
- Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.
- In React, you control branching logic with JavaScript.
- You can return a JSX expression conditionally with an if statement.
- You can conditionally save some JSX to a variable and then include it inside other JSX by using the curly braces.
- In JSX, {cond ? <A /> : <B />} means “if cond, render <A />, otherwise <B />”.
- In JSX, {cond && <A />} means “if cond, render <A />, otherwise nothing”.
- The shortcuts are common, but you don’t have to use them if you prefer plain if.
*/

// Conditionally returning JSX 
function ItemConditionallyReturningJSX({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

export function PackingListConditionallyReturningJSX() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <ItemConditionallyReturningJSX 
          isPacked={true} 
          name="Space suit" 
        />
        <ItemConditionallyReturningJSX 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <ItemConditionallyReturningJSX 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

// Conditionally returning nothing with null 
function ItemReturningNothingWithNull({ name, isPacked }) {
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>;
}

export function PackingListReturningNothingWithNull() {
  return (
    <section>
      <h1>Sally Ride's Packing List : Conditionally returning nothing with null </h1>
      <h4>return null</h4>
      <ul>
        <ItemReturningNothingWithNull 
          isPacked={true} 
          name="Space suit" 
        />
        <ItemReturningNothingWithNull 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <ItemReturningNothingWithNull 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

// Conditionally including JSX And Conditional (ternary) operator (? :) 
function ItemIncludingJSXAndTernary({ name, isPacked }) {
  // return (
  //   <li className="item">
  //     {isPacked ? name + ' ✔' : name}
  //   </li>
  // );

  // This is more advance using del
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + ' ✔'}
        </del>
      ) : (
        name
      )}
    </li>
  );
}

export function PackingIncludingJSXAndTernary() {
  return (
    <section>
      <h1>Sally Ride's Packing List : Conditionally including JSX and (ternary) operator (? :) </h1>
      <h4>isPacked ? name + ' ✔' : name</h4>
      <ul>
        <ItemIncludingJSXAndTernary 
          isPacked={true} 
          name="Space suit" 
        />
        <ItemIncludingJSXAndTernary 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <ItemIncludingJSXAndTernary 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

// Logical AND operator (&&) 
function ItemLogicalANDOperator({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  );
}

export function PackingListLogicalANDOperator() {
  return (
    <section>
      <h1>Sally Ride's Packing List : Logical AND operator (&&)</h1>
      <h4>name isPacked && '✔'</h4>
      <ul>
        <ItemLogicalANDOperator 
          isPacked={true} 
          name="Space suit" 
        />
        <ItemLogicalANDOperator 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <ItemLogicalANDOperator 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

// Conditionally assigning JSX to a variable 
function ItemAssigningJSXtoVariable({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = (
      <del>
        {name + " ✔"}
      </del>
    );
  }
  return (
    <li className="item">
      {itemContent}
    </li>
  );
}

export function PackingListAssigningJSXtoVariable () {
  return (
    <section>
      <h1>Sally Ride's Packing List : Conditionally assigning JSX to a variable </h1>
      <h4>let itemContent = name;</h4>
      <ul>
        <ItemAssigningJSXtoVariable 
          isPacked={true} 
          name="Space suit" 
        />
        <ItemAssigningJSXtoVariable 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <ItemAssigningJSXtoVariable 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

// Try out some challenges
/*
Challenge 1 of 3: Show an icon for incomplete items with ? :
- Use the conditional operator (cond ? a : b) to render a ❌ if isPacked isn’t true.
Challenge 2 of 3: Show the item importance with &&
- In this example, each Item receives a numerical importance prop. Use the && operator to render ”(Importance: X)” in italics, but only for items that have non-zero importance. Your item list should end up looking like this:
- Space suit (Importance: 9)
- Helmet with a golden leaf
- Photo of Tam (Importance: 6)
- Don’t forget to add a space between the two labels!
Challenge 3 of 3: Refactor a series of ? : to if and variables
- This Drink component uses a series of ? : conditions to show different information depending on whether the name prop is "tea" or "coffee". The problem is that the information about each drink is spread across multiple conditions. Refactor this code to use a single if statement instead of three ? : conditions.
*/

function ItemChallenges({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked ? '✔' : 'x'}
    </li>
  );
}

function ItemChallenges2({ name, isPacked, importance}) {
  return (
    <li className="item">
            {name} 
            {isPacked ? '✔' : 'x'} 
            {importance > 0 && ' '}
            {importance > 0 &&  
              <i>Importance: {importance}</i>
            }
    </li>
  );
}

function Drink({ name }) {
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{name === 'tea' ? 'leaf' : 'bean'}</dd>
        <dt>Caffeine content</dt>
        <dd>{name === 'tea' ? '15–70 mg/cup' : '80–185 mg/cup'}</dd>
        <dt>Age</dt>
        <dd>{name === 'tea' ? '4,000+ years' : '1,000+ years'}</dd>
      </dl>
    </section>
  );
}

function DrinkChallenge({ name }) {
  let partOfPlant = '';
  let caffeineContent = '';
  let age ='';
  if (name === 'tea') {
    partOfPlant = 'leaf';
    caffeineContent = '15–70 mg/cup';
    age = '4,000+ years' 
  } else {
    partOfPlant = 'bean';
    caffeineContent = '80–185 mg/cup';
    age = '1,000+ years' 
  }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant : {partOfPlant}</dt>
        <dt>Caffeine content: {caffeineContent}</dt>
        <dt>Age: {age}</dt>
      </dl>
    </section>
  );
}

export function DrinkList() {
  return (
    <div>
      <h4>Drink Before Refactor</h4>
      <Drink name="tea" />
      <Drink name="coffee" />

      <h4>Drink Challenge After Refactor</h4>
      <DrinkChallenge name="tea" />
      <DrinkChallenge name="coffee" />
    </div>
  );
}

export function PackingListChallenges() {
  return (  
  <section>
      <h1>Sally Ride's Packing List : Challenges</h1>
      <ul>
        <ItemChallenges 
          isPacked={true} 
          name="Space suit" 
        />
        <ItemChallenges 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <ItemChallenges 
          isPacked={false} 
          name="Photo of Tam" 
        />

        <ItemChallenges2 
          isPacked={true} 
          name="Space suit" 
          importance={9}
        />

        <ItemChallenges2 
         isPacked={true} 
         name="Helmet with a golden leaf" 
        />

        <ItemChallenges2 
        isPacked={false} 
        name="Photo of Tam" 
        importance={6}
        />

        <DrinkList />
      </ul>
    </section>
  );
}


// Main Default For Conditional Rendering Demo
export default function ConditionalRenderingDemo() {
  return (
    <div className="my-container">
    <h2 className="h2TopicTitle">Conditionally returning JSX</h2>
    <PackingListConditionallyReturningJSX />

    <h2 className="h2TopicTitle">Conditionally returning nothing with null</h2>
    <PackingListReturningNothingWithNull /> 

    <h2 className="h2TopicTitle">Conditionally including JSX | Conditional (ternary) operator (? :)</h2>
    <PackingIncludingJSXAndTernary /> 

    <h2 className="h2TopicTitle">Logical AND operator (&&)</h2>
    <PackingListLogicalANDOperator />
    
    <h2 className="h2TopicTitle">Conditionally assigning JSX to a variable</h2>
    <PackingListAssigningJSXtoVariable />
    
    <h2 className="h2TopicTitle">Try out some challenges</h2>
    <PackingListChallenges />
  </div>
  );
}
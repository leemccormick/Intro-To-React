import './App.css';
import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';

// Main Default For Passing Data Deeply with Context Demo
export default function PassingDataDeeplyWithContextDemo() {
    return (
        <div>
            <hr></hr>
            <p>Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.</p>

            <h2 className="App-title"> The problem with passing props </h2>
            <ProblemWithPassingPropsDemo />

            <h2 className="App-title">Context: an alternative to passing props </h2>
            <ContextAlternativeDemo />

            <h2 className="App-title">Step 1: Create the context </h2>
            <Step1CreateContextDemo />

            <h2 className="App-title">Step 2: Use the context </h2>
            <Step2UseContextDemo />

            <h2 className="App-title">Step 3: Provide the context </h2>
            <Step3ProvideContextDemo />

            <h2 className="App-title">Using and providing context from the same component </h2>
            <UsingAndProvidingContextDemo />

            <h2 className="App-title">Context passes through intermediate components </h2>
            <ContextPassesThroughDemo />

            <h2 className="App-title">Before you use context </h2>
            <BeforeUseContextDemo />

            <h2 className="App-title">Use cases for context </h2>
            <UseCasesDemo />

            <h2 className="App-title"> Recap </h2>
            <RecapPassingDataDeeplyWithContextDemo />

            <h2 className="App-title">Try out some challenges </h2>
            <ChallengesPassingDataDeeplyWithContextDemo />
        </div>
    );
}

// The problem with passing props 
function ProblemWithPassingPropsDemo() {
    return (<div className="App-left-aligned-content">
        <p>But passing props can become verbose and inconvenient when you need to pass some prop deeply through the tree, or if many components need the same prop.</p>
        <p>The nearest common ancestor could be far removed from the components that need data, and lifting state up that high can lead to a situation called “prop drilling”.</p>
        <div className='App-row-container'>
            <div className='App-small-box-border'>
                <p>Lifting state up</p>
                <img
                    src='https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_lifting_state.png&w=640&q=75'
                    alt='lifing state up' />
            </div>

            <div className='App-small-box-border'>
                <p className='App-error-color'>Prop drilling</p>
                <img className='App-img-mudium'
                    src='https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_prop_drilling.png&w=640&q=75'
                    alt='prop drilling' />
            </div>
        </div>

    </div>);
}

// Context: an alternative to passing props 
function SectionContextAlternative({ children }) {
    return (
        <section className="App-section">
            {children}
        </section>
    );
}

function HeadingContextAlternative({ level, children }) {
    switch (level) {
        case 1:
            return <h1>{children}</h1>;
        case 2:
            return <h2>{children}</h2>;
        case 3:
            return <h3>{children}</h3>;
        case 4:
            return <h4>{children}</h4>;
        case 5:
            return <h5>{children}</h5>;
        case 6:
            return <h6>{children}</h6>;
        default:
            throw Error('Unknown level: ' + level);
    }
}

function ContextAlternativePage() {
    return (
        <SectionContextAlternative>
            <HeadingContextAlternative level={1}>Title </HeadingContextAlternative>
            <HeadingContextAlternative level={2}>Heading</HeadingContextAlternative>
            <HeadingContextAlternative level={3}>Sub-heading</HeadingContextAlternative>
            <HeadingContextAlternative level={4}>Sub-sub-heading</HeadingContextAlternative>
            <HeadingContextAlternative level={5}>Sub-sub-sub-heading</HeadingContextAlternative>
            <HeadingContextAlternative level={6}>Sub-sub-sub-sub-heading</HeadingContextAlternative>
        </SectionContextAlternative>
    );
}

function ContextAlternativePageWithMultipleSections() {
    return (
        <SectionContextAlternative>
            <HeadingContextAlternative level={1}>Title</HeadingContextAlternative>
            <SectionContextAlternative>
                <HeadingContextAlternative level={2}>Heading</HeadingContextAlternative>
                <HeadingContextAlternative level={2}>Heading</HeadingContextAlternative>
                <HeadingContextAlternative level={2}>Heading</HeadingContextAlternative>
                <SectionContextAlternative>
                    <HeadingContextAlternative level={3}>Sub-heading</HeadingContextAlternative>
                    <HeadingContextAlternative level={3}>Sub-heading</HeadingContextAlternative>
                    <HeadingContextAlternative level={3}>Sub-heading</HeadingContextAlternative>
                    <SectionContextAlternative>
                        <HeadingContextAlternative level={4}>Sub-sub-heading</HeadingContextAlternative>
                        <HeadingContextAlternative level={4}>Sub-sub-heading</HeadingContextAlternative>
                        <HeadingContextAlternative level={4}>Sub-sub-heading</HeadingContextAlternative>
                    </SectionContextAlternative>
                </SectionContextAlternative>
            </SectionContextAlternative>
        </SectionContextAlternative>
    );
}

function ContextAlternativeDemo() {
    return (<div className="App-left-aligned-content">
        <p>This is a page without using context.</p>
        <ContextAlternativePage />
        <hr></hr>
        <p>This is a page without using context with multiple sections.</p>
        <ContextAlternativePageWithMultipleSections />
        <hr></hr>

        <div className='App-row-container'>
            <div className='App-smallest-box-border-error-color'>
                <p className='App-error-color'>Currently, you pass the level prop to each Heading separately: </p>
                <div className='App-small-font-size'>
                    <p>{'<'}Section{'>'}</p>
                    <div className='App-tabbed-content'>
                        <p> {'<'} Heading level={3} {'>'} About {'<'}/Heading {'>'}</p>
                        <p> {'<'} Heading level={3} {'>'} Photos {'<'}/Heading {'>'}</p>
                        <p> {'<'} Heading level={3} {'>'} Videos {'<'}/Heading {'>'}</p>
                    </div>
                    <p>{'<'}/Section{'>'}</p>
                </div>
            </div>

            <div className='App-smallest-box-border-success-color'>
                <p className='App-success-color App-small-font-size'>It would be nice if you could pass the level prop to the Section component instead and remove it from the Heading. This way you could enforce that all headings in the same section have the same size: </p>
                <div className='App-small-font-size'>
                    <p>{'<'}Section level={3} {'>'}</p>
                    <div className='App-tabbed-content'>
                        <p> {'<'} Heading {'>'} About {'<'}/Heading {'>'}</p>
                        <p> {'<'} Heading {'>'} Photos {'<'}/Heading {'>'}</p>
                        <p> {'<'} Heading {'>'} Videos {'<'}/Heading {'>'}</p>
                    </div>
                    <p>{'<'}/Section{'>'}</p>
                </div>
            </div>
        </div>

        <p>Context lets a parent—even a distant one!—provide some data to the entire tree inside of it.</p>
        <ul>
            <ol>
                <li>Create a context. (You can call it LevelContext, since it’s for the heading level.)</li>
                <li>Use that context from the component that needs the data. (Heading will use LevelContext.)</li>
                <li>Provide that context from the component that specifies the data. (Section will provide LevelContext.)</li>
            </ol>
        </ul>
    </div>);
}

// Step 1: Create the context 
function Step1CreateContextDemo() {
    return (<div className="App-left-aligned-content">
        <p>First, you need to create the context. You’ll need to export it from a file so that your components can use it:.</p>
        <ul>
            <li>import {'{'} createContext {'}'}  from 'react';</li>
            <li>export const LevelContext = createContext(1);</li>
        </ul>
    </div>);
}

// Step 2: Use the context 
const Step2LevelContext = createContext(1);

function Step2Section({ children }) {
    return (
        <section className="App-section">
            {children}
        </section>
    );
}

function Step2Heading({ children }) {
    const level = useContext(Step2LevelContext);
    switch (level) {
        case 1:
            return <h1>{children}</h1>;
        case 2:
            return <h2>{children}</h2>;
        case 3:
            return <h3>{children}</h3>;
        case 4:
            return <h4>{children}</h4>;
        case 5:
            return <h5>{children}</h5>;
        case 6:
            return <h6>{children}</h6>;
        default:
            throw Error('Unknown level: ' + level);
    }
}

function Step2Page() {
    return (
        <Step2Section level={1}>
            <Step2Heading>Title</Step2Heading>
            <Step2Section level={2}>
                <Step2Heading>Heading</Step2Heading>
                <Step2Heading>Heading</Step2Heading>
                <Step2Heading>Heading</Step2Heading>
                <Step2Section level={3}>
                    <Step2Heading>Sub-heading</Step2Heading>
                    <Step2Heading>Sub-heading</Step2Heading>
                    <Step2Heading>Sub-heading</Step2Heading>
                    <Step2Section level={4}>
                        <Step2Heading>Sub-sub-heading</Step2Heading>
                        <Step2Heading>Sub-sub-heading</Step2Heading>
                        <Step2Heading>Sub-sub-heading</Step2Heading>
                    </Step2Section>
                </Step2Section>
            </Step2Section>
        </Step2Section>
    );
}

function Step2UseContextDemo() {
    return (<div className="App-left-aligned-content">
        <p>Import the useContext Hook from React and your context:</p>
        <ul>
            <li>import {'{'}  LevelContext  {'}'}  from './LevelContext.js';</li>
            <li>  const level = useContext(LevelContext);</li>
            <li>Update the JSX so that it’s the Section that receives it instead:
                <div className='App-small-font-size'>
                    <p>{'<'}Section level={4} {'>'}</p>
                    <div className='App-tabbed-content'>
                        <p> {'<'} Heading {'>'} Sub-sub-heading {'<'}/Heading {'>'}</p>
                        <p> {'<'} Heading {'>'} Sub-sub-heading {'<'}/Heading {'>'}</p>
                        <p> {'<'} Heading {'>'} Sub-sub-heading {'<'}/Heading {'>'}</p>
                    </div>
                    <p>{'<'}/Section{'>'}</p>
                </div>
            </li>
        </ul>
        <Step2Page />
    </div>);
}

// Step 3: Provide the context 
const Step3LevelContext = createContext(1);

function Step3Section({ level, children }) {
    return (
        <section className="App-section">
            <Step3LevelContext.Provider value={level}>
                {children}
            </Step3LevelContext.Provider>
        </section>
    );
}

function Step3Heading({ children }) {
    const level = useContext(Step3LevelContext);
    switch (level) {
        case 1:
            return <h1>{children}</h1>;
        case 2:
            return <h2>{children}</h2>;
        case 3:
            return <h3>{children}</h3>;
        case 4:
            return <h4>{children}</h4>;
        case 5:
            return <h5>{children}</h5>;
        case 6:
            return <h6>{children}</h6>;
        default:
            throw Error('Unknown level: ' + level);
    }
}

function Step3Page() {
    return (
        <Step3Section level={1}>
            <Step3Heading>Title</Step3Heading>
            <Step3Section level={2}>
                <Step3Heading>Heading</Step3Heading>
                <Step3Heading>Heading</Step3Heading>
                <Step3Heading>Heading</Step3Heading>
                <Step3Section level={3}>
                    <Step3Heading>Sub-heading</Step3Heading>
                    <Step3Heading>Sub-heading</Step3Heading>
                    <Step3Heading>Sub-heading</Step3Heading>
                    <Step3Section level={4}>
                        <Step3Heading>Sub-sub-heading</Step3Heading>
                        <Step3Heading>Sub-sub-heading</Step3Heading>
                        <Step3Heading>Sub-sub-heading</Step3Heading>
                    </Step3Section>
                </Step3Section>
            </Step3Section>
        </Step3Section>
    );
}

function Step3ProvideContextDemo() {
    return (<div className="App-left-aligned-content">
        <p>Wrap them with a context provider to provide the LevelContext to them:</p>
        <ul>
            <ol>
                <li>You pass a level prop to the Section.</li>
                <li>Section wraps its children into LevelContext.Provider value=level.</li>
                <li>Heading asks the closest value of LevelContext above with useContext(LevelContext).</li>
            </ol>
        </ul>
        <Step3Page />
    </div>);
}

// Using and providing context from the same component 
const UsingAndProvidingContext = createContext(1);

function UsingAndProvidingContextSection({ children }) {
    const level = useContext(UsingAndProvidingContext);

    return (
        <section className="App-section">
            <UsingAndProvidingContext.Provider value={level + 1}>
                {children}
            </UsingAndProvidingContext.Provider>
        </section>
    );
}

function UsingAndProvidingContextHeading({ children }) {
    const level = useContext(Step3LevelContext);
    switch (level) {
        case 1:
            return <h1>{children}</h1>;
        case 2:
            return <h2>{children}</h2>;
        case 3:
            return <h3>{children}</h3>;
        case 4:
            return <h4>{children}</h4>;
        case 5:
            return <h5>{children}</h5>;
        case 6:
            return <h6>{children}</h6>;
        default:
            throw Error('Unknown level: ' + level);
    }
}

function UsingAndProvidingContextPage() {
    return (
        <UsingAndProvidingContextSection>
            <UsingAndProvidingContextHeading>Using and Provide Context Page Title</UsingAndProvidingContextHeading>
            <UsingAndProvidingContextSection>
                <UsingAndProvidingContextHeading>Heading</UsingAndProvidingContextHeading>
                <UsingAndProvidingContextHeading>Heading</UsingAndProvidingContextHeading>
                <UsingAndProvidingContextHeading>Heading</UsingAndProvidingContextHeading>
                <UsingAndProvidingContextSection>
                    <UsingAndProvidingContextHeading>Sub-heading</UsingAndProvidingContextHeading>
                    <UsingAndProvidingContextHeading>Sub-heading</UsingAndProvidingContextHeading>
                    <UsingAndProvidingContextHeading>Sub-heading</UsingAndProvidingContextHeading>
                    <UsingAndProvidingContextSection>
                        <UsingAndProvidingContextHeading>Sub-sub-heading</UsingAndProvidingContextHeading>
                        <UsingAndProvidingContextHeading>Sub-sub-heading</UsingAndProvidingContextHeading>
                        <UsingAndProvidingContextHeading>Sub-sub-heading</UsingAndProvidingContextHeading>
                    </UsingAndProvidingContextSection>
                </UsingAndProvidingContextSection>
            </UsingAndProvidingContextSection>
        </UsingAndProvidingContextSection>
    );
}

function UsingAndProvidingContextDemo() {
    return (<div className="App-left-aligned-content">
        <p>Since context lets you read information from a component above, each Section could read the level from the Section above, and pass level + 1 down automatically. Here is how you could do it:</p>
        <ul>
            <li>const level = useContext(LevelContext);</li>
            <li>LevelContext.Provider value={'{'}level + 1{'}'}</li>
        </ul>
        <UsingAndProvidingContextPage />
    </div>);
}

// Context passes through intermediate components 
const PassThroughLevelContext = createContext(0);

function PassThroughSection({ children, isFancy }) {
    const level = useContext(PassThroughLevelContext);

    return (
        <section className={
            'App-section ' +
            (isFancy ? 'App-fancy' : '')
        }>
            <PassThroughLevelContext.Provider value={level + 1}>
                {children}
            </PassThroughLevelContext.Provider>
        </section>
    );
}

function PassThroughHeading({ children }) {
    const level = useContext(PassThroughLevelContext);

    switch (level) {
        case 0:
            throw Error('Heading must be inside a Section!');
        case 1:
            return <h1>{children}</h1>;
        case 2:
            return <h2>{children}</h2>;
        case 3:
            return <h3>{children}</h3>;
        case 4:
            return <h4>{children}</h4>;
        case 5:
            return <h5>{children}</h5>;
        case 6:
            return <h6>{children}</h6>;
        default:
            throw Error('Unknown level: ' + level);
    }
}

function AllPosts() {
    return (
        <PassThroughSection>
            <PassThroughHeading>Posts</PassThroughHeading>
            <RecentPosts />
        </PassThroughSection>
    );
}

function RecentPosts() {
    return (
        <PassThroughSection>
            <PassThroughHeading>Recent Posts</PassThroughHeading>
            <Post
                title="Flavors of Lisbon"
                body="...those pastéis de nata!"
            />
            <Post
                title="Buenos Aires in the rhythm of tango"
                body="I loved it!"
            />
        </PassThroughSection>
    );
}

function Post({ title, body }) {
    return (
        <PassThroughSection isFancy={true}>
            <PassThroughHeading>
                {title}
            </PassThroughHeading>
            <p><i>{body}</i></p>
        </PassThroughSection>
    );
}

function PassThroughProfilePage() {
    return (
        <PassThroughSection>
            <PassThroughHeading>My Profile</PassThroughHeading>
            <Post
                title="Hello traveller!"
                body="Read about my adventures."
            />
            <AllPosts />
        </PassThroughSection>
    );
}

function ContextPassesThroughDemo() {
    return (<div className="App-left-aligned-content">
        <p>You can insert as many components as you like between the component that provides context and the one that uses it. This includes both built-in components like div and components you might build yourself.</p>
        <PassThroughProfilePage />
    </div>);
}

// Before you use context 
function BeforeUseContextDemo() {
    return (<div className="App-left-aligned-content">
        <p>If neither of these approaches works well for you, consider context.</p>
        <ul>
            <ol>
                <li>Start by passing props.</li>
                <li>Extract components and pass JSX as children to them. If</li>
            </ol>
        </ul>
    </div>);
}

// Use cases for context 
function UseCasesDemo() {
    return (<div className="App-left-aligned-content">
        <p>To Continue Here...</p>
        <ul>
            <li>Theming: If your app lets the user change its appearance (e.g. dark mode), you can put a context provider at the top of your app</li>
            <li>Current account: Many components might need to know the currently logged in user.</li>
            <li>Routing: Most routing solutions use context internally to hold the current route</li>
            <li>Managing state: As your app grows, you might end up with a lot of state closer to the top of your app. </li>
        </ul>
    </div>);
}

// Recap
function RecapPassingDataDeeplyWithContextDemo() {
    return (<div className="App-left-aligned-content">
        <ui>
            <li>
                Context lets a component provide some information to the entire tree below it.
            </li>
            <li>
                To pass context:
                <div className='App-left-aligned-border'>
                    <li className='App-small-font-size'>
                        1.Create and export it with export const MyContext = createContext(defaultValue).
                    </li>
                    <li className='App-small-font-size'>
                        2.Pass it to the useContext(MyContext) Hook to read it in any child component, no matter how deep.
                    </li>
                    <li className='App-small-font-size'>
                        3.Wrap children into MyContext.Provider value=... to provide it from a parent.
                    </li>
                </div>
            </li>
            <li>
                Context passes through any components in the middle.
            </li>
            <li>
                Context lets you write components that “adapt to their surroundings”.
            </li>
            <li>
                Before you use context, try passing props or passing JSX as children.
            </li>
        </ui>
    </div >);
}

// Try out some challenges
/*
Challenge 1 of 1: Replace prop drilling with context 
- In this example, toggling the checkbox changes the imageSize prop passed to each <PlaceImage>. The checkbox state is held in the top-level App component, but each <PlaceImage> needs to be aware of it.
- Currently, App passes imageSize to List, which passes it to each Place, which passes it to the PlaceImage. Remove the imageSize prop, and instead pass it from the App component directly to PlaceImage.
- You can declare context in Context.js.
 */
const places = [{
    id: 0,
    name: 'Bo-Kaap in Cape Town, South Africa',
    description: 'The tradition of choosing bright colors for houses began in the late 20th century.',
    imageId: 'K9HVAGH'
}, {
    id: 1,
    name: 'Rainbow Village in Taichung, Taiwan',
    description: 'To save the houses from demolition, Huang Yung-Fu, a local resident, painted all 1,200 of them in 1924.',
    imageId: '9EAYZrt'
}, {
    id: 2,
    name: 'Macromural de Pachuca, Mexico',
    description: 'One of the largest murals in the world covering homes in a hillside neighborhood.',
    imageId: 'DgXHVwu'
}, {
    id: 3,
    name: 'Selarón Staircase in Rio de Janeiro, Brazil',
    description: 'This landmark was created by Jorge Selarón, a Chilean-born artist, as a "tribute to the Brazilian people".',
    imageId: 'aeO3rpI'
}, {
    id: 4,
    name: 'Burano, Italy',
    description: 'The houses are painted following a specific color system dating back to 16th century.',
    imageId: 'kxsph5C'
}, {
    id: 5,
    name: 'Chefchaouen, Marocco',
    description: 'There are a few theories on why the houses are painted blue, including that the color repells mosquitos or that it symbolizes sky and heaven.',
    imageId: 'rTqKo46'
}, {
    id: 6,
    name: 'Gamcheon Culture Village in Busan, South Korea',
    description: 'In 2009, the village was converted into a cultural hub by painting the houses and featuring exhibitions and art installations.',
    imageId: 'ZfQOOzf'
}];

function getImageUrl(place) {
    return (
        'https://i.imgur.com/' +
        place.imageId +
        'l.jpg'
    );
}

function List() {
    const listItems = places.map(place =>
        <li key={place.id}>
            <Place place={place} />
        </li>
    );
    return <ul className='App-no-bullet-ul'>{listItems}</ul>;
}

function Place({ place }) {
    return (
        <>
            <PlaceImage place={place} />
            <p>
                <b>{place.name}</b>
                {': ' + place.description}
            </p>
        </>
    );
}

function PlaceImage({ place }) {
    const imageSize = useContext(ImageSizeContext);
    return (
        <img
            src={getImageUrl(place)}
            alt={place.name}
            width={imageSize}
            height={imageSize}
        />
    );
}

const ImageSizeContext = createContext(500);

function Challenge1App() {
    const [isLarge, setIsLarge] = useState(false);
    const imageSize = isLarge ? 150 : 100;

    return (
        <ImageSizeContext.Provider
            value={imageSize}
        >
            <label>
                <input
                    type="checkbox"
                    checked={isLarge}
                    onChange={e => {
                        setIsLarge(e.target.checked);
                    }}
                />
                Use large images
            </label>
            <hr />
            <List />
        </ImageSizeContext.Provider>
    )
}

function Challenge1PassingDataDeeplyWithContextDemo() {
    return (<div className="App-left-aligned-content">
        <p>Challenge 1 of 1: Replace prop drilling with context </p>
        <Challenge1App />
    </div>);
}

// Try out some challenges
function ChallengesPassingDataDeeplyWithContextDemo() {
    return (<div className="App-left-aligned-content">
        <Challenge1PassingDataDeeplyWithContextDemo />
        <hr></hr>
    </div>);
}
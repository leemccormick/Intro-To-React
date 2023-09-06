export function Profile() {
  return <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
}

export function TitleComponentDemo({textTitle}) {
  return <h1 className="h1ChapterTitle">{textTitle}</h1>;
}

export function EndlineComponentDemo() {
  return <h2>------------------------------------------------</h2>;
}

function ScientistsProfile({imageUrl, description}) {
  return <img src={imageUrl} alt={description} />;
}

function FirtRandomImageComponentDemo({src}) {
  return (
    <img
      src={src}
      alt="Image Demo"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing First Component Demo</h1>
      <TitleComponentDemo textTitle="Hello! My First Component"/>
      <Profile />
      <ScientistsProfile imageUrl="https://i.imgur.com/QIrZWGIs.jpg" description="Alan L. Hart" />
      <ScientistsProfile imageUrl="https://i.imgur.com/MK3eW3Am.jpg" description="Katherine Johnson" />
      <FirtRandomImageComponentDemo src="https://picsum.photos/200/300" />
      <FirtRandomImageComponentDemo src="https://picsum.photos/200" />
    </section>
  );
}

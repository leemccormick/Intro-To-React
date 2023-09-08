import './App.css';

export default function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}

export function ImageWithTitle({ url, title }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={url}
        alt={title}
        style={{ width: '200px', height: '200px' }}
      />
      <p className='App-hilight-color' style={{ fontSize: '18px' }}>{title}</p>
    </div>
  );
}

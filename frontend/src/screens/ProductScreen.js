import { useParams } from 'react-router-dom';

export function ProductScreen() {
  const params = useParams();
  const { id } = params;
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}

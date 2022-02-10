import { useParams } from 'react-router-dom';

export default function CountryInfo() {
  const { name } = useParams();
  return <p>Country name: {name}</p>;
}

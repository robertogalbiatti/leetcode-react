import { problems } from '../data/problems';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>LeetCode Resolutions</h1>
      <ul>
        {problems.map((problem) => (
          <li key={problem.id}>
            <Link to={`/problem/${problem.id}`}>
              {problem.title} ({problem.difficulty})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
import { useParams } from 'react-router-dom';
import { problems } from '../data/problems';
import { useState } from 'react';

export default function Problem() {
  const { id } = useParams();
  const problem = problems.find((p) => p.id === id);
  const [output, setOutput] = useState(null);

  if (!problem) return <div>Problema não encontrado</div>;

  const runCode = () => {
    try {
      // Can adjust the code execution logic as needed
      const result = new Function(`
        ${problem.code}
        return twoSum([2,7,11,15], 9);
      `)();
      setOutput(JSON.stringify(result));
    } catch (err) {
      setOutput('Erro ao executar: ' + err.message);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{problem.title}</h2>
      <p>{problem.description}</p>
      <pre style={{ backgroundColor: '#f4f4f4', padding: '1rem' }}>
        <code>{problem.code}</code>
      </pre>
      <button onClick={runCode} style={{ marginTop: '1rem' }}>
        Executar
      </button>
      {output && (
        <div style={{ marginTop: '1rem' }}>
          <strong>Resultado:</strong> {output}
        </div>
      )}
    </div>
  );
}

import './App.css';
import { data } from './Data/data.js';
import { QuestionJM } from './Components/Question/QuestionJM';
import { useEffect } from 'react';

function App() {
  // const [ answers, setAnswers ] = useState([]);

  // useEffect(() => {
  //   answers.any((item) => item === false) ? console.log('No pasaste') : console.log('Pasaste');
  // }, [answers]);

  return (
    <div className='Card'>
      {data.map((item, index) => (
        <QuestionJM key={index} data={item} questionIndex={index} />
      ))}
    </div>
  );
}

      export default App

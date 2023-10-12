import PropTypes from 'prop-types';
import { ButtonJM } from "../ButtonJM/ButtonJM";
import './QuestionJM.css';
import { useEffect } from 'react';
import { useState } from 'react';

export const QuestionJM = ({ data }) => {
    const [ selected, setSelected ] = useState([]);
    
    // const resetQuestion = (e) => {
    //     const otherOptions = document.querySelectorAll(`[data-question="${id}"]`);
    //     otherOptions.forEach((item) => {
    //         item.disabled = false;
    //         item.classList.remove('correct');
    //         item.classList.remove('incorrect');
    //     });
    //     const buttonRestart = document.querySelector(`[data-QuestionError="${id}"]`);
    //     buttonRestart.classList = 'NoButton_Restart';
    // };

    useEffect(() => {    
        if (selected.length === 0) return;

        selected.classList.add(selected.dataset.correct == 'true' ? 'correct' : 'incorrect');
        const otherOptions = document.querySelectorAll(`[data-question="${selected.dataset.question}"]`);

        otherOptions.forEach((item) => {
            item.disabled = true;
        });

        const buttonRestart = document.querySelector(`[data-QuestionError="${selected.dataset.question}"]`);
        buttonRestart.classList = selected.dataset.correct == 'true' ? 'NoButton_Restart' : 'Button_Restart';

    }, [selected]);

    return (        
        <div className="Card_Question">
            <h1>{data.id}. {data.question}</h1>
            <div className='Container_Options'>
                {data.answers.map((item, index) => (
                    <ButtonJM key={index} data={item} questionIndex={data.id} setSelected={setSelected} />
                ))}
            </div>
            <button className='NoButton_Restart' id={data.id} data-QuestionError={data.id}>
                Fallaste - Reiniciar
            </button>
        </div>
    );
};

QuestionJM.propTypes = {
  data: PropTypes.object,
  answers: PropTypes.array,
  setAnswers: PropTypes.func
};


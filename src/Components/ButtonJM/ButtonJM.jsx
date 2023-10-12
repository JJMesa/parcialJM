import PropTypes from 'prop-types';
import './ButtonJM.css';

export const ButtonJM = ({ questionIndex, data, setSelected }) => {
    const handleClick = (e) => {
        setSelected(e.target);
    };

    return (
        <>
            <button className='option' onClick={(e) => handleClick(e)} data-correct={data.correct} data-question={questionIndex}>{data.text}</button>
        </>
    );
};

ButtonJM.propTypes = {
    questionIndex: PropTypes.number,
    data: PropTypes.object,
    setSelected: PropTypes.func
};

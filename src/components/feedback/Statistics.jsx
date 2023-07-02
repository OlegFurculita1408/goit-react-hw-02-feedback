import PropTypes from 'prop-types';

function Statistics ({state:{ good, neutral, bad },total }) {
    return(
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total()}</p>
            <p>Positive feedback: {Math.ceil((good/total())*100)}%</p>
        </div>
    )
}
Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
}
export default Statistics
import Statistics from "./Statistics";
import Notification from "./Notification";
import css from './Feedback.module.css';

function SectionTitle ({ state, total, handlerClick }) {
    return(
    <>
        {
        Object.keys(state).map((elem,i)=><button className={css.btnFeedback} key={i} onClick={()=>handlerClick(elem)}>{elem}</button>)
       }
       <h2>Statistics</h2>
       {
       total()!==0 ? <Statistics state={state} total={total} />
                   : <Notification text={'No feedback given'}/>
       }
    </>
    )
}
export default SectionTitle
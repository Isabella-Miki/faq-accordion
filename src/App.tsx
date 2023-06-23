import QuestionContainer from './components/QuestionContainer';
import style from './App.module.css'
import woman from './assets/illustration-woman-online-desktop.svg'

function App() {
  return (
    <div className={style.wrapper}>
      <div className={style.mainCard}>
        <img src={woman} alt="" className={style.womanImg}/>
        <QuestionContainer />
      </div>
    </div>
  );
}

export default App;

// import css from './Result.module.css';
import image from '../../images/win.png';

export default function Result({ correct, questions }) {
  return (
    <>
      <img src={image} alt="win" width={150} height={150} />
      <h2>
        You guessed {correct}/{questions.length}
      </h2>
      <a href="/">
        <button>Try again</button>
      </a>
    </>
  );
}

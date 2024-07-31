import "../css/components/Form.css";
import memesData from "../js/memeData";

function Form() {
  const memes = memesData.data.memes;

  function handleClick() {
    const randomIndex = Math.floor(Math.random() * memes.length);
    const imgUrl = memes[randomIndex].url;
    console.log(imgUrl);
  }

  return (
    <form action="" method="get" className="form">
      <div className="form__inputs">
        <div className="form__column">
          <label htmlFor="top-text" className="form__label">
            Top text
          </label>
          <input type="text" placeholder="Shut up" id="top-text" className="form__input" />
        </div>
        <div className="form__column">
          <label htmlFor="bottom-text" className="form__label">
            Bottom text
          </label>
          <input
            type="text"
            placeholder="And take my money"
            id="bottom-text"
            className="form__input"
          />
        </div>
      </div>
      <button type="button" onClick={handleClick} className="form__button">
        Get a new meme image 🖼
      </button>
    </form>
  );
}

export default Form;

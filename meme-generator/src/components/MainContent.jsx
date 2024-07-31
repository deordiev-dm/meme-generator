import { useState } from "react";
import "../css/components/MainContent.css";
import memesData from "../js/memeData";

function Form() {
  const memes = memesData.data.memes;

  const [memeUrl, setMemeUrl] = useState(chooseRandomMeme());

  function chooseRandomMeme() {
    const randomIndex = Math.floor(Math.random() * memes.length);
    return memes[randomIndex].url;
  }

  function changeMeme() {
    setMemeUrl(chooseRandomMeme());
  }

  return (
    <main className="main">
      <div className="main__container">
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
          <button type="button" onClick={changeMeme} className="form__button">
            Get a new meme image 🖼
          </button>
        </form>
        <div className="meme-image">
          <img src={memeUrl} alt="meme image" />
        </div>
      </div>
    </main>
  );
}

export default Form;

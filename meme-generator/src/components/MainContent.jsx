import { useState } from "react";
import "../css/components/MainContent.css";
import memesData from "../js/memeData";

function Form() {
  const [allMemeImages, setAllMemeImages] = useState(memesData.data.memes);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imgUrl: chooseRandomMemeUrl(),
  });

  function chooseRandomMemeUrl() {
    const randomIndex = Math.floor(Math.random() * allMemeImages.length);
    return allMemeImages[randomIndex].url;
  }

  function changeMeme() {
    setMeme((prevMeme) => ({ ...prevMeme, imgUrl: chooseRandomMemeUrl() }));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  console.log(meme);

  return (
    <main className="main">
      <div className="main__container">
        <form action="" method="get" className="form">
          <div className="form__inputs">
            <div className="form__column">
              <label htmlFor="top-text" className="form__label">
                Top text
              </label>
              <input
                type="text"
                placeholder="Shut up"
                id="top-text"
                name="topText"
                className="form__input"
                onChange={handleInputChange}
                value={meme.topText}
              />
            </div>
            <div className="form__column">
              <label htmlFor="bottom-text" className="form__label">
                Bottom text
              </label>
              <input
                type="text"
                placeholder="And take my money"
                id="bottom-text"
                name="bottomText"
                className="form__input"
                onChange={handleInputChange}
                value={meme.bottomText}
              />
            </div>
          </div>
          <button type="button" onClick={changeMeme} className="form__button">
            Get a new meme image 🖼
          </button>
        </form>
        <div className="meme">
          <p className="meme__text meme__text--top">{meme.topText}</p>
          <p className="meme__text meme__text--bottom">{meme.bottomText}</p>
          <img src={meme.imgUrl} alt="meme image" className="meme__image" />
        </div>
      </div>
    </main>
  );
}

export default Form;

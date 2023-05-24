import React, { useEffect, useState } from "react";

export const Main = () => {
  const [meme, setMeme] = useState({
    topText: " ",
    bottomText: " ",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((Data) => setAllMemes(Data.data.memes));
  }, []);

  function handleClick() {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: `${allMemes[randomIndex].url}`,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="main-div">
        <div className="form-text">
          <input
            type="text"
            placeholder="top text.."
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="bottom text.."
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </div>
        <button onClick={handleClick} type="submit">
          Get a new meme image 🖼
        </button>
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" alt="meme" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
};

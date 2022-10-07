import { useEffect, useState } from "react";
import { getMemes } from "../api/api";
import Input from "./Input";

const Meme = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [memes, setMemes] = useState([]);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    url: "/images/memeimg.png",
  });

  useEffect(() => {
    setIsLoading(true);
    getMemes().then((data) => {
      setIsLoading(false);
      setMemes(data.data.memes);
    });
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    if (memes.length > 0) {
      const index = Math.trunc(Math.random() * memes.length);
      setMeme((prevMeme) => ({ ...prevMeme, url: memes[index].url }));
    }
  };

  return (
    <div className="container">
      <form onSubmit={submitForm} className="meme-form">
        <div className="inputs">
          <Input
            name="first-text"
            placeholder="Shut up"
            type="text"
            value={meme.topText}
            onChange={(e) =>
              setMeme((prevMeme) => ({ ...prevMeme, topText: e.target.value }))
            }
          />
          <Input
            name="second-text"
            placeholder="And take my money"
            type="text"
            value={meme.bottomText}
            onChange={(e) =>
              setMeme((prevMeme) => ({
                ...prevMeme,
                bottomText: e.target.value,
              }))
            }
          />
        </div>
        <button type="submit" className="button">
          {isLoading ? "Loading..." : "Get a new meme image 🖼"}
        </button>
      </form>
      <div className="meme">
        <img className="meme-img" src={meme.url} alt="meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
};

export default Meme;

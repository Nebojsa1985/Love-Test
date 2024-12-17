import { useEffect, useState } from "react";
import "./App.css";
import Controls from "./components/controls";
import Message from "./components/message";
import Avatarsempty from "./components/avatarsempty";
import Avatars from "./components/avatars";
import Buttons from "./components/buttons";
import Buttonmessage from "./components/buttonmessage";

function App() {
  const [quote, setQuote] = useState();
  const [quotes, setQuotes] = useState({
    good: [
      "Love you today. Love you tomorrow. Love you forever.",
      "Better together.",
      "It was not love at first sight. It took a full five minutes.",
      "All the rumors are true",
      "You are the cheese and macaroni.",
      "Bonded like super glue.",
      "Our hearts speak the same language.",
      "Hold my hand, and I will go anywhere with you.",
      "The best thing to hold onto in life is each other.",
      "Love is the flower. You've got to let it grow",
      "Love isn't something you find. It is something that finds you.",
      "Where there is love there is life.",
      "Life is the flower for which love is the honey.",
      "Love is something from heaven to worry the hell out of you.",
      "The best thing to hold onto in life is each other.",
      "To love is to burn, to be on fire.",
      "Love will travel as far as you let it. It has no limits.",
      "Happily ever after is not a fairy tale—it's a choice.",
    ],
    bad: [
      "No chance!",
      "Nope.",
      "Better not.",
      "No way.",
      "Hell no!",
      "How about no.",
      "Yeah, no",
    ],
    mid: [
      "Maybe is worth of trying....",
      "Who knows?",
      "You must work it out on love",
      "Hard, but possible..",
      "Love is always worth of try.",
    ],
  });
  const [info, setInfo] = useState(false);
  const [max, setMax] = useState(100);
  const [min, setMin] = useState(0);
  const [valueleft, setValueLeft] = useState("👨");
  const [valueright, setValueRight] = useState("👩");
  const [love, setLove] = useState("Test your love chance");
  const [hearts, setHearts] = useState("❤️❤️❤️❤️❤️");
  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  const handleLove = (x, y) => {
    setMax(x);
    setMin(y);
  };

  const reset = () => {
    setValueLeft("👨");
    setValueRight("👩");
    setLove("Test your love chance");
    setHearts("");
  };

  const handleTest = () => {
    (valueleft == "❤️") & (valueright == "❤️") &&
      setLove("💘 " + randomNumber + "% Love 💘");

    if (randomNumber < 30) {
      setHearts("🖤🖤🖤");
      setQuote(
        quotes.bad[Math.floor(Math.random() * (quotes.bad.length - 0) + 0)]
      );
    }
    if ((randomNumber > 30) & (randomNumber < 50)) {
      setHearts("💜💜💜💜💜");
      setQuote(
        quotes.mid[Math.floor(Math.random() * (quotes.mid.length - 0) + 0)]
      );
    }
    if ((randomNumber > 50) & (randomNumber < 70)) {
      setHearts("❤️❤️❤️");
      setQuote(
        quotes.good[Math.floor(Math.random() * (quotes.good.length - 0) + 0)]
      );
    }
    if (randomNumber > 70) {
      setHearts("❤️❤️❤️❤️❤️❤️❤️❤️");
      setQuote(
        quotes.good[Math.floor(Math.random() * (quotes.good.length - 0) + 0)]
      );
    }
  };

  useEffect(() => {
    handleTest();
  }, [valueleft]);
  useEffect(() => {
    handleTest();
  }, [valueright]);

  return (
    <div className="App">
      <Controls handleLove={handleLove} info={info} setInfo={setInfo} />
      <Message love={love} />

      {(valueleft == "❤️") & (valueright == "❤️") ? (
        <Avatarsempty />
      ) : (
        <Avatars valueleft={valueleft} valueright={valueright} />
      )}

      {(valueleft == "❤️") & (valueright == "❤️") ? (
        <Buttonmessage reset={reset} hearts={hearts} quote={quote} />
      ) : (
        <Buttons setValueLeft={setValueLeft} setValueRight={setValueRight} />
      )}
    </div>
  );
}

export default App;

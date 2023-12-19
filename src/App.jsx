import { useEffect, useState } from "react";
import "./App.css";
import Quate from "./Quate";

function App() {
  const [quateData, setQuateData] = useState({
    person: "Abraham Lincoln",
    quate: "You can observe a lot just by watching.",
  });

  const [quotes, setQuotes] = useState([]);

  const apiUrl = "https://type.fit/api/quotes";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
      });
  }, [quateData]);

  const newQuate = () => {
    const randomNum = Math.floor(Math.random() * quotes.length);
    const quate = quotes[randomNum].text;
    const person = quotes[randomNum].author;
    const personPart = person.split(",");
    const formatPerson = personPart[0].trim();
    console.log(formatPerson);
    console.log(quotes.length);
    setQuateData((prevState) => ({
      ...prevState,
      quate: quate,
      person: formatPerson,
    }));
  };

  return (
    <div className="App">
      <h1>Quotable Whims:</h1>
      <h2>brInspire Your Day with Random Quotes</h2>
      <button onClick={newQuate}>New Quate </button>
      <Quate quate={quateData.quate} person={quateData.person} />
    </div>
  );
}

export default App;

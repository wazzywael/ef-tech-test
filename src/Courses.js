import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import "./Courses.css";

const Courses = () => {
  const [cardData, setCardData] = useState(null);
  const [buttonData, setButtonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://cefcom-static-ctdev.s3.eu-west-1.amazonaws.com/test/2022/data.json`
        );
        const buttonComponent = response.data.page.components[0];
        const cardComponent = response.data.page.components[1];
        setButtonData(buttonComponent);
        setCardData(cardComponent);
        setError(null);
      } catch (err) {
        setError(err.message);
        setButtonData(null);
        setCardData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="main-page">
      <div className="header">
        {cardData ? (
          <Header title={cardData.title} description={cardData.description} />
        ) : null}
      </div>
      {show ? (
        <>
          <div className="cards">
            {cardData &&
              cardData.cards.map((card, index) => (
                <Card
                  key={index}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  anchorUrl={card.anchorUrl}
                  anchorText={card.anchorText}
                />
              ))}
          </div>
          {buttonData ? (
            <button className="card-button" onClick={() => setShow(!show)}>
              {buttonData.buttonLabelHide}
            </button>
          ) : null}
        </>
      ) : (
        <button className="card-button" onClick={() => setShow(!show)}>
          {buttonData.buttonLabelShow}
        </button>
      )}
    </div>
  );
};

export default Courses;

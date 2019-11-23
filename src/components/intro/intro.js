import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./intro.css";

const slides = [
  <div className="intro-slide">
    <div className="intro-text">
      <h1 className="title">ПРИВЕТ!</h1>
      <br />
      Мы - “Люк”, независимый интернет-журнал Харькова
      <br />
      <br />
      Мы хотим понять как люди воспринимают наш город и нам нужна ваша помощь!
      <br />
      <br />
      Будем благодарны, если Вы ответите на несколько простых вопросов о районах города. Это займет
      не более 5 минут вашего времени
    </div>
  </div>,
  <div className="intro-slide">
    <div className="intro-text">
      <h1 className="title">ПРИВЕТ!</h1>
      <br />
      Мы - “Люк”, независимый интернет-журнал Харькова
      <br />
      <br />
      Мы хотим понять как люди воспринимают наш город и нам нужна ваша помощь!
      <br />
      <br />
      Будем благодарны, если Вы ответите на несколько простых вопросов о районах города. Это займет
      не более 5 минут вашего времени
    </div>
  </div>,
  <div className="intro-slide">
    <h1 className="title">Поднесите руки к панели</h1>
    <img className="slider-image" src="/assets/slide-02.gif" />
  </div>,
  <div className="intro-slide">
    <h1 className="title">Двигайте руками, чтобы выбрать цифру на шкале</h1>
    <img className="slider-image" src="/assets/slide-03.gif" />
  </div>,
  <div className="intro-slide">
    <h1 className="title">Удерживайте руки 2 секунды, чтобы ответ засчитался</h1>
    <img className="slider-image" src="/assets/slide-04.gif" />
  </div>,
  <div className="intro-slide">
    <p>
      Оцените районы нашего города по нескольким критериям.
      <br />
      <br />
      <br />
      Для оценки выберите цифру на шкале от 1 до 10
    </p>
  </div>
];

function Intro() {
  const [index, setIndex] = useState(0);
  let history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      if (index < slides.length) {
        setIndex(i => {
          if (i < slides.length - 1) {
            return i + 1;
          } else {
            history.push("/poll");
            return i;
          }
        });
      } else {
      }
    }, 4000);
  });

  return <div className="Intro">{slides[index]}</div>;
}

export default Intro;

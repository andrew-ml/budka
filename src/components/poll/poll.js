import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import pollData from "../../constants/poll";
import "./poll.css";

const MAX_VALUE = 100;

class Poll extends React.Component {
  state = {
    index: 0,
    value: 0,
    answer: null
  };

  componentDidMount() {
    console.log(this.props);
    const socket = new WebSocket("ws://192.168.0.138:8080");

    socket.addEventListener("open", event => {
      socket.send("Hello Server!");
      this.makeAnswer();
    });

    socket.addEventListener("message", event => {
      // console.log("Message from server ", event.data, parseFloat(event.data));
      const value = parseFloat(event.data);
      if (!isNaN(value)) {
        const value = Math.round(parseFloat(event.data) * 100);
        this.setState({ value });
      } else {
        this.setState({ value: 0 });
      }
    });
  }

  componentDidUpdate(prevstate, prevState) {
    if (prevState.index !== this.state.index) {
      this.makeAnswer();
    }
  }

  makeAnswer = () => {
    setTimeout(() => {
      this.setState({ answer: this.state.value });

      setTimeout(() => {
        const { index } = this.state;
        this.setState({ answer: null });
        if (index < pollData.length - 1) {
          this.setState({ index: index + 1 });
        } else {
          this.props.history.push("/outro");
          console.log("finished");
        }
      }, 3000);
    }, 5000);
  };

  render() {
    const { value, answer, index } = this.state;

    const pollItem = pollData[index];
    const val = (50 * value) / MAX_VALUE;
    const style =
      val < 0 ? { left: `${50 + val}%`, right: "50%" } : { left: "50%", right: `${50 - val}%` };

    const answerClassName = answer > 0 ? "green" : "red";

    return (
      <div className={`Poll bg-0${index}`}>
        <p className="poll-title">{pollItem.title}</p>
        <p className="poll-description">{pollItem.description}</p>
        <div className="poll-vis">
          <div className="poll-line"></div>
          <div className={`poll-indicator ${val > 0 ? "green" : "red"}`} style={style}></div>

          {[...Array(11).keys()].map(i => (
            <span className="poll-number" style={{ left: `${i * 10}%` }}>
              {i - 5}
            </span>
          ))}
        </div>
        {answer !== null && (
          <div className={`poll-answer ${answer !== 0 && (answer > 0 ? "green" : "red")}`}>
            {answer === 0 && <span>Ответа нет</span>}
            {answer !== 0 && <span>{answer / 20}</span>}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Poll);

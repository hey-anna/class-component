import React, { Component } from "react";
import BoxClass from "./component/BoxClass";
import "./App.css";

//
// const choice = {
//   rock: {
//     name: "Rock",
//     img: "https://partyzzang.co.kr/web/product/big/202305/ab8fd01d0fe4824446877e623570047a.jpg",
//   },
//   scissors: {
//     name: "Scissors",
//     img: "https://partyzzang.co.kr/web/product/big/202302/7e8d771c9fed84c2a67097d3f7537fae.jpg",
//   },
//   paper: {
//     name: "Paper",
//     img: "https://partyzzang.co.kr/web/product/big/202305/b4545a42eaeff9ef2468d104bb33fa45.jpg",
//   },
// };

export default class AppClass extends Component {
  // constructor 생성자를 통해서 컴포넌트를 생성할때, 이앱을 생성할때 만들어야 되는 state도 같이 생성한다.(정의를 한다. 오브젝트타입으로다가)
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       counter2: 0,
  //       num: 1,
  //       value: 0,
  //     };
  //   }
  constructor(props) {
    super(props);
    this.randomChoice = this.randomChoice.bind(this);
    this.state = {
      choice: {
        rock: {
          name: "Rock",
          img: "https://partyzzang.co.kr/web/product/big/202305/ab8fd01d0fe4824446877e623570047a.jpg",
        },
        scissors: {
          name: "Scissors",
          img: "https://partyzzang.co.kr/web/product/big/202302/7e8d771c9fed84c2a67097d3f7537fae.jpg",
        },
        paper: {
          name: "Paper",
          img: "https://partyzzang.co.kr/web/product/big/202305/b4545a42eaeff9ef2468d104bb33fa45.jpg",
        },
      },
      userSelect: null,
      computerSelect: null,
      result: "",
    };
  }

  play = (userChoice) => {
    const userSelect = this.state.choice[userChoice];
    const computerChoice = this.randomChoice();
    this.setState({
      userSelect,
      computerSelect: computerChoice,
      result: this.judgement(userSelect, computerChoice),
    });
  };
  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "win" : "lose";
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "win" : "lose";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "win" : "lose";
    }
  };

  computeResult = (result) => {
    if (result === "win") {
      return "lose";
    } else if (result === "lose") {
      return "win";
    } else {
      return "tie";
    }
  };

  borderColorSX = (gameResult) => {
    if (gameResult === "win") {
      return "border-win";
    } else if (gameResult === "lose") {
      return "border-lose";
    } else if (gameResult === "tie") {
      return "border-tie";
    } else {
      return "";
    }
  };

  randomChoice = () => {
    const itemArray = Object.keys(this.state.choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return this.state.choice[final];
  };
  //   increase = () => {
  //     // 내가 변하고 싶은 값을 써주면 된다.
  //     this.setState({
  //       counter2: this.state.counter2 + 1,
  //       value: this.state.value + 1,
  //     });
  //   };
  render() {
    const { userSelect, computerSelect, result } = this.state;
    return (
      <>
        <div className="main">
          <BoxClass
            title="You"
            item={userSelect}
            result={result}
            className={`box ${this.borderColorSX(result)}`}
          />
          <BoxClass
            title="Computer"
            item={computerSelect}
            // result={result === "win" ? "lose" : "win"}
            // result={computerJudgement}
            result={this.computeResult(result)}
            className={`box ${this.borderColorSX(this.computeResult(result))}`}
          />

          {/* <div>state:{this.state.counter2}</div>
          <button onClick={this.increase}>클릭</button>
          <BoxClass num={this.state.value} /> */}
        </div>
        <div className="main">
          <button className="buttonSx" onClick={() => this.play("scissors")}>
            가위
          </button>
          <button className="buttonSx" onClick={() => this.play("rock")}>
            바위
          </button>
          <button className="buttonSx" onClick={() => this.play("paper")}>
            보
          </button>
        </div>
      </>
    );
  }
}

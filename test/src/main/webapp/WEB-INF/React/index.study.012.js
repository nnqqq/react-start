import React from 'react';
import ReactDOM from 'react-dom';

class Clock1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date : new Date()};
  }

  // 마운트
  componentDidMount() {
    this.timerId2_aa = setInterval( () => this.tick(), 1000 );    
    //this.timerId2_aa = setInterval( function() { return this.tick();} , 1000 );    
  }  

  // 마운트 해제
  componentWillUnmount() {
    clearInterval(this.timerID_aa);
  }

  tick() {
    this.setState({date : new Date()});
  }

  render() {
    return (
      <div>
        <h1>Hello, kook 1</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock1 />,
  document.getElementById('root')
);

//setInterval(tick3, 1000);

//1. When <Clock />가 전달 ReactDOM.render()되면 React는 Clock구성 요소 의 생성자를 호출합니다 . Clock현재 시간을 표시해야 하므로 현재 시간을 this.state포함하는 객체로 초기화 됩니다. 나중에이 상태를 업데이트 할 것입니다.

//2. 그런 다음 React는 Clock구성 요소의 render()메소드 를 호출합니다 . 이것이 React가 스크린에 무엇을 표시해야 하는지를 배우는 방법입니다. 그런 다음 React는 DOM을 업데이트하여 Clock렌더링 출력 과 일치 시킵니다.

//3. 때 Clock출력이 DOM에 삽입되어, 통화량 반작용 componentDidMount()주기 후크. 그 안에 Clock컴포넌트는 브라우저에 구성 요소의 tick()메소드를 1 초에 한 번 호출하는 타이머를 설정하라고 요청합니다 .

//4. 매 초 브라우저가 tick()메서드를 호출합니다 . 내부에서 Clock구성 요소 setState()는 현재 시간을 포함하는 객체를 호출하여 UI 업데이트를 예약합니다 . setState()호출 덕분에 React는 상태가 변경된 것을 알고 render()메소드를 다시 호출 하여 화면에 무엇이 있어야 하는지를 학습합니다. 이번에 this.state.date는 render()메서드가 달라 지므로 렌더링 출력에 업데이트 된 시간이 포함됩니다. React는 그에 따라 DOM을 업데이트합니다.

//5. 경우 Clock구성 요소가 이제까지 DOM에서 제거, 통화량 반작용 componentWillUnmount()타이머가 정지되도록 수명주기 후크를.




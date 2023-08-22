import logo from './logo.svg';
import {Inject, ScheduleComponent,Day, Week, WorkWeek, Month ,Agenda} from '@syncfusion/ej2-react-schedule';

function App() {
  return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component{
   render(){
    return <ScheduleComponent>
      <Inject services = {[Day, Week, WorkWeek, Month, Agenda]}/>
    </ScheduleComponent>
  }
}
  );
}
export default App;

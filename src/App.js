import logo from './logo.svg';
import './App.css';
import Variable from './component/Variable';
import Variableproblem from './component/variableproblem';
import Operator from './component/Operator';
import Logical from './component/Logical';
import Logicaland from './component/Logicaland';
import Logicalor from './component/Logicalor';
import Opertorproblem from './component/Workout/opertorproblem';
import Props from './component/Workout/Props';
import Car from './component/Classcomponent';
import Spreadrest from './component/Spreadrest';
import Ifstatemnt from './component/Ifstatemnt';
import Switchcase from './component/Switchcase';
import Card from './component/Card';
import Ifelsestatement from './component/Workout/Ifelsestatement';
import Whileloop from './component/Workout/Whileloop';
import Forloop from './component/Workout/Forloop';
import Forloopstate from './component/Workout/Forloopstate';
import Loopcontrol from './component/Workout/Loopcontrol';
import Forinloop from './component/Workout/Forinloop';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Usestatehook from './component/Workout/Usestatehook';
import Loginform from './component/Loginform';
import Logindetails from './component/Workout/Logindetails';
import Expense from './component/Workout/Expense';
import Studentdata from './component/Workout/Studentdata';
import Useeffecthook from './component/Workout/Useeffecthook';
import { Counter } from './component/Workout/Useeffectstate';
import Numberobj from './component/Workout/Numberobj';
import Stringobj from './component/Stringobj';
import Stringfunction from './component/Workout/Stringfunction';



function App() {
  return (
    <Card>
      <Stringfunction/>
      <Stringobj/>
      <Numberobj/>
      <Counter/>
      <Studentdata/>
      <Expense/>
      <Usestatehook/>
        <Loginform/>
        <Logindetails/>
        
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Forinloop/>}></Route>
        <Route path="/logicaland" element={<Logicaland/>}></Route>
        <Route path="/logicalor" element={<Logicalor name="Abi"/>}></Route>
        <Route path='/Forloopstate' element={<Forloopstate/>}></Route>
        <Route path='/Ifelsestatement' element={<Ifelsestatement/>}/>
        <Route path='/Operator' element={<Operator/>}/>
        <Route path='/Variable' element={<Variable/>}/>
        
      </Routes>
      </BrowserRouter>
      <Useeffecthook/>
     {/* <Forinloop/> */}
      {/* <Loopcontrol/>
      <Forloopstate/>
      <Forloop/>
      <Whileloop/>
      <Switchcase/>
      <Ifstatemnt/>
      <Spreadrest/>
      <Car/>
      <Logicalor name="Abi"/>
      <Logicaland/>
      <Logical/>
      <Operator/>
      <Variable /> */}
      {/* <Variableproblem />
      <Opertorproblem />
      <Props name="priya"/>
      <Ifelsestatement/> */}
     


    </Card>
  );
}


export default App;

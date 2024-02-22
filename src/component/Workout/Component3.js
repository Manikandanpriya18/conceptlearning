import { useContext } from "react";
import { UserContext } from "./Component1";
export function Component3() {
    const [user,setUser] = useContext(UserContext);
  
    return (
      <>
        <h1>Component 3</h1>
        <h2>{`Hello ${user} again!`}</h2>
        <button onClick={()=>setUser("Manikandan")}>change</button>
      </>
    );
  }
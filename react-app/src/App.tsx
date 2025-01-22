import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
 const [alertVisible, setAlertVisibility] = useState(false); //Intinya ini bakal buat si Alert, yang dimana disini memunculkan tulisan My Alert, menghilang. ini terjadi karena visibilitas yang diatur oleh useState bersifat false, dan ketika ditekan buttonnya, statenya diatur menjadi true, begitu pula dengan onClose

  return (
    <div>
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;

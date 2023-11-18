import { useEffect } from "react";
import { firestore } from "@/firebase-config";

function App() {

  useEffect(() => {
    console.log(firestore);
  });

  return (
    <>
    </>
  )
}

export default App;

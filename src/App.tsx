import { useState } from "react";

//COMPONENTS
import NavBar from "@/components/navbar";

function App() {
  //STATE FOR HIGHLIGHTING LINKS IN HEADER
  const [selectedPage, setSelectedPage] = useState<string>("home");
  return (
    <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
  );
}

export default App;

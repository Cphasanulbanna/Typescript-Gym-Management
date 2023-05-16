import { useState } from "react";

//COMPONENTS
import NavBar from "@/components/navbar";

//ENUM DATA TYPE
import { SelectedPage } from "./shared/types";

function App() {
  //STATE FOR HIGHLIGHTING LINKS IN HEADER
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  return (
    <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
  );
}

export default App;

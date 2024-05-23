import HomePage from "@/pages/homePage";
import { ConfirmProvider } from "@/context/confirmContext/ConfirmContext.tsx";

function App() {
  return (
    <ConfirmProvider>
      <HomePage />
    </ConfirmProvider>
  );
}

export default App;

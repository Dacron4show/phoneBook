import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex flex-col justify-center items-center min-h-screen ">
          <h2 className="font-bold text-6xl mb-8">Hey, welcome Ife!!</h2>
          <Button onClick={() => alert("Button works")}>Click here</Button>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;

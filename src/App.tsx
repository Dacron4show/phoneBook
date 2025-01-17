import { useEffect } from "react";
import { appStore } from "./Store/AppStore";
import AddContacts from "./components/AddContacts";
import Contacts from "./components/Contacts";
import Search from "./components/Search";
import { Button } from "./components/ui/button";

function App() {
  const {isDarkMode, setIsDarkMode} = appStore()


  const updateThemeClass = (isDark: boolean): void => {
    document.documentElement.classList.toggle("dark", isDark);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") === "dark";
    setIsDarkMode(savedTheme);
    updateThemeClass(savedTheme);
  }, []);

  const toggleTheme = (): void => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    updateThemeClass(newTheme);
  };

  return (
    <div className="flex flex-col items-center min-h-screen m-auto pt-20 max-w-4xl space-y-10">
      <div className="flex justify-between w-full px-8 items-center ">
        <h2 className="font-bold text-2xl sm:text-6xl">Phonebook</h2>
        <Button onClick={toggleTheme}>{isDarkMode ? "Light mode" :" Dark mode"  }</Button>
      </div>

      <div className="w-full px-8 space-y-10">
        <Search />
        <Contacts />
      </div>
      <AddContacts />
    </div>
  );
}

export default App;

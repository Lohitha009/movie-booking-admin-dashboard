import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? <Sun /> : <Moon />}
    </button>
  );
}

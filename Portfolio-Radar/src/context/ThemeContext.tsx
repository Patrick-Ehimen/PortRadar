import React, { createContext, useContext, useState } from "react";

// Define the theme context
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: (desiredTheme: "light" | "dark") => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Provider component that wraps your app and provides theme functionality
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark"); // Default theme

  // Function to toggle the theme
  const toggleTheme = (desiredTheme: "light" | "dark") => {
    setTheme(desiredTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

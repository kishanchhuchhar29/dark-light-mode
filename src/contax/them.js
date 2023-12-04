import { useContext,createContext } from "react";

export const ThemeContext=createContext(
    {
        thememod:"light",
        darkthem:()=>{},
        lightthem:()=>{},
    }
)
export const ThemeProvider=ThemeContext.Provider
export default function useTheme(){
    return useContext(ThemeContext);
}
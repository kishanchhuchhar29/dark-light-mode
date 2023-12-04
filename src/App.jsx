
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contax/them'
import ThemeBtn from './component/Themebtn';
import Card from './component/Card';

function App() {
  const [thememod,setTememod]=useState("light");
  const darkthem=()=>{
    setTememod("dark");
  }
  const lightthem=()=>{
    setTememod("light");
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(thememod)
  
  }, [thememod])
  

  return (
    
   <ThemeProvider value={{thememod,darkthem,lightthem}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
            </ThemeProvider>

    
  )
}

export default App

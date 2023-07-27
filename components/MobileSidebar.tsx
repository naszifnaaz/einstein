"use client"

import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import Siderbar from "./Sidebar"
import {useState, useEffect} from "react"

const MobileSidebar = () => {
  // Hydration error on this component, but the following code seems to fix it
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  },[]);

  if(!isMounted)
    return null
  
  return(
    <div>
      <Sheet>
        <SheetTrigger>
        <Button variant={"ghost"} size={"icon"} className="md:hidden">
          <Menu />
        </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="p-0">
          <Siderbar />
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileSidebar
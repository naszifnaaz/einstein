import { UserButton } from "@clerk/nextjs"
import MobileSidebar from "./MobileSidebar"

const Navbar = () => {
  return (
    <div className="flex items-center p-4 ">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton signInUrl="/" />
      </div>
    </div>
  )
}

export default Navbar
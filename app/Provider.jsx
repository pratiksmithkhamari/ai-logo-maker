
import Navbar from './_components/Navbar'

const Provider = ({children}) => {
  return (
    <div>
        <Navbar />
        <div className="px-0 md:px-24 lg:px-44 sm:px-32 sm:p-6">
            {children}
        </div>
      
    </div>
  )
}

export default Provider


import Blogs from './Components/BLOG/Blogs'
import Header from './Components/Header/Header'
import './index.css'

function App() {

  return (
    <>
   <div className='max-w-6xl mx-auto'>
    <Header></Header>
    <br />
    <hr className='w-full border-[2px] border-black rounded-[5px]'/>
   <Blogs></Blogs>
   </div>
    </>
  )
}

export default App

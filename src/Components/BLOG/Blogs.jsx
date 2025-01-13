import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = () => {

    const [book, setBook] = useState([])
  

    useEffect(() => {
        fetch('../../../public/fakeData.json')
            .then(res => res.json())
            .then(data => setBook(data)
            )
    }, [])

    const toggleBookmarks = () => {
     document.getElementById('boobs').classList.add('hidden')
     document.getElementById('ttr').classList.remove('hidden')
     };
     
    return (
        <div className="lg:flex block gap-5">

            <div className="flex justify-center gap-5 mt-5">

                <button
                    className="text-zinc-700 md:hidden hover:text-green-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-green-600 duration-700">
                    <a href="./Blog.jsx">Blogs</a>
                </button>
                <button onClick={toggleBookmarks }
                    className="text-zinc-700 md:hidden hover:text-green-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-green-600 duration-700">
                    Bookmarks
                </button>

            </div>

            <div id="boobs" className="lg:w-2/3  lg:block md:gap-5 md:grid md:grid-cols-2">
                {
                    book.map(boi => <Blog key={boi.id} boi={boi}></Blog>)
                }
            </div>

            <div className="mt-5">
            <div id="ttr" className="border-[2px] hidden md:block lg:w-[400px] rounded-[5px] border-[#6047EC1A] bg-[#6047EC1A]">

                <h1 className="text-[#6047EC] p-5 text-center font-bold"> Spent time on read </h1>
            </div>
            </div>
        </div>
    );
};

export default Blogs;





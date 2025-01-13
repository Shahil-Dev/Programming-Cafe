import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import Bookmarks from "../Bookmark/Bookmarks";

const Blogs = () => {

    const [book, setBook] = useState([])
    const [bookmark, setBookmarks] = useState([])
    const handleMark = (boi) => {
        const newBookmarks = [...bookmark, boi]
        setBookmarks(newBookmarks)
    }
    const [markAsRead, setMArkAsRead] = useState(0)

    const handleMarkAsRead = (time) => {
    const newTime = (markAsRead + time);
    setMArkAsRead(newTime)


    }



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
                <button onClick={toggleBookmarks}
                    className="text-zinc-700 md:hidden hover:text-green-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-green-600 duration-700">
                    Bookmarks
                </button>

            </div>

            <div id="boobs" className="lg:w-2/3  lg:block md:gap-5 md:grid md:grid-cols-2">
                {
                    book.map(boi => <Blog key={boi.id} handleMarkAsRead={handleMarkAsRead} handleMark={handleMark} boi={boi}></Blog>)
                }
            </div>

            <div id="ttr" className=" hidden md:block">
                <Bookmarks markAsRead={markAsRead} bookmark={bookmark}></Bookmarks>
            </div>


        </div>
    );
};

export default Blogs;





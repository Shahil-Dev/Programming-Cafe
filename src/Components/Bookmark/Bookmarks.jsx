import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({ bookmark,markAsRead}) => {
    return (
        <div>
            <div className="mt-5">
                <div id="ttr" className="border-[2px] lg:w-[400px] rounded-[5px] border-[#6047EC1A] bg-[#6047EC1A]">
                    <h1 className="text-[#6047EC] p-5 text-center font-bold"> Spent time on read:{markAsRead}</h1>
                </div>
                <div className="mt-4 bg-[#1111110D] p-5">
                    <h1 className="font-bold"> Bookmarked Blogs : {bookmark.length}</h1>
                    {
                  bookmark.map(booking => <Bookmark   key={booking.id} booking={booking}></Bookmark>)      
                    }
                </div>
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmark:PropTypes.object
};


export default Bookmarks;
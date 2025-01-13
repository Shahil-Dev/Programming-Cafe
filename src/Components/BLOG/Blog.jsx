import PropTypes from 'prop-types'; // ES6



const Blog = ({ boi }) => {

    const { author, title, post_date, reading_time,tags, cover, author_img } = boi
    return (
        <div className=" bg-[#1111110D] rounded-[5px] mt-5 p-5">
            <img className="lg:w-full lg:h-[350px] lg:bg-cover rounded-[10px]" src={cover} alt="" />
            <div className="mt-4 flex justify-between">
                <div className="flex ">
                    <div className="flex gap-5">
                        <div>
                            <img className="rounded-full w-[50px] h-[50px] bg-cover" src={author_img} alt="" />
                        </div>
                        <div className="mt-[-10px]">
                            <h1 className="text-[24px] font-bold">{author}</h1>
                            <p className="text-[#11111199]">{post_date}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>{reading_time}</p>
                </div>
            </div>
            <div className="mt-5">
                <h1 className="text-[40px] font-bold">{title}</h1>
                <p className="text-[#11111199]">{tags}</p>
            </div>
           <a className="underline" href=""> <h1>Mark as read</h1></a>
        </div>
    );
};


Blog.propTypes ={
    boi:PropTypes.object.isRequired
}

export default Blog;
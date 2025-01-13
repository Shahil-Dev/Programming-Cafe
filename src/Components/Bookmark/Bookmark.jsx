import PropTypes from 'prop-types';

const Bookmark = ({booking}) => {
    const {title} = booking
    return (
        <div className='p-5 bg-[#ffffff] mt-3 rounded-[5px]'>
            <h1 className='text-[18px] font-semibold'>{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    booking:PropTypes.object
};

export default Bookmark;
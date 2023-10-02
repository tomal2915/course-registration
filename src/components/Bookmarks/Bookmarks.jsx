import { PropTypes } from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    

    return (
        <div className="w-4/5 md:w-1/4 h-3/4 px-4 bg-[#FFFFFF]">
            <div>
                <h3 className='text-[#2F80ED] text-lg font-bold border-b border-[#1C1B1B21] py-4 mb-4'>
                    Credit Hour Remaining: {20 - readingTime < 0 ? '0 hr' : (20 - readingTime) + ' hr'}
                </h3>
            </div>
            <div className=''>
                <h1 className=' text-xl font-bold mb-4'>Course Name</h1>
                {
                    // bookmarks.map((bookmark, index) => <Bookmark key={index} bookmark={bookmark}></Bookmark>)
                }

                {/* Render the list of bookmarks */}
                <ol className='ml-6 list-decimal text-[#1C1B1B99]'>
                    {
                        bookmarks.map((bookmark, index) => (
                            <li key={index}>
                                <Bookmark bookmark={bookmark}></Bookmark>
                            </li>
                        ))
                    }
                </ol>

            </div>

            <div className='mt-4 border-t border-b border-[#1C1B1B21] py-4 font-medium'>
                <h3>Total Credit Hour: {readingTime}</h3>
            </div>
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,
}

export default Bookmarks
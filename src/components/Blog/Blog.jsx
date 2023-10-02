
import { PropTypes } from 'prop-types';
import { BiDollar, BiBookOpen } from 'react-icons/bi'
import { ToastContainer } from 'react-toast'


const Blog = ({ blog, handleAddToBookmark, handleTime }) => {

    // console.log(blog);

    const { courseTitle, coursePrice, courseDetails, courseCreditHour, courseCoverImage } = blog;

    return (
        <div className="bg-[#FFFFFF] rounded-md m-2 p-4 flex flex-col">
            <img className="rounded w-full h-[144px]" src={courseCoverImage} alt="" />
            <h2 className='text-[18px] font-semibold text-[#1C1B1B] my-2'>{courseTitle}</h2>
            <p className='text-[14px] text-[#1C1B1B] my-2 flex-grow'>{courseDetails}</p>
            <div className="flex justify-between">
                <p className='flex items-center gap-2'><BiDollar></BiDollar> Price: {coursePrice}</p>
                <p className='flex items-center gap-2'><BiBookOpen></BiBookOpen> Credit: {courseCreditHour}hr</p>
            </div>
            <button className='btn-primary' onClick={() => {
                handleAddToBookmark(blog);
                handleTime(courseCreditHour);
            }}>Select</button><ToastContainer />
        </div>
    )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleTime: PropTypes.func,
}

export default Blog
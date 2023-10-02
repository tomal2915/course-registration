
import { PropTypes } from 'prop-types';
import { useEffect, useState } from "react"
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmark, handleTime }) => {

    // console.log(handleAddToBookmark);

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleTime={handleTime}
                ></Blog>)
            }
        </div>
    )
}

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleTime: PropTypes.func,
}

export default Blogs
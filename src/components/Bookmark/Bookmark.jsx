import { PropTypes } from 'prop-types';

const Bookmark = ({ bookmark }) => {
    
    const { courseTitle } = bookmark;

    return (
        <div>
            <h3>{courseTitle}</h3>
        </div>
    )
}

Bookmark.propTypes = {
    bookmark: PropTypes.object,
}

export default Bookmark
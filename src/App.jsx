import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Blogs from './components/Blogs/Blogs'
import Header from './components/header/header'
import { useState } from 'react'
import { toast } from 'react-toast'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  // event handler
  const handleAddToBookmark = blog => {
    // const newBookmarks = [...bookmarks, blog];
    // setBookmarks(newBookmarks);

    // Check if the newBookmark already exists in the list
    const isDuplicate = bookmarks.some((bookmark) => bookmark.id === blog.id);

    if (isDuplicate) {
      showToast('Bookmark already added');
    } else {
      // const newBookmarks = [...bookmarks, blog];
      // setBookmarks(newBookmarks);

      const newTime = readingTime + blog.courseCreditHour; // Assuming the blog object has a 'time' property
      if (newTime > 20) {
        showToast('Credit hour cannot be more than Twenty hours');
      } else {
        // Create a new array of bookmarks with the new blog included
        const newBookmarks = [...bookmarks, blog];

        // Update the state of bookmarks with the new array
        setBookmarks(newBookmarks);
      }
    }
  }

  const handleTime = time => {
    const newTime = readingTime + time;
    // setReadingTime(newTime);

    if (newTime > 20) {
      showToast('Please finished selected course')
    } else {
      setReadingTime(newTime);
    }
  }

  // Function to display a toast or notification
  const showToast = (message) => {
    // Implement your toast/notification logic here
    toast(message)
  }

  return (
    <div className='bg-[#F3F3F3]'>
      <Header></Header>
      <div className='flex flex-col md:flex-row m-2 md:m-8 gap-2 items-center md:items-start'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleTime={handleTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App

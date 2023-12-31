### **3 Project Features:**

I have implemented three key features in my project:

1. **Viewing Course Overviews:** Users can view course details such as course name, credit hour, and price.

2. **Adding Courses to Bookmarks:** Users have the ability to select and add courses to their bookmarks based on their preferences.

3. **Reading Time Constraint:** An implemented constraint ensures that users cannot add more courses to their bookmarks if the total reading time exceeds 20 hours.

### **State Management in My Assignment Project:**

In my project, I utilized the `useState` hook to manage two important pieces of state:

1. **`bookmarks` State:**

   - This state variable is responsible for tracking the courses that users have bookmarked.
   - It is initially set as an empty array `[]` using the `useState` hook: `const [bookmarks, setBookmarks] = useState([]);`.
   - When a user selects a course and adds it to their bookmarks, this state is updated by including the selected course in the `bookmarks` array.

2. **`readingTime` State:**

   - This state variable is used to calculate and display the total reading time of the selected courses.
   - It starts with an initial value of 0 using the `useState` hook: `const [readingTime, setReadingTime] = useState(0);`.
   - Whenever a user selects a course with a specific credit hour, this state is updated by adding the credit hour to the current `readingTime`.

**State Management and User Interaction:**

- State management plays a crucial role in my project, allowing for the maintenance and dynamic updating of data in response to user interactions.
- Users can add courses from their bookmarks, and the reading time is updated accordingly, all driven by changes in the state variables.
#   c o u r s e - r e g i s t r a t i o n  
 
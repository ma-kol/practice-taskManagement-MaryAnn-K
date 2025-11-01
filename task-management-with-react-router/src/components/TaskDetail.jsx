/*

● Display a list of tasks with links to their detail pages.
● Include your mock task dataset from step 2 inside of the TaskList
component.
● Use the .map() method to iterate through tasks.
● Make sure to create a Link component that navigates to /task/${task.id}.
● Retrieve the task ID from the URL and display the corresponding task details.

*/

import { useParams } from "react-router"
import { Link } from "react-router";

const TaskDetail = ({ mockData }) => {

    const { id } = useParams();
    const task = mockData.find((task) => String(task.idq) === id)

    if (!task) {
        return (
            <div>
                <p>Task not found.</p>
                <Link to="/">Go Back</Link>
            </div>
        )
    }
    return (
        <div>
            <h3>Current Task</h3>
            <p>ID: {task.id}</p>
            <p>Task: {task.title}</p>
            <p>Details: {task.description}</p>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default TaskDetail;
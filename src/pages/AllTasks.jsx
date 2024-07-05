import React, { useState } from "react";
import TaskList from "@/components/TaskList";
import AddTaskModal from "@/components/AddTaskModal";
import { Button } from "@/components/ui/button";

const AllTasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", completed: false, dueDate: new Date() },
    { id: 2, title: "Task 2", completed: false, dueDate: new Date() },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Tasks</h1>
        <Button onClick={() => setIsModalOpen(true)}>Add Task</Button>
      </header>
      <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
      <AddTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={addTask} />
    </div>
  );
};

export default AllTasks;
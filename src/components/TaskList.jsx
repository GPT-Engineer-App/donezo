import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Pencil, Trash } from "lucide-react";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center justify-between p-2 border rounded">
          <div className="flex items-center space-x-2">
            <Checkbox checked={task.completed} />
            <span>{task.title}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={() => onEdit(task)}>
              <Pencil className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => onDelete(task.id)}>
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
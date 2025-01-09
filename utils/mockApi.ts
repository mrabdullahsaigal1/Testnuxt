import type { Task } from "~/types/task";

let tasks: Task[] = [
  {
    id: 1,
    title: "Grocery Shopping",
    description: "Buy milk, eggs, and bread",
    status: "To Do",
    dueDate: "2025-01-15",
  },
  {
    id: 2,
    title: "Pay Bills",
    description: "Pay electricity and internet bills",
    status: "In Progress",
    dueDate: "2025-01-20",
  },
  {
    id: 3,
    title: "Walk the dog",
    description: "Take Fido for a walk in the park",
    status: "Completed",
    dueDate: "2025-01-08",
  },
];

export const fetchTasks = (): Promise<Task[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...tasks]), 500);
  });
};

export const fetchTaskById = (id: number): Promise<Task | null> => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(tasks.find((task) => task.id === id) || null),
      500
    );
  });
};

export const createTask = (task: Omit<Task, "id">): Promise<Task> => {
  return new Promise((resolve) => {
    const newTask: Task = { id: Date.now(), ...task };
    tasks.push(newTask);
    setTimeout(() => resolve(newTask), 500);
  });
};

export const updateTask = (updatedTask: Task): Promise<Task> => {
  return new Promise((resolve) => {
    tasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTimeout(() => resolve(updatedTask), 500);
  });
};

export const deleteTask = (id: number): Promise<boolean> => {
  return new Promise((resolve) => {
    tasks = tasks.filter((task) => task.id !== id);
    setTimeout(() => resolve(true), 500);
  });
};

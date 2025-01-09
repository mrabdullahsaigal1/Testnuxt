import { defineStore } from "pinia";
import {
  fetchTasks,
  fetchTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "~/utils/mockApi";
import type { Task } from "~/types/task";

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [] as Task[],
  }),
  getters: {
    getAllTasks: (state) => state.tasks,
    getTaskById: (state) => {
      return (id: number) => state.tasks.find((task) => task.id === id);
    },
  },
  actions: {
    async fetchTasks() {
      this.tasks = await fetchTasks();
    },
    async fetchTaskById(id: number) {
      return await fetchTaskById(id);
    },
    async createTask(task: Omit<Task, "id">) {
      const newTask = await createTask(task);
      this.tasks.push(newTask);
    },
    async updateTask(updatedTask: Task) {
      const task = await updateTask(updatedTask);
      const index = this.tasks.findIndex((t) => t.id === task.id);
      if (index !== -1) {
        this.tasks[index] = task;
      }
    },
    async deleteTask(id: number) {
      await deleteTask(id);
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
});

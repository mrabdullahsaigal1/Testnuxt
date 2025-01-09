<template>
  <div class="create-task-page">
    <h1>Create a New Task</h1>
    <form @submit.prevent="submitTask">
      <div>
        <label for="task-title">Task Title:</label>
        <input type="text" id="task-title" v-model="task.title" required />
      </div>
      <div>
        <label for="task-description">Description:</label>
        <textarea
          id="task-description"
          v-model="task.description"
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>

    <div class="back-to-home">
      <button @click="goBackHome">Back to Home</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useTasksStore } from "~/stores/tasks";

const tasksStore = useTasksStore();
const router = useRouter();
const task = reactive({
  title: "",
  description: "",
});

function submitTask() {
  tasksStore.createTask({
    title: task.title,
    description: task.description,
    status: "To Do",
    dueDate: task.dueDate || "No Due Date",
  });
  router.push("/");
}

function goBackHome() {
  router.push("/");
}
</script>

<style scoped>
.create-task-page {
  background: linear-gradient(135deg, #1f1c2c, #928dab);
  min-height: 100vh;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

h1 {
  font-family: "Orbitron", sans-serif;
  font-size: 2rem;
  color: #00e6e6;
}

form {
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #00e6e6;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #00e6e6;
  border-radius: 5px;
  background-color: transparent;
  color: white;
}

button {
  background-color: #00e6e6;
  color: #1f1c2c;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.3s;
}

button:hover {
  transform: scale(1.05);
}

.back-to-home {
  margin-top: 20px;
  text-align: center;
}

.back-to-home button {
  background-color: #00e6e6;
  color: #1f1c2c;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.3s;
}

.back-to-home button:hover {
  transform: scale(1.05);
}
</style>

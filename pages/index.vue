<template>
  <div class="task-manager-page">
    <div class="header">
      <h1 class="text-h4">Task Manager</h1>
      <button class="create-btn" @click="createTask">
        Create Task
      </button>
    </div>
    <TaskList />
  </div>
</template>

<script setup lang="ts">
import TaskList from '~/components/TaskList.vue'

function createTask() {
  const router = useRouter();
  router.push('/tasks/create');
}
</script>

<style scoped>
.task-manager-page {
  background: linear-gradient(135deg, #1f1c2c, #928dab);
  min-height: 100vh;
  color: #ffffff;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 20px;
}

.text-h4 {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  letter-spacing: 2px;
  color: #00e6e6;
}

.create-btn {
  border: 2px solid #00e6e6;
  border-radius: 25px;
  padding: 10px 20px;
  transition: background-color 0.3s, transform 0.3s;
  background-color: transparent;
  color: white;
  cursor: pointer;
}

.create-btn:hover {
  background-color: #00e6e6;
  color: #1f1c2c;
  transform: scale(1.05);
}
</style>
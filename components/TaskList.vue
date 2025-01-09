<template>
  <div class="task-list-container">
    <ul class="task-list">
      <li v-for="task in tasks" :key="task.id" class="task-item">
        <TaskItem :task="task" @delete-task="handleDeleteTask" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useTasksStore } from "~/stores/tasks";
import TaskItem from "./TaskItem.vue";

const tasksStore = useTasksStore();

const tasks = computed(() => tasksStore.getAllTasks);

onMounted(() => {
  tasksStore.fetchTasks();
});

function handleDeleteTask(taskId: number) {
  tasksStore.deleteTask(taskId);
}
</script>


<style scoped>
.task-list-container {
  padding: 20px;
}

.task-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.task-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px;
  transition: background-color 0.3s;
}

.task-item:last-child {
  border-bottom: none;
}

.task-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 600px) {
  .task-list-container {
    padding: 10px;
  }
}
</style>
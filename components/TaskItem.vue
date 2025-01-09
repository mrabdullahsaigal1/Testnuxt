<template>
  <div class="task-item">
    <div class="task-title">{{ task.title }}</div>
    <div class="task-description">{{ task.description }}</div>
    <div class="action-buttons">
      <button class="action-btn" @click="editTask">Edit</button>
      <button class="action-btn" @click="showDeleteDialog = true">
        Delete
      </button>
    </div>

    <div v-if="showDeleteDialog" class="delete-dialog">
      <p>Are you sure you want to delete this task?</p>
      <div class="dialog-actions">
        <button class="btn cancel-btn" @click="showDeleteDialog = false">
          Cancel
        </button>
        <button class="btn save-btn" @click="handleDelete">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from "vue";

interface Task {
  id: number;
  title: string;
  description: string;
}

const props = defineProps({
  task: {
    type: Object as PropType<Task>,
    required: true,
  },
});

const emit = defineEmits(["delete-task"]);
const showDeleteDialog = ref(false);

function handleDelete() {
  emit("delete-task", props.task.id);
  showDeleteDialog.value = false;
}

function editTask() {
  const router = useRouter();
  router.push(`/tasks/edit/${props.task.id}`);
}
</script>

<style scoped>
.task-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin-bottom: 15px;
  padding: 15px;
  transition: transform 0.3s, background 0.3s;
}

.task-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.2);
}

.task-title {
  font-family: "Orbitron", sans-serif;
  font-size: 1.2rem;
  color: #00e6e6;
  text-shadow: 1px 1px 2px #000;
}

.task-description {
  font-family: "Roboto", sans-serif;
  color: #e0e0e0;
  margin-top: 5px;
}

.action-buttons {
  display: flex;
  gap: 10px;
}

.action-btn {
  border: 2px solid #00e6e6;
  border-radius: 25px;
  padding: 5px 10px;
  transition: color 0.3s, transform 0.3s;
  background-color: transparent;
  color: white;
  cursor: pointer;
}

.action-btn:hover {
  color: #ffffff;
  transform: scale(1.2);
}

.delete-dialog {
  background: #2c3e50;
  color: white;
  border-radius: 15px;
  padding: 20px;
}

.dialog-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>

<template>
  <form @submit.prevent="handleSubmit" class="task-form">
    <input
      v-model="localTitle"
      type="text"
      placeholder="Title"
      required
      class="q-mb-md input-field"
    />
    <textarea
      v-model="localDescription"
      placeholder="Description"
      rows="3"
      required
      class="q-mb-md input-field"
    ></textarea>
    <div class="button-group row justify-end">
      <button type="button" @click="onCancel" class="btn cancel-btn">
        Cancel
      </button>
      <button type="submit" class="btn save-btn q-ml-md">Save</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTasksStore } from "~/stores/tasks";

const tasksStore = useTasksStore();

interface Task {
  id?: number;
  title: string;
  description: string;
}

const props = defineProps<{
  existingTask?: Task;
  onCancel: () => void;
  onSave: () => void;
}>();

const emit = defineEmits(["saved"]);

const localTitle = ref(props.existingTask?.title || "");
const localDescription = ref(props.existingTask?.description || "");

function handleSubmit() {
  if (props.existingTask) {
    tasksStore.updateTask({
      id: props.existingTask.id!,
      title: localTitle.value,
      description: localDescription.value,
    });
  } else {
    tasksStore.createTask(localTitle.value, localDescription.value);
  }

  emit("saved");
  props.onSave();
}

function onCancel() {
  props.onCancel();
}
</script>

<style scoped>
.task-form {
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 20px;
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

.input-field {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: #ffffff;
  border: none;
  padding: 10px;
  width: 100%;
  margin-bottom: 15px;
  font-family: "Roboto", sans-serif;
}

.input-field::placeholder {
  color: #e0e0e0;
}

.button-group {
  margin-top: 20px;
}

.btn {
  border: 2px solid #00e6e6;
  border-radius: 25px;
  padding: 10px 20px;
  transition: background-color 0.3s, transform 0.3s;
  background-color: transparent;
  color: white;
  cursor: pointer;
}

.save-btn {
  background-color: #00e6e6;
  color: #1f1c2c;
}

.save-btn:hover {
  background-color: #00b3b3;
  transform: scale(1.05);
}

.cancel-btn:hover {
  background-color: rgba(255, 0, 0, 0.2);
  transform: scale(1.05);
}
</style>

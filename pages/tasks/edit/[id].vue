<template>
  <q-page class="edit-task-page" padding>
    <div class="text-h5 q-mb-md">Edit Task: {{ task?.title }}</div>
    <TaskForm
      v-if="task"
      :existingTask="task"
      @saved="handleSaved"
      :onCancel="handleCancel"
      :onSave="handleSaved"
    />
    <div v-else class="error-message">
      <q-banner class="bg-negative text-white" dense>
        Task not found. Redirecting to home...
      </q-banner>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useTasksStore } from "~/stores/tasks";
import TaskForm from "~/components/TaskForm.vue";

const tasksStore = useTasksStore();
const router = useRouter();
const route = useRoute();

const task = ref(null);

onMounted(() => {
  const id = Number(route.params.id);
  const foundTask = tasksStore.getTaskById(id);
  if (foundTask) {
    task.value = { ...foundTask };
  } else {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }
});

function handleSaved() {
  router.push("/");
}

function handleCancel() {
  router.push("/");
}
</script>

<style scoped>
.edit-task-page {
  background: radial-gradient(circle at bottom right, #141e30, #243b55);
  min-height: 100vh;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text-h5 {
  font-family: "Orbitron", sans-serif;
  color: #ff4081;
  text-shadow: 2px 2px 4px #000000;
}

.error-message {
  margin-top: 20px;
}
</style>

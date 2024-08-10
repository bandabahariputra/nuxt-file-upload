<script setup lang="ts">
defineProps<{
  progress: number;
  file: File;
}>();
</script>

<template>
  <div class="rounded-lg bg-gray-100 p-4 dark:bg-gray-900">
    <div class="mb-2 flex items-stretch gap-4">
      <UIcon
        name="i-heroicons-document-text-20-solid"
        class="h-10 w-10"
      />
      <div>
        <p class="mb-2 font-medium">{{ file.name }}</p>
        <p
          class="text-primary-500 dark:text-primary-400 flex items-center gap-2 text-sm"
        >
          {{ Math.round(file.size / Math.pow(1024, 1)) }} KB
        </p>
      </div>
      <div class="ml-auto flex flex-col items-end self-auto">
        <p class="text-primary-500 dark:text-primary-400 mt-auto text-sm">
          {{ progress }}%
        </p>
      </div>
    </div>
    <UProgress
      :value="progress"
      :max="100"
      color="blue"
      size="sm"
    />
  </div>
</template>

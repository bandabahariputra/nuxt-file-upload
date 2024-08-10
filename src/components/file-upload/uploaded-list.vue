<script setup lang="ts">
import type { ClientUploadedFileData } from 'uploadthing/types';

withDefaults(
  defineProps<{
    files: ClientUploadedFileData<null>[];
  }>(),
  {
    files: () => [],
  },
);
</script>

<template>
  <div>
    <p class="font-medium">Uploaded Files</p>
    <p class="text-primary-500 dark:text-primary-400 text-sm">
      View the uploaded files here
    </p>
    <div class="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
      <div
        v-for="item in files"
        :key="item.key"
        class="flex items-center gap-4"
      >
        <div
          class="border-primary/30 h-12 w-12 overflow-hidden rounded-lg border"
        >
          <img
            :src="item.url"
            :alt="item.name"
            class="h-full w-full"
          />
        </div>
        <div>
          <p class="mb-1">{{ item.name }}</p>
          <p class="text-primary-500 dark:text-primary-400 text-sm">
            {{ Math.round(item.size / Math.pow(1024, 1)) }} KB - {{ item.type }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

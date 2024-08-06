<script setup lang="ts">
const isOpen = ref(false);
</script>

<template>
  <div class="py-6">
    <UButton
      variant="solid"
      color="gray"
      label="Upload File"
      @click="isOpen = true"
    />

    <UModal
      v-model="isOpen"
      prevent-close
    >
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <p class="font-medium">Upload File</p>
            <UIcon
              name="i-heroicons-x-mark"
              class="h-5 w-5 cursor-pointer"
              @click="isOpen = false"
            />
          </div>
        </template>
        <div class="space-y-2">
          <FileUploadUploader />
          <FileUploadUploadingProgress />
        </div>
      </UCard>
    </UModal>
  </div>
</template>

<script setup lang="ts">
const { onUpload, uploadFiles, isUploading, progresses, uploadedFiles } =
  useUploadFile('imageUploader');
</script>

<template>
  <div class="space-y-6 py-6">
    <FileUploadUploader
      :disabled="isUploading"
      @upload="onUpload"
    />
    <FileUploadUploadingProgress
      v-if="progresses && uploadFiles"
      :progress="progresses.progress"
      :file="uploadFiles[0]"
    />
    <FileUploadUploadedList :files="uploadedFiles" />
  </div>
</template>

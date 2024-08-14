<script setup lang="ts">
const uploadFileStore = useUploadFile();

const { uploadFiles, isUploading, progresses, uploadedFiles } =
  storeToRefs(uploadFileStore);
</script>

<template>
  <div class="space-y-6 py-6">
    <FileUploadUploader
      :disabled="isUploading"
      @upload="uploadFileStore.onUpload"
    />
    <FileUploadUploadingProgress
      v-if="progresses && uploadFiles"
      :progress="progresses.progress"
      :file="uploadFiles[0]"
    />
    <FileUploadUploadedList :files="uploadedFiles" />
  </div>
</template>

<script setup lang="ts">
import { allowedFileExts } from '~/lib/allowed-file-extention';

withDefaults(
  defineProps<{
    disabled: boolean;
  }>(),
  {
    disabled: false,
  },
);

const emit = defineEmits(['upload']);

const toast = useToast();

const inputFile = ref<HTMLInputElement | null>(null);

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;

  if (!target.files?.length) return;

  const file = target.files[0];

  if (!allowedFileExts.includes(file.type)) {
    toast.add({
      id: 'error_upload_file',
      title: 'Error',
      description: 'Format file not allowed.',
      icon: 'i-heroicons-exclamation-triangle',
    });

    return;
  }

  emit('upload', [file]);

  inputFile.value!.value = '';
};
</script>

<template>
  <label
    for="dropzone-file"
    class="relative flex h-48 flex-col items-center justify-center space-y-2 rounded-lg border border-dashed border-gray-500 p-4 md:h-64 dark:border-gray-400"
    :class="{
      'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900': !disabled,
      'cursor-not-allowed': disabled,
    }"
  >
    <input
      id="dropzone-file"
      ref="inputFile"
      type="file"
      class="hidden"
      :disabled="disabled"
      @input="handleChange"
    />
    <template v-if="!disabled">
      <UIcon
        name="i-heroicons-arrow-up-tray"
        class="h-6 w-6"
      />
      <p class="font-medium">
        <span class="cursor-pointer text-blue-500 dark:text-blue-400"
          >Choose file</span
        >
        to upload
      </p>
      <p class="text-primary-500 dark:text-primary-400 text-sm">CSV or TXT</p>
    </template>
    <template v-else>
      <UIcon
        name="i-heroicons-arrow-path"
        class="h-6 w-6 animate-spin"
      />
      <p class="font-medium">Loading...</p>
    </template>
  </label>
</template>

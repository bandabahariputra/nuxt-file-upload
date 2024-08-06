<template>
  <label
    for="dropzone-file"
    class="relative flex h-48 cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border border-dashed border-gray-500 p-4 hover:bg-gray-100 md:h-64 dark:border-gray-400 dark:hover:bg-gray-900"
  >
    <input
      id="dropzone-file"
      type="file"
      class="hidden"
    />
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
  </label>
</template>

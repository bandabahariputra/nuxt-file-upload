<template>
  <div>
    <p class="font-medium">Uploaded Files</p>
    <p class="text-primary-500 dark:text-primary-400 text-sm">
      View the uploaded files here
    </p>
    <div class="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
      <div
        v-for="item in 10"
        :key="item"
        class="flex items-center gap-4"
      >
        <div class="h-12 w-12 overflow-hidden rounded-lg border">
          <img
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            alt="test"
          />
        </div>
        <div>
          <p class="mb-1">Image.png</p>
          <p class="text-primary-500 dark:text-primary-400 text-sm">
            Nov 26, 2022
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

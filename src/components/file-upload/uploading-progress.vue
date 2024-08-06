<template>
  <div class="rounded-lg bg-gray-100 p-4 dark:bg-gray-900">
    <div class="mb-2 flex items-stretch gap-4">
      <UIcon
        name="i-heroicons-document-text-20-solid"
        class="h-10 w-10"
      />
      <div>
        <p class="mb-2 font-medium">Customers_Q4_2022.csv</p>
        <p
          class="text-primary-500 dark:text-primary-400 flex items-center gap-2 text-sm"
        >
          443KB
        </p>
      </div>
      <div class="ml-auto flex flex-col items-end self-auto">
        <UIcon
          name="i-heroicons-x-mark"
          class="h-5 w-5 cursor-pointer"
        />
        <p class="text-primary-500 dark:text-primary-400 mt-auto text-sm">
          44%
        </p>
      </div>
    </div>
    <UProgress
      :value="44"
      :max="100"
      color="blue"
      size="sm"
    />
  </div>
</template>

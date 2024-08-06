<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  },
});
</script>

<template>
  <div class="flex items-center justify-between py-6">
    <h1
      class="text-md text-primary-900 flex items-center gap-2 font-bold dark:text-white"
    >
      <UIcon
        name="i-heroicons-document-arrow-up"
        class="h-5 w-5"
      />
      File Uploader
    </h1>
    <ClientOnly>
      <div class="flex items-center gap-2">
        <UButton variant="soft">
          <GithubLogoIcon class="w-5" />
        </UButton>
        <UButton
          :icon="
            isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
          "
          variant="soft"
          aria-label="Theme"
          @click="isDark = !isDark"
        />
      </div>
      <template #fallback>
        <div class="h-8 w-8" />
      </template>
    </ClientOnly>
  </div>
</template>

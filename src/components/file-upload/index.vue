<script setup lang="ts">
const items = [
  {
    key: 'basic',
    label: 'Basic',
  },
  {
    key: 'dialog',
    label: 'Dialog',
  },
];
</script>

<template>
  <div class="py-6">
    <UTabs :items="items">
      <template #item="{ item }">
        <FileUploadBasic v-if="item.key === 'basic'" />
        <FileUploadDialog v-if="item.key === 'dialog'" />
      </template>
    </UTabs>
  </div>
</template>

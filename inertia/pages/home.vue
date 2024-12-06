<script setup lang="ts">
import { Head } from '@inertiajs/vue3'

const test = async () => {
  const response = await fetch('/test', {
    method: 'POST',
  })
}
</script>

<template>
  <Head title="Homepage" />

  <div>
    <button @click.prevent="test">testetestsetste</button>
  </div>
</template>

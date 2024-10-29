<script setup lang="ts">
import { ref } from 'vue'
import ArkCombobox from '@packages/vue/components/ArkCombobox.vue'
import RadixDropdownMenu from '@packages/vue/components/RadixDropdownMenu.vue'

const comboboxItems = ['React', 'Solid', 'Vue']
const comboboxSelections = ref<string[]>(['Vue'])

function updateComboboxSelections(value: string[]) {
  comboboxSelections.value = value
}

const dropdownMenuItems = [
  { label: 'New Tab', subItem: '⌘+T' },
  { label: 'New Window', subItem: '⌘+N' },
  { label: 'New Private Window', subItem: '⇧+⌘+N', disabled: true },
]
</script>

<template>
  <main class="flex flex-col gap-8 p-8 bg-gray-100 min-h-screen">
    <h1 class="text-4xl font-extrabold text-center text-green-600">
      Welcome to Vue with TailwindCSS!
    </h1>
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg">
        <h2 class="text-2xl font-semibold text-gray-700">Ark UI Combobox</h2>
        <ArkCombobox
          label="Select framework"
          :selections="comboboxSelections"
          :items="comboboxItems"
          @change-selections="updateComboboxSelections"
        />
      </div>
      <div class="flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg">
        <h2 class="text-2xl font-semibold text-gray-700">
          Radix UI DropdownMenu
        </h2>
        <RadixDropdownMenu :items="dropdownMenuItems" label="open menu" />
      </div>
    </div>
  </main>
</template>

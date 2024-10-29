<script setup lang="ts">
import { Combobox, createListCollection } from '@ark-ui/vue/combobox'
import { ComboboxStyles } from '@packages/common/Combobox/style'
import type { ComboboxProps } from '@packages/common/Combobox/type'
import { ref, computed } from 'vue'

const { items, selections } = defineProps<ComboboxProps>()

const emits = defineEmits<{
  'change-selections': [string[]]
}>()

const _items = ref(items)
const collection = computed(() => createListCollection({ items: _items.value }))
const _selections = computed({
  get() {
    return selections
  },
  set(value) {
    emits('change-selections', value)
  },
})
function updateItems(detailes: Combobox.InputValueChangeDetails) {
  _items.value = items.filter(item =>
    item.toLowerCase().includes(detailes.inputValue.toLowerCase()),
  )
}
function resetItems() {
  _items.value = items
}
</script>

<template>
  <Combobox.Root
    :collection
    v-model="_selections"
    :default-value="_selections"
    :class="ComboboxStyles.Root"
    @input-value-change="updateItems"
  >
    <Combobox.Label :class="ComboboxStyles.Label">{{ label }}</Combobox.Label>
    <Combobox.Control :class="ComboboxStyles.Control">
      <Combobox.Input :class="ComboboxStyles.Input" />
      <Combobox.Trigger
        aria-label="open"
        :class="ComboboxStyles.Trigger"
        @click="resetItems"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevrons-up-down"
        >
          <path d="m7 15 5 5 5-5" />
          <path d="m7 9 5-5 5 5" />
        </svg>
      </Combobox.Trigger>
    </Combobox.Control>
    <Teleport to="body">
      <Combobox.Positioner>
        <Combobox.Content :class="ComboboxStyles.Content">
          <Combobox.ItemGroup>
            <Combobox.Item
              v-for="item in collection.items"
              :key="item"
              :item="item"
              :class="ComboboxStyles.Item"
            >
              <Combobox.ItemText :class="ComboboxStyles.ItemText">
                {{ item }}
              </Combobox.ItemText>
              <Combobox.ItemIndicator
                v-if="_selections.includes(item)"
                :class="ComboboxStyles.ItemIndicator"
              >
                ✓
              </Combobox.ItemIndicator>
            </Combobox.Item>
          </Combobox.ItemGroup>
        </Combobox.Content>
      </Combobox.Positioner>
    </Teleport>
  </Combobox.Root>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { DropdownMenuStyle } from '@packages/common/DropdowmnMenu/style'
import type { DropdownMenuProps } from '@packages/common/DropdowmnMenu/type'
import { ref } from 'vue'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from 'radix-vue'

defineProps<DropdownMenuProps>()

const toggleState = ref(false)
</script>

<template>
  <DropdownMenuRoot v-model:open="toggleState">
    <DropdownMenuTrigger :class="DropdownMenuStyle.Trigger" :aria-label="label">
      <Icon icon="radix-icons:hamburger-menu" />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent
        :class="DropdownMenuStyle.MenuContent"
        :side-offset="5"
      >
        <DropdownMenuItem
          v-for="item in items"
          :key="item.label"
          :value="item.label"
          :class="DropdownMenuStyle.MenuItem"
          :disabled="item.disabled"
        >
          {{ item.label }}
          <div v-if="item.subItem" :class="DropdownMenuStyle.MenuSubItem">
            {{ item.subItem }}
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>

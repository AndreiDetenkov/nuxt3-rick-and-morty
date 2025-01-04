<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { cn } from '~/lib/utils'
import { type ButtonVariants, buttonVariants } from '.'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  // eslint-disable-next-line vue/require-default-prop
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  variant: 'default',
  size: 'default',
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>

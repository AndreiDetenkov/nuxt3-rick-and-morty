<script setup lang="ts"></script>

<template>
  <BaseContainer>
    <div class="relative flex min-h-[60px] w-full items-center py-4" data-test="header">
      <slot name="logo" />
      <slot />
    </div>
  </BaseContainer>
</template>

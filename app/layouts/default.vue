<script setup lang="ts"></script>

<template>
  <div class="flex h-dvh w-dvw flex-col">
    <header>
      <BaseHeader>
        <template #logo>
          <BaseLogo />
        </template>

        <div class="w-full" />

        <Navigation class="mr-4" />
        <ToggleColorMode />
      </BaseHeader>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer>
      <BaseFooter />
    </footer>
  </div>
</template>

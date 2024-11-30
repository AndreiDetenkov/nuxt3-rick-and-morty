<script setup lang="ts"></script>

<template>
  <div class="h-dvh w-dvw flex flex-col">
    <header>
      <BaseHeader>
        <template #logo>
          <BaseLogo />
        </template>

        <div class="w-full" />
        <!-- <Navigation /> -->
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

<template>
  <div class="grid min-h-screen grid-rows-[auto_1fr_auto]">
    <header>
      <BaseHeader>
        <template #logo>
          <BaseLogo />
        </template>

        <div class="w-full" />

        <Navigation class="mr-8" />
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

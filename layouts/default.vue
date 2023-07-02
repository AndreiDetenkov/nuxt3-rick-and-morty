<template>
  <div class="flex h-screen flex-col">
    <NuxtLoadingIndicator />
    <AppHeader />
    <div class="flex-1">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<template>
  <section class="border-b border-t py-10 dark:border-b-primary dark:border-t-primary lg:py-20">
    <BaseContainer>
      <slot name="search" />

      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <slot />
      </div>

      <slot name="pagination" />
    </BaseContainer>
  </section>
</template>

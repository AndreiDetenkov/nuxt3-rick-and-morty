<template>
  <section class="py-10 lg:py-20 border-b dark:border-b-primary border-t dark:border-t-primary">
    <base-container>
      <slot name="search" />

      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <slot />
      </div>

      <slot name="pagination" />
    </base-container>
  </section>
</template>

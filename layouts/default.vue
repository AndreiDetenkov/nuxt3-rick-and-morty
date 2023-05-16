<template>
  <div>
    <header>
      <nav class="flex flex-row justify-between items-center px-[1.5rem] w-full min-h-[60px] border-[1px] border-slate-200">
        <NuxtLink to="/">
          <img src="~/assets/logo.png" class="w-12 h-auto " alt=""/>
        </NuxtLink>
      </nav>
    </header>
    <slot />
    <footer>Footer</footer>
  </div>
</template>

<script setup lang="ts"></script>

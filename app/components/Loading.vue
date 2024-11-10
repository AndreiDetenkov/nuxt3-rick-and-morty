<script setup lang="ts">
</script>

<template>
  <div data-test="loading" class="bg-neutral-800 fixed top-0 left-0 w-full h-full z-[100]">
    <div class="loading-text">
      <span data-test="loading-text" class="loading-text-words">L</span>
      <span data-test="loading-text" class="loading-text-words">O</span>
      <span data-test="loading-text" class="loading-text-words">A</span>
      <span data-test="loading-text" class="loading-text-words">D</span>
      <span data-test="loading-text" class="loading-text-words">I</span>
      <span data-test="loading-text" class="loading-text-words">N</span>
      <span data-test="loading-text" class="loading-text-words">G</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin position-center($text-align: center) {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: $text-align;
}

.loading-text {
  @include position-center;
  width: 100%;
  height: 100px;
  line-height: 100px;
  span {
    display: inline-block;
    margin: 0 5px;
    color: #fff;
    @for $i from 0 through 6 {
      &:nth-child(#{$i + 1}) {
        filter: blur(0px);
        animation: blur-text 1.5s calc($i / 5)+s infinite linear alternate;
      }
    }
  }
}

@keyframes blur-text {
  0% {filter: blur(0px);}
  100% {filter: blur(4px);}
}
</style>

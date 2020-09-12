<template>
  <section class="relative mt-10 max-w-full bg-white rounded-lg px-6 mb-4 py-4 mx-2">
    <div>
      <img class="w-screen h-48 sm:w-48 p-4" :src="product.image" alt="tomato" />
    </div>
    <svg viewBox="0 0 20 20" class="absolute top-0 right-0 m-3 fill-current w-6 h-6 text-peppos-500 hover:text-peppos-700 cursor-pointer">
      <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
    </svg>
    <div class="mt-2 space-y-2 mb-2">
      <h4 class="text-2xl font-semibold text-black">{{ product.price }} /kg</h4>
      <span class="text-gray-500 text-md">{{ product.desc }}</span>
    </div>
  </section>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      loading: true,
    };
  },
};
</script>

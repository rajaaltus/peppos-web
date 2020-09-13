<template>
  <div class="relative mt-10 w-2/5 mx-auto md:mx-6 lg:w-1/6 bg-white rounded-lg px-4 mb-4 py-4 hover:shadow-lg border border-solid border-gray-300 transition ease-out-in duration-500">
    <div class="">
      <img class="mx-auto py-4 px-6 pb-1/6" :src="product.image" alt="tomato" />
    </div>

    <svg viewBox="0 0 20 20" class="absolute top-0 right-0 m-3 fill-current w-6 h-6 text-peppos-500 hover:text-peppos-700 cursor-pointer">
      <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
    </svg>
    <div class="mt-2 space-y-2 mb-2 truncate">
      <h4 class="text-2xl font-semibold text-black">{{ product.price }} /kg</h4>
      <span class="text-gray-500 text-lg leading-tight truncate">{{ product.desc }}</span>
    </div>
  </div>
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

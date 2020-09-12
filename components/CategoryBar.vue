<template>
  <section class="mt-10 px-4 sm:px-32 mx-auto">
    <div class="flex px-4 pb-4 sm:justify-evenly overflow-x-scroll">
      <div v-for="(category, index) in categories" :key="index">
        <nuxt-link :to="category.path" class="category font-bold px-3 sm:px-0 md:px-3 text-2xl text-black hover:text-peppos-800 hover:underline">
          {{ category.name }}
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "Vegetables",
          path: '/vegetables',
          icon: "",
        },
        {
          id: 2,
          name: "Fruits",
          path: '/fruits',
          icon: "",
        },
        {
          id: 3,
          name: "Organic",
          path: '/',
          icon: "",
        },
        {
          id: 4,
          name: "Flowers",
          path: '/',
          icon: "",
        },
        {
          id: 5,
          name: "Frozen",
          path: '/',
          icon: "",
        },
        {
          id: 6,
          name: "Toys",
          path: '/',
          icon: "",
        },
        {
          id: 7,
          name: "Stationary",
          path: '/',
          icon: "",
        },
      ],
    };
  },
};
</script>

<style>
/* .category:hover {
  text-decoration-color: #32A337;
  text-decoration-thickness:inherit;
} */
</style>

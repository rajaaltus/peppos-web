<template>
  <section>
    <main-search />
    <category-bar />
    <div class="mx-4 sm:mx-32 px-2 flex flex-wrap items-center">
      <product-card v-for="(product, index) in products" :key="index" :product="product" />
    </div>
    <side-checkout />
  </section>
</template>

<script>
export default {
  data() {
    return {
      cartState: false,
      products: [
        {
          id: 1,
          name: "Tomato",
          price: "$12.00",
          desc: "Green house grown tomato",
          image: "/products/tomato.svg",
        },
        {
          id: 2,
          name: "nescafe",
          price: "$29.00",
          desc: "Blended coffee instant aroma",
          image: "/products/nescafe.svg",
        },
        {
          id: 3,
          name: "Tide",
          price: "$4.00",
          desc: "Washing powder",
          image: "/products/tide.svg",
        },
        {
          id: 4,
          name: "Banana",
          price: "$0.85",
          desc: "Fresh banana 12x",
          image: "/products/banana.svg",
        },
        {
          id: 5,
          name: "Onion",
          price: "$4.50",
          desc: "Full grown red onion",
          image: "/products/onion.svg",
        },
        {
          id: 6,
          name: "Tomato",
          price: "$12.00",
          desc: "Green house grown tomato",
          image: "/products/tomato.svg",
        },
        {
          id: 7,
          name: "nescafe",
          price: "$29.00",
          desc: "Blended coffee instant aroma",
          image: "/products/nescafe.svg",
        },
        {
          id: 8,
          name: "Tide",
          price: "$4.00",
          desc: "Washing powder",
          image: "/products/tide.svg",
        },
        {
          id: 9,
          name: "Banana",
          price: "$0.85",
          desc: "Fresh banana 12x",
          image: "/products/banana.svg",
        },
        {
          id: 10,
          name: "Onion",
          price: "$4.50",
          desc: "Full grown red onion",
          image: "/products/onion.svg",
        },
        {
          id: 11,
          name: "nescafe",
          price: "$29.00",
          desc: "Blended coffee instant aroma",
          image: "/products/nescafe.svg",
        },
        {
          id: 12,
          name: "Tide",
          price: "$4.00",
          desc: "Washing powder",
          image: "/products/tide.svg",
        },
      ],
    };
  },
  computed: {
  
  },
  methods: {
   
  },
};
</script>

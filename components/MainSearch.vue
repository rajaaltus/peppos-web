<template>
  <section class="px-6 sm:px-32 mt-10">
    <div class="bg-white flex items-center px-2 py-4 border border-solid border-gray-300 rounded-lg shadow-sm">
      <svg viewBox="0 0 20 20" class="fill-current text-gray-500 w-6 h-6 mx-4"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      <div class="flex justify-between w-full items-center mr-4">
        <input v-model="search" type="text" class="border-none focus:outline-none font-3xl mr-2 py-1 text-gray-500 w-full" @focus="search = ''" />
        <button @click="clearText" class="focus:outline-none">
          <svg v-if="search !== 'Search here...'" viewBox="0 0 20 20" class="fill-current text-peppos-500 hover:text-peppos-400 w-5 h-5">
            <path
              d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"
            />
          </svg>
        </button>
      </div>
      <button @click="openCart" class="border-none focus:outline-none">
      <div class="mr-2 bg-peppos-500 rounded-full flex items-center py-1 shadow-md hover:shadow-lg hover:bg-peppos-600 transition ease-out-in duration-500">
        <svg viewBox="0 0 512 512" :class="cart ? 'mr-0 shadow-lg' : 'mr-2'" class="fill-current text-gray-100 w-6 h-6 ml-2">
          <path
            d="M457 216L315 74a30 30 0 10-21 21l121 121H97L218 95a30 30 0 10-21-21L55 216H0v30h28l46 174c8 33 38 56 72 56h220c34 0 64-23 72-56l46-174h28v-30h-55zM181 391h-30v-90h30v90zm60 0h-30v-90h30v90zm60 0h-30v-90h30v90zm60 0h-30v-90h30v90z"
          />
        </svg>
        <span v-if="cart" class="mr-2 ml-1 px-2 bg-gray-100 rounded-full text-xs font-thin text-gray-800">3</span>
      </div>
      </button>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      search: "Search here...",
      cart: true,
    };
  },
  methods: {
    clearText() {
      this.search = "Search here...";
    },
    openCart() {
      this.$store.dispatch('setSideCart')
    }
  },
  
};
</script>

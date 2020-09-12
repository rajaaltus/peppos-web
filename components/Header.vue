<template>
  <header class="w-full bg-green-900">
    <!-- logo -->
    <div class="flex mx-auto items-center justify-between px-2 sm:px-4 md:px-32 py-3 sm:py-2">
      <nuxt-link to="/">
        <div class="px-3 flex items-center">
          <img src="/favicon.ico" alt="" class="w-12 mr-2" />
          <span class="text-peppos-100 font-semibold text-2xl">Peppos</span>
        </div>
      </nuxt-link>
      <!-- login menu for above sm-->
      <div class="hidden sm:block">
        <nuxt-link to="/" class="inline-block px-2 py-1 text-peppos-300 text-md hover:text-peppos-100">Login</nuxt-link>
        <nuxt-link to="/" class="inline-block px-4 py-1 text-peppos-300 text-md hover:text-peppos-100 bg-peppos-500 rounded hover:shadow-lg hover:bg-peppos-600"
          >Sign up</nuxt-link
        >
      </div>
      <!-- burger menu for mobile -->
      <div class="sm:hidden">
        <svg viewBox="0 0 20 20" class="fill-current text-white w-6 h-6 mx-4"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      </div>
    </div>
  </header>
</template>

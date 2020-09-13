<template>
  <header class="w-full bg-green-900">
    <!-- logo -->
    <div class="flex items-center justify-between px-2 md:px-32 py-3 sm:py-2">
      <Logo />
      <!-- burger menu for mobile -->
      <div class="block sm:hidden">
        <button @click="isOpen = !isOpen" type="button" class="relative z-10 block text-gray-500 focus:outline-none hover:text-white">
          <svg viewBox="0 0 20 20" class="fill-current text-white w-6 h-6 mx-4">
            <path v-if="!isOpen" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            <path v-if="isOpen" d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>

      <bigscreen-menu />

      <!-- Profile Menu above sm -->
      <div class="hidden sm:block ml-3 relative">
        <div>
          <button
            @click="profileOpen = !profileOpen"
            class="relative max-w-xs flex items-center text-sm rounded-full overflow-hidden text-white border-2 border-gray-100 focus:outline-none focus-border-gray-600"
            id="user-menu"
            aria-label="User menu"
            aria-haspopup="true"
          >
            <img class="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </button>
        </div>
        <button class="fixed inset-0 h-full w-full" v-if="profileOpen" @click="profileOpen = false" tabindex="-1"></button>
        <div v-if="profileOpen" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
          <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>

            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>

            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Profile Menu dropdown -->
    <div :class="isOpen ? 'block' : 'hidden'" class="block md:hidden transition transistion-transform ease-in duration-300">
      <!-- <nuxt-link to="/login" class="block px-6 py-1 text-peppos-300 text-md hover:text-peppos-100">Login</nuxt-link>
      <nuxt-link to="/register" class="block px-6 py-1 text-peppos-300 text-md hover:text-peppos-100">Sign up</nuxt-link> -->
      <div class="pt-4 pb-3 border-t border-peppos-700">
        <div class="flex items-center px-5 space-x-3">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>
          
          <div class="space-y-1">
            <div class="text-base font-medium leading-none text-white">Tom Cook</div>
            <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
          </div>
        </div>
        <div class="mt-3 px-2 space-y-1">
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-green-800 focus:outline-none focus:text-white focus:bg-gray-700">Your Profile</a>

          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-green-800 focus:outline-none focus:text-white focus:bg-gray-700">Settings</a>

          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-green-800 focus:outline-none focus:text-white focus:bg-gray-700">Sign out</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      profileOpen: false,
    };
  },
};
</script>

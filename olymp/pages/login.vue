<script setup>
const supabase = useSupabaseClient() // Підключає Клієнта
const user = useSupabaseUser() // Підключає клієнта


</script>
<template>
  <Auth v-if="!user" /> <!--З'являється для будь якого користувача, і дозволяє переключати сторінки реєстрації і входу (логіну)-->
  
</template>
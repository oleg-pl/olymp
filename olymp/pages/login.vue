<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()



</script>
<template>
  <!-- Проверка доступности пользователя в хранилище; при недоступности - показываем компонент авторизации-->
  <Auth v-if="!user" />
  <!-- Если пользователь доступен, показываем компонент Hello World -->
  
</template>
<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()


</script>
<template>
  <Auth v-if="!user" />
  
</template>
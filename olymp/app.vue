<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const router = useRouter()
async function signOut() {
  const { error } = await supabase.auth.signOut();
  router.push('/login');
}
</script>
<template>
  <div v-if="user">
    <button @click="signOut">Sign Out</button>
  </div>
  <NuxtPage/>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}



</style>
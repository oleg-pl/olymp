<script setup>
const supabase = useSupabaseClient()
const email = ref("");
const password = ref("");
const router = useRouter()
const handleSignin = async () => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) 
    {
        throw error;
    }  else {
        router.push('/')
    }
       
  } catch (error) {
    alert(error.error_description || error.message);
  }
};

</script>
<template>
    <div>
      <h2>Sign in to your account</h2>
      <form @submit.prevent="handleSignin">
        <div>
          <label for="email">Email</label>
          <input id="email" type="email" v-model="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input id="password" type="password" v-model="password" />
        </div>
        <div>
          <button type="submit">Sign in</button>
        </div>
      </form>
    </div>
  </template>
  
 
<script setup>
  
  
const supabase = useSupabaseClient()
    const email = ref("");
    const password = ref("");

    const handleSignup = async () => {
      try {
        const { error } = await supabase.auth.signUp({
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
      <h2>Sign up for an account</h2>
      <form @submit.prevent="handleSignup">
        <div>
          <label for="email">Email</label>
          <input id="email" type="email" v-model="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input id="password" type="password" v-model="password" />
        </div>
        <div>
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  </template>
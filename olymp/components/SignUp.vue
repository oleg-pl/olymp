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
            <p class="text-center text-3xl">Sign up to your account</p>
            <form class="flex flex-col pt-3 md:pt-8" @submit.prevent="handleSignup">
                

                <div class="flex flex-col pt-4">
                    <label for="email" class="text-lg">Email</label>
                    <input v-model="email" type="email" id="email" placeholder="your@email.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div class="flex flex-col pt-4">
                    <label for="password" class="text-lg">Password</label>
                    <input v-model="password" type="password" id="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                

                <input type="submit" value="Sign up" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
            </form>
</div>
  </template>
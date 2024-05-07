<script setup>
  
  
const supabase = useSupabaseClient()
    const email = ref("");
    const password = ref("");
    const router = useRouter();
    const data = reactive({
    surname: '',
    name: '',
    user_id: 0,
    role: 1
})
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
      const user = useSupabaseUser()
      data.user_id = user.value.id ;
      await $fetch('/api/users', {
        method: 'post',
        body: data
    })
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

                <div class="flex flex-col pt-4">
                    <label for="email" class="text-lg">Name</label>
                    <input v-model="data.name" type="text"   class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div class="flex flex-col pt-4">
                    <label for="password" class="text-lg">Surname</label>
                    <input v-model="data.surname" type="text"   class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div class="flex flex-col pt-4">
                  <label for="cars">Choose a role:</label>
                  <select v-model='data.role'>
                  <option value="1">Student</option>
                  <option value="2">Teacher</option>
                  </select>
                </div>

                <input type="submit" value="Sign up" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
            </form>
</div>
  </template>
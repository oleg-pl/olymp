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
          <button   type="submit">Sign in</button>
        </div>
      </form>
    </div>


    <body class="bg-white font-family-karla h-screen">

<div class="w-full flex flex-wrap">

    <!-- Register Section -->
    <div class="w-full md:w-1/2 flex flex-col">

        <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
            <img src="public/logo2.png" alt=""> </img>
        </div>

        <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p class="text-center text-3xl">Sign in to your account</p>
            <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
                

                <div class="flex flex-col pt-4">
                    <label for="email" class="text-lg">Email</label>
                    <input v-model="email" type="email" id="email" placeholder="your@email.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div class="flex flex-col pt-4">
                    <label for="password" class="text-lg">Password</label>
                    <input v-model="password" type="password" id="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                

                <input type="submit" value="Sign in" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
            </form>
            <div class="text-center pt-12 pb-12">
                <p>Don't have an account yet? <a href="" class="underline font-semibold">Sign Up here.</a></p>
            </div>
        </div>

    </div>

    <!-- Image Section -->
    <div class="w-1/2 shadow-2xl">
        <img class="object-cover w-full h-screen hidden md:block" src="public/login_menu.jpg" alt="Background" />
    </div>
</div>

</body>
  </template>
  
 
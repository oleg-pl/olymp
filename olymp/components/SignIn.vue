<script setup>
const supabase = useSupabaseClient()
const email = ref(""); // Пуста змінна яка записує дані ЕМЕЙЛУ і передає на supabase
const password = ref(""); // Пуста змінна яка записує дані ПАРОЛЮ і передає на supabase
const router = useRouter()
const handleSignin = async () => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value, // Записує значення введеного ЕМЕЙЛУ в змінну email
      password: password.value, // Записує значення введеного ПАРОЛЮ в змінну password
    });
    if (error) // Якщо дані не співпадають з існуючими в supabase то виб'є помилку
    {
        throw error;
    }  else {
        router.push('/') // Якщо дані співпали то юзера перекине на наступну сторінку
    }
       
  } catch (error) {
    alert(error.error_description || error.message);
  }
};

</script>
<template>



<div>
            <p class="text-center text-3xl">Sign in to your account</p>
            <form class="flex flex-col pt-3 md:pt-8" @submit.prevent="handleSignin">
                

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
</div>

  </template>
  
 
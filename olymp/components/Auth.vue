<script setup>
const isSignUp = ref(true); // Ставить статус для цієї сторінки, що Юзер завжди  зареєстрований і може на неї потрапити за будь якої умови
</script>
<template>
    <div>
      <div class="w-full flex flex-wrap">

<!-- Register Section -->
<div class="w-full md:w-1/2 flex flex-col">

    <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
        <img src="public/logo2.png" alt=""> </img>
    </div>

    <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32"> 
      <SignUp v-if="isSignUp" />  <!--Перевіряє чи зареєстрований користувач-->
      <SignIn v-else />
      <div class="text-center pt-12 pb-12">
      <button @click="isSignUp = !isSignUp">
        {{
          isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account yet? Sign Up"
        }}
      </button>
    </div>
    </div>
  </div>
  <div class="w-1/2 shadow-2xl size_img">
        <img class="object-cover w-full h-screen hidden md:block" src="public/login_menu.jpg" alt="Background" />
    </div>
    </div>
    
  </div>
  
  </template>
  
 
  
  <style scoped>
  .size_img{
    height: 100%;
    margin-top: 30px;
  }
</style>
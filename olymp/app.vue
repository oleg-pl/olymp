<script setup>
const supabase = useSupabaseClient() /* Ця змінна створює клієнта. Клієнт - це я тобто власник бази даних. І при статусі клієнту я можу робити любі дії з даними*/
const user = useSupabaseUser() /*Ця змінна створює юзера тобто людину яка буде користуватись сайтом, статус Юзер можна використовувати для обмеження показу даних або для провірки чи цей Юзер зареєстрований */
const router = useRouter()
async function signOut() { /* Це функція виходу з авторизації, тобто якщо я вже проавторизувався, то я зможу вийти за допомогою цієї кнопки */
  const { error } = await supabase.auth.signOut(); // Запит на вихід з авторизації
  router.push('/login');  // Функція виходу до початковою сторінки реєстраці login
}
</script>
<template>
 <!--ДУЖЕ ВАЖЛИВО !!! v-if = "user" - це тег який обмежує цей блок тільки якщо Юзер вже зареєстрований, тобто цей блок буде відображатися тільки коли юзер пройшов реєстрацію і дійсно існує, і тільки при цій умові йому з'явиться цей блок --> 
 <header v-if="user"  class="header" id="header">
   <nav class="navbar container">
      <a href="#" class="brand"><img src="public/logo2.png" alt=""></a>
      <div class="search">
         <form class="search-form">
            <input type="text" name="search" class="search-input" placeholder="Search for Destinations" autofocus>
            <button type="submit" class="search-submit" disabled><i class="bx bx-search"></i></button>
         </form>
      </div>
      <div class="menu" id="menu">
         <ul class="menu-inner">
            <li class="menu-item"><a href="#" class="menu-link">Listing</a></li>
            <li class="menu-item"><a href="#" class="menu-link">Feature</a></li>
            <li class="menu-item"><a href="#" class="menu-link">Popular</a></li>
            <li class="menu-item"><a href="#" class="menu-link">Support</a></li>
         </ul>
      </div>
      <div class="burger" id="burger">
         <span class="burger-line"></span>
         <span class="burger-line"></span>
         <span class="burger-line"></span>
      </div>
   </nav>
   <div>
    <button @click="signOut">Sign Out</button>
  </div>
</header>
 
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
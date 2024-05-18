<script setup>
const supabase = useSupabaseClient() /* Ця змінна створює клієнта. Клієнт - це я тобто власник бази даних. І при статусі клієнту я можу робити любі дії з даними*/
const user = useSupabaseUser() /*Ця змінна створює юзера тобто людину яка буде користуватись сайтом, статус Юзер можна використовувати для обмеження показу даних або для провірки чи цей Юзер зареєстрований */
const router = useRouter()
async function signOut() { /* Це функція виходу з авторизації, тобто якщо я вже проавторизувався, то я зможу вийти за допомогою цієї кнопки */
  const { error } = await supabase.auth.signOut(); // Запит на вихід з авторизації
  router.push('/login');  // Функція виходу до початковою сторінки реєстраці login
}
</script>


<div>
   
 </div>



<template>
 <!--ДУЖЕ ВАЖЛИВО !!! v-if = "user" - це тег який обмежує цей блок тільки якщо Юзер вже зареєстрований, тобто цей блок буде відображатися тільки коли юзер пройшов реєстрацію і дійсно існує, і тільки при цій умові йому з'явиться цей блок --> 
 <div v-if="user" id="header" class="l-header">
            <div class="wrap">
               
                <header class="logo">
                  <NuxtLink to = "/">
                    <h1 class="logo__title">
                     <img class="logo" src="public/logo2.png" alt="">
                    </h1>
                  </NuxtLink>
                </header>
                <button class="singout" @click="signOut">Sign Out</button>
                <nav class="menu">
                    <ul class="menu__list">
                        <li class="menu__item">
                          <NuxtLink to="/" class="menu__link">Головна</Nuxtlink>
                        </li><li class="menu__item">
                          <NuxtLink to="/" class="menu__link">Інформація</Nuxtlink>
                        </li>
                        <li class="menu__item">
                          <NuxtLink to="/pannel" class="menu__link">Панель управління</Nuxtlink>
                        </li>
                        
                    </ul>
                </nav>
            </div>
            
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

@media (max-width: 850px) {
  .logo {
    float: none;
  }
  .row{
    display: flex;
    flex-direction: column;
  }
  .menu__link{
    color: block;
    display: flex
  }
  a{
    display: block;
    color: black;
  }

}


</style>
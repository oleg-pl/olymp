<script setup>
  const user = useSupabaseUser();
  const role = await useFetch('/api/users/'+ user.value.id)
</script>
<template>
    
    <article>
    <div class="container">
  
    <div class="nav row"> 
      <h1 class="main_h1">Головна сторінка</h1>
     <UserLogo :role="role.data.value"/>
    </div>
   <StudentMain v-if="role.data.value== 1"/>
   <TeacherMain v-if="role.data.value == 3"/>



      <h2 class="main_h2">Інформація про заклад</h2>
      

</div>
</article>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Figtree:800|DM+Sans:400");

:root {
  --text: hsla(247, 57%, 91%, 1);
  --text_light: hsla(247, 57%, 91%, 0.9);
  --text_dark: hsla(247, 57%, 91%, 0.5);
  --background: rgb(20, 21, 20);
  --background_dark: rgb(16, 16, 15);
  --primary: hsla(241, 25%, 50%, 1);
  --secondary: hsla(247, 8%, 25%, 0.5);
  --accent: rgb(100, 35, 251);
  --outline: hsla(247, 5%, 36%, 1);
  --alert: hsla(360, 60%, 55%, 1);
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Oswald", sans-serif;
}
.main-but_p{
    padding-top: 50px;
}
.main_h1{
    font-size: 40px;
}
.main_h2{
    font-size: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
}

h1,
h2,
h3,
h4,
h5, p {
    font-family: "Oswald", sans-serif;
  font-weight: 800;
  line-height: 1;
  color: var(--text);
}
.text-center{
  color: black !important;
}
html {
  font-size: 100%;
}

/* 16px */



.predmet{
    display: flex;
}

.predmet > svg{
    margin-right: 10px;
}
.subjects{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    align-self: center;
}
:root {
                --tableWidth:  100%;
                --headerFontSize:14px;
                --headerFontColor: hsl(0 0% 100%);
                --headerFontWeight: 0;
                --headerFontBGColor: hsl(0 0% 0% / 0.5);
                --headerTextAlign: center;
                --bodyTextAlign: center;
                --headerBorderColor:hsl(0 0% 100%);
                --headerBCVar:0px;
                --bodyFontSize:14px;
                --evenRowsColor: hsl(0 0% 100%);
                --oddRowsColor: hsl(0 0% 100%);
                --evenRowsBGColor: #0000001a;
                --oddRowsBGColor: #323232;
                --cellPaddingHVar: 15px;
                --cellPaddingVVar: 15px;
                --rowsBorderColor: hsl(0 0% 100%);
                --rowsBorderWidth: 2px;
                --text-color: hsl(0 0% 100%);
                }
            
                table {
                border-collapse: collapse;
                margin: 25px 0;
                width: 100%;
                background: #323232;
                width: var(--tableWidth);
                }
                
                td {
                font-size: var(--bodyFontSize);
                }
                
                tbody tr {
                border-bottom: 1px solid #dddddd;
                min-height: 100px;
                text-align: var(--bodyTextAlign);
                border: none;
                }
                
                th,
                td,
                caption {
                padding-left: var(--cellPaddingHVar); 
                padding-right: var(--cellPaddingHVar);
                padding-top: var(--cellPaddingVVar);
                padding-bottom: var(--cellPaddingVVar);
                }
            
            
                
                caption {
                text-align: left;
                background-color: hsl(0 0% 0%);
                font-size: 1.5rem;
                font-weight: 700;
                text-transform: uppercase;
                color: #ffffffcc;
                font-family: system-ui;
                }
                
                tbody tr:nth-child(even) {
                color: var(--evenRowsColor);
                background-color: var(--evenRowsBGColor);
                }
                
                tbody tr:nth-child(odd) {
                color: var(--oddRowsColor);
                background-color: var(--oddRowsBGColor);
                }
                
                thead {
                text-align: var(--headerTextAlign);
                text-transform: uppercase;
                font-size: var(--headerFontSize);
                font-weight: var(--headerFontWeight);
                letter-spacing: .002em;
                color: var(--headerFontColor) !important;
                background-color: var(--headerFontBGColor);
                border: var(--headerBCVar) solid var(--headerBorderColor);
                font-family: system-ui;
                }
                
                
                table tr {
                



                }
            
                @media (max-width: 650px) {
                table {
                    max-width: 80%;
                }
                
                th {
                    display: none;
                }
                
                td {
                    display: block;
                }
            }
                             
small {
  font-size: 0.75rem;
  color: var(--text);
}

article{
 
  height: 100%;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  padding: 1rem 1rem 2rem 1rem;
  font-family: "DM Sans";
  font-weight: 400;
  color: var(--text);
  background: linear-gradient(11deg, var(--background_dark), var(--background));
}
.container{
    width: 80vw;
}
screen {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

svg {
  fill: var(--text_dark);
  height: 1lh;
  width: 1lh;
  cursor: pointer;
}

notification {
  position: absolute;
  top: -5%;
  right: -5%;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: var(--accent);
}

notification p {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}

h5{
    font-size: 25px;
}

.primary {
  background: linear-gradient(114deg, var(--primary), var(--accent));
}

.secondary {
  background: var(--secondary);
}

.circle {
  position: relative;
  padding: 0;
  border-radius: 100%;
  height: 3rem;
  width: 3rem;
}

.circle svg {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}

.muted {
  color: var(--text_dark);
}

.bold {
  font-weight: 700;
}

.underline {
  text-decoration: underline;
}

.alert {
  color: var(--alert);
}

.active {
  color: var(--primary);
}

.split {
  width: 50%;
}

.center {
  align-items: center;
  align-self: center;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.row {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.home-item {
  cursor: pointer;
  text-wrap: nowrap;
}

.widget {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  /*gap: 1rem;*/
}

.widget-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

div.column:nth-child(2) {
  margin-top: 0rem;
}

glob {
  opacity: 30%;
  position: absolute;
  width: 20rem;
  height: 20rem;
  border-radius: 100%;
  filter: blur(100px);
  background: var(--primary);
  pointer-events: none;
}

#glob-1 {
  background: var(--text_light);
  right: 0;
  top: 0;
}

#glob-2 {
  right: 50;
}

.nav {
  
  display: flex;
  padding: 1rem 0rem 1rem 0rem;
  bottom: 0;
  position: sticky;
  justify-content: space-evenly;
  align-items: center;
  background: var(--primary);
  margin: 0 -1rem 0 -1rem;
  z-index: 10;
  top: 0;
  backdrop-filter: blur(10px);
}

.nav:nth-child(1) {
  top: 1%;
  justify-content: space-between;
  padding: 1rem 1rem 0rem 1rem;
  background: none;
  display: flex;
  margin-bottom: 50px;
}

::-webkit-scrollbar {
  display: none;
}
:root {
  --color-white-100: hsl(206, 5%, 100%);
  --color-white-200: hsl(206, 5%, 96%);
  --color-white-300: hsl(206, 5%, 80%);
  --color-white-400: hsl(206, 5%, 65%);
  --color-white-500: hsl(206, 5%, 50%);
  --color-black-100: hsl(213, 20%, 9%);
  --color-black-200: hsl(213, 23%, 8%);
  --color-black-300: hsl(214, 21%, 6%);
  --color-black-400: hsl(210, 21%, 6%);
  --color-black-500: hsl(216, 22%, 4%);
  --color-red-100: hsl(349, 100%, 90%);
  --color-red-200: hsl(349, 100%, 80%);
  --color-red-300: hsl(349, 100%, 70%);
  --color-red-400: hsl(349, 100%, 60%);
  --color-red-500: hsl(349, 100%, 45%);
  --shadow-small: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
     0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
     0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-large: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
     0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  list-style-type: none;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

html {
  font-size: 100%;
  box-sizing: inherit;
  scroll-behavior: smooth;
  height: -webkit-fill-available;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-black-500);
  background-color: var(--color-white-100);
}

main {
  overflow: hidden;
}

a,
button {
  cursor: pointer;
  user-select: none;
  border: none;
  outline: none;
  background: none;
  box-shadow: none;
}

img,
video {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.section {
  margin: 0 auto;
  padding: 5rem 0 2rem;
}

.container {
  max-width: 80rem;
  height: auto;
  margin: 0 auto;
  padding: 0 1.25rem;
}

.centered {
  text-align: center;
  vertical-align: middle;
  margin-bottom: 1rem;
}

.btn {
  display: inline-block;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  user-select: none;
  outline: none;
  border: none;
  border-radius: 0.25rem;
  text-transform: unset;
  transition: all 0.3s ease-in-out;
}
.btn-darken {
  padding: 0.75rem 2rem;
  color: var(--color-white-100);
  background-color: var(--color-black-200);
  box-shadow: var(--shadow-medium);
}
.btn-neutral {
  padding: 0.75rem 2rem;
  color: var(--color-black-500);
  background-color: var(--color-white-100);
  box-shadow: var(--shadow-medium);
}

button {
  -webkit-font-smoothing: antialiased;
  background-color: #09f;
  border: none;
  border-radius: 0.1875em;
  color: white;
  display: inline-block;
  font-size: 1em;
  font-weight: bold;
  line-height: 1;
  padding: 0.75em 1em;
  text-decoration: none;
}
button:hover {
  background-color: #007acc;
  color: white;
}

/* Header
-------------------------- */
.l-header {
  height: 80px;
  position: relative;
  background: #212121;
}

.logo {
  float: left;
}
.logo__title {
  margin: 0;
}
.logo__link {
  display: inline-block;
  text-decoration: none;
  padding: 0 10px;
  line-height: 80px;
  height: 80px;
  color: #fff;
  word-wrap: no-wrap;
}


.aside{
  display: flex;
}
.singout{
  margin-top: 20px;
  margin-left: 50px;
}
.logo{
  width: 180px;
  
}
@media (max-width: 1000px) {
 
  .row{
    display: flex;
    flex-direction: column;
  }
  .menu {
  float: right;
  margin-top: 20px;
  color: white;
  background-color: black;
}
.menu__list {
  overflow: hidden;
  padding-left: 0;
  margin: 0;
  list-style: none;
}
.menu__item {
  float: left;
  text-align: center;
  text-align: center;
}
.menu__link {
  display: flex;
  justify-content: center;
  align-items: center;
  
  text-decoration: none;

  height: 10vh;

  word-wrap: no-wrap;
  transition: all 0.3s ease;
}
.menu__link:hover, .menu__link:focus {
  background: #09f;
  color: #fff;
}

}
/*  Menu
-------------------------- */
.menu {
  float: right;
}
.menu__list {
  overflow: hidden;
  padding-left: 0;
  margin: 0;
  list-style: none;
}
.menu__item {
  float: left;
  text-align: center;
  text-align: center;
}
.menu__link {
  display: flex;
  justify-content: center;
  align-items: center;
  
  text-decoration: none;

  height: 5em;

  word-wrap: no-wrap;
  transition: all 0.3s ease;
}
.menu__link:hover, .menu__link:focus {
  background: #09f;
  color: #fff;
}


</style>
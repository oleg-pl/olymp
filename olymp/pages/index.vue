<script setup>
  const {data} = useFetch('/api/subjects') /*Отримав дані з промісу (таблиці subjects)*/
</script>
<template>
    
    <article>
    <div class="container">
  
    <div class="nav row">
      
      <h1 class="main_h1">Головна сторінка</h1>
      <button class="secondary circle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
        </svg>
        <p class="main-but_p">УЧЕНЬ</p>
    </button>
    </div>
    <div class="column">
      <div id="glob-2"></div>
      <div class="row">
        <div class="widget secondary split home-item">
            <div class="predmet">
                
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
          </svg>
          <h5>Усі предмети</h5>
         </div>

          <div class="subjects">
          <h5 v-for="subject in data">{{subject.name}}</h5>
        </div>







        </div>
        <div class="widget secondary split home-item">
            <div class="predmet">
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
          </svg>
          <h5>Список вчителів</h5>
         </div>

          <div class="teachers">
            <table contenteditable="">
    <caption>Вчителі</caption>
    <thead>
        <tr>
            <th>№</th>
            <th>Ім'я та прізвище</th>

            <th>Предмет</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Семен Ступка</td>

            <td>Укр. Література</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Василь Заливаха</td>

            <td>Укр. Мова</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Степан Дрон</td>

            <td>ФІзика</td>
        </tr>
    </tbody>
</table>
        </div>
        </div>
      </div>

          




      <h2 class="main_h2">Інформація про заклад</h2>
      <div class="row">
        <div class="widget secondary split home-item">
            <div class="predmet">
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z" />
          </svg>
          <h5>Класи</h5>
         </div>

          <div class="subjects">
          <h5>Математика</h5>
          <h5>Математика</h5>
          <h5>Математика</h5>
          <h5>Математика</h5>
        </div>

        </div>
        <div class="widget secondary split home-item">
            <div class="predmet">
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
          <h5>Кількість учнів</h5>
         </div>

          <div class="teachers">
            <table contenteditable="">
    <caption>Вчителі</caption>
    <thead>
        <tr>
            <th>№</th>
            <th>Ім'я та прізвище</th>

            <th>Предмет</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Семен Ступка</td>

            <td>Укр. Література</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Василь Заливаха</td>

            <td>Укр. Мова</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Степан Дрон</td>

            <td>ФІзика</td>
        </tr>
    </tbody>
</table>
        </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div>
        <h5>Feed</h5>
        <p class="muted">Nothing to see here</p>
      </div>
      <div class="widget secondary">
        <h5>New Invite</h5>
        <small class="muted">You've been invited to <span> super cool ppl chat</span> by <span> Jimmothy IIV</span></small>
      </div>
      <div class="widget secondary">
        <h5>David, Johnson</h5>
        <small>IB Life Studies</small>
        <br>
        <p class="muted">We're moving classes to A1436 bc the wall has gone missing. Idek where it went tbh</p>
        <br>
        <small>Jan 2, 2024 at 5:23pm</small>
      </div>
      <div class="widget secondary">
        <h5>May, James</h5>
        <small>AP Drag Racing</small>
        <br>
        <p class="muted">Uhhh sooo, I may have wrecked the car we were just given <span>💀</span><span>💀</span><span>💀</span>
        </p>
        <br>
        <small>Jan 1, 2024 at 2:56am</small>
      </div>
      <small class="center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          !Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg></small>
    </div>

    <div class="widget secondary">
      <h5>Patch Notes</h5>
      <br>
      <p class="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <br>
      <div class="row">
        <small>Learn more</small>
        <small>v1.2.1</small>
      </div>
    </div>

    <div class="widget-wrapper">
      <div>
        <div id="glob-2"></div>
        <h4>Assignments</h4>
        <p class="muted">You have 4 assignments due</p>
      </div>
      <div class="column">
        <div class="widget secondary book-marked" id="1">
            <path
              d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z" />
          
          <h5>Unit 5 Essay Analysis</h5>
          <small>Due Monday, Apirl 7th at 9:00am</small>
          <small class="muted">Go to assignment -></small>
        </div>
        <div class="widget secondary" id="1">
          <div>
            <p>1</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z" />
          </svg>
          <h5>Biology Quiz</h5>
          <small>Due Monday, Apirl 7th at 9:00am</small>
          <small class="muted">Go to assignment -></small>
        </div>
        <div class="widget secondary" id="1">
          <h5>More Quadratics Homework</h5>
          <small>Due Monday, Apirl 7th at 9:00am</small>
          <small class="muted">Go to assignment -></small>
        </div>
        <div class="widget secondary" id="1">
          <h5>Unit 9 Test!</h5>
          <small>Due Monday, Apirl 7th at 9:00am</small>
          <small class="muted">Go to assignment -></small>
        </div>
        <small class="muted">Load more</small>
      </div>
    </div>

     <div class="nav row">
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z" />
        </svg>
      </a>
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z" />
        </svg>
      </a>
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
        </svg>
      </a>
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z" />
        </svg>
      </a>
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z" />
        </svg>
      </a>
    </div>
  
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
                
ee: var(--rowsBorderColor) var(--rowsBorderWidth)


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

.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: auto;
  margin: 0 auto;
  background: var(--color-white-100);
  box-shadow: var(--shadow-medium);
}

.navbar {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  align-content: center;
  height: auto;
  padding-top: 0.5rem;
}
@media only screen and (min-width: 62rem) {
  .navbar {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: 100%;
    height: 4.25rem;
    padding-top: 0;
    margin: 0 auto;
  }
}

.brand {
  justify-self: start;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -1px;
  text-transform: uppercase;
  color: var(--color-red-500);
  width: 30%;
}

.search {
  grid-column: span 2;
  order: 3;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-block: 1rem;
}
.search-form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  width: 100%;
  height: auto;
  padding-inline: 1.5rem;
  border-radius: 3rem;
  background: var(--color-white-200);
}
.search-input {
  display: block;
  font-family: inherit;
  font-size: 1rem;
  font-weight: normal;
  line-height: inherit;
  width: 100%;
  height: 100%;
  padding-block: 0.75rem;
  border: none;
  outline: none;
  color: var(--color-black-500);
  background: transparent;
}
.search-submit {
  display: block;
  font-size: 1.25rem;
  line-height: 1.5;
  margin-top: 0.25rem;
  color: var(--color-white-500);
  background: transparent;
}
@media only screen and (min-width: 62rem) {
  .search {
    justify-self: center;
    grid-column: initial;
    order: initial;
    width: 100%;
    height: auto;
  }
  .search-form {
    max-width: 30rem;
  }
}

.menu {
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
  padding-block: 3rem 2rem;
  background: var(--color-white-100);
  box-shadow: var(--shadow-medium);
  transition: all 0.45s ease-in-out;
}
.menu.is-active {
  top: 0;
  width: 100%;
  height: inherit;
}
.menu-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1.25rem;
}
.menu-link {
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  line-height: inherit;
  text-transform: uppercase;
  color: var(--color-black-500);
  transition: all 0.35s ease-in-out;
}
.menu-link:hover {
  outline: none;
  color: var(--color-red-400);
}
@media only screen and (min-width: 36rem) {
  .menu {
    position: relative;
    justify-self: end;
    top: 0;
    left: inherit;
    width: auto;
    height: auto;
    padding-block: 0;
    background: none;
    box-shadow: none;
    transition: none;
  }
  .menu-inner {
    display: flex;
    flex-direction: row;
    column-gap: 1.25rem;
    margin: 0 auto;
  }
  .menu-link {
    text-transform: capitalize;
  }
}

.burger {
  position: relative;
  justify-self: end;
  cursor: pointer;
  user-select: none;
  z-index: 10;
  width: 1.6rem;
  height: 1.15rem;
  border: none;
  outline: none;
  background: none;
  visibility: visible;
  transform: rotate(0deg);
  transition: 0.35s ease;
}
@media only screen and (min-width: 36rem) {
  .burger {
    display: none;
    visibility: hidden;
  }
}
.burger-line {
  position: absolute;
  display: block;
  right: 0;
  width: 100%;
  height: 2.1px;
  border: none;
  outline: none;
  opacity: 1;
  border-radius: 1rem;
  transform: rotate(0deg);
  background-color: var(--color-black-100);
  transition: 0.25s ease-in-out;
}
.burger-line:nth-child(1) {
  top: 0px;
}
.burger-line:nth-child(2) {
  top: 0.5rem;
  width: 70%;
}
.burger-line:nth-child(3) {
  top: 1rem;
}
.burger.is-active .burger-line:nth-child(1) {
  top: 0.5rem;
  transform: rotate(135deg);
}
.burger.is-active .burger-line:nth-child(2) {
  opacity: 0;
  visibility: hidden;
}
.burger.is-active .burger-line:nth-child(3) {
  top: 0.5rem;
  transform: rotate(-135deg);
}


</style>
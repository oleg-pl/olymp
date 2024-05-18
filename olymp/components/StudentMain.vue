<script setup>
const user = useSupabaseUser();
const student_id =  await useFetch('/api/students/'+ user.value.id)
const {data} = await useFetch('/api/subjects/'+ student_id.data.value)
console.log(data)/*Отримав дані з промісу (таблиці subjects)*/
</script>
<template>
     <div class="aside_1">
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
    </div>
    </div>
</template>
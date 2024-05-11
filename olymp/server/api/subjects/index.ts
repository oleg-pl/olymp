import { serverSupabaseClient } from '#supabase/server' /* Підключив сервер до supabase*/

export default eventHandler(async (event) => {
    const client = await serverSupabaseClient(event) /*Клієнт в Supabase - це я, тобто редактор коду і мені доступні усі дані*/
    const { data, error } = await client 
        .from('Subjects') /*З таблиці Subjects в Supabase я беру дані*/
        .select() /*Select - запит вибірки, у даному випадку я беру усі дані з таблиці Subjects*/
    console.log(error)
    return data /* Повертаю Дані з функції (Тобто Select з таблиці Subjects) */
})

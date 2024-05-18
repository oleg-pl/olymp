import { serverSupabaseClient } from '#supabase/server' /* Підключив сервер до supabase*/

export default eventHandler(async (event) => {
    const client = await serverSupabaseClient(event) /*Клієнт в Supabase - це я, тобто редактор коду і мені доступні усі дані*/
    const { data, error } = await client
        .from('subjects') /*З таблиці Subjects в Supabase я беру дані*/
        .select('name', 'student_id')
        .eq('student_id', event.context.params.id)
        .order('name', { ascending: true })
    console.log(error)
    return data; /* Повертаю Дані з функції (Тобто Select з таблиці Subjects) */
})
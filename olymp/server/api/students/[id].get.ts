import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const { data, error } = await client
        .from('students')
        .select('id')
        .eq('user_id', event.context.params.id)
    console.log(error);
    return data[0].id;
})

import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const { data, error } = await client
        .from('users')
        .select('role')
        .eq('user_id', event.context.params.id)
    return data[0].role;
})

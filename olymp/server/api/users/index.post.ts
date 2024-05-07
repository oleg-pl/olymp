import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const body = await readBody(event)
    const { data, error } = await client
        .from('users')
        .insert(body)
    console.log(error)
})

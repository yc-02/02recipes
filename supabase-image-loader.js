const projectId = 'jhhiftizhiucenzpyxqd' // your supabase project id

export default function supabaseLoader({ src, width, quality }) {
  const url = new URL(`https://${projectId}.supabase.co/storage/v1/object/public/${src}`)
  url.searchParams.set('width', width.toString())
  url.searchParams.set('quality', (quality || 75).toString())
  return url.href
}
//https://jhhiftizhiucenzpyxqd.supabase.co/storage/v1/object/public/test/15b05cd0-6c2e-473e-a9f2-eb275562b29e/7d4c0341-f472-432d-9f43-e1698a406cfa
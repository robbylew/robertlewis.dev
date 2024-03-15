export async function GET() {
  try {
    const response = await fetch(
      'https://og.anuragroy.dev/api?theme=gray&title=Robert+Lewis+&description=Aspiring+Software+Developer.+Come+check+out+my+portfolio.&avatar=https://www.robertlewis.dev/assets/memoji.jpg&author=robertlewis.dev&logo='
    )
    const data = await response.blob()
    return new Response(data, {
      headers: { 'Content-Type': 'image/png' }
    })
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500
    })
  }
}

import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#282c34',
          color: '#61dafb',
          fontFamily: 'Arial, sans-serif',
          fontSize: '50px',
          padding: '50px',
          width: '100%',
          height: '100%'
        }}
      >
        <div style={{ fontSize: '80px' }}>👋</div>
        <div>Robert Lewis's Portfolio</div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  )
}

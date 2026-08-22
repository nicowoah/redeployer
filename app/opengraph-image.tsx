import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Redeployer: Websites, AI Automation and Ongoing Support'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#0075de',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 32,
          fontFamily: 'sans-serif',
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            width: 72,
            height: 72,
            background: 'rgba(255,255,255,0.2)',
            borderRadius: 18,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(255,255,255,0.35)',
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              background: 'white',
              borderRadius: 7,
            }}
          />
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-2px',
            lineHeight: 1,
          }}
        >
          Redeployer
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: 'rgba(255,255,255,0.75)',
            letterSpacing: '-0.5px',
            textAlign: 'center',
            maxWidth: 680,
            lineHeight: 1.4,
          }}
        >
          Websites. AI Automation. Continuous Support.
        </div>
      </div>
    ),
    { ...size },
  )
}

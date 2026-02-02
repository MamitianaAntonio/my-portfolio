export default function Hero() {
  return (
    <section
      style={{
        backgroundColor: 'var(--bg-primary)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1000px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        {/* Photo with glow */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* Glow behind */}
          <div
            style={{
              position: 'absolute',
              width: '280px',
              height: '280px',
              background: 'var(--accent-color)',
              filter: 'blur(90px)',
              opacity: '0.35',
              zIndex: 0,
              borderRadius: '50%',
            }}
          />

          <img
            src="/images/me.jpg"
            alt="Profile picture"
            style={{
              width: '240px',
              height: '240px',
              objectFit: 'cover',
              borderRadius: '50%',
              zIndex: 1,
            }}
          />
        </div>
        {/* Name */}
        <h1
          style={{
            color: 'var(--text-primary)',
            fontSize: 'clamp(30px, 4vw, 60px)',
            fontWeight: '700',
            textAlign: 'center',
          }}
        >
          RATOLOJANAHARY Mamitiana Antonio
        </h1>

        {/* Optional short role */}
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '20px',
            textAlign: 'center',
            marginBottom: '32px',
          }}
        >
          Web Developer · Modern Interfaces · Clean Code
        </p>

      </div>
    </section>
  );
}

export async function register() {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
      await import('./instrumentation.node')
    }
    console.log("instrumentation file active")
  }
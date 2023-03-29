// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
// import * as Sentry from '@sentry/browser';



const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || 'https://eea52d86a96740cb925b76ec56f894e2@o1145044.ingest.sentry.io/4504053104312320',
  // Adjust this value in production, or use tracesSampler for greater control
  
  beforeSend(event) {
    // Modify or drop the event here
    culprit="my_custom_culprit"
    console.log(event);
    return event;

  },

  tracesSampleRate: 1.0,
  // tunnel: "/api/sentry", 
  replaysSessionSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0,

  // release: "12",
  release: "101",
  integrations: [
    new Sentry.BrowserTracing({
      tracingOrigins: ["localhost", /^\//, /.*\.convex.cloud/],
      }), 
    // new Sentry.Replay({
    //   // Additional SDK configuration goes in here, for example:
    //   maskAllText: true,
    //   blockAllMedia: true,
    // }),
  ],
  integrations: [new Sentry.Replay({
    maskAllText: false,
    blockAllMedia: false,
  })
], 
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
  debug: true,
});

const currentUserInfo = {
  id: 45663,
  email: "test.doe@example.com"
}
Sentry.setUser({ id: currentUserInfo?.id, email: currentUserInfo?.email }); 

// Sentry.setUser({ email: "fran.doe@example.com", username: "Bigfran" });

// Sentry.setTag( "Nick", "BigNick" );

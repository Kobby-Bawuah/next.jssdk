// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
// import * as Sentry from '@sentry/browser';
import { RewriteFrames } from "@sentry/integrations";



const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || 'https://eea52d86a96740cb925b76ec56f894e2@o1145044.ingest.sentry.io/4504053104312320',
  // Adjust this value in production, or use tracesSampler for greater control

  beforeSend(event) {
    // Modify or drop the event here
    // culprit="my_custom_culprit"
    console.log(event);
    return event;

  },

  tracesSampleRate: 1.0,
  // tunnel: "/api/sentry", 
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 1.0,

  // release: "12",
  release: "9.1.1",
  integrations: [
    new Sentry.BrowserTracing({
      tracingOrigins: ["localhost", /^\//, /.*\.convex.cloud/],
    }),

    // new RewriteFrames({
    //   iteratee: (frame) => {
    //     frame.filename = "app:///" + frame.filename.split('/').slice(-2).join('/')
    //     return frame
    //   },
    // }),

    new Sentry.Replay({
      // Additional SDK configuration goes in here, for example:
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  // integrations: [new Sentry.Replay({
  //   maskAllText: false,
  //   blockAllMedia: false,
  // })
  // ],
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
  debug: true,
  // beforeSendTransaction(event) {
  //   // Modify or drop the event here
  //   //Set condition to find browser experiences metric
  //   if (event.transaction) {
  //     console.log("Transaction output!!!!!!!!!!!!!!");
  //     console.log(event.spans);
  //     //Throw an error
  //     throw new Error("transacion parameter was hit!!!");
  //     //Sentry.captureMessage("Something went wrong");
  //   }
  //   return event;
  // },
});

const currentUserInfo = {
  id: 45663,
  email: "test.doe@example.com"
}
Sentry.setUser({ id: currentUserInfo?.id, email: currentUserInfo?.email });

Sentry.setContext("character", {
  name: "Mighty Fighter",
  age: 19,
  attack_type: "melee",
  event: "auth",
  password: "rahh"
});

// Sentry.setUser({ email: "fran.doe@example.com", username: "Bigfran" });

// Sentry.setTag( "Nick", "BigNick" );

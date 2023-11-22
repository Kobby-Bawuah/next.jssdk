// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
import { ProfilingIntegration } from "@sentry/profiling-node";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({

  //Personal Sentry
  // dsn: "http://2644943064430057e3f92d0cb2871dec@127.0.0.1:8000/8",
  
  dsn: SENTRY_DSN || 'https://eea52d86a96740cb925b76ec56f894e2@o1145044.ingest.sentry.io/4504053104312320',
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0, // Profiling sample rate is relative to tracesSampleRate
  instrumenter: "otel",
  integrations: [
    // Add profiling integration to list of integrations
    new ProfilingIntegration(),
  ],
  release: "9.1.2",
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
  debug: true,
});

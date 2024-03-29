import { NodeSDK } from '@opentelemetry/sdk-node'
import { trace, context } from "@opentelemetry/api";
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'
import { Resource } from '@opentelemetry/resources'
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions'
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-node'
import {SentrySpanProcessor, SentryPropagator} from '@sentry/opentelemetry-node'
 
const sdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'next-app',
  }),
  spanProcessor: new SentrySpanProcessor(),
  textMapPropagator: new SentryPropagator(),
})

console.log("node file active")
sdk.start()

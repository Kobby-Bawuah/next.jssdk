import Link from 'next/link';
import * as Sentry from "@sentry/nextjs"

export default function() {
    return (
        <>
        <h1>First Post</h1>
        <h2>
            <Link href="/">Back To Home</Link>
        </h2>
        <button
  type="button"
  onClick={() => {
    throw new Error("Sentry Frontend Error") }}
>
  Throw error
</button>
  <button type="button" onClick={() => {console.log(c)}}>UNDEFINED BUTTON</button>
  <button type="button" onClick={() => {Sentry.close()}}>Close Sentry</button>
  <button type="button" onClick={() => {throw new Error("Hydration Error")}}>Hydration</button>
  <button type="button" onClick={() => {console.error("this is error")}}>console.error</button>
  
  <button type="button" onClick={() => {throw new Error("Hydration Error.")}}>Hydration.</button>
  <button type="button" onClick={() => {
    call
  }}>GRAB CURRENT TRANSACTION!!!!!</button>
  <h2>HEFJKAHSDKAHSDJK</h2>
        </>
    )
}
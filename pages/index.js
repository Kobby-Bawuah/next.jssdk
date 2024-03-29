import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import * as Sentry from "@sentry/nextjs";
import axios from "axios";
import { ofetch } from "ofetch";

class BaseException extends Error {}

export class InvalidArgumentException extends BaseException {}

const inter = Inter({ subsets: ["latin"] });

function HomePage() {
  const handleClick = () => {
    try {
      aFunctionThatMightFail();
    } catch (err) {
      Sentry.captureException(
        new InvalidArgumentException([
          `Invalid Date: unable to parse date string - 1`,
        ])
      );
      // const eventId = Sentry.captureException(err);

      const lastEventId = Sentry.lastEventId();

      console.log("Event ID:", lastEventId);
    }
  };

  const apiNetworktoolTest = () => {
    Promise.all([axios.get("http://127.0.0.1:8000/api/food")]).then((res) => {
      // setFood(res[0].data.tweet);
      console.log("This is Res=>>>>>>>", res);
    });
  };

  // const apiNetworktoolTest = async () => {
  //   try {
  //     const res = await ofetch("http://127.0.0.1:8000/api/food", {
  //       method: "GET",
  //     });
  //     console.log("This is Res=>>>>>>>", res);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  return (
    <div>
      <div>Welcome to Next.js! for testing of suspect commit</div>
      <button
        type="button"
        onClick={() => {
          // throw new Error("Sentry Frontend Error number 3");
          start;
        }}
      >
        RAHHHHHHHH
      </button>

      <button
        type="button"
        onClick={() => {
          myUndefinedFunction4();
        }}
      >
        Throw error 2
      </button>

      <main>
        <h1 className="title">
          Learn <Link href="/post/first-post">this page!</Link>
        </h1>

        <h1 className="title1">
          Link to test route <Link href="/post/test"> RAHHHH </Link>
        </h1>

        <h1 className="title1">
          Link to test route with Error
          <Link href="/post/myEndpoint"> RATatata </Link>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          <button
            type="button"
            onClick={() => {
              throw new Error("HomePage");
            }}
          >
            Test
          </button>

          <button
            type="button"
            onClick={() => {
              // console.log(hub)
            }}
          >
            hub test
          </button>

          <button onClick={handleClick}>
            Test for session replay on error!!!
          </button>
          <button onClick={apiNetworktoolTest}>
            Test for session replay network logs!
          </button>
        </div>
      </main>
    </div>
  );
}

export default HomePage;

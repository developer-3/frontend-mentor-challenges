import { Head } from "$fresh/runtime.ts";
import QRCode from "../components/QRCode.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>QR Code Component</title>
        <link rel="stylesheet" href="/global.css"></link>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md h-screen flex items-center justify-center">
        <QRCode />
      </div>
    </>
  );
}

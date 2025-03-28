import Head from "next/head";
import Image from "next/image";

const MePage = () => {
  return (
    <div className="max-w-5xl p-2 mx-auto mt-4 space-y-8">
      <Head>
        <title>🤷‍♂️ Me</title>
        <meta
          name="description"
          content="The man has the ambition to create Software Products with real value for millions of users"
        />
      </Head>
      {/* IDENTITY */}
      <div className="px-4 mt-4 mb-2 text-xl text-center md:mt-8 md:mb-4 md:px-8">
        "The man has the ambition to create Software Products with real value for millions of users"
        <br />
        <div className="mt-4">
          <Image
            src="/me.jpeg"
            alt="me"
            className="rounded-md"
            width="60"
            height="60"
          />
          <div className="text-lg font-medium">Kevinbkdev</div>
          <div className="text-base font-normal" style={{ fontStyle: 'italic' }}>
  "Make the impossible possible"
</div>
        </div>
      </div>

      {/* MY VALUE METRICS */}
      <div>
        <h1 className="mb-2 text-2xl text-gray-700 dark:text-white">
        My Background 💪
        </h1>
        <div className="px-3 pl-2 mx-auto md:pl-10">
          <ul className="space-y-2">
            <li>
              <strong>Title</strong>: Backend Engineer - Blockchain Architect at Vietnam Blockchain Corporation (VBC) from 2020.
            </li>
            <li>
              <strong>Education</strong>: Computer Science - Ho Chi Minh University of Technology (Bach Khoa HCM).
            </li>
            <li>
              <strong>Skills</strong>: NodeJS, NestJS, Microservices, Solidity, Ethereum, NFT, MongoDB, Redis, Docker, RabbitMQ, Layer2, Enterprise-blockchain...
            </li>
            <li>
              <strong>Keywords</strong>: Enthusiasm - Ambitious - Freedom
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h1 className="mb-2 text-2xl text-gray-700 dark:text-white">Personal projects 🤏</h1>
        <div className="pl-2 space-y-4 md:pl-10">

          <div>
            <p className="underline ">Emotion-music-player</p>
            <a href="https://khiem20tc.github.io/">[https://khiem20tc.github.io/]</a>
            <p className="">The music player auto play a music in playlist based on your emotion.</p>
          </div>

          <div>
            <p className="underline ">Discord-music-bot</p>
            <a href="https://khiem20tc.github.io/">[https://khiem20tc.github.io/]</a>
            <p className="">The powerful Discord bot with music playback and text-to-speech features.</p>
          </div>

          {/* <div>
            <p className="underline ">Stranger-chatroom-telegram</p>
            <a href="https://t.me/strangerchatbot_announcement">[https://t.me/strangerchatbot_announcement]</a>
            <p className="">Chatroom to connect 2 stranger people for chatting with text, picture and video on Telegram bot.</p>
          </div> */}

          <div>
            <p className="underline ">Npm-package @eth-blockchain-helper </p>
            <a href="https://www.npmjs.com/package/eth-blockchain-helper">[https://www.npmjs.com/package/eth-blockchain-helper]</a>
            <p className="">The package npm to helps interacting with Ethereum-based networks.</p>
          </div>

          <div>
            <p className="underline ">AI-ChatBot-Telegram </p>
            <a href="https://web.telegram.org/k/#@chat_gpt_hkne_bot">[https://web.telegram.org/k/#@chat_gpt_hkne_bot]</a>
            <p className="">The telegram chat bot personalize context with GPT integration.</p>
          </div>

          <div>
            <p className="underline ">Crypto-copy-trading system</p>
            <a href="https://t.me/copytradekevinbkdev">[https://t.me/copytradekevinbkdev]</a>
            <p className="">
              contact me for details
            </p>
          </div>

          <div>
            <p className="underline ">No-slippage decentralized exchange</p>
            <p className="">
              contact me for details
            </p>
          </div>

          <div>
            <p className="underline ">Something new...</p>
            <p className="">
              waiting for me
            </p>
          </div>

        </div>
      </div>

      <div>
        <h1 className="mb-2 text-2xl text-gray-700 dark:text-white">
          Connect with me
        </h1>
        <div className="pl-2 space-x-4 md:pl-10">
          <a
            className="text-indigo-600"
            href="https://github.com/khiem20tc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="text-indigo-600"
            href="https://twitter.com/kevinbkdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            className="text-indigo-600"
            href="https://www.linkedin.com/in/kevinbkdev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            className="text-indigo-600"
            href="mailto:khiem20tc@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>

          <a
            className="text-indigo-600"
            href="https://app.cal.com/kevinbkdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meet me
          </a>
        </div>
      </div>

      <div>
        {/* <iframe
          src="https://tally.so/embed/wgWJOw?hideTitle=1&alignLeft=1&transparentBackground=1"
          className="w-full max-w-full border-none"
          height="500"
          frameBorder="0"
          title="ThanhLe.blog feedbacks"
        ></iframe> */}
        {/* <iframe
          allowTransparency
          allowFullScreen
          allow="geolocation; microphone; camera"
          src="https://my.forms.app/form/6188ce488c8fa556a16e2129"
          frameBorder="0"
          className="w-full max-w-full border-none"
          style={{ height: 800 }}
        ></iframe> */}
      </div>
    </div>
  );
};

export default MePage;

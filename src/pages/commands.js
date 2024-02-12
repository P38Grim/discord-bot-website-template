import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Commands() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Commands | CubeCloud</title>
        <meta
          name="description"
          content="Commands page | Minimal and awesome discord bot website created with ❤️ using NextJS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              ⚡ Commands
            </label>
          </header>
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              Utilities ⚙️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>user info</kbd> -{" "}
                  <span className="p-color">get the users information.</span>
                </li>
                <li>
                  <kbd>server-info</kbd> -{" "}
                  <span className="p-color">get the servers information.</span>
                </li>
                <li>
                  <kbd>bot-info</kbd> -{" "}
                  <span className="p-color">get CubeClouds information</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              Fun 🐛
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>slap</kbd> -{" "}
                  <span className="p-color">fake slap your friends.</span>
                </li>
                <li>
                  <kbd>password</kbd> -{" "}
                  <span className="p-color">generate the ultimate password</span>
                </li>
                <li>
                  <kbd>ppsize</kbd> -{" "}
                  <span className="p-color">just a joke chill.</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb3">
              Customization 👀
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>set-welcome</kbd> -{" "}
                  <span className="p-color">set the welcome / leave channel!</span>
                </li>
                <li>
                  <kbd>set-ticket</kbd> -{" "}
                  <span className="p-color">setup tickets</span>
                </li>
                <li>
                  <kbd>set-counting</kbd> -{" "}
                  <span className="p-color">start counting</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb4" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb4">
              Gameplay 🎲
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>youtube-add</kbd> -{" "}
                  <span className="p-color">lets you know when your youtube is uploaded.</span>
                </li>
                <li>
                  <kbd>remove-youtube</kbd> -{" "}
                  <span className="p-color">remove the channel from youtube</span>
                </li>
                <li>
                  <kbd>youtube-view</kbd> -{" "}
                  <span className="p-color">shows youtube</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb5" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb5">
              Image 🖼️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>kiss</kbd> -{" "}
                  <span className="p-color">consensual kiss</span>
                </li>
                <li>
                  <kbd>slap</kbd> -{" "}
                  <span className="p-color">lol</span>
                </li>
                <li>
                  <kbd>bean</kbd> -{" "}
                  <span className="p-color">fake ban</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}

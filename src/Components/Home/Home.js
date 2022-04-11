import React from "react";
import HeroSection from "../Content/HeroSection";
import ShortenerSection from "../Content/ShortenerSection";
import ShortenLinkSection from "../Content/ShortenLinkSection";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useState } from "react";
import useLocalStorage from "../Hooks/LocalStorageHook";

function Home() {
  const [link, setLink] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(false);
  const [shorten, setShorten] = useLocalStorage("shorten", []);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("log1");

    if (link === "") {
      setAlert(true);
      console.log("log2");
    } else {
      setIsPending(true);
      try {
        console.log("log3");
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
        if (!res.ok) {
          console.log(res.error);
          setIsPending(false);
          setLink("");
          setError(error);
          throw Error(
            "This is not a valid URL, for more infos see shrtco.de/docs"
          );
        } else {
          const data = await res.json();
          setShorten((p) => [...p, data.result]);
          setLink("");
          setIsPending(false);
          setError(null);
          setAlert(false);
          console.log("log5");
        }
      } catch (error) {
        setError(`${error.name}  ${error.message}`);
        setIsPending(false);
        console.log("log6");
        console.log(error);
      }
    }
    console.log("log7");
  }

  return (
    <div>
      <Header />
      <div className="content">
        <HeroSection />
        <ShortenLinkSection input={link} setInput={setLink} handleSubmit={handleSubmit} />
        <ShortenerSection isPending={isPending} error={error} shorten={shorten} alert={alert} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

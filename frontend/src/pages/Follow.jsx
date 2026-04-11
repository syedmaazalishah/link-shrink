import React, { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./SignUp";
import About from "./About";
// import Contact from "./Contact";
import InputForm from "../components/InputForm";
import { useParams, useLocation } from "react-router-dom";
import SignUp from "./SignUp";
import NotFound from "../components/NotFound";
import { toast } from "react-hot-toast";
var test;

function Follow() {
  const api = import.meta.env.VITE_API_KEY;
  const params = useParams();
  const [xyz, setXyz] = useState("");
  const [data1, setData1] = useState({
    link: {
      actualLink: null,
      shrinkedLink: null,
    },
  });
  const pages = {
    shrink: InputForm,
    login: Login,
    signup: SignUp,
    // contact: Contact,
    about: About,
  };
  const link = params.link.toLowerCase();
  const docURL = document.URL.replace("http://", "").replace("https://", "");
  const Page = pages[link];

  async function handleFollow() {
    let isLink;
    try {
      await fetch(api + "/api/link/get", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          shrinkedLink: docURL.toLowerCase()
        }),
      })
        .then((res) => res.json())
        .then(async (data) => {
          test = await data;
          await setData1(data);
          await setXyz(data.success);
          isLink = await data.success;
          // await console.log(data, "fetch", xyz);
          // await console.log(isLink);
        });
    } catch (error) {
      isLink = false;
    } finally {
      if (isLink) {
        // console.log(test, "finally test", xyz);
        // console.log(data1, "finally data", xyz);
        document.location.origin = test.link.actualLink
        // window.open(test.link.actualLink,"tab");
      } else {
        // console.log("Link not found");
      }
    }
  }

  useEffect(() => {
    (async function (){
      await handleFollow()
    // handleFollow()
    // handleFollow()
    // console.log(test, "useEffect", xyz);
    })()
  },[]);

  return (
    <>
      {Page ? (
        <Page />
      ) : (async () => {
          try {
            return await !data1.link.actualLink;
          } catch (e) {
            // console.log(e.message,'dom catch')
            return false;
          }
        }) ? (
          <>
        <NotFound />
        <button className='px-3 py-1 border rounded-full' onClick={handleFollow} >Try Again to Reach.</button>
        </>
      ) : (
        <div className="mt-10 ml-10 text-xl">
          Redirected to - {data1.link.actualLink}
        </div>
      )}
    </>
  );
}

export default Follow;

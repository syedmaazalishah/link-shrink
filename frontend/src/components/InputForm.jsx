import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";
import { toast } from "react-hot-toast";
import { BsCopy,BsSignDeadEnd } from "react-icons/bs";

const InputForm = () => {
    const api = import.meta.env.VITE_API_KEY;

    const [URL, setURL] = useState("");
    const [toURL, setToURL] = useState("");
    const [isGenerated, setIsGenerated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isExist, setIsExist] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const [data, setData] = useState({});

    const location = useLocation();

    let linkPrefix = document.URL.replace(location.pathname, "/")
        .replace("http://", "")
        .replace("https://", "");
    let linkTo = linkPrefix +  toURL.trim();
    let link = {
        actualLink: URL,
        shrinkedLink: linkTo,
    };

    async function handleShrink(e) {
        e.preventDefault();
        setIsGenerated(false);
        setIsLoading(true);
        try {
            await fetch(api + "/api/link/check", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(link),
            })
                .then((res) => res.json())
                .then((data) => setIsExist(data.exist));
        } finally {
            if (!URL || !toURL) return setIsLoading(false);
            setIsLoading(false);
            setIsGenerated(true);
        }
    }
    async function handleApprove(e) {
        e.preventDefault();
        try {
            await fetch(api + "/api/link/shrink", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(link),
            })
                .then((res) => res.json())
                .then((data) => setData(data));
        } catch (e) {
            toast.error(e.message);
        } finally {
            toast.success(
                data.success ? "Link Shrinked Successfully." : data.message
            );
        }
    }

    function handleDismiss(e) {
        e.preventDefault();
        setData({});
        setURL("");
        setToURL("");
        setIsAdded(false);
        setIsLoading(false);
        setIsGenerated(false);
    }

    function handleCopyLink() { 
        if(!navigator.clipboard || !navigator.clipboard.writeText ){
            // console.log('clip board is not working.')
            toast.success("Something went wrong")
            // alert("clip is not working.")
            return 0;
        }
        // document.clipboard.writeText 
        navigator.clipboard.writeText(linkTo)
        toast.success("link Copied Successfully.")
    }

    return (
        <section className="mt-2 w-200 mx-auto">
            <form
                method="POST"
                className="flex mt-5 flex-col justify-center items-center gap-6 rounded-4xl border py-10"
            >
            <h1 className=" mx-10 text-4xl font-semibold">Shrink The Link.</h1>
                <input
                    className="text-lg w-150 h-10 outline rounded-lg px-5"
                    type="url"
                    onChange={(e) => setURL(e.target.value)}
                    name="url"
                    value={URL}
                    id="url"
                    required
                    placeholder="Enter URL here."
                />
                <input
                    className="text-lg w-150 h-10 outline rounded-lg px-5"
                    type="text"
                    onChange={(e) => setToURL(e.target.value)}
                    name="tourl"
                    value={toURL}
                    id="toUrl"
                    required
                    placeholder="Enter Custom URL text to Shorten."
                />
                {isExist && <p className="pl-3 flex gap-1 items-center font-bold text-[#ff0000] w-150 text-left -my-4">
                    <BsSignDeadEnd />The Link is already in use.
                </p>}
                <input
                    className="text-lg w-150 border text-white bg-gray-800 hover:bg-gray-600 font-bold rounded-lg cursor-pointer text-center h-10"
                    type="submit"
                    value="Shrint It"
                    onClick={handleShrink}
                />
            </form>
            { }
            {isGenerated && !isLoading && !isExist && URL ? (
                <div
                    className="my-10 border w-full flex justify-center rounded-xl items-start flex-col p-5 gap-3"
                    hidden={!isGenerated}
                >
                    <h2 className="text-3xl font-semibold">Your Generated Link.</h2>
                    <p className="text-sm">
                        You can use this Shrinked Link to share with peoples around the
                        world.
                    </p>
                    <div className="relative w-full text-lg rounded-lg">
                        <button
                            className="absolute right-4 hover:text-gray-300 active:translate-0.5 cursor-pointer top-0 bottom-0"
                            onClick={handleCopyLink}
                        >
                            <BsCopy />
                        </button>
                        <input
                            className=" rounded-lg border select-text w-full p-2 px-5 text-lg"
                            placeholder={linkPrefix}
                            disabled={!isGenerated}
                            value={linkTo}
                            onChange={(e) => {}}
                        />
                    </div>
                    <div className="flex justify-center items-end w-full gap-5">
                        <button
                            onClick={handleApprove}
                            className="cursor-pointer w-40 px-4 font-bold rounded-lg hover:bg-green-500 py-2 text-black bg-green-300"
                        >
                            Approve Link
                        </button>
                        <button
                            onClick={handleDismiss}
                            className="cursor-pointer w-40 px-4 font-bold rounded-lg hover:bg-red-500 py-2 text-black bg-red-300"
                        >
                            Dissmiss Link
                        </button>
                    </div>
                </div>
            ) : !isGenerated && isLoading ? (
                <Loader />
            ) : isExist ? (
                // <div className="w-full flex justify-center items-center mt-10">
                //     <p className="w-150 py-3 text-center text-xl rounded-xl text-red-500 bg-black">
                //         The Link is already in use.
                //     </p>
                // </div>
                ""
            ) : (
                ""
            )}
        </section>
    );
};

export default InputForm;

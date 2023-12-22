"use client"
import { SlSettings } from "react-icons/sl";

export default function Header() {
	const onClickIcon = () => {
		// TODO ダイアログを表示する
    console.log("show dialog")
	};
	
  return (
    <div className=" ">
      <h1 className="text-3xl h-[72px] flex justify-center items-center">
        OpenAIとGeminiAIの回答を比べてみるアプリ
      </h1>
      <div className="absolute top-6 right-10 flex">
        <span className="pr-4">API KEY SETTINGS</span>
          <SlSettings className="text-2xl cursor-pointer" onClick={onClickIcon} />
      </div>
    </div>
  );
}
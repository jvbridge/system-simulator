import { useState } from "react";
import ReactMarkdown from "react-markdown";
import markdownPath from './info.md'

 function InfoPage (){

  const [markdownText, setMarkdownText] = useState("Loading...");

  const fetchInfo = async () =>{
    try{
      const res = await fetch(markdownPath);
      const mdText = await res.text();
      setMarkdownText(mdText);
    } catch(error){
      console.error("Got error fetching: ");
      console.error(error);
    }
  }

  fetchInfo();

  return ( 
  <ReactMarkdown children={markdownText}/>
  )
}

export default InfoPage;
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import markdownPath from './info.md'

 function InfoPage (){

  // fetching the separate file we use for markdown
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

  // render the markdown
  return ( 
  <ReactMarkdown children={markdownText}/>
  )
}

export default InfoPage;
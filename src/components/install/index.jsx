import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function InstallPWA () {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      console.log("Install trigger");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const installClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }
  return (
    <Button
      className="link-button"
      id="setup_button"
      aria-label="Install app"
      title="Install app"
      onClick={installClick}
    >
      Install
    </Button>
  );
};
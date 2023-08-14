"use client";
import { useEffect } from "react";
import { init } from "onfido-sdk-ui";

export default function Home() {
  useEffect(() => {
    init({
      workflowRunId: "",
      token: "",
      containerId: "onfido-mount",
      onComplete: function (data) {
        console.log("onfido flow complete");
      },
    });
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="onfido-mount"></div>
    </main>
  );
}

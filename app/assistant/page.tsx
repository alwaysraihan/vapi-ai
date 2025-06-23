"use client";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { useVapi, vapi, VapiButton } from "@/features/ring2poll-ai/Assistant";
import { MessageList } from "@/features/ring2poll-ai/Messages";
import { languages } from "@/features/shared/navbar/navbar";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

function AiAgent() {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const hasCalledRef = useRef(false);

  const lang = searchParams.get("language"); // "en"
  const assistantId =
    languages.find((l) => l.title.toLowerCase() === lang?.toLowerCase())
      ?.assistantId ?? "6df7c7a6-94c4-46dc-91a6-b21a18025858";
  const scrollToBottom = () => {
    const viewport = viewportRef.current;
    if (viewport) {
      viewport.scrollTop = viewport.scrollHeight;
    }
  };
  const { toggleCall, messages, callStatus, activeTranscript, audioLevel } =
    useVapi(assistantId);

  useEffect(() => {
    if (!hasCalledRef.current) {
      toggleCall();
      hasCalledRef.current = true;
    }
    vapi.on("message", scrollToBottom);
    return () => {
      vapi.off("message", scrollToBottom);
    };
  }, [toggleCall]);

  return (
    <main className="flex h-screen">
      <div
        id="card"
        className="text-slate-950 dark:text-slate-50 w-full relative"
      >
        <div
          id="card-header"
          className="flex  relative flex-col space-y-1.5 p-6 shadow pb-4"
        >
          <Link href={"/"} className="absolute left-4">
            <h1 className="  font-bold">Go Back</h1>
          </Link>
          <h1 className="text-center font-bold">Ring 2 Pull Survey Agent</h1>
        </div>
        <div id="card-content" className="p-6 pt-0">
          <ScrollArea
            ref={scrollAreaRef}
            viewportRef={viewportRef}
            className="h-[85vh] flex flex-1 p-4"
          >
            <div className="flex flex-1 flex-col min-h-[85vh] justify-end">
              <MessageList
                messages={messages}
                activeTranscript={activeTranscript}
              />
            </div>
          </ScrollArea>
        </div>
        <div
          id="card-footer"
          className="flex justify-center absolute bottom-0 left-0 right-0 py-4"
        >
          <VapiButton
            audioLevel={audioLevel}
            callStatus={callStatus}
            toggleCall={toggleCall}
          />
        </div>
      </div>
    </main>
  );
}

export default AiAgent;

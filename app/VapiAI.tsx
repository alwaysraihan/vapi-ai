// "use client";

// import { useEffect, useState } from "react";
// import Vapi from "@vapi-ai/web";

// interface VapiAIProps {
//   apiKey?: string;
//   assistantId?: string;
//   autoStart?: boolean;
// }

// const VapiAI: React.FC<VapiAIProps> = ({
//   apiKey = process.env.NEXT_PUBLIC_VAPI_API_KEY || "9d3c0322--bff4-805bfbdd0041",
//   assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || "184ed245-8e58-4362-a5a2-48bf729a",
//   autoStart = false,
// }) => {
//   const [vapi, setVapi] = useState<Vapi | null>(null);
//   const [isCallActive, setIsCallActive] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [showEndCallModal, setShowEndCallModal] = useState(false);

//   useEffect(() => {
//     // Initialize Vapi instance
//     const vapiInstance = new Vapi(apiKey);
//     setVapi(vapiInstance);

//     // Set up event listeners
//     vapiInstance.on("call-start", () => {
//       console.log("Vapi call started");
//       setIsCallActive(true);
//       setIsLoading(false);
//     });

//     vapiInstance.on("call-end", () => {
//       console.log("Vapi call ended");
//       setIsCallActive(false);
//       setIsLoading(false);
//       setShowModal(false);
//       setShowEndCallModal(false);
//     });

//     vapiInstance.on("speech-start", () => {
//       console.log("User started speaking");
//     });

//     vapiInstance.on("speech-end", () => {
//       console.log("User stopped speaking");
//     });

//     vapiInstance.on("message", (message: any) => {
//       console.log("Vapi message:", message);
//     });

//     vapiInstance.on("error", (error: any) => {
//       console.error("Vapi error:", error);
//       setIsLoading(false);
//     });

//     // Auto-start if specified
//     if (autoStart) {
//       handleStartCall();
//     }

//     // Cleanup on unmount
//     return () => {
//       if (vapiInstance) {
//         vapiInstance.stop();
//       }
//     };
//   }, [apiKey, assistantId, autoStart]);

//   const handleStartCall = () => {
//     if (vapi && !isCallActive) {
//       setIsLoading(true);
//       setShowModal(true);
//       vapi.start(assistantId);
//     }
//   };

//   const handleEndCall = () => {
//     if (vapi && isCallActive) {
//       vapi.stop();
//     }
//   };

//   const handleCloseClick = () => {
//     setShowEndCallModal(true);
//   };

//   const confirmEndCall = () => {
//     handleEndCall();
//     setShowEndCallModal(false);
//   };

//   const cancelEndCall = () => {
//     setShowEndCallModal(false);
//   };

//   // Call Icon SVG
//   const CallIcon = () => (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.09541 3.90347 2.12861 3.62476 2.21762 3.36162C2.30663 3.09849 2.44972 2.85669 2.63771 2.65162C2.82571 2.44655 3.05419 2.28271 3.30915 2.17052C3.5641 2.05833 3.83969 2.00026 4.11999 2H7.11999C7.59334 1.99522 8.05216 2.16708 8.41130 2.48353C8.77044 2.79999 8.99968 3.23945 8.05999 3.72C9.68373 7.14588 12.4541 9.91627 15.88 11.54C16.3605 11.6002 16.7999 11.3707 17.1165 11.0115C17.433 10.6523 17.6049 10.1934 17.6 9.72V6.72C17.6 5.93 18.22 5.31 19 5.31C19.78 5.31 20.4 5.93 20.4 6.72V9.72C20.4 10.51 19.78 11.13 19 11.13C18.22 11.13 17.6 10.51 17.6 9.72Z"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );

//   // Close Icon SVG
//   const CloseIcon = () => (
//     <svg
//       width="20"
//       height="20"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M18 6L6 18M6 6L18 18"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );

//   // Microphone Icon SVG
//   const MicrophoneIcon = () => (
//     <svg
//       width="32"
//       height="32"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M12 1C10.3431 1 9 2.34315 9 4V12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12V4C15 2.34315 13.6569 1 12 1Z"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M19 10V12C19 16.4183 15.4183 20 11 20H13C17.4183 20 21 16.4183 21 12V10"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M12 20V23M8 23H16"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );

//   return (
//     <>
//       {/* Floating Call Button */}
//       {!showModal && (
//         <div
//           className="fixed bottom-6 right-6 z-50 cursor-pointer select-none group"
//           onClick={handleStartCall}
//         >
//           <div className="flex items-center justify-center w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition-all duration-300 hover:scale-110 text-white">
//             <CallIcon />
//           </div>
//           <div className="absolute bottom-full mb-2 right-0 bg-black text-white text-sm rounded-lg py-2 px-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//             Start Voice Call
//             <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black"></div>
//           </div>
//         </div>
//       )}

//       {/* Call Modal */}
//       {showModal && (
//         <div className="fixed bottom-6 right-6 z-50">
//           <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 overflow-hidden">
//             {/* Modal Header */}
//             <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
//               <div className="flex items-center space-x-3">
//                 <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//                 <span className="font-semibold">
//                   {isLoading ? "Connecting..." : isCallActive ? "Voice Call Active" : "Ready to Call"}
//                 </span>
//               </div>
//               <button
//                 onClick={handleCloseClick}
//                 className="text-white hover:text-gray-200 transition-colors duration-200"
//               >
//                 <CloseIcon />
//               </button>
//             </div>

//             {/* Modal Body */}
//             <div className="p-6">
//               <div className="text-center">
//                 {isLoading ? (
//                   <div className="space-y-4">
//                     <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
//                       <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
//                     </div>
//                     <p className="text-gray-600">Establishing connection...</p>
//                   </div>
//                 ) : isCallActive ? (
//                   <div className="space-y-4">
//                     <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center text-green-600">
//                       <MicrophoneIcon />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-800">You're connected!</p>
//                       <p className="text-sm text-gray-600 mt-1">Speak naturally with the AI assistant</p>
//                     </div>
//                     <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
//                       <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
//                       <span>Recording</span>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="space-y-4">
//                     <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
//                       <CallIcon />
//                     </div>
//                     <p className="text-gray-600">Ready to start your voice call</p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Modal Footer */}
//             <div className="bg-gray-50 px-6 py-4">
//               <div className="text-center text-xs text-gray-500">
//                 {isCallActive ? "Click the × button to end the call" : "Initializing voice assistant..."}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* End Call Confirmation Modal */}
//       {showEndCallModal && (
//         <div className="fixed bottom-6 right-6 z-60">
//           <div className="bg-white rounded-xl shadow-2xl border border-gray-200 w-72 overflow-hidden">
//             <div className="p-6">
//               <div className="text-center space-y-4">
//                 <div className="w-12 h-12 mx-auto bg-red-100 rounded-full flex items-center justify-center text-red-600">
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">End Call?</h3>
//                   <p className="text-sm text-gray-600 mt-1">Are you sure you want to end the voice call?</p>
//                 </div>
//                 <div className="flex space-x-3">
//                   <button
//                     onClick={cancelEndCall}
//                     className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     onClick={confirmEndCall}
//                     className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
//                   >
//                     End Call
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default VapiAI;




"use client";

import { useEffect, useState } from "react";
import Vapi from "@vapi-ai/web";

interface VapiAIProps {
  apiKey?: string;
  assistantId?: string;
  autoStart?: boolean;
}

const VapiAI: React.FC<VapiAIProps> = ({
  apiKey = process.env.NEXT_PUBLIC_VAPI_API_KEY || "9d3c0322-4a91-bff4-805bfbdd0041",
  assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || "184ed245-8e58-4362-a5a2-48bf729a",
  autoStart = false,
}) => {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Initialize Vapi instance
    const vapiInstance = new Vapi(apiKey);
    setVapi(vapiInstance);

    // Set up event listeners
    vapiInstance.on("call-start", () => {
      console.log("Vapi call started");
      setIsCallActive(true);
      setIsLoading(false);
    });

    vapiInstance.on("call-end", () => {
      console.log("Vapi call ended");
      setIsCallActive(false);
      setIsLoading(false);
      setShowModal(false);
    });

    vapiInstance.on("speech-start", () => {
      console.log("User started speaking");
    });

    vapiInstance.on("speech-end", () => {
      console.log("User stopped speaking");
    });

    vapiInstance.on("message", (message: any) => {
      console.log("Vapi message:", message);
    });

    vapiInstance.on("error", (error: any) => {
      console.error("Vapi error:", error);
      setIsLoading(false);
    });

    // Auto-start if specified
    if (autoStart) {
      handleStartCall();
    }

    // Cleanup on unmount
    return () => {
      if (vapiInstance) {
        vapiInstance.stop();
      }
    };
  }, [apiKey, assistantId, autoStart]);

  const handleStartCall = () => {
    if (vapi && !isCallActive) {
      setIsLoading(true);
      setShowModal(true);
      vapi.start(assistantId);
    }
  };

  const handleEndCall = () => {
    if (vapi && isCallActive) {
      vapi.stop();
    }
  };

  const handleCloseClick = () => {
    // Immediately end the call without confirmation
    handleEndCall();
  };

  // Call Icon SVG
  const CallIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.09541 3.90347 2.12861 3.62476 2.21762 3.36162C2.30663 3.09849 2.44972 2.85669 2.63771 2.65162C2.82571 2.44655 3.05419 2.28271 3.30915 2.17052C3.5641 2.05833 3.83969 2.00026 4.11999 2H7.11999C7.59334 1.99522 8.05216 2.16708 8.41130 2.48353C8.77044 2.79999 8.99968 3.23945 8.05999 3.72C9.68373 7.14588 12.4541 9.91627 15.88 11.54C16.3605 11.6002 16.7999 11.3707 17.1165 11.0115C17.433 10.6523 17.6049 10.1934 17.6 9.72V6.72C17.6 5.93 18.22 5.31 19 5.31C19.78 5.31 20.4 5.93 20.4 6.72V9.72C20.4 10.51 19.78 11.13 19 11.13C18.22 11.13 17.6 10.51 17.6 9.72Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // Close Icon SVG
  const CloseIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // Microphone Icon SVG
  const MicrophoneIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1C10.3431 1 9 2.34315 9 4V12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12V4C15 2.34315 13.6569 1 12 1Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 10V12C19 16.4183 15.4183 20 11 20H13C17.4183 20 21 16.4183 21 12V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20V23M8 23H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <>
      {/* Floating Call Button */}
      {!showModal && (
        <div
          className="fixed bottom-6 right-6 z-50 cursor-pointer select-none group"
          onClick={handleStartCall}
        >
          <div className="flex items-center justify-center w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition-all duration-300 hover:scale-110 text-white">
            <CallIcon />
          </div>
          <div className="absolute bottom-full mb-2 right-0 bg-black text-white text-sm rounded-lg py-2 px-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Start Voice Call
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black"></div>
          </div>
        </div>
      )}

      {/* Call Modal */}
      {showModal && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold">
                  {isLoading ? "Connecting..." : isCallActive ? "Voice Call Active" : "Ready to Call"}
                </span>
              </div>
              <button
                onClick={handleCloseClick}
                className="text-white hover:text-gray-200 transition-colors duration-200"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="text-center">
                {isLoading ? (
                  <div className="space-y-4">
                    <div className="relative w-20 h-20 mx-auto">
                      {/* Outer animated ring */}
                      <div className="absolute inset-0 rounded-full border-4 border-blue-200 animate-ping"></div>
                      {/* Middle ring */}
                      <div className="absolute inset-2 rounded-full border-2 border-blue-400 animate-pulse"></div>
                      {/* Inner circle with icon */}
                      <div className="absolute inset-0 bg-blue-600 rounded-full flex items-center justify-center text-white">
                        <CallIcon />
                      </div>
                    </div>
                    <p className="text-gray-600 font-medium">Establishing connection...</p>
                  </div>
                ) : isCallActive ? (
                  <div className="space-y-4">
                    <div className="relative w-20 h-20 mx-auto">
                      {/* Outer pulsing ring */}
                      <div className="absolute inset-0 rounded-full bg-green-200 animate-ping opacity-75"></div>
                      {/* Middle ring */}
                      <div className="absolute inset-1 rounded-full bg-green-300 animate-pulse opacity-60"></div>
                      {/* Inner circle with microphone */}
                      <div className="absolute inset-0 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg">
                        <MicrophoneIcon />
                      </div>
                      {/* Sound wave rings */}
                      <div className="absolute -inset-4 rounded-full border-2 border-green-400 animate-ping opacity-30"></div>
                      <div className="absolute -inset-6 rounded-full border border-green-300 animate-ping opacity-20" style={{animationDelay: '0.5s'}}></div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">You're connected!</p>
                      <p className="text-sm text-gray-600 mt-1">Speak naturally with the AI assistant</p>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                      <div className="flex space-x-1">
                        <div className="w-1 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <div className="w-1 h-4 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-1 h-2 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        <div className="w-1 h-5 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                      </div>
                      <span className="font-medium">Recording</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <CallIcon />
                    </div>
                    <p className="text-gray-600">Ready to start your voice call</p>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-6 py-4">
              <div className="text-center text-xs text-gray-500">
                {isCallActive ? "Click the × button to end the call instantly" : "Initializing voice assistant..."}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VapiAI;



// "use client";

// import { useEffect, useState } from "react";
// import Vapi from "@vapi-ai/web";

// interface VapiAIProps {
//   apiKey?: string;
//   assistantId?: string;
//   autoStart?: boolean;
// }

// const VapiAI: React.FC<VapiAIProps> = ({
//   apiKey = process.env.NEXT_PUBLIC_VAPI_API_KEY || "9d3c0322-4a91-bff4-805bfbdd0041",
//   assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || "184ed245-8e58-4362-a5a2-48bf729a",
//   autoStart = false,
// }) => {
//   const [vapi, setVapi] = useState<Vapi | null>(null);
//   const [isCallActive, setIsCallActive] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [isUserSpeaking, setIsUserSpeaking] = useState(false);
//   const [isAISpeaking, setIsAISpeaking] = useState(false);

//   useEffect(() => {
//     // Initialize Vapi instance
//     const vapiInstance = new Vapi(apiKey);
//     setVapi(vapiInstance);

//     // Set up event listeners
//     vapiInstance.on("call-start", () => {
//       console.log("Vapi call started");
//       setIsCallActive(true);
//       setIsLoading(false);
//     });

//     vapiInstance.on("call-end", () => {
//       console.log("Vapi call ended");
//       setIsCallActive(false);
//       setIsLoading(false);
//       setShowModal(false);
//       setIsUserSpeaking(false);
//       setIsAISpeaking(false);
//     });

//     vapiInstance.on("speech-start", () => {
//       console.log("User started speaking");
//       setIsUserSpeaking(true);
//       setIsAISpeaking(false);
//     });

//     vapiInstance.on("speech-end", () => {
//       console.log("User stopped speaking");
//       setIsUserSpeaking(false);
//     });

//     vapiInstance.on("message", (message: any) => {
//       console.log("Vapi message:", message);
//       // Check if AI is speaking
//       if (message.type === "transcript" && message.transcriptType === "final") {
//         setIsAISpeaking(true);
//         // Auto-stop AI speaking after a delay (you can adjust based on message length)
//         setTimeout(() => setIsAISpeaking(false), message.transcript?.length * 50 || 2000);
//       }
//     });

//     vapiInstance.on("error", (error: any) => {
//       console.error("Vapi error:", error);
//       setIsLoading(false);
//     });

//     // Auto-start if specified
//     if (autoStart) {
//       handleStartCall();
//     }

//     // Cleanup on unmount
//     return () => {
//       if (vapiInstance) {
//         vapiInstance.stop();
//       }
//     };
//   }, [apiKey, assistantId, autoStart]);

//   const handleStartCall = () => {
//     if (vapi && !isCallActive) {
//       setIsLoading(true);
//       setShowModal(true);
//       vapi.start(assistantId);
//     }
//   };

//   const handleEndCall = () => {
//     if (vapi && isCallActive) {
//       vapi.stop();
//     }
//   };

//   const handleCloseClick = () => {
//     // Immediately end the call without confirmation
//     handleEndCall();
//   };

//   // Call Icon SVG
//   const CallIcon = () => (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.09541 3.90347 2.12861 3.62476 2.21762 3.36162C2.30663 3.09849 2.44972 2.85669 2.63771 2.65162C2.82571 2.44655 3.05419 2.28271 3.30915 2.17052C3.5641 2.05833 3.83969 2.00026 4.11999 2H7.11999C7.59334 1.99522 8.05216 2.16708 8.41130 2.48353C8.77044 2.79999 8.99968 3.23945 8.05999 3.72C9.68373 7.14588 12.4541 9.91627 15.88 11.54C16.3605 11.6002 16.7999 11.3707 17.1165 11.0115C17.433 10.6523 17.6049 10.1934 17.6 9.72V6.72C17.6 5.93 18.22 5.31 19 5.31C19.78 5.31 20.4 5.93 20.4 6.72V9.72C20.4 10.51 19.78 11.13 19 11.13C18.22 11.13 17.6 10.51 17.6 9.72Z"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );

//   // Close Icon SVG
//   const CloseIcon = () => (
//     <svg
//       width="20"
//       height="20"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M18 6L6 18M6 6L18 18"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );

//   // Microphone Icon SVG
//   const MicrophoneIcon = () => (
//     <svg
//       width="32"
//       height="32"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M12 1C10.3431 1 9 2.34315 9 4V12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12V4C15 2.34315 13.6569 1 12 1Z"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M19 10V12C19 16.4183 15.4183 20 11 20H13C17.4183 20 21 16.4183 21 12V10"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M12 20V23M8 23H16"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );

//   return (
//     <>
//       {/* Floating Call Button */}
//       {!showModal && (
//         <div
//           className="fixed bottom-6 right-6 z-50 cursor-pointer select-none group"
//           onClick={handleStartCall}
//         >
//           <div className="flex items-center justify-center w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition-all duration-300 hover:scale-110 text-white">
//             <CallIcon />
//           </div>
//           <div className="absolute bottom-full mb-2 right-0 bg-black text-white text-sm rounded-lg py-2 px-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//             Start Voice Call
//             <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black"></div>
//           </div>
//         </div>
//       )}

//       {/* Call Modal */}
//       {showModal && (
//         <div className="fixed bottom-6 right-6 z-50">
//           <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 overflow-hidden">
//             {/* Modal Header */}
//             <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
//               <div className="flex items-center space-x-3">
//                 <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//                 <span className="font-semibold">
//                   {isLoading ? "Connecting..." : isCallActive ? "Voice Call Active" : "Ready to Call"}
//                 </span>
//               </div>
//               <button
//                 onClick={handleCloseClick}
//                 className="text-white hover:text-gray-200 transition-colors duration-200"
//               >
//                 <CloseIcon />
//               </button>
//             </div>

//             {/* Modal Body */}
//             <div className="p-6">
//               <div className="text-center">
//                 {isLoading ? (
//                   <div className="space-y-4">
//                     <div className="relative w-20 h-20 mx-auto">
//                       {/* Outer animated ring */}
//                       <div className="absolute inset-0 rounded-full border-4 border-blue-200 animate-ping"></div>
//                       {/* Middle ring */}
//                       <div className="absolute inset-2 rounded-full border-2 border-blue-400 animate-pulse"></div>
//                       {/* Inner circle with icon */}
//                       <div className="absolute inset-0 bg-blue-600 rounded-full flex items-center justify-center text-white">
//                         <CallIcon />
//                       </div>
//                     </div>
//                     <p className="text-gray-600 font-medium">Establishing connection...</p>
//                   </div>
//                 ) : isCallActive ? (
//                   <div className="space-y-4">
//                     <div className="relative w-20 h-20 mx-auto">
//                       {/* Dynamic animations based on speech state */}
//                       {isUserSpeaking ? (
//                         // User Speaking Animation - Blue pulsing circles
//                         <>
//                           <div className="absolute inset-0 rounded-full bg-blue-200 animate-ping opacity-75"></div>
//                           <div className="absolute inset-1 rounded-full bg-blue-300 animate-pulse opacity-60"></div>
//                           <div className="absolute -inset-2 rounded-full border-2 border-blue-400 animate-ping opacity-40"></div>
//                           <div className="absolute -inset-4 rounded-full border border-blue-300 animate-ping opacity-20" style={{animationDelay: '0.3s'}}></div>
//                           <div className="absolute -inset-6 rounded-full border border-blue-200 animate-ping opacity-10" style={{animationDelay: '0.6s'}}></div>
//                           <div className="absolute inset-0 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
//                             <MicrophoneIcon />
//                           </div>
//                         </>
//                       ) : isAISpeaking ? (
//                         // AI Speaking Animation - Purple pulsing circles
//                         <>
//                           <div className="absolute inset-0 rounded-full bg-purple-200 animate-ping opacity-75"></div>
//                           <div className="absolute inset-1 rounded-full bg-purple-300 animate-pulse opacity-60"></div>
//                           <div className="absolute -inset-2 rounded-full border-2 border-purple-400 animate-ping opacity-40"></div>
//                           <div className="absolute -inset-4 rounded-full border border-purple-300 animate-ping opacity-20" style={{animationDelay: '0.2s'}}></div>
//                           <div className="absolute -inset-6 rounded-full border border-purple-200 animate-ping opacity-10" style={{animationDelay: '0.4s'}}></div>
//                           <div className="absolute inset-0 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
//                             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                               <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 13.5V10C15 8.9 14.1 8 13 8H11C9.9 8 9 8.9 9 10V16H7V10C7 7.8 8.8 6 11 6H13C15.2 6 17 7.8 17 10V11.5L21 9Z" fill="currentColor"/>
//                             </svg>
//                           </div>
//                         </>
//                       ) : (
//                         // Listening/Idle Animation - Green gentle pulse
//                         <>
//                           <div className="absolute inset-0 rounded-full bg-green-200 animate-pulse opacity-50"></div>
//                           <div className="absolute inset-2 rounded-full bg-green-300 animate-pulse opacity-30" style={{animationDelay: '0.5s'}}></div>
//                           <div className="absolute inset-0 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg">
//                             <MicrophoneIcon />
//                           </div>
//                         </>
//                       )}
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-800">
//                         {isUserSpeaking ? "You're speaking..." : isAISpeaking ? "AI is responding..." : "Listening..."}
//                       </p>
//                       <p className="text-sm text-gray-600 mt-1">
//                         {isUserSpeaking ? "Keep talking naturally" : isAISpeaking ? "Please wait for response" : "Speak when ready"}
//                       </p>
//                     </div>
//                     <div className="flex items-center justify-center space-x-2 text-sm">
//                       {isUserSpeaking ? (
//                         // User speaking indicator - Blue bars
//                         <div className="flex items-center space-x-2 text-blue-600">
//                           <div className="flex space-x-1">
//                             <div className="w-1 h-4 bg-blue-500 rounded-full animate-pulse"></div>
//                             <div className="w-1 h-6 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
//                             <div className="w-1 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
//                             <div className="w-1 h-5 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
//                             <div className="w-1 h-7 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
//                           </div>
//                           <span className="font-medium">Recording</span>
//                         </div>
//                       ) : isAISpeaking ? (
//                         // AI speaking indicator - Purple bars
//                         <div className="flex items-center space-x-2 text-purple-600">
//                           <div className="flex space-x-1">
//                             <div className="w-1 h-3 bg-purple-500 rounded-full animate-bounce"></div>
//                             <div className="w-1 h-5 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
//                             <div className="w-1 h-4 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
//                             <div className="w-1 h-6 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
//                           </div>
//                           <span className="font-medium">AI Speaking</span>
//                         </div>
//                       ) : (
//                         // Listening indicator - Green dot
//                         <div className="flex items-center space-x-2 text-green-600">
//                           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                           <span className="font-medium">Listening</span>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="space-y-4">
//                     <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
//                       <CallIcon />
//                     </div>
//                     <p className="text-gray-600">Ready to start your voice call</p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Modal Footer */}
//             <div className="bg-gray-50 px-6 py-4">
//               <div className="text-center text-xs text-gray-500">
//                 {isCallActive ? "Click the × button to end the call instantly" : "Initializing voice assistant..."}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default VapiAI;
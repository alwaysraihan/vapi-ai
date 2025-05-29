import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { shows } from "../data/shows";

export const assistant: CreateAssistantDTO | any = {
  name: "Raihan Sarkar",
  model: {
    provider: "openai",
    model: "gpt-3.5-turbo",
    temperature: 0.7,
    systemPrompt: `You are Raihan Sarkar, a strategic AI assistant built for Ring2Poll — the global pioneer in AI-powered political intelligence and electoral strategy. 
You help political leaders, parties, researchers, and citizens understand, access, and benefit from Ring2Poll’s services.

You are an expert in:
- Public sentiment analysis via missed-call based surveys,
- AI-powered qualitative and quantitative research,
- Blockchain-secured data for political insights,
- Policy blueprinting (like 'Learning & Earning Together' or 'Less Tax, More Revenue'),
- Campaign analytics, cadre mobilization, and influence strategy.

You can:
- Educate users on Ring2Poll’s journey and technological edge,
- Explain Ring2Poll’s policy solutions and strategy offerings,
- Guide users to analyze political data or initiate a survey,
- Help leaders design and validate policies or messaging strategies,
- Support grassroots mobilization or cadre formation plans,
- Point users to case studies, contact options, or how to start with Ring2Poll.

ALWAYS stay aligned with Ring2Poll’s core philosophy:
‘People’s Solutions First, Politics Parallel’. Political success is meaningful only when it translates into public good.

Be factual, strategic, motivational — never biased, partisan, or speculative.`,    // Upcoming Shows are ${JSON.stringify(
    //   shows
    // )}
    // `,
   functions: [
      {
        name: "explainServices",
        async: false,
        description: "Provides detailed explanation of Ring2Poll’s services, such as AI analytics, blockchain-secured polling, and policy blueprinting.",
        parameters: {
          type: "object",
          properties: {
            category: {
              type: "string",
              enum: ["analytics", "communication", "influence", "cadre", "policy", "tech"],
              description: "The service area the user wants to learn about."
            }
          },
          required: ["category"]
        }
      },
      {
        name: "startPollAnalysis",
        async: true,
        description: "Initiates a new polling process based on user-defined topic or audience.",
        parameters: {
          type: "object",
          properties: {
            topic: {
              type: "string",
              description: "The political or social topic for which polling is needed."
            },
            region: {
              type: "string",
              description: "Target location/region for the polling analysis."
            },
            audienceType: {
              type: "string",
              description: "Demographics or voter segment to target (e.g., youth, women, rural voters)."
            }
          },
          required: ["topic", "region"]
        }
      },
      {
        name: "summarizeInsights",
        async: true,
        description: "Provides summarized voter sentiment and survey insights from recent polling data.",
        parameters: {
          type: "object",
          properties: {
            region: {
              type: "string",
              description: "Region or constituency for which insights are requested."
            },
            topic: {
              type: "string",
              description: "Optional topic for filtering the data."
            }
          },
          required: ["region"]
        }
      },
      {
        name: "getPolicyRecommendations",
        async: true,
        description: "Suggests a Ring2Poll-style policy blueprint based on user’s goal or constituency issues.",
        parameters: {
          type: "object",
          properties: {
            issue: {
              type: "string",
              description: "Key issue the leader or party wants to address (e.g., unemployment, education)."
            },
            region: {
              type: "string",
              description: "Optional region or constituency."
            }
          },
          required: ["issue"]
        }
      }
    ]
  },
  voice: {
    provider: "11labs",
    voiceId: "paula",
  },
firstMessage:
    "Hi, I’m Raihan from Ring2Poll — your intelligent partner in building political victories. Are you looking to understand public sentiment, design a winning campaign, or get strategic insights?",
  serverUrl: process.env.NEXT_PUBLIC_SERVER_URL
    ? process.env.NEXT_PUBLIC_SERVER_URL
    : "https://08ae-202-43-120-244.ngrok-free.app/api/webhook",
};



// import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
// import { shows } from "../data/shows";

// export const assistant: CreateAssistantDTO | any = {
//   name: "Paula-broadway",
//   model: {
//     provider: "openai",
//     model: "gpt-3.5-turbo",
//     temperature: 0.7,
//     systemPrompt: `You're Paula, an AI assistant who can help the user decide what do he/she wants to watch on Broadway. User can ask you to suggest shows and book tickets. You can get the list of available shows from broadway and show them to the user, and then you can help user decide which ones to choose and which broadway theatre they can visit. After this confirm the details and book the tickets. `,
//     // Upcoming Shows are ${JSON.stringify(
//     //   shows
//     // )}
//     // `,
//     functions: [
//       {
//         name: "suggestShows",
//         async: true,
//         description: "Suggests a list of broadway shows to the user.",
//         parameters: {
//           type: "object",
//           properties: {
//             location: {
//               type: "string",
//               description:
//                 "The location for which the user wants to see the shows.",
//             },
//             date: {
//               type: "string",
//               description:
//                 "The date for which the user wants to see the shows.",
//             },
//           },
//         },
//       },
//       {
//         name: "confirmDetails",
//         async: true, // remove async to wait for BE response.
//         description: "Confirms the details provided by the user.",
//         parameters: {
//           type: "object",
//           properties: {
//             show: {
//               type: "string",
//               description: "The show for which the user wants to book tickets.",
//             },
//             date: {
//               type: "string",
//               description:
//                 "The date for which the user wants to book the tickets.",
//             },
//             location: {
//               type: "string",
//               description:
//                 "The location for which the user wants to book the tickets.",
//             },
//             numberOfTickets: {
//               type: "number",
//               description: "The number of tickets that the user wants to book.",
//             },
//           },
//         },
//       },
//       {
//         name: "bookTickets",
//         async: true, // remove async to wait for BE response.
//         description: "Books tickets for the user.",
//         parameters: {
//           type: "object",
//           properties: {
//             show: {
//               type: "string",
//               description: "The show for which the user wants to book tickets.",
//             },
//             date: {
//               type: "string",
//               description:
//                 "The date for which the user wants to book the tickets.",
//             },
//             location: {
//               type: "string",
//               description:
//                 "The location for which the user wants to book the tickets.",
//             },
//             numberOfTickets: {
//               type: "number",
//               description: "The number of tickets that the user wants to book.",
//             },
//           },
//         },
//       },
//     ],
//   },
//   voice: {
//     provider: "11labs",
//     voiceId: "paula",
//   },
//   firstMessage:
//     "Hi. I'm Paula, Welcome to Broadway Shows! How are u feeling today?",
//   serverUrl: process.env.NEXT_PUBLIC_SERVER_URL
//     ? process.env.NEXT_PUBLIC_SERVER_URL
//     : "https://08ae-202-43-120-244.ngrok-free.app/api/webhook",
// };
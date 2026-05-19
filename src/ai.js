import ollama from "ollama"

const SYSTEM_PROMPT = `
You are an AI chef assistant.

Given ingredients from the user,
suggest a delicious recipe.

Format the response in markdown.
`

export async function getRecipeFromOllama(ingredientsArr) {

    const ingredientsString = ingredientsArr.join(", ")

    try {

        const response = await ollama.chat({

            model: "llama3",

            messages: [

                {
                    role: "system",
                    content: SYSTEM_PROMPT
                },

                {
                    role: "user",
                    content:
                        `I have ${ingredientsString}.
                        Suggest a recipe I can make.`
                }
            ]
        })

        return response.message.content

    } catch (err) {

        console.error(err)

        return "Error generating recipe."
    }
}



/* const SYSTEM_PROMPT = `
You are an assistant that receives a list
of ingredients and suggests a recipe.

Format response in markdown.
`

export async function getRecipeFromOpenRouter(
    ingredientsArr
) {

    const ingredientsString =
        ingredientsArr.join(", ")

    try {

        const response = await fetch(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",

                    "Authorization":
                        `Bearer ${
                            import.meta.env
                            .VITE_OPENROUTER_API_KEY
                        }`
                },

                body: JSON.stringify({

                    model:
                        "mistralai/mistral-7b-instruct",

                    messages: [

                        {
                            role: "system",
                            content: SYSTEM_PROMPT
                        },

                        {
                            role: "user",

                            content:
                                `I have ${ingredientsString}.
                                Suggest a recipe.`
                        }
                    ]
                })
            }
        )

        const data = await response.json()

        console.log(data)

        return data.choices[0]
            .message.content

    } catch(err) {

        console.error(err)

        return `
## Failed to generate recipe

Please try again.
`
    }
}

 */




/* import { GoogleGenerativeAI } from "@google/generative-ai"

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients.

You don't need to use every ingredient they mention in your recipe.

The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients.

Format your response in markdown to make it easier to render to a web page.
`

// Initialize Gemini
const genAI = new GoogleGenerativeAI(
    import.meta.env.VITE_GEMINI_API_KEY
)

// Use a currently supported flash model
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash"
})

function makeLocalRecipe(ingredientsArr) {
    const primary = ingredientsArr.slice(0, 3).join(", ") || "your ingredients"

    return `
## Quick ${ingredientsArr[0] || "Pan"} Recipe

### Ingredients
- ${ingredientsArr.join("\n- ")}
- salt
- pepper
- oil

### Instructions
1. Heat a pan with a little oil.
2. Add ${primary} and cook until fragrant.
3. Season with salt and pepper.
4. Add a splash of water if needed and cook until done.
5. Serve hot.
`
}

export async function getRecipeFromGemini(ingredientsArr) {

    const ingredientsString = ingredientsArr.join(", ")

    const userPrompt = `
    I have ${ingredientsString}.

    Please give me a recipe you'd recommend I make.
    `

    try {

        console.log(
            "Gemini API key present:",
            Boolean(import.meta.env.VITE_GEMINI_API_KEY)
        )

        const result = await model.generateContent(
            SYSTEM_PROMPT + "\n\n" + userPrompt
        )

        const response = await result.response

        const text = response.text()

        return text

    } catch (err) {
        const message = String(err?.message || err || "")
        const isQuotaError = message.includes("429") || message.toLowerCase().includes("quota")

        if (!isQuotaError) {
            console.error("Gemini API failed:", err)
        }

        return makeLocalRecipe(ingredientsArr)
    }
} */

/* import Anthropic from "@anthropic-ai/sdk" */
/* import { HfInference } from '@huggingface/inference'
 */
/* const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a 
recipe they could make with some or all of those ingredients. You don't need to use every ingredient 
they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to
 include too many extra ingredients. Format your response in markdown to make it easier to render to a web page`
 */
// 🚨👉 ALERT: Read message below! You've been warned! 👈🚨
// If you're following along on your local machine instead of
// here on Scrimba, make sure you don't commit your API keys
// to any repositories and don't deploy your project anywhere
// live online. Otherwise, anyone could inspect your source
// and find your API keys/tokens. If you want to deploy
// this project, you'll need to create a backend of some kind,
// either your own or using some serverless architecture where
// your API calls can be made. Doing so will keep your
// API keys private.

/* const anthropic = new Anthropic({
    // Make sure you set an environment variable in Scrimba 
    // for ANTHROPIC_API_KEY
    apiKey: process.env.ANTHROPIC_API_KEY,

    dangerouslyAllowBrowser: true,
})

export async function getRecipeFromChefClaude(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    const msg = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
            { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
        ],
    });
    return msg.content[0].text
}*/

// Make sure you set an environment variable in Scrimba 
// for HF_ACCESS_TOKEN
/* const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-7B-Instruct-v0.3",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
} */
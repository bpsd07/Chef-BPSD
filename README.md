#  Chef BPSD

Chef Claude AI is a React + Ollama powered AI recipe generator that creates recipes from ingredients entered by the user.

The project uses:
- React
- Vite
- HTML
- CSS
- Javascript
- Ollama
- Local LLMs (Llama3 / Qwen / Phi3)
- Markdown rendering

Unlike cloud AI apps, this project runs completely locally using Ollama, meaning:
- no API limits
- no billing
- no internet dependency after setup
- full privacy

---

#  Features

- Add ingredients dynamically
- AI-generated recipes
- Local AI inference with Ollama
- Markdown formatted recipe rendering
- Fast React UI
- Fully offline support
- No paid APIs required

---

#  AI Models Used

The project supports local Ollama models such as:

- llama3
- qwen2.5:3b
- phi3:mini

Recommended model:

```bash
ollama pull qwen2.5:3b

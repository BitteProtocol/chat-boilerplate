# Bitte AI Chat Boilerplate

## Overview

This boilerplate provides a quick start for integrating the Bitte AI Chat component into your web application. It offers a pre-configured setup for implementing an AI chat interface with customizable options.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or later)
- **pnpm** (Node Package Manager)
- **A Bitte API Key**

## Getting Started

### 1. Obtain an API Key

1. Visit [https://key.bitte.ai/](https://key.bitte.ai/)
2. Create an account or log in
3. Generate a new API key
4. Keep the API key secure and do not share it publicly

### 2. Clone the Repository

```bash
git clone https://github.com/BitteProtocol/chat-boilerplate.git
cd chat-boilerplate
```

### 3. Install Dependencies

```bash
pnpm install
```

## Configuration

### Environment Variables

Create a `.env` file in the project root with the following configuration:

```plaintext
# Bitte API Key
BITTE_API_KEY=your_api_key_here

# Optional: Additional configuration parameters
NEXT_PUBLIC_AGENT_ID=your-agent-id.vercel.app
NEXT_PUBLIC_AGENT_NAME=Your Agent Name
```

### Main Component Configuration (`Main.tsx`)

The `Main.tsx` component is the core of the chat integration. Here's a breakdown of its key components:

#### Agent Configuration

```typescript
const bitteAgent = {
  id: "your-agent-id.vercel.app",      // Unique agent identifier
  name: "Your Agent Name",              // Display name for the agent
  description: "Agent Description",     // Brief description of the agent's purpose
  image: "/icon.svg",                   // Path to agent's profile image
};
```

#### Chat Component Properties

The `BitteAiChat` component accepts several important props:

- `options`: Customize agent display
- `agentId`: Unique identifier for the agent
- `wallet`: Wallet configuration (for blockchain interactions)
- `apiUrl`: Endpoint for chat API
- `colors`: Custom color scheme
- `welcomeMessageComponent`: Custom welcome message

#### Wallet Integration

The component uses `useBitteWallet` hook to manage wallet connections, supporting blockchain-based interactions.

### Customization

#### Styling

Customize the chat interface by modifying the `colors` prop:

```typescript
colors={{
  generalBackground: "#18181A",     // Background color
  messageBackground: "#0A0A0A",     // Message area background
  textColor: "#FAFAFA",              // Primary text color
  buttonColor: "#000000",            // Button and interactive element color
  borderColor: "#334155",            // Border and separator color
}}
```

#### Welcome Message

Create a custom `WelcomeMessage` component to personalize the initial chat experience:

```typescript
const WelcomeMessage: React.FC = () => (
  <div>
    <h2>Welcome to Our AI Assistant!</h2>
    <p>How can I help you today?</p>
  </div>
);
```

## Development

### Running the Project

Start the development server:

```bash
pnpm run dev
```

The application will launch in development mode, typically at `http://localhost:3000`.

### Build for Production

To create a production build:

```bash
pnpm run build
```

### Deployment Considerations

- Ensure all environment variables are correctly set in your production environment
- Configure CORS and security settings as needed
- Consider server-side rendering (SSR) requirements

## Troubleshooting

### Common Issues

1. **API Key Errors**
   - Verify your Bitte API key is correct
   - Check network connectivity
   - Ensure key permissions are properly set

2. **Wallet Connection Problems**
   - Confirm blockchain network settings
   - Check wallet provider compatibility

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[Insert License Information]

## Support

For additional support, please visit:
- Bitte AI Documentation: [https://docs.bitte.ai/agents/embeddable-chat-component](https://docs.bitte.ai/agents/embeddable-chat-component)
- GitHub Issues: [Repository Issues Page]
# Implementation Plan - Fix 3D Scale Clipping

Ensure the 3D Golden Justice Scale is fully visible on the screen without being cut off by container boundaries.

## Proposed Changes

### Components

### [REFINE] [ChatWidget.tsx](file:///Users/tescaelements/Desktop/lex-360-app/src/components/chatbot/ChatWidget.tsx)
- **Multi-step Interaction**:
    - **Selection**: User picks a category (Fiscal, Amparo, etc. or "Otro").
    - **Step 1: Identity**: Ask for Full Name (e.g., "Para personalizar su atención, ¿cuál es su nombre completo?").
    - **Step 2: Contact**: Ask for Email or Phone (e.g., "¿Dónde podemos contactarle?").
    - **Step 3: Synthesis**: Ask for a brief case description (e.g., "Cuéntenos brevemente su caso para darle una visión 360°").
- **Visual Feedback**: Use a progress indicator or step-by-step UI messages to guide the user.

### [REFINE] [route.ts](file:///Users/tescaelements/Desktop/lex-360-app/src/app/api/chat/route.ts)
- **Service Integration**: Inject the firm's service catalog (Derecho Fiscal, Amparo, Civil, etc.) into the system prompt.
- **Expert Referencing**: Instruct the AI to:
    - Refer specifically to the relevant service section.
    - Recommend the appropriate leader (Diana Montserrat for Administrative/Fiscal, Alejandro Valenzuela for Constitutional/Amparo, etc.).
    - Acknowledge the user's data collected in the preceding steps.

## Verification Plan
- **Flow Test**: Walk through the bot selecting different options and verify it asks for name/contact/case in order.
- **Reference Test**: Verify the AI recommends a specific legal area and lawyer based on the case description provided.

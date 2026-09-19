# Driftwatch

**The firewall that remembers.**

Driftwatch is a stateful security layer for AI conversations and agent tool activity. Rather than evaluating only the current prompt, Driftwatch retains session state and correlates signals across turns and tool activity.

## Microsoft Hackathon

Built for **Microsoft Hackathon — Hack SFI with AI**.

## What Driftwatch demonstrates

- Session-level detection for gradual multi-turn attacks
- Intent drift, secret probing, exfiltration budget, tool-chain, and refusal-probing detectors
- MCP tool-boundary interception
- Agent kill switch and quarantine
- TLS-terminating gateway pattern
- OpenTelemetry-shaped security telemetry
- Evaluation harness comparing stateful inspection with a per-message baseline

## Live site

**https://rohitanandriso.github.io/driftwatch/**

## Repository

**https://github.com/rohitanandriso/driftwatch**

## Current evaluation results

These results come from the current Driftwatch evaluation corpus and harness and should be treated as prototype results, not independent production benchmarks.

| Metric | Driftwatch |
| --- | ---: |
| Multi-turn attacks detected | 94.4% |
| Single-turn attacks detected | 100% |
| Benign false positives in current corpus | 0.0% |
| Mean inspection latency | ~1.3 ms |
| Data-loss reduction on theft attacks | 69.5% |

## Microsoft-native integration path

Driftwatch is positioned as a complementary security layer that can integrate with:

- **Azure OpenAI** for the production model target
- **Prompt Shields** for per-input attack detection
- **Microsoft Purview** for sensitive-data context
- **Entra Agent ID** for durable non-human identity and quarantine
- **Microsoft Sentinel** for security telemetry and investigation
- **MCP** for tool-boundary inspection

## Production roadmap

- Wire a real Azure OpenAI target
- Replace the local baseline with live Prompt Shields
- Move session and quarantine state to a shared store such as Redis
- Add cross-agent trust propagation
- Derive governance context from Purview and identity signals
- Expand MCP interoperability

## Landing page files

- `index.html`
- `styles.css`
- `script.js`

GitHub Pages publishes directly from the repository root.

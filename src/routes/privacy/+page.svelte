<!-- src/routes/privacy/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | ETH Vanity Generator</title>
  <meta name="description" content="Learn how the ETH Vanity Generator protects your privacy with fully client-side processing and no data collection." />
  <meta property="og:title" content="Privacy Policy | ETH Vanity Generator" />
  <meta property="og:description" content="Learn how the ETH Vanity Generator protects your privacy with fully client-side processing and no data collection." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: December 23, 2025</p>

    <h2>1. Introduction</h2>
    <p>Welcome to the <strong>ETH Vanity Generator</strong>, a free, open-source, client-side web utility that allows users to generate Ethereum vanity addresses directly in their browser. We are fully committed to protecting your privacy. This tool operates on a <strong>zero-data-collection principle</strong>. All address generation, including private key creation and prefix matching, happens exclusively on your device. <strong>We do not collect, store, transmit, or process any personal information or generated keys.</strong> This Privacy Policy explains our practices in detail.</p>

    <h2>2. Information We Do Not Collect</h2>
    <p>The ETH Vanity Generator is designed as a completely stateless static site. We do not gather any data whatsoever, including:</p>
    <ul>
      <li><strong>Personal Information</strong>: No names, email addresses, IP addresses, or any identifiers.</li>
      <li><strong>Generated Keys or Addresses</strong>: Private keys, public keys, and vanity addresses are created and remain solely in your browser.</li>
      <li><strong>Usage Data</strong>: No tracking of visits, browser details, device information, or interaction patterns.</li>
      <li><strong>Analytics or Logs</strong>: We do not use cookies, analytics scripts, server logs, or any monitoring tools.</li>
    </ul>
    <p>Everything you input or generate stays on your local machine and is never sent anywhere.</p>

    <h2>3. How the Tool Works</h2>
    <p>When you use the ETH Vanity Generator:</p>
    <ul>
      <li><strong>Local Processing</strong>: You enter a desired hex prefix. The tool uses the ethers.js library to repeatedly generate random private keys, derive addresses via Keccak-256 hashing, and check for matches—all within your browser using JavaScript.</li>
      <li><strong>No Network Requests During Generation</strong>: After initial page load, no data leaves your device. Copy-to-clipboard and display functions are handled natively by the browser.</li>
      <li><strong>Static Hosting</strong>: The site is deployed on GitHub Pages with no backend server, database, or logging capabilities.</li>
    </ul>
    <p>This architecture guarantees <strong>complete privacy and data isolation</strong>.</p>

    <h2>4. Third-Party Services</h2>
    <p>We load Bootstrap CSS and JS from a public CDN solely for styling and layout. These resources do not track users or set cookies in this context. No other external services are used.</p>

    <h2>5. Cookies and Tracking</h2>
    <p>This site <strong>does not use cookies</strong>, localStorage persistence, session storage beyond temporary needs, or any tracking technologies. Your experience is entirely stateless.</p>

    <h2>6. Security Note</h2>
    <p>While we collect nothing, browser-based key generation carries inherent risks. Generated keys should never hold significant funds without additional precautions. Users are responsible for their own device security.</p>

    <h2>7. Children's Privacy</h2>
    <p>The tool is not directed at children under 13. We do not knowingly collect any information from children.</p>

    <h2>8. Changes to This Policy</h2>
    <p>We may update this Privacy Policy occasionally. Changes will be reflected here with a new effective date.</p>

    <h2>9. Contact</h2>
    <p>For questions about this policy, please open an issue on our public GitHub repository.</p>

    <p class="italic-note">Your privacy is our priority. By using the ETH Vanity Generator, you acknowledge this <strong>no-collection policy</strong> and accept responsibility for securely handling any generated keys.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    margin: 0 auto;
    padding-top: 4rem;
    padding-bottom: 6rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2rem;
    font-size: 0.95rem;
    opacity: 0.85;
  }

  .breadcrumbs a {
    color: var(--accent-light);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .breadcrumbs a:hover {
    color: var(--primary-violet);
    text-decoration: underline;
  }

  .breadcrumbs span {
    opacity: 0.6;
  }

  .breadcrumbs p {
    margin: 0;
    font-weight: 500;
  }

  .prose {
    line-height: 1.9;
  }

  .prose .post-meta {
    opacity: 0.75;
    font-size: 0.95rem;
    margin-bottom: 2.5rem;
    padding-bottom: 1.2rem;
    border-bottom: 1px solid var(--glass-border);
  }

  .prose h1 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-main);
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .prose h2 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--accent-light);
    margin-top: 3.5rem;
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--glass-border);
  }


  .prose p {
    font-size: 1.1rem;
    margin-bottom: 1.6rem;
    opacity: 0.95;
  }

  .prose ul {
    list-style-type: none;
    padding-left: 0;
    margin: 1.5rem 0;
  }

  .prose ul li {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  .prose ul li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--accent-light);
    font-weight: bold;
    font-size: 1.2rem;
  }

  .prose strong {
    color: var(--accent-light);
    font-weight: 600;
  }

  .prose .italic-note {
    font-style: italic;
    text-align: center;
    font-size: 1.2rem;
    color: var(--accent-light);
    margin-top: 4.5rem;
    padding: 2rem;
    background: var(--glass-bg);
    border-radius: 20px;
    opacity: 0.9;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .post-layout {
      padding: 2.5rem 1.5rem;
    }

    .prose h1 {
      font-size: 2.5rem;
    }

    .prose h2 {
      font-size: 1.8rem;
    }

    .prose p, .prose ul li {
      font-size: 1.05rem;
    }

  }
</style>
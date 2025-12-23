<!-- src/routes/terms/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | ETH Vanity Generator</title>
  <meta name="description" content="Terms of use for the ETH Vanity Generator, a client-side Ethereum vanity address tool." />
  <meta property="og:title" content="Terms and Conditions | ETH Vanity Generator" />
  <meta property="og:description" content="Terms of use for the ETH Vanity Generator, a client-side Ethereum vanity address tool." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: December 23, 2025</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>ETH Vanity Generator</strong> ("the Tool"), a free, open-source, client-side web application for generating Ethereum vanity addresses, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Tool.</p>

    <h2>2. Description of Service</h2>
    <p>The Tool is a static web utility that runs entirely in your browser. It generates random Ethereum private keys, derives addresses, and searches for user-specified hex prefixes using standard cryptographic methods. All processing occurs locally on your device.</p>

    <h2>3. No Warranty</h2>
    <p>The Tool is provided <strong>"as is"</strong> and <strong>without any warranties</strong>, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee that the Tool will be uninterrupted, error-free, or suitable for generating addresses holding significant value.</p>

    <h2>4. Limitation of Liability</h2>
    <p>In no event shall the developers, contributors, or hosting providers be liable for any direct, indirect, incidental, special, or consequential damages arising from use of the Tool, including but not limited to loss of funds, compromised private keys, or failed transactions. You use the Tool entirely at your own risk.</p>

    <h2>5. User Responsibilities</h2>
    <ul>
      <li>You are solely responsible for securely storing and managing any private keys generated.</li>
      <li>Never use generated keys for substantial funds without understanding browser-based generation risks.</li>
      <li>Verify addresses independently before transferring assets.</li>
      <li>Do not rely on the Tool as your only method of key generation for critical applications.</li>
    </ul>

    <h2>6. Security Advisory</h2>
    <p>Browser environments are not considered secure for high-value key generation. For significant holdings, use air-gapped hardware wallets or trusted offline tools. We strongly recommend testing with small amounts first.</p>

    <h2>7. Intellectual Property</h2>
    <p>The Tool is open-source and licensed under the MIT License. You may fork, modify, and redistribute the code subject to the license terms. The content and design are copyrighted but freely usable under fair use principles.</p>

    <h2>8. Prohibited Uses</h2>
    <p>You may not use the Tool for illegal purposes, to generate addresses intended for fraud, or to overload hosting services. We reserve the right to restrict access if abuse is detected.</p>

    <h2>9. Modifications</h2>
    <p>We may update these Terms at any time. Continued use after changes constitutes acceptance of the new terms.</p>

    <h2>10. Governing Law</h2>
    <p>These Terms shall be governed by general principles of open-source software usage and applicable international law, without regard to conflict of law provisions.</p>

    <p class="italic-note">Thank you for using the ETH Vanity Generator responsibly. Your security is your responsibility—use this Tool wisely.</p>
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
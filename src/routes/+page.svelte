<script>
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';
  import { fade, fly } from 'svelte/transition';

  let prefix = '';
  let error = '';
  let warning = '';

  function calculateExpectedAttempts(len) {
    if (len === 0) return 0;
    return Math.pow(16, len) / 2;
  }

  function formatAttempts(num) {
    if (num < 1e6) return num.toLocaleString();
    if (num < 1e9) return (num / 1e6).toFixed(1) + ' million';
    return (num / 1e9).toFixed(1) + ' billion';
  }

  function validatePrefix() {
    const trimmed = prefix.trim().toLowerCase();
    const regex = /^[0-9a-fA-F]{1,8}$/;
    if (trimmed === '') { error = 'Please enter a prefix.'; warning = ''; return false; }
    if (!regex.test(trimmed)) { error = 'Invalid prefix: Must be 1-8 hex chars.'; warning = ''; return false; }
    
    error = '';
    const len = trimmed.length;
    const expected = calculateExpectedAttempts(len);
    if (len <= 3) warning = `Easy – expected ~${formatAttempts(expected)} attempts.`;
    else if (len <= 5) warning = `Moderate – expected ~${formatAttempts(expected)} attempts.`;
    else warning = `Hard – expected ~${formatAttempts(expected)} attempts.`;
    return true;
  }

  function handleSubmit() {
    if (validatePrefix()) {
      goto(`${base}/results?prefix=${encodeURIComponent(prefix.trim())}`);
    }
  }
</script>

<svelte:head>
  <title>ETH Vanity Generator | Create Custom Ethereum Addresses</title>
  <meta name="description" content="Free, secure, client-side Ethereum vanity address generator. Create addresses with custom hex prefixes in your browser – no data leaves your device." />
  
  <meta property="og:title" content="ETH Vanity Generator | Custom Ethereum Addresses" />
  <meta property="og:description" content="Generate personalized Ethereum vanity addresses safely in your browser. Privacy-first, open-source tool using ethers.js – no server, no tracking." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{base}/" />
  <meta property="og:site_name" content="ETH Vanity Generator" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="ETH Vanity Generator | Custom Ethereum Addresses" />
  <meta name="twitter:description" content="Free browser-based tool to generate Ethereum vanity addresses with your custom prefix. 100% client-side, private & secure." />
  
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />
  <link rel="canonical" href="{base}/" />
</svelte:head>

<div class="container">
  <section class="row justify-content-center py-5" in:fade={{ duration: 1000 }}>
    <div class="col-lg-8 text-center">
      <h1 class="display-3 fw-bold mb-3" style="letter-spacing: -2px;">ETH Vanity <span style="color: var(--primary-violet)">Generator</span></h1>
      <p class="lead mb-5 opacity-75">Generate secure, personalized Ethereum addresses directly in your browser.</p>

      <div class="glass-card p-5 text-start mx-auto shadow-lg" style="max-width: 600px;" in:fly={{ y: 50, duration: 800, delay: 200 }}>
        <div class="mb-4">
          <label for="prefix" class="form-label fw-bold small">Desired Hex Prefix</label>
          <input
            type="text"
            id="prefix"
            class="form-control form-control-lg rounded-4 glass border-0 px-4 py-3"
            bind:value={prefix}
            on:input={validatePrefix}
            maxlength="8"
            placeholder="e.g. beef"
          />
          {#if error}
            <div class="text-danger mt-2 small"><i class="bi bi-exclamation-circle me-1"></i> {error}</div>
          {/if}
          {#if warning}
            <div class="mt-3 p-3 rounded-4 small glass" style="border-left: 4px solid var(--primary-violet)">
              {warning}
            </div>
          {/if}
        </div>

        <button class="btn-bmac w-100 py-3 fs-5" on:click={handleSubmit} disabled={prefix.trim() === '' || !!error}>
          Start Generation
        </button>
      </div>
    </div>
  </section>

<div class="container py-5" id="about">
  <div in:fade={{ duration: 800 }}>
    <h1 class="display-5 fw-bold text-center mb-5" in:fly={{ y: -50, delay: 200 }}>About ETH Vanity Generator</h1>
  </div>

  <div class="row g-5">
    <div class="col-lg-8 mx-auto">
      <article class="prose prose-lg" in:fade={{ delay: 400 }}>
        <p>
          The <strong>ETH Vanity Generator</strong> is a free, open-source, fully client-side web utility designed to help Ethereum users create personalized vanity addresses. A vanity address is a standard Ethereum wallet address that includes a custom hexadecimal pattern—typically a prefix after "0x"—making it more recognizable, memorable, and brandable.
        </p>

        <p>
          Unlike many online vanity tools, this generator prioritizes <strong>privacy and security above all</strong>. Every step of the process—from random private key generation to address derivation using the Keccak-256 hash—happens exclusively in your browser. No data, including private keys, prefixes, or generated addresses, is ever transmitted to any server. This stateless, static-site architecture ensures complete data isolation.
        </p>

        <p>
          Built with modern web technologies (SvelteKit, ethers.js, and Bootstrap), the tool delivers a smooth, responsive experience while maintaining minimal dependencies. It is hosted on GitHub Pages with no backend, no databases, and no tracking. The source code is fully open under the MIT license, allowing anyone to review, fork, or contribute.
        </p>

        <p>
          The core motivation behind this project is to provide a trustworthy alternative to server-based generators, many of which have historically posed risks due to potential logging of private keys. By running locally, users retain full control and eliminate third-party trust requirements.
        </p>

        <p>
          While browser performance limits the practical length of searchable prefixes (typically up to six characters for reasonable wait times), the tool includes clear difficulty indicators and real-time progress feedback to set accurate expectations. For longer patterns, dedicated GPU-accelerated tools are recommended.
        </p>

        <p>
          This utility aligns with Ethereum's decentralized ethos: empowering individuals with accessible, transparent tools that respect privacy. Whether you're creating a branded project address, a playful personal wallet, or simply exploring address generation mechanics, the ETH Vanity Generator offers a safe and educational platform.
        </p>

        <p>
          We encourage responsible use—always verify generated addresses, securely back up private keys, and test with small amounts before committing significant funds. Vanity addresses remain cryptographically secure when generated properly, but the responsibility for key management lies entirely with the user.
        </p>

        <p class="italic-note text-center mt-5">
          Empowering Ethereum users with privacy-first vanity address generation—one local computation at a time.
        </p>
      </article>
    </div>
  </div>
</div>

<div class="container py-5" id="how-to-use">
  <div in:fade={{ duration: 800 }}>
    <h1 class="display-5 fw-bold text-center mb-5" in:fly={{ y: -50, delay: 200 }}>How to Use ETH Vanity Generator</h1>
  </div>

  <div class="row g-5">
    <div class="col-lg-8 mx-auto">
      <article class="prose prose-lg" in:fade={{ delay: 400 }}>
        <p>
          Using the ETH Vanity Generator is straightforward and secure. Follow these steps to create your custom Ethereum vanity address directly in your browser.
        </p>

        <h2>Step 1: Choose Your Prefix</h2>
        <p>
          On the home page, enter your desired hexadecimal prefix (1–8 characters). Valid characters are 0–9 and a–f (case-insensitive). Examples: "cafe", "1337", "dead", or "beef". The tool immediately validates your input and displays a difficulty warning with estimated average attempts.
        </p>

        <h2>Step 2: Start Generation</h2>
        <p>
          Click <strong>Start Generation</strong>. You will be navigated to the results page where the search begins automatically. The tool generates random private keys, derives addresses using ethers.js and Keccak-256 hashing, and checks for prefix matches—all locally.
        </p>

        <p>
          Real-time feedback shows current attempts and generation speed (typically 20,000–50,000 attempts per second). You can cancel at any time if the prefix proves too difficult.
        </p>

        <h2>Step 3: Review Results</h2>
        <p>
          When a match is found, the tool displays:
        </p>
        <ul>
          <li>Full checksummed Ethereum address (starting with your prefix)</li>
          <li>Private key (66-character hex)</li>
          <li>Public key</li>
          <li>Total attempts required</li>
        </ul>
        <p>
          Use the <strong>Copy</strong> buttons to securely transfer values to your clipboard.
        </p>

        <h2>Step 4: Secure Your Key</h2>
        <p>
          Immediately back up the private key offline. Consider importing it into a hardware wallet or encrypting it. Never store it in plain text or cloud services.
        </p>

        <h2>Best Practices</h2>
        <ul>
          <li>Start with short prefixes (3–5 characters) for quick results.</li>
          <li>Generate multiple candidates and choose your favorite.</li>
          <li>Always verify the address matches your prefix before funding.</li>
          <li>Test with tiny amounts first.</li>
          <li>For high-value use, consider offline or air-gapped generation.</li>
        </ul>

        <p>
          The entire process is designed for simplicity while maintaining maximum privacy—no data leaves your device.
        </p>

        <p class="italic-note text-center mt-5">
          Create memorable Ethereum addresses safely and privately in just a few clicks.
        </p>
      </article>
    </div>
  </div>
</div>

<div class="container py-5" id="faq">
  <div in:fade={{ duration: 800 }}>
    <h1 class="display-5 fw-bold text-center mb-5" in:fly={{ y: -50, delay: 200 }}>Frequently Asked Questions</h1>
  </div>

  <div class="row g-5">
    <div class="col-lg-10 mx-auto">
      <article class="prose prose-lg" in:fade={{ delay: 400 }}>
        <h2>Is this tool safe to use?</h2>
        <p>
          Yes—when used responsibly. All generation occurs client-side in your browser using cryptographically secure randomness from the Web Crypto API. No private keys or data are transmitted. However, browser environments are not ideal for extremely high-value keys; consider offline tools for significant funds.
        </p>

        <h2>Are vanity addresses less secure?</h2>
        <p>
          No. The custom pattern does not reduce cryptographic strength. The private key retains full 256-bit entropy, and the address space remains vast. Security depends entirely on proper key generation and storage practices.
        </p>

        <h2>How long will my prefix take?</h2>
        <p>
          Difficulty increases exponentially: each additional character multiplies expected attempts by 16. 1–4 characters: seconds; 5 characters: minutes; 6 characters: minutes to hours; 7–8 characters: days to impractical in browser.
        </p>

        <h2>Why can't I search for suffixes?</h2>
        <p>
          Due to the one-way nature of Keccak-256 hashing, prefix searches are vastly more efficient than suffix or middle-pattern searches. Most vanity tools focus on prefixes for this reason.
        </p>

        <h2>Is the tool really free and open source?</h2>
        <p>
          Completely free with no limits or ads. The full source code is publicly available under the MIT license on GitHub for review and contribution.
        </p>

        <h2>Does it work on mobile?</h2>
        <p>
          Yes, on modern mobile browsers. Performance will be lower than desktop, making longer prefixes less practical.
        </p>

        <h2>Can I speed up generation?</h2>
        <p>
          Open multiple tabs with different prefixes to utilize more CPU cores. For serious long patterns, use dedicated GPU tools like VanityGen or Profanity (with caution).
        </p>

        <h2>What alternatives exist?</h2>
        <p>
          Ethereum Name Service (ENS) for human-readable names, CREATE2 for predictable contract addresses, or hardware wallet vanity features where available.
        </p>

        <h2>Should I fund a vanity address immediately?</h2>
        <p>
          Always test with small amounts first and independently verify the address matches your prefix.
        </p>

        <p class="italic-note text-center mt-5">
          Have more questions? Explore the blog or open an issue on GitHub—we're here to help.
        </p>
      </article>
    </div>
  </div>
</div>


</div>

<style>
#about, #how-to-use, #faq { scroll-margin-top: 120px; }

.prose {
  line-height: 1.9;
}
.prose h2 {
  margin-top: 2.5rem;
  border-bottom: 1px solid var(--secondary-bg);
  padding-bottom: 0.5rem;
}
.italic-note {
  font-style: italic;
  font-size: 1.1rem;
  color: var(--text-secondary);
}
</style>
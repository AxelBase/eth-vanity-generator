<!-- src/routes/blog/posts/post1/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>What Are Ethereum Vanity Addresses? | ETH Vanity Generator Blog</title>
  <meta name="description" content="An introduction to Ethereum vanity addresses, explaining what they are, why people create them, and how custom prefixes enhance wallet recognition." />
  <meta property="og:title" content="What Are Ethereum Vanity Addresses? | ETH Vanity Generator Blog" />
  <meta property="og:description" content="An introduction to Ethereum vanity addresses, explaining what they are, why people create them, and how custom prefixes enhance wallet recognition." />
  <meta property="og:url" content="{base}/blog/posts/post1" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>What Are Ethereum Vanity Addresses?</p>
  </div>

  <article class="prose">
    <h1>What Are Ethereum Vanity Addresses?</h1>
   
    <p class="post-meta">Published: December 23, 2025</p>
   
    <p>Ethereum vanity addresses are standard Ethereum wallet addresses that contain a user-chosen pattern, most commonly a custom prefix right after the "0x". While every Ethereum address is 20 bytes long and represented as 40 hexadecimal characters, vanity addresses stand out because they include recognizable strings such as "dead", "cafe", "beef", or even a personal name spelled in hex.</p>
   
    <p>These addresses are fully functional and cryptographically secure when generated correctly. The custom pattern does not weaken the underlying security; it simply makes the address more memorable or brandable. For example, a project might generate an address starting with its token ticker, or an individual might prefer one beginning with "1337" for a playful touch.</p>
   
    <h2>Why People Create Vanity Addresses</h2>
    <p>The primary motivation is improved recognition. In a sea of random 42-character strings, a vanity address is easier to identify at a glance, reducing the risk of copy-paste errors when sharing or verifying addresses. Brands and projects often use them for marketing purposes, as a distinctive address reinforces identity across wallets, explorers, and documentation.</p>
   
    <p>Another benefit is trust signaling. Users are more likely to double-check an address that contains a familiar pattern rather than a completely random one, potentially lowering the chance of falling for phishing attempts that swap in fake addresses.</p>
   
    <h2>How Vanity Addresses Differ from Regular Ones</h2>
    <p>Regular Ethereum addresses are derived directly from a public key using the Keccak-256 hash function. They appear random because the hash output is uniformly distributed. Vanity addresses, however, are found through repeated generation of private keys until the resulting address matches the desired pattern.</p>
   
    <p>This search process is probabilistic. The longer the desired prefix, the more attempts are required on average. A one-character prefix might be found almost instantly, while an eight-character prefix could require billions or trillions of attempts, making it impractical without specialized hardware.</p>
   
    <h2>Common Use Cases</h2>
    <ul>
      <li>Project donation or treasury addresses with the project name or ticker</li>
      <li>Personal wallets with favorite words or numbers encoded in hex</li>
      <li>NFT collections using themed prefixes</li>
      <li>Exchange deposit addresses customized per asset</li>
    </ul>
   
    <h3>Limitations to Consider</h3>
    <p>Vanity addresses only affect the visible string representation. They do not provide additional privacy or security features beyond a standard address. The effort required grows exponentially with prefix length, so most practical vanity addresses use four to six characters.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>Are vanity addresses less secure?</summary>
      <p>No, when generated with proper randomness and sufficient entropy, they are just as secure as any other address.</p>
    </details>
    <details>
      <summary>Can I request a suffix instead of a prefix?</summary>
      <p>Prefix searches are far more common and efficient. Suffix searches are computationally much harder due to the way addresses are derived.</p>
    </details>
    <details>
      <summary>Do vanity addresses cost more gas?</summary>
      <p>No, they behave identically to regular addresses on the Ethereum network.</p>
    </details>
   
    <p class="italic-note">Understanding vanity addresses helps users make informed decisions about customization while maintaining security best practices.</p>
  </article>
</div>

<style>
  :global(body) {
    font-family: 'Poppins', sans-serif;
  }

  .post-layout {
    max-width: 800px;
    margin: 0 auto;
    padding-top: 3rem;
    padding-bottom: 5rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2rem;
    font-size: 0.95rem;
    opacity: 0.8;
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
    color: var(--text-main);
    opacity: 0.6;
  }

  .breadcrumbs p {
    margin: 0;
    color: var(--text-main);
    font-weight: 500;
  }

  .prose {
    line-height: 1.9;
    color: var(--text-main);
  }

  .prose .post-meta {
    color: var(--text-main);
    opacity: 0.7;
    font-size: 0.95rem;
    margin-bottom: 2.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--glass-border);
  }

  .prose h1 {
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--text-main);
    margin-bottom: 0.75rem;
    line-height: 1.2;
  }

  .prose h2 {
    font-size: 1.9rem;
    font-weight: 600;
    color: var(--accent-light);
    margin-top: 3rem;
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--glass-border);
  }

  .prose h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-main);
    margin-top: 2.5rem;
    margin-bottom: 0.75rem;
  }

  .prose p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }

  .prose ul {
    list-style-type: none;
    padding-left: 0;
    margin-bottom: 1.5rem;
  }

  .prose ul li {
    position: relative;
    padding-left: 1.8rem;
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
  }

  .prose ul li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--accent-light);
    font-weight: bold;
  }

  .prose details {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    transition: all 0.3s ease;
  }

  .prose details[open] {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  .prose summary {
    cursor: pointer;
    font-weight: 600;
    font-size: 1.15rem;
    color: var(--accent-light);
    list-style: none;
    display: flex;
    align-items: center;
  }

  .prose summary::-webkit-details-marker {
    display: none;
  }

  .prose summary::before {
    content: '+';
    margin-right: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-violet);
    transition: transform 0.3s ease;
  }

  .prose details[open] summary::before {
    content: '−';
  }

  .prose details p {
    margin-top: 1rem;
    padding-left: 2.5rem;
    border-left: 3px solid var(--accent-light);
    opacity: 0.9;
  }

  .prose .italic-note {
    font-style: italic;
    text-align: center;
    font-size: 1.15rem;
    color: var(--accent-light);
    margin-top: 4rem;
    padding: 1.5rem;
    background: var(--glass-bg);
    border-radius: 16px;
    opacity: 0.9;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .prose h1 {
      font-size: 2.3rem;
    }
    .prose h2 {
      font-size: 1.7rem;
    }
    .post-layout {
      padding: 2rem 1rem;
    }
  }
</style>
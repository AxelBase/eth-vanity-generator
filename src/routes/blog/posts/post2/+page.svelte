<!-- src/routes/blog/posts/post2/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>How Vanity Address Generation Works | ETH Vanity Generator Blog</title>
  <meta name="description" content="A technical breakdown of how Ethereum vanity addresses are generated through repeated private key creation and Keccak-256 hashing until a desired prefix match is found." />
  <meta property="og:title" content="How Vanity Address Generation Works | ETH Vanity Generator Blog" />
  <meta property="og:description" content="A technical breakdown of how Ethereum vanity addresses are generated through repeated private key creation and Keccak-256 hashing until a desired prefix match is found." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>How Vanity Address Generation Works</p>
  </div>

  <article class="prose">
    <h1>How Vanity Address Generation Works</h1>
   
    <p class="post-meta">Published: December 23, 2025</p>
   
    <p>Generating an Ethereum vanity address is fundamentally a brute-force search through the vast space of possible private keys until one produces an address that matches the desired pattern. The process relies on the standard Ethereum key derivation mechanism and is performed entirely on the client side in this tool.</p>
   
    <p>The journey begins with a cryptographically secure random 256-bit private key. From this key, an ECDSA public key is derived using the secp256k1 elliptic curve, the same curve used across Ethereum. The public key is then hashed using the Keccak-256 algorithm, and the last 20 bytes of that hash become the Ethereum address. Finally, a checksum is applied to produce the familiar mixed-case representation.</p>
   
    <h2>The Search Loop</h2>
    <p>In vanity generation, this derivation process is repeated continuously. Each iteration generates a new random private key, computes the address, converts it to lowercase hexadecimal, and checks whether it begins with the target prefix. If not, the loop continues with a new key. The search ends only when a match is found.</p>
   
    <p>Because the address is effectively a uniform random 160-bit value, each position in the hexadecimal string has an equal 1/16 chance of being any specific digit or letter from a to f. The probability of matching an n-character prefix is therefore 1 over 16 raised to the power of n.</p>
   
    <h2>Performance Considerations</h2>
    <p>Modern browsers can perform tens of thousands of these derivations per second on a typical desktop or laptop. This speed makes short prefixes of one to four characters nearly instantaneous, while five or six characters may take minutes to hours. Beyond six characters, the expected number of attempts enters the billions or trillions, rendering browser-based generation impractical.</p>
   
    <h3>Client-Side Advantages</h3>
    <p>Running the search entirely in the browser ensures that private keys never leave the user's device. No data is transmitted to any server, preserving complete privacy during the generation process.</p>
   
    <h2>Key Steps in Detail</h2>
    <ul>
      <li>Generate secure random 32-byte private key</li>
      <li>Derive uncompressed public key using secp256k1</li>
      <li>Apply Keccak-256 hash to public key</li>
      <li>Take last 20 bytes as raw address</li>
      <li>Convert to hexadecimal and check prefix match</li>
      <li>Apply EIP-55 checksum for final display</li>
    </ul>
   
    <h2>FAQ</h2>
    <details>
      <summary>Why is prefix matching used instead of full address control?</summary>
      <p>The one-way nature of the Keccak-256 hash prevents efficient searching for patterns beyond short prefixes.</p>
    </details>
    <details>
      <summary>Does the tool use multiple threads?</summary>
      <p>Single-threaded execution via requestAnimationFrame keeps the browser responsive while maximizing attempts per second.</p>
    </details>
    <details>
      <summary>Can generation be paused and resumed?</summary>
      <p>Current implementation runs continuously until completion or cancellation due to the stateless nature of the site.</p>
    </details>
   
    <p class="italic-note">Understanding the underlying mechanics helps users set realistic expectations for generation time and prefix length.</p>
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
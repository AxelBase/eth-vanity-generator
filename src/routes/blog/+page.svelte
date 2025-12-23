<!-- src/routes/blog/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'What Are Ethereum Vanity Addresses?', description: 'An introduction to vanity addresses and why users create custom hex prefixes for their Ethereum wallets.' },
    { href: '/blog/posts/post2', title: 'How Vanity Address Generation Works', description: 'The technical process: generating random private keys, deriving addresses via Keccak-256, and brute-force searching for prefix matches.' },
    { href: '/blog/posts/post3', title: 'Understanding Search Difficulty and Probability', description: 'Why each additional hex character multiplies difficulty by 16x, with real-world estimates for common prefix lengths.' },
    { href: '/blog/posts/post4', title: 'Client-Side Generation: Pros and Cons', description: 'Benefits of browser-based tools (privacy, no data sent) versus performance limits compared to GPU-accelerated alternatives.' },
    { href: '/blog/posts/post5', title: 'Security Considerations for Vanity Addresses', description: 'Key risks, historical vulnerabilities in some generators, and why proper randomness is critical.' },
    { href: '/blog/posts/post6', title: 'Best Practices for Safe Vanity Generation', description: 'Recommendations: use trusted open-source tools, generate offline, verify addresses, and avoid long prefixes for main wallets.' },
    { href: '/blog/posts/post7', title: 'Alternatives to Vanity Addresses', description: 'ENS names, contract vanity via CREATE2, and when a custom prefix isn’t worth the computational effort.' },
  ];
</script>

<svelte:head>
  <title>Blog | ETH Vanity Generator Insights</title>
  <meta name="description" content="Technical articles, guides, and insights about Ethereum vanity address generation, security, and best practices." />
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1><i class="bi bi-journal-richtext"></i> Blog: ETH Vanity Insights</h1>
    <p class="subtitle">
      Deep dives into the mechanics of Ethereum vanity address generation, probability calculations, security implications, and practical usage tips.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article &rarr;</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 4rem;
    padding-bottom: 6rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .blog-header h1 {
    font-size: 3.2rem;
    font-weight: 700;
    color: var(--text-main);
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  .blog-header i {
    color: var(--accent-light);
    margin-right: 0.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
    color: var(--text-main);
    opacity: 0.85;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
  }
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .post-card {
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-decoration: none;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-card:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 50px rgba(74, 25, 44, 0.25);
  }

  .post-card .card-body {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--accent-light);
    margin-bottom: 1rem;
    line-height: 1.4;
  }

  .post-description {
    color: var(--text-main);
    opacity: 0.9;
    flex-grow: 1;
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
    line-height: 1.7;
  }

  .read-more {
    color: var(--primary-violet);
    font-weight: 600;
    font-size: 1.05rem;
    align-self: flex-start;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
  }

  .read-more::after {
    content: '→';
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }

  .post-card:hover .read-more {
    color: var(--accent-light);
  }

  .post-card:hover .read-more::after {
    transform: translateX(8px);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .blog-header h1 {
      font-size: 2.6rem;
    }

    .subtitle {
      font-size: 1.1rem;
      padding: 0 1rem;
    }

    .posts-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .post-card .card-body {
      padding: 1.5rem;
    }

    .post-title {
      font-size: 1.3rem;
    }
  }
</style>
<script lang="ts">
  import { base } from '$app/paths';
  import '../app.css';
  import { fly } from 'svelte/transition';

  let isDropdownOpen = false;

  function toggleDropdown() { isDropdownOpen = !isDropdownOpen; }
  function closeDropdown() { isDropdownOpen = false; }

  function toggleTheme() {
    const current = document.body.dataset.bsTheme;
    document.body.dataset.bsTheme = current === 'dark' ? 'light' : 'dark';
  }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() { document.removeEventListener('click', handleClick, true); }
    };
  }
</script>

<header class="fixed-top p-3 w-100" style="z-index: 1050;">
  <nav class="container glass rounded-pill px-4 py-2 d-flex justify-content-between align-items-center shadow-lg">
    
    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" class="d-flex align-items-center gap-2 text-decoration-none">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" style="height: 32px; transition: 0.3s;" class="hover-rotate" />
        <span class="fw-bold fs-5 d-none d-sm-inline" style="color: var(--text-main)">AxelBase</span>
      </a>

      <button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle Theme">
        <i class="bi bi-moon-stars-fill"></i>
      </button>

      <div class="position-relative" use:clickOutside on:click_outside={closeDropdown}>
        <button 
          class="btn-bmac d-flex align-items-center gap-2" 
          on:click={toggleDropdown}
          aria-label="Support options"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
          </svg>
          <span class="d-none d-md-inline">Buy me a Coffee</span>
        </button>

        {#if isDropdownOpen}
          <div class="position-absolute mt-3 glass rounded-4 shadow-lg overflow-hidden bmac-dropdown-container" transition:fly={{ y: -10, duration: 250 }}>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" class="donation-item" on:click={closeDropdown}>
              <span class="amount">$3</span> One Coffee
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" class="donation-item" on:click={closeDropdown}>
              <span class="amount">$5</span> Two Coffees
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" class="donation-item" on:click={closeDropdown}>
              <span class="amount">$10</span> Three Coffees
            </a>

            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" class="donation-item custom-divider" on:click={closeDropdown}>
              Custom Amount
            </a>

            <a 
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee" 
              class="donation-item crypto-link" 
              on:click={closeDropdown}
            >
              <i class="bi bi-currency-bitcoin"></i> Buy via Crypto
            </a>
          </div>
        {/if}
      </div>
    </div>

    <ul class="nav d-none d-lg-flex align-items-center gap-2 m-0">
      <li><a class="nav-link-custom text-decoration-none" href="{base}/">Home</a></li>
      <li><a class="nav-link-custom text-decoration-none" href="{base}/#about">About</a></li>
      <li><a class="nav-link-custom text-decoration-none" href="{base}/#how-to-use">How to use</a></li>
      <li><a class="nav-link-custom text-decoration-none" href="{base}/#faq">FAQ</a></li>
      <li><a class="nav-link-custom text-decoration-none" href="{base}/blog">Blog</a></li>
    </ul>
  </nav>
</header>

<main style="padding-top: 100px; padding-bottom: 100px;">
  <slot />
</main>

<footer class="releative glass border-top py-3" style="z-index: 1040;">
  <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center opacity-75 small">
    <span>© AxelBase ETH Vanity Address Generator – {new Date().getFullYear()}</span>
    <div class="d-flex gap-4">
      <a href="{base}/privacy" class="text-decoration-none" style="color: var(--text-main)">Privacy</a>
      <a href="{base}/terms" class="text-decoration-none" style="color: var(--text-main)">Terms</a>
    </div>
  </div>
</footer>

<style>
  /* --- Dropdown Specific Styling --- */
  .bmac-dropdown-container {
    min-width: 220px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid var(--glass-border);
  }

  .donation-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    color: var(--text-main);
    text-decoration: none;
    font-size: 0.95rem;
    transition: all 0.2s ease;
  }

  .donation-item:hover {
    background: var(--primary-violet);
    color: white !important;
    padding-left: 25px;
  }

  .donation-item .amount {
    font-weight: 700;
    color: var(--accent-light);
    font-size: 1.1rem;
    transition: color 0.2s ease;
  }

  .donation-item:hover .amount {
    color: white;
  }

  .custom-divider {
    border-top: 1px solid var(--glass-border);
    justify-content: center !important;
    font-weight: 600;
  }

  .crypto-link {
    justify-content: center !important;
    font-weight: 600;
    background: rgba(255, 153, 0, 0.1); /* Slight Bitcoin Orange tint */
  }

  /* --- Existing Animation & Utility --- */
  .hover-rotate:hover {
    transform: rotate(15deg) scale(1.1);
  }
</style>
<script lang="ts">
  import { base } from '$app/paths';
  import '../app.css';
  import { fly, slide } from 'svelte/transition';

  const paypalUsername = 'AxelLab427';
  const donationAmounts = [1, 3, 5, 10];
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
    return { destroy() { document.removeEventListener('click', handleClick, true); } };
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
        <button class="btn-bmac d-flex align-items-center gap-2" on:click={toggleDropdown}>
          <i class="bi bi-cup-hot-fill"></i>
          <span class="d-none d-md-inline">Coffee</span>
        </button>
        {#if isDropdownOpen}
          <div class="position-absolute mt-2 p-2 glass rounded-4 shadow-lg" style="min-width: 100px;" transition:slide>
            {#each donationAmounts as amount}
              <a href="https://paypal.me/{paypalUsername}/{amount}" target="_blank" class="d-block p-2 text-center text-decoration-none rounded-3 donation-item" style="color: var(--text-main)" on:click={closeDropdown}>
                ${amount}
              </a>
            {/each}
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
  .donation-item:hover { background: var(--primary-violet); color: white !important; }
  .hover-rotate:hover { transform: rotate(15deg) scale(1.1); }
</style>
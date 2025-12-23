<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { fade, fly, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  let prefix = "";
  let isGenerating = true;
  let resultAddress = "";
  let resultPrivateKey = "";
  let attempts = 0;
  let progress = 0;

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    prefix = params.get('prefix') || "";
    
    // Logic integration placeholder
    const interval = setInterval(() => {
      attempts += Math.floor(Math.random() * 800);
      progress = Math.min(progress + (100 - progress) * 0.03, 99.9);
      
      if (attempts > 8000) { // Simulated match
        clearInterval(interval);
        isGenerating = false;
        progress = 100;
        resultAddress = "0x" + prefix + "89012345678901234567890123456789";
        resultPrivateKey = "0x" + "f".repeat(64);
      }
    }, 100);
  });

  async function copyToClipboard(text) {
    await navigator.clipboard.writeText(text);
  }
</script>

<div class="container py-4">
  <div class="row justify-content-center">
    <div class="col-lg-7">
      
      {#if isGenerating}
        <div class="glass-card p-5 text-center" in:scale={{duration: 400, easing: quintOut}}>
          <div class="spinner-box mb-4">
            <div class="bubbly-spinner"></div>
            <div class="attempts-label">{attempts.toLocaleString()}</div>
          </div>

          <h2 class="fw-bold mb-2">Hashing...</h2>
          <p class="opacity-50 mb-4">Searching for <span class="badge bg-violet px-3">0x{prefix}</span></p>

          <div class="progress-container mb-4">
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" style="width: {progress}%">
                <div class="progress-bar-glow"></div>
              </div>
            </div>
            <div class="d-flex justify-content-between mt-2 x-small opacity-50">
              <span>Generating potential keys...</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>

          <div class="terminal-box text-start p-3 rounded-4">
            <div class="t-line">> Buffer initialized...</div>
            <div class="t-line active">> Computing: {Math.floor(attempts/2)} hashes/sec</div>
          </div>
        </div>

      {:else}
        <div class="glass-card p-5 shadow-lg" in:fly={{ y: 20, duration: 600 }}>
          <div class="text-center mb-5 success-icon">
            <i class="bi bi-check-circle-fill text-success display-4"></i>
            <h2 class="fw-bold mt-2">Address Found!</h2>
          </div>

          <div class="result-box glass p-3 rounded-4 mb-4">
            <span class="small fw-bold opacity-50 mb-2 d-block">PUBLIC ADDRESS</span>
            <div class="d-flex align-items-center justify-content-between">
              <code class="text-violet fs-5">{resultAddress}</code>
              <button class="btn btn-link text-reset" on:click={() => copyToClipboard(resultAddress)} aria-label="Copy public address">
                <i class="bi bi-clipboard"></i>
              </button>
            </div>
          </div>

          <div class="result-box glass p-3 rounded-4 mb-4 border-danger-subtle">
            <span class="small fw-bold text-danger mb-2 d-block">PRIVATE KEY (SECRET)</span>
            <div class="d-flex align-items-center justify-content-between">
              <code class="opacity-50">********************************</code>
              <button class="btn btn-sm btn-outline-danger rounded-pill px-3" on:click={() => copyToClipboard(resultPrivateKey)} aria-label="Copy private key">
                Copy Key
              </button>
            </div>
          </div>

          <div class="d-grid mt-4">
            <a href="{base}/" class="btn btn-bmac py-3">Generate Another</a>
          </div>
        </div>
      {/if}

    </div>
  </div>
</div>

<style>
  .bg-violet { background-color: var(--primary-violet); }
  .text-violet { color: var(--accent-light); }
  .x-small { font-size: 0.75rem; }

  /* Spinner Logic */
  .spinner-box { position: relative; width: 100px; height: 100px; margin: 0 auto; }
  .bubbly-spinner {
    width: 100%; height: 100%;
    border: 6px solid var(--glass-border);
    border-top-color: var(--primary-violet);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  .attempts-label { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 0.7rem; font-weight: bold; }

  /* Fancy Progress Bar */
  .progress-bar-bg { height: 10px; background: rgba(0,0,0,0.1); border-radius: 10px; overflow: hidden; }
  .progress-bar-fill { 
    height: 100%; background: linear-gradient(90deg, var(--primary-violet), var(--accent-light)); 
    transition: width 0.3s ease-out; position: relative; 
  }
  .progress-bar-glow {
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    animation: sweep 2s infinite;
  }

  /* Terminal */
  .terminal-box { background: rgba(0,0,0,0.05); font-family: monospace; font-size: 0.8rem; }
  .t-line { opacity: 0.6; }
  .t-line.active { opacity: 1; border-right: 2px solid var(--primary-violet); animation: blink 1s infinite; width: fit-content; }
  
  @keyframes blink { 50% { border-color: transparent; } }
  .success-icon { animation: bounceIn 0.6s ease-out; }
</style>
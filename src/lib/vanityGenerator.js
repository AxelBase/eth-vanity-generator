// src/lib/vanityGenerator.js   (unchanged – still the single core logic file)
import { ethers } from 'ethers';

export function createGenerator(prefix, onProgress) {
  prefix = prefix.toLowerCase();
  let attempts = 0;
  let cancelled = false;

  const start = () => new Promise((resolve, reject) => {
    const loop = () => {
      if (cancelled) {
        return reject(new Error('Generation cancelled'));
      }

      attempts++;
      const wallet = ethers.Wallet.createRandom();
      const addressLower = wallet.address.toLowerCase().slice(2); // Remove '0x'

      if (addressLower.startsWith(prefix)) {
        const result = {
          address: wallet.address, // Checksummed
          privateKey: wallet.privateKey,
          publicKey: wallet.publicKey,
          attempts
        };
        return resolve(result);
      }

      if (onProgress) {
        onProgress(attempts);
      }

      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  });

  const cancel = () => {
    cancelled = true;
  };

  return { start, cancel };
}
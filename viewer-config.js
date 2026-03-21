// 全域設定：集中管理 TTS 與 GAS 代理伺服器網址。
// 若未提供，會回退到預設值，以避免舊版程式出錯。
(function initPdfViewerConfig() {
  const defaults = {
    TTS_BASE_URL: 'https://readdtts-tts.hf.space',
    GAS_PROXY_URL:
      'https://script.google.com/macros/s/AKfycbyDDM097ofMimASd_KdrF-TrDWr0TaMLJwbiHGwcJFvjrOi0HpT28IIqg1dj5os9NzZ/exec',
  };

  if (typeof window === 'undefined') return;

  const existing = window.PDF_VIEWER_CONFIG || {};
  window.PDF_VIEWER_CONFIG = {
    ...defaults,
    ...existing,
  };
})();


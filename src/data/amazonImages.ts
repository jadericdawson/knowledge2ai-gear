/**
 * ASIN → m.media-amazon.com image URL
 * Direct CDN URLs — not blocked by ad blockers (unlike ws-na.amazon-adsystem.com)
 *
 * To update: visit amazon.com/dp/{ASIN}, right-click main image → copy image address
 * Replace with PA API lookup once 10 qualifying sales unlock Creators API access.
 */
export const amazonImages: Record<string, string> = {
  // FPV / Drone parts
  'B0C69X1G41': 'https://m.media-amazon.com/images/I/61PZbECESTL._SL300_.jpg',   // Matek H743-Slim V3
  'B0BZJTQ5YP': 'https://m.media-amazon.com/images/I/71tZcfXMFQL._SL300_.jpg',   // Jetson Orin Nano Super
  'B07NBPNWNZ': 'https://m.media-amazon.com/images/I/71KzFYAwxYL._SL300_.jpg',   // SparkFun GPS-RTK2 ZED-F9P
  'B0BBQT3TTS': 'https://m.media-amazon.com/images/I/51bfbwLcxRL._SL300_.jpg',   // DJI O3 Air Unit
  'B09XTR2KFX': 'https://m.media-amazon.com/images/I/51advBhgCbL._SL300_.jpg',   // iFlight Xing2 2809 Motors
  'B0972ZKNT2': 'https://m.media-amazon.com/images/I/41UVIWRQztS._SL300_.jpg',   // Foxeer Reaper F4 65A ESC
  'B0BGL73623': 'https://m.media-amazon.com/images/I/512QF9zfedL._SL300_.jpg',   // RadioMaster RP3 ELRS Receiver
  'B099F921DM': 'https://m.media-amazon.com/images/I/61JqTWMbeKL._SL300_.jpg',   // iFlight Chimera7 Pro Frame
  'B0822RM9VJ': 'https://m.media-amazon.com/images/I/71a14r3QzwL._SL300_.jpg',   // T-Motor F7 or similar
  'B0BJVP3XW7': 'https://m.media-amazon.com/images/I/719H7RwfcPL._SL300_.jpg',   // DJI Goggles 2
  'B008UH4DT4': 'https://m.media-amazon.com/images/I/510lGJ9yHRL._SL300_.jpg',   // Hakko FX-888D Soldering Station
  'B00ANZRT4M': 'https://m.media-amazon.com/images/I/51KMr6jzhmL._SL300_.jpg',   // Fluke 117 Multimeter
  'B018EXZO8M': 'https://m.media-amazon.com/images/I/612AeR7wvkL._SL300_.jpg',   // ISDT Q6 Plus Charger
  'B096X6SG13': 'https://m.media-amazon.com/images/I/61IX8eET%2BdL._SL300_.jpg', // Smoke Stopper/XT30
  'B098LB9LTJ': 'https://m.media-amazon.com/images/I/61Am818nooL._SL300_.jpg',   // FPV Batteries or similar
  'B09BDJQK53': 'https://m.media-amazon.com/images/I/811QzM6ySSL._SL300_.jpg',   // Props or similar
  'B0B21H1V77': 'https://m.media-amazon.com/images/I/615exKDDUlL._SL300_.jpg',   // Emax Tinyhawk or similar
  'B08MT4YKJY': 'https://m.media-amazon.com/images/I/51LOuEJ6QJL._SL300_.jpg',   // Beginner kit item
  'B0CF9F8N94': 'https://m.media-amazon.com/images/I/61wq7ZBY1iL._SL300_.jpg',   // Tool item
  'B0BTN1KXMT': 'https://m.media-amazon.com/images/I/51XbSSvy%2B2L._SL300_.jpg', // Item with + in image ID
  'B0DSJZXSC9': 'https://m.media-amazon.com/images/I/71UcriL14dL._SL300_.jpg',   // Item

  // AI Gear / Dev workstation
  'B07MFZY2F2': 'https://m.media-amazon.com/images/I/71OYNmVRFhL._SL300_.jpg',   // Samsung 970 EVO Plus 1TB
  'B07DXRNYNX': 'https://m.media-amazon.com/images/I/81ud%2Bv9ghlL._SL300_.jpg', // Noctua NF-A4x10 5V PWM
  'B08T5QN2TR': 'https://m.media-amazon.com/images/I/61PRvw0FyDL._SL300_.jpg',   // Anker Nano 65W GaN
  'B0BS9VVQPD': 'https://m.media-amazon.com/images/I/51tJ0JISpeL._SL300_.jpg',   // Logitech MX Master 3S
  'B0CYQ5P6T7': 'https://m.media-amazon.com/images/I/61exJWcysXL._SL300_.jpg',   // EMEET S600 4K Webcam
  'B07HBD71HL': 'https://m.media-amazon.com/images/I/41T0zUwiOcL._SL300_.jpg',   // YubiKey 5 NFC
  'B06VY6FXMM': 'https://m.media-amazon.com/images/I/51TsApt1OpL._SL300_.jpg',   // APC BX1500M UPS
};

export function getAmazonImage(asin: string): string | null {
  return amazonImages[asin] ?? null;
}

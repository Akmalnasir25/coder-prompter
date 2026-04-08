const form = document.getElementById("promptForm");
const generatedPrompt = document.getElementById("generatedPrompt");
const copyBtn = document.getElementById("copyBtn");
const resetBtn = document.getElementById("resetBtn");
const downloadBtn = document.getElementById("downloadBtn");
const sampleBtn = document.getElementById("sampleBtn");
const generateBtn = document.getElementById("generateBtn");
const summaryChips = document.getElementById("summaryChips");
const fieldCount = document.getElementById("fieldCount");
const charCount = document.getElementById("charCount");
const lineCount = document.getElementById("lineCount");
const datasetFileInput = document.getElementById("datasetFile");
const clearFileBtn = document.getElementById("clearFileBtn");
const fileStatus = document.getElementById("fileStatus");
const fileMeta = document.getElementById("fileMeta");
const headerChips = document.getElementById("headerChips");
const sampleRows = document.getElementById("sampleRows");
const previewCaption = document.getElementById("previewCaption");
const previewTableHead = document.getElementById("previewTableHead");
const previewTableBody = document.getElementById("previewTableBody");
const datasetStatusBox = document.getElementById("datasetStatusBox");
const themeOptions = document.querySelectorAll("[data-theme-option]");
const packageFolderNameInput = document.getElementById("packageFolderName");
const deployHtmlInput = document.getElementById("deployHtmlInput");
const syncFolderNameBtn = document.getElementById("syncFolderNameBtn");
const clearDeployBtn = document.getElementById("clearDeployBtn");
const downloadFolderZipBtn = document.getElementById("downloadFolderZipBtn");
const saveFolderDirectBtn = document.getElementById("saveFolderDirectBtn");
const deployStatusCard = document.getElementById("deployStatusCard");
const deployStatusTitle = document.getElementById("deployStatusTitle");
const deployStatusMeta = document.getElementById("deployStatusMeta");
const deployFacts = document.getElementById("deployFacts");
const deploySupportNote = document.getElementById("deploySupportNote");
const deployCssInput = document.getElementById("deployCssInput");
const deployJsInput = document.getElementById("deployJsInput");
const deployAssetFilesInput = document.getElementById("deployAssetFiles");
const deployAssetsList = document.getElementById("deployAssetsList");
const supportDocsFilesInput = document.getElementById("supportDocsFiles");
const clearDocsBtn = document.getElementById("clearDocsBtn");
const docsSummaryList = document.getElementById("docsSummaryList");
const promptTabButtons = document.querySelectorAll("[data-prompt-tab]");
const promptOutputLabel = document.getElementById("promptOutputLabel");
const qualityCard = document.getElementById("qualityCard");
const qualitySummary = document.getElementById("qualitySummary");
const qualityScore = document.getElementById("qualityScore");
const qualityIssues = document.getElementById("qualityIssues");
const saveHistoryBtn = document.getElementById("saveHistoryBtn");
const historyList = document.getElementById("historyList");
const aiResponseInput = document.getElementById("aiResponseInput");
const extractCodeBtn = document.getElementById("extractCodeBtn");
const clearExtractorBtn = document.getElementById("clearExtractorBtn");
const useExtractedHtmlBtn = document.getElementById("useExtractedHtmlBtn");
const useExtractedSplitBtn = document.getElementById("useExtractedSplitBtn");
const extractStatusCard = document.getElementById("extractStatusCard");
const extractStatusTitle = document.getElementById("extractStatusTitle");
const extractStatusMeta = document.getElementById("extractStatusMeta");
const extractFacts = document.getElementById("extractFacts");
const extractedHtmlOutput = document.getElementById("extractedHtmlOutput");
const extractedCssOutput = document.getElementById("extractedCssOutput");
const extractedJsOutput = document.getElementById("extractedJsOutput");

const legacyStorageKeys = {
  draft: "coder-prompter-form",
  theme: "coder-prompter-theme",
  history: "coder-prompter-history"
};
const storageKey = "coder-prompter-studio-form";
const themeStorageKey = "coder-prompter-studio-theme";
const historyStorageKey = "coder-prompter-studio-history";

const fieldGuidance = {
  projectName: {
    example: "SmartKehadiran Sekolah",
    help: "Gunakan nama projek yang ringkas, jelas dan sesuai dengan fungsi sebenar sistem yang ingin dibina."
  },
  outputType: {
    example: "Sistem Pengurusan atau Dashboard Analitik",
    help: "Pilih bentuk hasil akhir supaya AI tahu sama ada perlu membina sistem, portal, dashboard atau aplikasi."
  },
  aiTarget: {
    example: "ChatGPT, Gemini, Claude atau Codex",
    help: "Pilih AI sasaran supaya sistem boleh menyesuaikan gaya prompt mengikut kekuatan model tersebut."
  },
  promptStyle: {
    example: "Produk Lengkap atau Production-Ready Code",
    help: "Pilih gaya prompt supaya jawapan AI lebih sesuai sama ada untuk binaan kod, langkah demi langkah atau kegunaan guru."
  },
  platform: {
    example: "Web Responsif atau Mudah Alih dan Web Admin",
    help: "Tentukan peranti sasaran utama supaya cadangan antaramuka dan struktur teknikal lebih tepat."
  },
  targetUsers: {
    example: "guru, pentadbir sekolah, murid, ibu bapa",
    help: "Senaraikan pengguna sebenar yang akan menggunakan sistem ini. Anda boleh tulis beberapa kumpulan dipisahkan dengan koma."
  },
  mainGoal: {
    example: "Memusatkan rekod kehadiran dan laporan supaya guru serta pentadbir boleh memantau data dengan cepat.",
    help: "Terangkan hasil utama yang anda mahu capai. Fokus pada nilai atau manfaat sistem kepada sekolah atau pengguna."
  },
  problemSolved: {
    example: "Rekod masih manual dalam fail berasingan, sukar dijejak dan lambat untuk sediakan laporan.",
    help: "Nyatakan masalah semasa yang berlaku sekarang supaya AI faham sebab sistem ini perlu dibina."
  },
  coreFeatures: {
    example: "rekod kehadiran, notifikasi automatik, eksport laporan, paparan dashboard",
    help: "Tulis ciri utama satu per satu. Lebih baik jika setiap ciri ditulis pada baris baharu atau dipisahkan dengan koma."
  },
  modulesScreens: {
    example: "dashboard utama, modul pengguna, laporan bulanan, tetapan sistem",
    help: "Senaraikan halaman atau modul yang anda mahu wujud dalam sistem akhir."
  },
  userRoles: {
    example: "admin sekolah, guru kelas, guru mata pelajaran, pengetua",
    help: "Senaraikan peranan pengguna yang berbeza supaya AI boleh cadangkan akses dan kebenaran dengan lebih tepat."
  },
  workflow: {
    example: "Guru isi kehadiran, sistem simpan data, pentadbir lihat laporan dan eksport.",
    help: "Terangkan aliran kerja utama dari mula hingga akhir supaya AI memahami perjalanan pengguna dalam sistem."
  },
  dataEntities: {
    example: "guru, murid, kelas, rekod kehadiran, mata pelajaran, notifikasi",
    help: "Senaraikan data penting yang sistem perlu simpan. Ini membantu AI membina struktur database yang sesuai."
  },
  datasetFile: {
    example: "fail-kehadiran-murid.xlsx atau data-guru.csv",
    help: "Upload fail contoh sebenar supaya sistem boleh membaca header, mengenal pasti struktur jadual dan memasukkan keperluan import data itu ke dalam prompt."
  },
  additionalDocsNotes: {
    example: "SOP kehadiran perlu ikut format sekolah, laporan mesti ada tandatangan digital, data murid mesti mudah dicetak",
    help: "Paste konteks tambahan seperti SOP, arahan sekolah, format laporan atau syarat pentadbiran supaya prompt jadi lebih tepat."
  },
  supportDocsFiles: {
    example: "sop-kehadiran.txt, format-laporan.md",
    help: "Upload fail teks tambahan untuk diringkaskan dan digunakan sebagai konteks tambahan dalam prompt."
  },
  packageFolderName: {
    example: "smart-kehadiran-sekolah",
    help: "Nama ini akan digunakan untuk folder deploy yang dijana. Sebaiknya ringkas, kemas dan mudah dikenali."
  },
  deployHtmlInput: {
    example: "<!DOCTYPE html> ... seluruh kandungan fail index.html ... </html>",
    help: "Paste keseluruhan kod HTML yang dihasilkan oleh AI. Sistem akan simpan kod ini sebagai fail index.html di dalam folder deploy."
  },
  deployCssInput: {
    example: "body { font-family: sans-serif; }",
    help: "Jika AI beri kod CSS berasingan, paste di sini supaya sistem boleh jana fail style.css dalam folder deploy."
  },
  deployJsInput: {
    example: "document.getElementById('app').textContent = 'Hello';",
    help: "Jika AI beri JavaScript berasingan, paste di sini supaya sistem boleh jana fail app.js dalam folder deploy."
  },
  deployAssetFiles: {
    example: "logo-sekolah.png, banner-dashboard.jpg atau data-rujukan.json",
    help: "Upload fail tambahan seperti logo, ikon, gambar atau fail sokongan supaya sistem boleh letakkannya dalam folder assets semasa deploy."
  },
  aiResponseInput: {
    example: "Paste seluruh jawapan AI yang mengandungi blok HTML, CSS dan JavaScript",
    help: "Masukkan jawapan penuh AI di sini. Sistem akan cuba mengesan code block dan asingkan kod kepada HTML, CSS dan JavaScript secara automatik."
  },
  reports: {
    example: "laporan harian, laporan bulanan, eksport PDF, eksport Excel",
    help: "Nyatakan bentuk laporan atau analitik yang perlu dihasilkan oleh sistem."
  },
  integrations: {
    example: "Google Sheets, WhatsApp API, emel, QR scanner",
    help: "Isi jika sistem perlu berhubung dengan servis atau alat luar. Jika tiada, boleh kosongkan."
  },
  security: {
    example: "tiada login diperlukan, validasi input, audit trail, backup data",
    help: "Tulis keperluan keselamatan atau kawalan akses yang penting. Jika anda tidak mahu login, nyatakan dengan jelas bahawa sistem tidak perlu log masuk."
  },
  techStack: {
    example: "HTML, CSS, JavaScript, Firebase",
    help: "Nyatakan teknologi pilihan jika anda sudah ada kehendak tertentu. Jika tidak pasti, AI masih boleh cadangkan stack terbaik."
  },
  designStyle: {
    example: "moden, mesra guru, jelas, profesional",
    help: "Terangkan gaya paparan yang anda mahukan supaya AI boleh sesuaikan UI/UX sistem."
  },
  responseLanguage: {
    example: "Bahasa Melayu atau Dwibahasa",
    help: "Pilih bahasa jawapan AI dan bahasa penerangan dalam output yang akan dijana."
  },
  detailLevel: {
    example: "Sangat Terperinci",
    help: "Semakin tinggi tahap perincian, semakin panjang dan terperinci hasil jawapan AI."
  },
  constraints: {
    example: "Mudah digunakan oleh guru, kos rendah, sesuai untuk sekolah, tidak terlalu kompleks",
    help: "Masukkan had atau syarat khas yang perlu dipatuhi oleh AI semasa mencadangkan penyelesaian."
  },
  deliverables: {
    example: "kod lengkap, struktur folder, langkah setup, sample data, panduan deployment, testing checklist",
    help: "Senaraikan dengan jelas apa yang anda mahu AI berikan dalam jawapan akhir."
  },
  deployment: {
    example: "Vercel, Netlify atau Firebase Hosting",
    help: "Isi platform hosting pilihan jika anda mahu AI sediakan cadangan deployment yang lebih khusus."
  },
  successCriteria: {
    example: "boleh terus digunakan, responsif, stabil, mudah diselenggara",
    help: "Terangkan bagaimana anda menilai sama ada sistem yang dijana itu dianggap berjaya."
  },
  includeSchema: {
    example: "Sesuai dipilih jika anda mahu AI cadangkan jadual, medan dan hubungan data.",
    help: "Tandakan pilihan ini jika anda mahu prompt meminta AI menghasilkan schema atau reka bentuk pangkalan data."
  },
  includeSampleData: {
    example: "Sesuai dipilih jika anda mahu AI beri data demo untuk ujian atau pembentangan.",
    help: "Tandakan pilihan ini jika anda mahu AI sediakan sample data yang boleh terus digunakan."
  },
  includeTestCases: {
    example: "Sesuai dipilih jika anda mahu AI sertakan senario ujian dan semakan fungsi utama.",
    help: "Tandakan pilihan ini untuk mendapatkan test case, semakan aliran dan cadangan edge case."
  },
  includeStepGuide: {
    example: "Sesuai dipilih jika anda mahu AI beri langkah setup, binaan dan deployment secara berturutan.",
    help: "Tandakan pilihan ini jika anda mahu panduan langkah demi langkah dimasukkan dalam jawapan AI."
  }
};

const datasetLimits = {
  previewRows: 5,
  promptSampleRows: 3,
  samplePairsPerRow: 6
};

let datasetAnalysis = createEmptyDatasetAnalysis();
let deployFolderSynced = true;
const textEncoder = new TextEncoder();
let promptVariantMode = "full";
let promptVariants = {
  full: "",
  concise: "",
  production: "",
  checklist: ""
};
let additionalDocsState = createEmptyAdditionalDocsState();
let deployAssetsState = [];
let extractedCodeState = createEmptyExtractedCodeState();

function applyTheme(theme) {
  const resolvedTheme = theme === "light" ? "light" : "dark";
  document.body.dataset.theme = resolvedTheme;

  themeOptions.forEach((button) => {
    const isSelected = button.dataset.themeOption === resolvedTheme;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function migrateLegacyStorageKeys() {
  const mappings = [
    [legacyStorageKeys.draft, storageKey],
    [legacyStorageKeys.theme, themeStorageKey],
    [legacyStorageKeys.history, historyStorageKey]
  ];

  mappings.forEach(([oldKey, newKey]) => {
    if (!localStorage.getItem(newKey) && localStorage.getItem(oldKey)) {
      localStorage.setItem(newKey, localStorage.getItem(oldKey));
    }
  });
}

function initializeTheme() {
  const storedTheme = localStorage.getItem(themeStorageKey);
  applyTheme(storedTheme || document.body.dataset.theme || "dark");
}

function sanitizeSystemName(rawValue, fallback = "sistem-baru") {
  const normalized = String(rawValue || "")
    .trim()
    .replace(/[<>:"/\\|?*\u0000-\u001F]/g, " ")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "")
    .toLowerCase();

  return normalized || fallback;
}

function createEmptyAdditionalDocsState() {
  return {
    files: []
  };
}

function createEmptyExtractedCodeState() {
  return {
    html: "",
    css: "",
    js: "",
    source: "",
    detectedBlocks: 0
  };
}

const presets = {
  "dashboard-sekolah": {
    projectName: "Dashboard Prestasi Sekolah Pintar",
    outputType: "dashboard analitik",
    aiTarget: "generic",
    promptStyle: "produk lengkap",
    platform: "web responsif",
    targetUsers: "pengetua, pentadbir sekolah, ketua panitia, guru kelas",
    mainGoal: "Membina dashboard sekolah yang memusatkan data kehadiran, prestasi akademik, disiplin dan penglibatan kokurikulum supaya pentadbir boleh membuat keputusan dengan lebih cepat dan berasaskan data.",
    problemSolved: "Data sekolah biasanya tersebar dalam fail berasingan dan sukar dianalisis secara menyeluruh. Pentadbir mengambil masa lama untuk sediakan laporan dan mengenal pasti murid yang memerlukan intervensi.",
    coreFeatures: "dashboard KPI keseluruhan\npenapis mengikut kelas, tingkatan dan tarikh\ngraf prestasi akademik\npemantauan kehadiran murid\namaran awal murid berisiko\nlaporan boleh eksport",
    modulesScreens: "dashboard utama\nmodul analitik kehadiran\nmodul analitik akademik\nmodul disiplin dan intervensi\nhalaman laporan\nhalaman tetapan pengguna",
    userRoles: "admin sekolah\nguru kelas\nketua panitia\npengetua",
    workflow: "Admin memuat naik atau mengemas kini data. Sistem memproses dan memaparkan KPI. Pentadbir memilih penapis untuk melihat trend. Guru kelas melihat murid di bawah jagaan dan menghasilkan laporan tindakan susulan.",
    dataEntities: "pengguna\nmurid\nkelas\nkehadiran\nkeputusan peperiksaan\ndisiplin\naktiviti kokurikulum\nintervensi",
    reports: "laporan harian kehadiran\nlaporan bulanan prestasi kelas\nlaporan murid berisiko\neksport PDF dan Excel",
    integrations: "Google Sheets atau CSV import",
    security: "tiada login diperlukan, validasi import data, audit trail untuk perubahan data, backup berkala",
    techStack: "HTML, CSS, JavaScript atau React, Chart.js, Firebase atau Supabase",
    designStyle: "moden, bersih, profesional, mudah dibaca oleh guru",
    responseLanguage: "Bahasa Melayu",
    detailLevel: "sangat terperinci",
    constraints: "Mesti mesra sekolah, antaramuka jelas, tidak terlalu teknikal untuk pengguna akhir, boleh dikembangkan pada masa depan.",
    deliverables: "cadangan seni bina sistem, struktur folder, kod lengkap frontend dan backend, reka bentuk database, sample data, langkah setup, panduan deployment, testing checklist",
    deployment: "Vercel atau Firebase Hosting",
    successCriteria: "dashboard mudah digunakan, paparan responsif, data jelas, sistem stabil dan mudah diselenggara",
    includeSchema: true,
    includeSampleData: true,
    includeTestCases: true,
    includeStepGuide: true
  },
  "kehadiran-guru": {
    projectName: "SmartKehadiran Guru",
    outputType: "sistem pengurusan",
    aiTarget: "generic",
    promptStyle: "produk lengkap",
    platform: "web responsif",
    targetUsers: "guru, pentadbir sekolah, pengetua",
    mainGoal: "Membina sistem kehadiran guru yang merekod masuk dan keluar, memudahkan pemantauan harian serta menjana laporan automatik.",
    problemSolved: "Rekod kehadiran guru masih dibuat secara manual, sukar disemak semula dan mengambil masa lama untuk menghasilkan laporan.",
    coreFeatures: "rekod hadir masuk dan keluar\nimbas QR atau kod unik\npaparan status semasa\nlaporan automatik\nnotifikasi lewat hadir",
    modulesScreens: "dashboard kehadiran\nmodul imbas QR\nrekod harian\nlaporan bulanan\ntetapan sistem",
    userRoles: "admin, guru, pengetua",
    workflow: "Guru terus imbas QR atau isi rekod kehadiran. Sistem menyimpan masa dan status. Pentadbir menyemak laporan harian atau bulanan tanpa perlu modul log masuk.",
    dataEntities: "guru, rekod kehadiran, status kehadiran, cuti, notifikasi",
    reports: "laporan hadir harian, laporan bulanan, laporan kelewatan, eksport PDF",
    integrations: "QR scanner, emel notifikasi",
    security: "tiada login diperlukan, validasi input, log aktiviti, backup data",
    techStack: "HTML, CSS, JavaScript, Firebase",
    designStyle: "jelas, mesra guru, profesional",
    responseLanguage: "Bahasa Melayu",
    detailLevel: "sangat terperinci",
    constraints: "Mudah digunakan oleh semua guru dan sesuai untuk penggunaan harian di sekolah.",
    deliverables: "kod lengkap, struktur sistem, reka bentuk database, langkah penggunaan, sample data, deployment guide",
    deployment: "Firebase Hosting",
    successCriteria: "mudah direkod, cepat diakses, laporan tepat, antaramuka ringkas",
    includeSchema: true,
    includeSampleData: true,
    includeTestCases: true,
    includeStepGuide: true
  },
  "kokurikulum": {
    projectName: "Portal Kokurikulum Sekolah",
    outputType: "portal pengguna",
    aiTarget: "generic",
    promptStyle: "produk lengkap",
    platform: "web responsif",
    targetUsers: "guru penasihat, murid, pentadbir sekolah",
    mainGoal: "Mewujudkan portal kokurikulum yang memudahkan pengurusan aktiviti, kehadiran, markah dan laporan unit beruniform, kelab dan sukan.",
    problemSolved: "Maklumat kokurikulum sukar diselaras kerana disimpan dalam fail berbeza dan sukar dipantau secara konsisten.",
    coreFeatures: "pendaftaran aktiviti\nkehadiran murid\nmarkah kokurikulum\njadual aktiviti\npengumuman\nlaporan pencapaian",
    modulesScreens: "dashboard guru\nprofil murid\nmodul aktiviti\nrekod kehadiran\nmarkah dan merit\nlaporan dan eksport",
    userRoles: "admin, guru penasihat, murid",
    workflow: "Guru mencipta aktiviti dan menetapkan peserta. Murid melihat jadual aktiviti. Guru merekod kehadiran dan markah selepas aktiviti. Pentadbir menjana laporan keseluruhan.",
    dataEntities: "murid, guru, aktiviti, unit kokurikulum, kehadiran, markah, pengumuman",
    reports: "laporan kehadiran aktiviti, laporan merit, ranking penglibatan, eksport PDF",
    integrations: "Google Calendar, emel",
    security: "tiada login diperlukan, perlindungan data murid, audit log, validasi import data",
    techStack: "HTML, CSS, JavaScript, Supabase",
    designStyle: "ceria tetapi profesional, teratur, mudah dilihat di telefon",
    responseLanguage: "Bahasa Melayu",
    detailLevel: "sangat terperinci",
    constraints: "Mesti mudah digunakan oleh guru penasihat dan murid, serta mesra telefon.",
    deliverables: "reka bentuk penuh sistem, kod lengkap, database schema, sample data, panduan deployment, testing checklist",
    deployment: "Vercel",
    successCriteria: "maklumat kokurikulum tersusun, rekod mudah dicapai, laporan jelas",
    includeSchema: true,
    includeSampleData: true,
    includeTestCases: true,
    includeStepGuide: true
  },
  "rekod-murid": {
    projectName: "Sistem Rekod Murid Menyeluruh",
    outputType: "sistem pengurusan",
    aiTarget: "generic",
    promptStyle: "produk lengkap",
    platform: "web responsif",
    targetUsers: "guru kelas, guru mata pelajaran, pentadbir sekolah",
    mainGoal: "Membina sistem yang menggabungkan rekod profil murid, kehadiran, akademik, disiplin dan intervensi dalam satu tempat.",
    problemSolved: "Maklumat murid biasanya tidak terpusat, menyebabkan guru sukar melihat perkembangan murid secara menyeluruh.",
    coreFeatures: "carian murid\nprofil lengkap murid\nrekod kehadiran\nrekod akademik\nrekod disiplin\ncatatan intervensi\nlaporan individu dan kelas",
    modulesScreens: "dashboard\ndaftar murid\nprofil murid\nkehadiran\nakademik\ndisiplin\nintervensi\nlaporan",
    userRoles: "admin, guru kelas, guru mata pelajaran, kaunselor",
    workflow: "Guru mencari murid, mengemas kini rekod berkaitan dan melihat sejarah perkembangan. Pentadbir menapis data mengikut kelas atau tingkatan untuk laporan.",
    dataEntities: "murid, kelas, kehadiran, peperiksaan, disiplin, intervensi, pengguna",
    reports: "laporan murid individu, laporan kelas, laporan murid berisiko, eksport PDF/Excel",
    integrations: "CSV import, Google Sheets",
    security: "tiada login diperlukan, log perubahan, backup berkala, validasi data murid",
    techStack: "HTML, CSS, JavaScript, Firebase atau Supabase",
    designStyle: "kemas, profesional, fokus pada bacaan data",
    responseLanguage: "Bahasa Melayu",
    detailLevel: "sangat terperinci",
    constraints: "Data murid mesti mudah dicapai tetapi selamat, paparan perlu jelas untuk guru.",
    deliverables: "kod lengkap, struktur sistem, database schema, langkah setup, sample data, deployment guide, senarai ujian",
    deployment: "Firebase Hosting atau Vercel",
    successCriteria: "maklumat murid terpusat, cepat dicapai, laporan mudah dijana",
    includeSchema: true,
    includeSampleData: true,
    includeTestCases: true,
    includeStepGuide: true
  },
  pajsk: {
    projectName: "Sistem Pengurusan PAJSK Sekolah",
    outputType: "sistem pengurusan",
    aiTarget: "generic",
    promptStyle: "produk lengkap",
    platform: "web responsif",
    targetUsers: "guru penasihat, guru kelas, pentadbir sekolah",
    mainGoal: "Membina sistem PAJSK yang memudahkan rekod skor, pengiraan markah dan penjanaan laporan murid secara automatik.",
    problemSolved: "Pengisian PAJSK sering lambat, manual dan terdedah kepada ralat apabila data murid dan aktiviti tidak tersusun dengan baik.",
    coreFeatures: "rekod aktiviti PAJSK\npengiraan markah automatik\nprofil murid\nimport data murid\nlaporan individu dan kelas\neksport PDF",
    modulesScreens: "dashboard utama\nprofil murid\nmodul skor PAJSK\nrekod aktiviti\nlaporan\ntetapan markah",
    userRoles: "admin sekolah\nguru kelas\nguru penasihat",
    workflow: "Guru mengimport data murid, merekod aktiviti dan skor PAJSK. Sistem mengira markah secara automatik dan menjana laporan untuk murid atau kelas.",
    dataEntities: "murid, aktiviti, skor PAJSK, guru, kelas, laporan",
    reports: "laporan PAJSK murid, laporan kelas, eksport PDF, ringkasan pencapaian",
    integrations: "CSV import, Excel import",
    security: "tiada login diperlukan, validasi data murid, audit perubahan, backup data",
    techStack: "HTML, CSS, JavaScript, Firebase atau Supabase",
    designStyle: "profesional, kemas, fokus data, mesra guru",
    responseLanguage: "Bahasa Melayu",
    detailLevel: "sangat terperinci",
    constraints: "Mesti mudah digunakan oleh guru dan sesuai untuk pengisian PAJSK sekolah.",
    deliverables: "kod lengkap, struktur sistem, database schema, sample data, panduan penggunaan, deployment guide",
    deployment: "Firebase Hosting",
    successCriteria: "markah PAJSK mudah diurus, laporan cepat dijana, sistem jelas dan stabil",
    includeSchema: true,
    includeSampleData: true,
    includeTestCases: true,
    includeStepGuide: true
  },
  "pinjaman-buku": {
    projectName: "Sistem Pinjaman Buku Pusat Sumber",
    outputType: "sistem pengurusan",
    aiTarget: "generic",
    promptStyle: "produk lengkap",
    platform: "web responsif",
    targetUsers: "guru perpustakaan, murid, pentadbir sekolah",
    mainGoal: "Membina sistem pinjaman buku yang merekod inventori, pinjaman, pemulangan dan laporan pusat sumber sekolah.",
    problemSolved: "Pinjaman buku masih direkod secara manual dan sukar menjejak stok, lewat pulang serta buku yang kerap dipinjam.",
    coreFeatures: "rekod inventori buku\npinjaman dan pemulangan buku\ncarian buku\nstatus stok semasa\ningatan lewat pulang\nlaporan pinjaman",
    modulesScreens: "dashboard pusat sumber\ndaftar buku\npinjaman buku\npemulangan buku\nlaporan\ntetapan kategori",
    userRoles: "guru perpustakaan\nadmin sekolah\nmurid",
    workflow: "Guru perpustakaan menambah inventori buku, merekod pinjaman dan pemulangan. Sistem mengemas kini stok semasa dan menjana laporan penggunaan.",
    dataEntities: "buku, kategori buku, murid, guru, rekod pinjaman, rekod pemulangan, stok",
    reports: "laporan pinjaman bulanan, buku lewat pulang, buku popular, eksport PDF atau Excel",
    integrations: "barcode scanner, CSV import",
    security: "tiada login diperlukan, validasi data buku, audit rekod pinjaman, backup data",
    techStack: "HTML, CSS, JavaScript, Supabase atau Firebase",
    designStyle: "kemas, profesional, mudah diurus oleh guru perpustakaan",
    responseLanguage: "Bahasa Melayu",
    detailLevel: "sangat terperinci",
    constraints: "Mesti sesuai untuk pengurusan pusat sumber sekolah dan mudah digunakan oleh guru.",
    deliverables: "struktur folder, kod lengkap, reka bentuk database, sample data, panduan setup dan deployment",
    deployment: "Netlify",
    successCriteria: "inventori jelas, rekod pinjaman tepat, laporan mudah dicapai",
    includeSchema: true,
    includeSampleData: true,
    includeTestCases: true,
    includeStepGuide: true
  }
};

function createEmptyDatasetAnalysis() {
  return {
    fileName: "",
    fileType: "",
    extension: "",
    sheetName: "",
    rowCount: 0,
    columnCount: 0,
    delimiter: "",
    headers: [],
    sampleRows: [],
    columnProfiles: [],
    error: ""
  };
}

function normalizeCellValue(value) {
  if (value === null || value === undefined) {
    return "";
  }

  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }

  return String(value).trim();
}

function sanitizeHeaderName(value, index, usedHeaders) {
  const fallback = `column_${index + 1}`;
  const baseLabel = normalizeCellValue(value) || fallback;
  let uniqueLabel = baseLabel;
  let suffix = 2;

  while (usedHeaders.has(uniqueLabel.toLowerCase())) {
    uniqueLabel = `${baseLabel}_${suffix}`;
    suffix += 1;
  }

  usedHeaders.add(uniqueLabel.toLowerCase());
  return uniqueLabel;
}

function inferColumnType(values) {
  const filteredValues = values
    .map((value) => normalizeCellValue(value))
    .filter(Boolean);

  if (!filteredValues.length) {
    return "text";
  }

  const isBoolean = filteredValues.every((value) => /^(true|false|ya|tidak|yes|no)$/i.test(value));
  const isNumber = filteredValues.every((value) => !Number.isNaN(Number(value.replace(/,/g, ""))));
  const isDate = filteredValues.every((value) => {
    if (/^\d+$/.test(value)) {
      return false;
    }

    return !Number.isNaN(Date.parse(value));
  });

  if (isBoolean) {
    return "boolean";
  }

  if (isNumber) {
    return "number";
  }

  if (isDate) {
    return "date";
  }

  return "text";
}

function extractDatasetAnalysis(rows, metadata) {
  const normalizedRows = rows
    .map((row) => (Array.isArray(row) ? row.map(normalizeCellValue) : []))
    .filter((row) => row.some(Boolean));

  if (!normalizedRows.length) {
    throw new Error("Fail dipilih kosong atau tiada data yang boleh dibaca.");
  }

  const maxColumnCount = normalizedRows.reduce((max, row) => Math.max(max, row.length), 0);
  const headerSource = normalizedRows[0] || [];
  const usedHeaders = new Set();
  const headers = Array.from({ length: maxColumnCount }, (_, index) =>
    sanitizeHeaderName(headerSource[index], index, usedHeaders)
  );

  const dataRows = normalizedRows.slice(1).map((row) => {
    return headers.reduce((record, header, index) => {
      record[header] = normalizeCellValue(row[index]);
      return record;
    }, {});
  }).filter((row) => Object.values(row).some(Boolean));

  const sampleRowsData = dataRows.slice(0, datasetLimits.previewRows);
  const columnProfiles = headers.map((header) => ({
    name: header,
    type: inferColumnType(dataRows.map((row) => row[header]))
  }));

  return {
    fileName: metadata.fileName || "",
    fileType: metadata.fileType || "",
    extension: metadata.extension || "",
    sheetName: metadata.sheetName || "",
    rowCount: dataRows.length,
    columnCount: headers.length,
    delimiter: metadata.delimiter || "",
    headers,
    sampleRows: sampleRowsData,
    columnProfiles,
    error: ""
  };
}

function detectDelimiter(text) {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, 5);

  const candidates = [",", ";", "\t", "|"];
  let selectedDelimiter = ",";
  let bestScore = -1;

  candidates.forEach((candidate) => {
    const score = lines.reduce((sum, line) => sum + line.split(candidate).length, 0);

    if (score > bestScore) {
      bestScore = score;
      selectedDelimiter = candidate;
    }
  });

  return selectedDelimiter;
}

function parseDelimitedText(text, delimiter) {
  const rows = [];
  let row = [];
  let currentValue = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const nextChar = text[index + 1];

    if (char === "\"") {
      if (inQuotes && nextChar === "\"") {
        currentValue += "\"";
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }

      continue;
    }

    if (char === delimiter && !inQuotes) {
      row.push(currentValue);
      currentValue = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && nextChar === "\n") {
        index += 1;
      }

      row.push(currentValue);
      rows.push(row);
      row = [];
      currentValue = "";
      continue;
    }

    currentValue += char;
  }

  row.push(currentValue);
  rows.push(row);
  return rows;
}

async function analyzeCsvFile(file) {
  const text = (await file.text()).replace(/^\uFEFF/, "");
  const delimiter = detectDelimiter(text);
  const rows = parseDelimitedText(text, delimiter);

  return extractDatasetAnalysis(rows, {
    fileName: file.name,
    fileType: "CSV",
    extension: file.name.split(".").pop()?.toLowerCase() || "csv",
    delimiter
  });
}

async function analyzeExcelFile(file) {
  if (typeof XLSX === "undefined") {
    throw new Error("Pembaca fail Excel belum tersedia. Pastikan internet aktif supaya library Excel boleh dimuatkan.");
  }

  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, {
    type: "array",
    cellDates: true
  });

  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];
  const rows = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    raw: false,
    defval: ""
  });

  return extractDatasetAnalysis(rows, {
    fileName: file.name,
    fileType: "Excel",
    extension: file.name.split(".").pop()?.toLowerCase() || "xlsx",
    sheetName: firstSheetName
  });
}

async function analyzeDatasetFile(file) {
  const extension = file.name.split(".").pop()?.toLowerCase() || "";

  if (extension === "csv") {
    return analyzeCsvFile(file);
  }

  if (["xlsx", "xls", "xlsm"].includes(extension)) {
    return analyzeExcelFile(file);
  }

  throw new Error("Format fail tidak disokong. Sila gunakan fail CSV atau Excel.");
}

function formatDatasetSummary(analysis) {
  if (!analysis.fileName) {
    return "Sistem akan gunakan header fail sebagai panduan untuk cadangkan jadual, import flow dan paparan data.";
  }

  const meta = [
    `${analysis.fileType} file`,
    `${analysis.columnCount} lajur`,
    `${analysis.rowCount} baris data`
  ];

  if (analysis.sheetName) {
    meta.push(`sheet: ${analysis.sheetName}`);
  }

  return meta.join(" | ");
}

function formatSampleRowForUi(row) {
  const entries = Object.entries(row).slice(0, datasetLimits.samplePairsPerRow);
  const parts = entries.map(([key, value]) => `${key}: ${value || "-"}`);
  return parts.join(" | ");
}

function formatSampleRowForPrompt(row) {
  const entries = Object.entries(row).slice(0, datasetLimits.samplePairsPerRow);
  return entries.map(([key, value]) => `${key}=${value || "-"}`).join(" | ");
}

function renderDatasetPreview() {
  if (datasetAnalysis.error) {
    datasetStatusBox.classList.add("is-error");
    fileStatus.textContent = "Analisis fail gagal";
    fileMeta.textContent = datasetAnalysis.error;
    headerChips.innerHTML = '<span class="empty-chip">Tiada header tersedia</span>';
    sampleRows.innerHTML = '<p class="empty-note">Sila pilih fail yang sah untuk dianalisis.</p>';
    previewCaption.textContent = "Preview jadual tidak tersedia";
    previewTableHead.innerHTML = "";
    previewTableBody.innerHTML = '<tr><td>Analisis fail gagal. Cuba fail CSV atau Excel yang lain.</td></tr>';
    return;
  }

  datasetStatusBox.classList.remove("is-error");

  if (!datasetAnalysis.fileName) {
    fileStatus.textContent = "Tiada fail dipilih";
    fileMeta.textContent = formatDatasetSummary(datasetAnalysis);
    headerChips.innerHTML = '<span class="empty-chip">Belum ada header dianalisis</span>';
    sampleRows.innerHTML = '<p class="empty-note">Upload fail untuk lihat contoh bacaan data.</p>';
    previewCaption.textContent = "Belum ada struktur fail dikesan";
    previewTableHead.innerHTML = "";
    previewTableBody.innerHTML = '<tr><td>Upload fail CSV atau Excel untuk lihat preview jadual mengikut header sebenar pengguna.</td></tr>';
    return;
  }

  fileStatus.textContent = datasetAnalysis.fileName;
  fileMeta.textContent = formatDatasetSummary(datasetAnalysis);
  headerChips.innerHTML = datasetAnalysis.columnProfiles
    .map((column) => `<span class="header-chip">${column.name}<small>${column.type}</small></span>`)
    .join("");

  sampleRows.innerHTML = datasetAnalysis.sampleRows.length
    ? datasetAnalysis.sampleRows.slice(0, datasetLimits.promptSampleRows)
      .map((row, index) => `<article class="sample-row-item"><strong>Baris ${index + 1}</strong><p>${formatSampleRowForUi(row)}</p></article>`)
      .join("")
    : '<p class="empty-note">Header berjaya dibaca, tetapi tiada baris data selepas header.</p>';

  previewCaption.textContent = `${datasetAnalysis.columnCount} lajur dipadankan untuk preview jadual`;
  previewTableHead.innerHTML = `<tr>${datasetAnalysis.headers.map((header) => `<th>${header}</th>`).join("")}</tr>`;

  if (datasetAnalysis.sampleRows.length) {
    previewTableBody.innerHTML = datasetAnalysis.sampleRows
      .map((row) => `<tr>${datasetAnalysis.headers.map((header) => `<td>${row[header] || "-"}</td>`).join("")}</tr>`)
      .join("");
  } else {
    previewTableBody.innerHTML = `<tr><td colspan="${datasetAnalysis.headers.length}">Tiada baris data untuk dipaparkan, tetapi header berjaya dibaca.</td></tr>`;
  }
}

function setDatasetLoadingState(fileName) {
  datasetStatusBox.classList.remove("is-error");
  fileStatus.textContent = `Menganalisis ${fileName}...`;
  fileMeta.textContent = "Sistem sedang membaca header, sample data dan struktur jadual fail anda.";
  headerChips.innerHTML = '<span class="empty-chip">Sedang menganalisis...</span>';
  sampleRows.innerHTML = '<p class="empty-note">Sila tunggu sebentar.</p>';
  previewCaption.textContent = "Sedang menyediakan preview jadual";
  previewTableHead.innerHTML = "";
  previewTableBody.innerHTML = '<tr><td>Memproses fail yang dimuat naik...</td></tr>';
}

async function handleDatasetUpload(event) {
  const file = event.target.files?.[0];

  if (!file) {
    datasetAnalysis = createEmptyDatasetAnalysis();
    renderDatasetPreview();
    generatePrompt();
    return;
  }

  setDatasetLoadingState(file.name);

  try {
    datasetAnalysis = await analyzeDatasetFile(file);
  } catch (error) {
    datasetAnalysis = {
      ...createEmptyDatasetAnalysis(),
      error: error.message || "Tidak dapat membaca fail yang dipilih."
    };
  }

  renderDatasetPreview();
  generatePrompt();
}

function clearDatasetSelection() {
  datasetAnalysis = createEmptyDatasetAnalysis();

  if (datasetFileInput) {
    datasetFileInput.value = "";
  }

  renderDatasetPreview();
}

function truncateText(value, maxLength = 220) {
  const cleanValue = String(value || "").replace(/\s+/g, " ").trim();
  return cleanValue.length > maxLength ? `${cleanValue.slice(0, maxLength).trim()}...` : cleanValue;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getPromptVariantLabel(mode) {
  const labels = {
    full: "Prompt Penuh",
    concise: "Versi Ringkas",
    production: "Versi Production",
    checklist: "Checklist"
  };

  return labels[mode] || "Prompt Penuh";
}

function renderSupportDocs() {
  const notesValue = form.elements.namedItem("additionalDocsNotes")?.value?.trim() || "";
  const fragments = [];

  if (notesValue) {
    fragments.push(`
      <article class="doc-summary-item">
        <strong>Nota tambahan</strong>
        <p>${escapeHtml(truncateText(notesValue, 260))}</p>
      </article>
    `);
  }

  additionalDocsState.files.forEach((file) => {
    fragments.push(`
      <article class="doc-summary-item">
        <strong>${escapeHtml(file.name)}</strong>
        <p>${escapeHtml(truncateText(file.summary, 240))}</p>
      </article>
    `);
  });

  docsSummaryList.innerHTML = fragments.length
    ? fragments.join("")
    : '<p class="empty-note">Belum ada dokumen tambahan dimasukkan.</p>';
}

async function handleSupportDocsUpload(event) {
  const files = Array.from(event.target.files || []);

  if (!files.length) {
    additionalDocsState = createEmptyAdditionalDocsState();
    renderSupportDocs();
    generatePrompt();
    return;
  }

  const loadedFiles = [];

  for (const file of files) {
    const text = await file.text();
    loadedFiles.push({
      name: file.name,
      size: file.size,
      type: file.type || "text/plain",
      summary: truncateText(text, 320),
      content: text.slice(0, 4000)
    });
  }

  additionalDocsState.files = loadedFiles;
  renderSupportDocs();
  generatePrompt();
}

function clearSupportDocs() {
  additionalDocsState = createEmptyAdditionalDocsState();

  if (supportDocsFilesInput) {
    supportDocsFilesInput.value = "";
  }

  const notesField = form.elements.namedItem("additionalDocsNotes");

  if (notesField) {
    notesField.value = "";
  }

  renderSupportDocs();
}

function renderDeployAssets() {
  deployAssetsList.innerHTML = deployAssetsState.length
    ? deployAssetsState.map((asset) => `
      <article class="doc-summary-item">
        <strong>${escapeHtml(asset.name)}</strong>
        <p>${escapeHtml(asset.kind)} | ${(asset.size / 1024).toFixed(1)} KB | disimpan dalam folder assets</p>
      </article>
    `).join("")
    : '<p class="empty-note">Belum ada asset tambahan dipilih.</p>';
}

async function handleDeployAssetsUpload(event) {
  const files = Array.from(event.target.files || []);

  if (!files.length) {
    deployAssetsState = [];
    renderDeployAssets();
    updateDeployStatus();
    return;
  }

  const assets = [];

  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    assets.push({
      name: file.name,
      size: file.size,
      kind: file.type || "file",
      bytes: new Uint8Array(arrayBuffer)
    });
  }

  deployAssetsState = assets;
  renderDeployAssets();
  updateDeployStatus();
}

function clearDeployAssets() {
  deployAssetsState = [];

  if (deployAssetFilesInput) {
    deployAssetFilesInput.value = "";
  }

  renderDeployAssets();
}

function decodeEntities(text) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
}

function collectFencedBlocks(source) {
  const blocks = [];
  const pattern = /```([\w-]*)\n([\s\S]*?)```/g;
  let match;

  while ((match = pattern.exec(source)) !== null) {
    blocks.push({
      lang: (match[1] || "").toLowerCase(),
      code: match[2].trim()
    });
  }

  return blocks;
}

function collectTaggedBlocks(source, tagName) {
  const blocks = [];
  const pattern = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "gi");
  let match;

  while ((match = pattern.exec(source)) !== null) {
    blocks.push(match[1].trim());
  }

  return blocks.filter(Boolean);
}

function extractCodeFromAiResponse(source) {
  const rawSource = source.trim();
  const fencedBlocks = collectFencedBlocks(rawSource);
  let html = "";
  let css = "";
  let js = "";

  fencedBlocks.forEach((block) => {
    if (!html && (block.lang.includes("html") || block.lang.includes("xml"))) {
      html = block.code;
    } else if (block.lang.includes("css")) {
      css += `${css ? "\n\n" : ""}${block.code}`;
    } else if (block.lang.includes("javascript") || block.lang === "js" || block.lang.includes("typescript")) {
      js += `${js ? "\n\n" : ""}${block.code}`;
    }
  });

  if (!html) {
    const directHtmlMatch = rawSource.match(/<!doctype html>[\s\S]*<\/html>/i) || rawSource.match(/<html[\s\S]*<\/html>/i);
    html = directHtmlMatch ? directHtmlMatch[0].trim() : "";
  }

  if (!html && fencedBlocks.length === 1 && !fencedBlocks[0].lang) {
    html = fencedBlocks[0].code;
  }

  if (html) {
    const styleBlocks = collectTaggedBlocks(html, "style");
    const scriptBlocks = collectTaggedBlocks(html, "script");

    if (!css && styleBlocks.length) {
      css = styleBlocks.join("\n\n");
    }

    if (!js && scriptBlocks.length) {
      js = scriptBlocks.join("\n\n");
    }
  }

  return {
    html: decodeEntities(html),
    css: decodeEntities(css),
    js: decodeEntities(js),
    source: rawSource,
    detectedBlocks: fencedBlocks.length
  };
}

function renderExtractedCode() {
  extractedHtmlOutput.value = extractedCodeState.html;
  extractedCssOutput.value = extractedCodeState.css;
  extractedJsOutput.value = extractedCodeState.js;

  const facts = [];

  if (extractedCodeState.html) {
    facts.push("HTML dikesan");
  }

  if (extractedCodeState.css) {
    facts.push("CSS dikesan");
  }

  if (extractedCodeState.js) {
    facts.push("JS dikesan");
  }

  if (!facts.length) {
    extractStatusCard.classList.remove("is-ready");
    extractStatusTitle.textContent = "Belum ada code block dikesan";
    extractStatusMeta.textContent = "Paste jawapan AI yang mengandungi kod. Sistem akan cuba asingkan HTML, CSS dan JavaScript.";
    extractFacts.innerHTML = '<span class="empty-chip">Tiada code block dikesan lagi</span>';
    return;
  }

  extractStatusCard.classList.add("is-ready");
  extractStatusTitle.textContent = "Kod berjaya diekstrak";
  extractStatusMeta.textContent = "Anda boleh masukkan terus hasil ekstrak ini ke builder deploy sebagai single HTML atau split files.";
  extractFacts.innerHTML = facts.map((fact) => `<span class="summary-chip">${escapeHtml(fact)}</span>`).join("");
}

function clearExtractor() {
  aiResponseInput.value = "";
  extractedCodeState = createEmptyExtractedCodeState();
  renderExtractedCode();
}

function removeInlineBlocks(html, tagName) {
  const pattern = tagName === "script"
    ? /<script(?![^>]*\bsrc=)[^>]*>[\s\S]*?<\/script>/gi
    : new RegExp(`<${tagName}[^>]*>[\\s\\S]*?<\\/${tagName}>`, "gi");
  return html.replace(pattern, "").trim();
}

function buildSplitHtml(html, hasCss, hasJs) {
  let result = html.trim();

  if (!result) {
    return result;
  }

  result = removeInlineBlocks(result, "style");
  result = removeInlineBlocks(result, "script");

  if (hasCss && !/href=["']style\.css["']/i.test(result)) {
    if (/<\/head>/i.test(result)) {
      result = result.replace(/<\/head>/i, '  <link rel="stylesheet" href="style.css">\n</head>');
    } else {
      result = `<link rel="stylesheet" href="style.css">\n${result}`;
    }
  }

  if (hasJs && !/src=["']app\.js["']/i.test(result)) {
    if (/<\/body>/i.test(result)) {
      result = result.replace(/<\/body>/i, '  <script src="app.js"></script>\n</body>');
    } else {
      result = `${result}\n<script src="app.js"></script>`;
    }
  }

  return result;
}

function applyExtractedHtmlOnly() {
  if (!extractedCodeState.html) {
    renderExtractedCode();
    return;
  }

  deployHtmlInput.value = extractedCodeState.html;
  deployCssInput.value = "";
  deployJsInput.value = "";
  updateDeployStatus();
}

function applyExtractedSplitFiles() {
  const hasCss = Boolean(extractedCodeState.css.trim());
  const hasJs = Boolean(extractedCodeState.js.trim());

  if (!extractedCodeState.html && !hasCss && !hasJs) {
    renderExtractedCode();
    return;
  }

  deployHtmlInput.value = buildSplitHtml(extractedCodeState.html, hasCss, hasJs);
  deployCssInput.value = extractedCodeState.css;
  deployJsInput.value = extractedCodeState.js;
  updateDeployStatus();
}

function getProjectNameField() {
  return form.elements.namedItem("projectName");
}

function setButtonVariant(button, variant) {
  button.classList.remove("primary-button", "secondary-button", "ghost-button");
  button.classList.add(variant);
}

function detectDeploymentTarget(rawValue) {
  const deploymentText = String(rawValue || "").trim();
  const normalized = deploymentText.toLowerCase();

  if (!deploymentText) {
    return {
      key: "single-html",
      label: "Single HTML sahaja",
      explicit: false,
      supportedConfig: false
    };
  }

  if (normalized.includes("netlify")) {
    return {
      key: "netlify",
      label: "Netlify",
      explicit: true,
      supportedConfig: true
    };
  }

  if (normalized.includes("vercel")) {
    return {
      key: "vercel",
      label: "Vercel",
      explicit: true,
      supportedConfig: true
    };
  }

  if (normalized.includes("firebase")) {
    return {
      key: "firebase",
      label: "Firebase Hosting",
      explicit: true,
      supportedConfig: true
    };
  }

  if (normalized.includes("github")) {
    return {
      key: "github-pages",
      label: "GitHub Pages",
      explicit: true,
      supportedConfig: false
    };
  }

  return {
    key: "custom",
    label: deploymentText,
    explicit: true,
    supportedConfig: false
  };
}

function syncDeployFolderName(force = false) {
  const projectName = getProjectNameField()?.value || "";

  if (force || deployFolderSynced || !packageFolderNameInput.value.trim()) {
    packageFolderNameInput.value = sanitizeSystemName(projectName, "sistem-baru");
    deployFolderSynced = true;
  }

  updateDeployStatus();
}

function getDeployPackageState() {
  const rawFolderName = packageFolderNameInput.value.trim();
  const htmlCode = deployHtmlInput.value;
  const cssCode = deployCssInput.value;
  const jsCode = deployJsInput.value;
  const deploymentPreference = form.elements.namedItem("deployment")?.value || "";
  const deploymentTarget = detectDeploymentTarget(deploymentPreference);
  const safeFolderName = sanitizeSystemName(rawFolderName || getProjectNameField()?.value || "", "sistem-baru");
  const trimmedHtml = htmlCode.trim();
  const trimmedCss = cssCode.trim();
  const trimmedJs = jsCode.trim();
  const lineCountValue = trimmedHtml ? trimmedHtml.split(/\r?\n/).length : 0;
  const hasFullDocument = /<!doctype html>|<html[\s>]/i.test(trimmedHtml);

  return {
    rawFolderName,
    deploymentPreference,
    deploymentTarget,
    safeFolderName,
    htmlCode,
    cssCode,
    jsCode,
    trimmedHtml,
    trimmedCss,
    trimmedJs,
    lineCount: lineCountValue,
    charCount: trimmedHtml.length,
    hasFullDocument
  };
}

function getDeploymentPackageDescription(state) {
  if (state.deploymentTarget.key === "netlify") {
    return "Pakej akan mengandungi index.html serta konfigurasi netlify.toml yang sesuai untuk static hosting.";
  }

  if (state.deploymentTarget.key === "vercel") {
    return "Pakej akan mengandungi index.html serta vercel.json untuk memudahkan deploy ke Vercel.";
  }

  if (state.deploymentTarget.key === "firebase") {
    return "Pakej akan mengandungi index.html, firebase.json dan .firebaserc sebagai panduan deploy ke Firebase Hosting.";
  }

  if (state.deploymentTarget.explicit) {
    return `Sasaran deploy dikesan: ${state.deploymentTarget.label}. Sistem akan sediakan pakej static yang boleh disesuaikan untuk platform tersebut.`;
  }

  return state.hasFullDocument
    ? "Tiada platform deploy dinyatakan. Sistem akan kekalkan pakej paling ringkas dengan satu fail index.html."
    : "Kod yang dipaste tidak nampak seperti dokumen HTML penuh. Sistem tetap akan simpan kandungan itu sebagai index.html sahaja kerana tiada platform deploy khusus dinyatakan.";
}

function getDeploymentFileSummary(state) {
  const baseFiles = ["index.html"];

  if (state.trimmedCss) {
    baseFiles.push("style.css");
  }

  if (state.trimmedJs) {
    baseFiles.push("app.js");
  }

  if (state.deploymentTarget.key === "netlify") {
    baseFiles.push("netlify.toml");
  }

  if (state.deploymentTarget.key === "vercel") {
    baseFiles.push("vercel.json");
  }

  if (state.deploymentTarget.key === "firebase") {
    baseFiles.push("firebase.json", ".firebaserc");
  }

  if (deployAssetsState.length) {
    baseFiles.push(`assets/${deployAssetsState.length} fail`);
  }

  return baseFiles.join(" + ");
}

function getDeploymentSuccessMessage(state, method) {
  const packageLabel = getDeploymentFileSummary(state);

  if (method === "direct") {
    return `Folder ${state.safeFolderName} berjaya disimpan terus dengan ${packageLabel}.`;
  }

  return `Folder deploy berjaya dijana dalam format ZIP dengan ${packageLabel}. Jika Windows memberi amaran pada fail HTML selepas extract, itu biasanya kerana fail datang dari internet.`;
}

function updateDeployStatus(message) {
  const state = getDeployPackageState();
  const supportsDirectSave = typeof window.showDirectoryPicker === "function";

  if (supportsDirectSave) {
    setButtonVariant(saveFolderDirectBtn, "primary-button");
    setButtonVariant(downloadFolderZipBtn, "ghost-button");
  } else {
    setButtonVariant(saveFolderDirectBtn, "ghost-button");
    setButtonVariant(downloadFolderZipBtn, "primary-button");
  }

  if (saveFolderDirectBtn) {
    saveFolderDirectBtn.disabled = !supportsDirectSave || !state.trimmedHtml;
  }

  if (downloadFolderZipBtn) {
    downloadFolderZipBtn.disabled = !state.trimmedHtml;
  }

  deploySupportNote.textContent = supportsDirectSave
    ? "Browser ini menyokong simpan terus ke folder. Ini pilihan yang disyorkan kerana fail tidak dimuat turun sebagai HTML dari internet, jadi kurang risiko amaran Windows."
    : "Browser ini tidak menyokong simpan terus ke folder. Gunakan ZIP sebagai fallback, tetapi Windows mungkin memaparkan amaran keselamatan kerana fail HTML datang dari internet.";

  if (!state.trimmedHtml) {
    deployStatusCard.classList.remove("is-ready", "is-error");
    deployStatusTitle.textContent = "Belum ada kod HTML dipaste";
    deployStatusMeta.textContent = message || "Paste fail HTML penuh, kemudian sistem akan sediakan folder deploy dengan index.html secara automatik.";
    deployFacts.innerHTML = '<span class="empty-chip">Folder belum dijana</span>';
    return;
  }

  deployStatusCard.classList.remove("is-error");
  deployStatusCard.classList.add("is-ready");
  deployStatusTitle.textContent = `${state.safeFolderName}/index.html sedia dijana`;
  deployStatusMeta.textContent = message || getDeploymentPackageDescription(state);

  const facts = [
    `Folder: ${state.safeFolderName}`,
    `Deploy: ${state.deploymentTarget.label}`,
    state.trimmedCss || state.trimmedJs ? "Mode: multi-file" : "Mode: single-file",
    `Fail: ${getDeploymentFileSummary(state)}`,
    deployAssetsState.length ? `Assets: ${deployAssetsState.length}` : "Assets: tiada",
    `${state.lineCount} baris`,
    `${state.charCount} aksara`
  ];

  deployFacts.innerHTML = facts.map((fact) => `<span class="summary-chip">${escapeHtml(fact)}</span>`).join("");
}

function createCrc32Table() {
  const table = new Uint32Array(256);

  for (let index = 0; index < 256; index += 1) {
    let current = index;

    for (let bit = 0; bit < 8; bit += 1) {
      current = (current & 1) ? (0xedb88320 ^ (current >>> 1)) : (current >>> 1);
    }

    table[index] = current >>> 0;
  }

  return table;
}

const crc32Table = createCrc32Table();

function crc32(bytes) {
  let crc = 0xffffffff;

  for (let index = 0; index < bytes.length; index += 1) {
    crc = crc32Table[(crc ^ bytes[index]) & 0xff] ^ (crc >>> 8);
  }

  return (crc ^ 0xffffffff) >>> 0;
}

function getDosTimestamp(date = new Date()) {
  const year = Math.max(date.getFullYear(), 1980);
  const dosTime = ((date.getHours() & 0x1f) << 11)
    | ((date.getMinutes() & 0x3f) << 5)
    | Math.floor((date.getSeconds() & 0x3f) / 2);
  const dosDate = (((year - 1980) & 0x7f) << 9)
    | (((date.getMonth() + 1) & 0x0f) << 5)
    | (date.getDate() & 0x1f);

  return { dosTime, dosDate };
}

function setUint16(view, offset, value) {
  view.setUint16(offset, value, true);
}

function setUint32(view, offset, value) {
  view.setUint32(offset, value >>> 0, true);
}

function createDeployEntries(state) {
  const values = readFormData();
  const entries = [];
  const hasCss = Boolean(state.trimmedCss);
  const hasJs = Boolean(state.trimmedJs);
  const shouldAddReadme = state.deploymentTarget.explicit || hasCss || hasJs || deployAssetsState.length > 0;

  entries.push({
    path: `${state.safeFolderName}/index.html`,
    content: hasCss || hasJs ? buildSplitHtml(state.htmlCode, hasCss, hasJs) : state.htmlCode
  });

  if (hasCss) {
    entries.push({
      path: `${state.safeFolderName}/style.css`,
      content: state.cssCode
    });
  }

  if (hasJs) {
    entries.push({
      path: `${state.safeFolderName}/app.js`,
      content: state.jsCode
    });
  }

  deployAssetsState.forEach((asset) => {
    entries.push({
      path: `${state.safeFolderName}/assets/${asset.name}`,
      content: asset.bytes
    });
  });

  if (state.deploymentTarget.key === "netlify") {
    entries.push({
      path: `${state.safeFolderName}/netlify.toml`,
      content: `[build]
publish = "."

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
`
    });
  }

  if (state.deploymentTarget.key === "vercel") {
    entries.push({
      path: `${state.safeFolderName}/vercel.json`,
      content: `{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
`
    });
  }

  if (state.deploymentTarget.key === "firebase") {
    entries.push({
      path: `${state.safeFolderName}/firebase.json`,
      content: `{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
`
    });
    entries.push({
      path: `${state.safeFolderName}/.firebaserc`,
      content: `{
  "projects": {
    "default": "ganti-dengan-project-id-anda"
  }
}
`
    });
  }

  if (shouldAddReadme) {
    entries.push({
      path: `${state.safeFolderName}/README.md`,
      content: createDeployReadmeContent(values, state)
    });
  }

  return entries;
}

function createDeployReadmeContent(values, state) {
  const lines = [
    `# ${values.projectName || state.safeFolderName}`,
    "",
    "Pakej ini dijana daripada Coder Prompter Studio.",
    "",
    "## Ringkasan",
    `- Nama folder: ${state.safeFolderName}`,
    `- Sasaran deploy: ${state.deploymentTarget.label}`,
    `- Mode: ${state.trimmedCss || state.trimmedJs || deployAssetsState.length ? "multi-file" : "single HTML"}`,
    "",
    "## Kandungan",
    "- index.html",
    state.trimmedCss ? "- style.css" : "",
    state.trimmedJs ? "- app.js" : "",
    deployAssetsState.length ? `- folder assets (${deployAssetsState.length} fail)` : "",
    state.deploymentTarget.key === "netlify" ? "- netlify.toml" : "",
    state.deploymentTarget.key === "vercel" ? "- vercel.json" : "",
    state.deploymentTarget.key === "firebase" ? "- firebase.json" : "",
    state.deploymentTarget.key === "firebase" ? "- .firebaserc" : "",
    "",
    "## Cara guna",
    "- Pastikan fail utama ialah index.html.",
    state.trimmedCss ? "- style.css sudah dipautkan secara automatik jika diperlukan." : "",
    state.trimmedJs ? "- app.js sudah dipautkan secara automatik jika diperlukan." : "",
    deployAssetsState.length ? "- Semua asset tambahan disimpan dalam folder assets." : "",
    state.deploymentTarget.key === "netlify"
      ? "- Upload semua fail dalam folder ini ke Netlify atau sambungkan repo yang mengandungi fail ini."
      : state.deploymentTarget.key === "vercel"
        ? "- Upload folder ini ke Vercel atau import repo yang mengandungi fail ini."
        : state.deploymentTarget.key === "firebase"
          ? "- Kemas kini .firebaserc dengan project id Firebase anda, kemudian deploy menggunakan Firebase CLI."
          : "- Buka index.html atau upload folder ini ke hosting static pilihan anda.",
    "",
    "## Nota",
    "- Jika anda menggunakan fail HTML hasil AI, semak semula CDN, script luaran dan placeholder yang mungkin perlu diganti.",
    "- Jika browser atau Windows memberi amaran pada fail HTML selepas muat turun, itu biasanya kerana fail datang dari internet."
  ];

  return lines.filter(Boolean).join("\n");
}

function encodeEntryContent(content) {
  if (content instanceof Uint8Array) {
    return content;
  }

  if (content instanceof ArrayBuffer) {
    return new Uint8Array(content);
  }

  return textEncoder.encode(String(content));
}

function createZipArchive(entries) {
  const localParts = [];
  const centralParts = [];
  let offset = 0;

  entries.forEach((entry) => {
    const pathBytes = textEncoder.encode(entry.path);
    const contentBytes = encodeEntryContent(entry.content);
    const checksum = crc32(contentBytes);
    const { dosTime, dosDate } = getDosTimestamp(new Date());

    const localHeader = new Uint8Array(30 + pathBytes.length);
    const localView = new DataView(localHeader.buffer);
    setUint32(localView, 0, 0x04034b50);
    setUint16(localView, 4, 20);
    setUint16(localView, 6, 0);
    setUint16(localView, 8, 0);
    setUint16(localView, 10, dosTime);
    setUint16(localView, 12, dosDate);
    setUint32(localView, 14, checksum);
    setUint32(localView, 18, contentBytes.length);
    setUint32(localView, 22, contentBytes.length);
    setUint16(localView, 26, pathBytes.length);
    setUint16(localView, 28, 0);
    localHeader.set(pathBytes, 30);

    localParts.push(localHeader, contentBytes);

    const centralHeader = new Uint8Array(46 + pathBytes.length);
    const centralView = new DataView(centralHeader.buffer);
    setUint32(centralView, 0, 0x02014b50);
    setUint16(centralView, 4, 20);
    setUint16(centralView, 6, 20);
    setUint16(centralView, 8, 0);
    setUint16(centralView, 10, 0);
    setUint16(centralView, 12, dosTime);
    setUint16(centralView, 14, dosDate);
    setUint32(centralView, 16, checksum);
    setUint32(centralView, 20, contentBytes.length);
    setUint32(centralView, 24, contentBytes.length);
    setUint16(centralView, 28, pathBytes.length);
    setUint16(centralView, 30, 0);
    setUint16(centralView, 32, 0);
    setUint16(centralView, 34, 0);
    setUint16(centralView, 36, 0);
    setUint32(centralView, 38, 0);
    setUint32(centralView, 42, offset);
    centralHeader.set(pathBytes, 46);
    centralParts.push(centralHeader);

    offset += localHeader.length + contentBytes.length;
  });

  const centralDirectorySize = centralParts.reduce((sum, part) => sum + part.length, 0);
  const endHeader = new Uint8Array(22);
  const endView = new DataView(endHeader.buffer);
  setUint32(endView, 0, 0x06054b50);
  setUint16(endView, 4, 0);
  setUint16(endView, 6, 0);
  setUint16(endView, 8, entries.length);
  setUint16(endView, 10, entries.length);
  setUint32(endView, 12, centralDirectorySize);
  setUint32(endView, 16, offset);
  setUint16(endView, 20, 0);

  return new Blob([...localParts, ...centralParts, endHeader], {
    type: "application/zip"
  });
}

function downloadDeployZip() {
  const state = getDeployPackageState();

  if (!state.trimmedHtml) {
    updateDeployStatus("Paste kod HTML terlebih dahulu sebelum muat turun folder deploy.");
    deployStatusCard.classList.add("is-error");
    return;
  }

  const entries = createDeployEntries(state);
  const zipBlob = createZipArchive(entries);
  const url = URL.createObjectURL(zipBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${state.safeFolderName}.zip`;
  link.click();
  URL.revokeObjectURL(url);
  updateDeployStatus(getDeploymentSuccessMessage(state, "zip"));
}

async function getOrCreateNestedDirectory(rootHandle, parts) {
  let currentHandle = rootHandle;

  for (const part of parts) {
    currentHandle = await currentHandle.getDirectoryHandle(part, { create: true });
  }

  return currentHandle;
}

async function saveDeployFolderDirect() {
  const state = getDeployPackageState();

  if (!state.trimmedHtml) {
    updateDeployStatus("Paste kod HTML terlebih dahulu sebelum simpan terus ke folder.");
    deployStatusCard.classList.add("is-error");
    return;
  }

  if (typeof window.showDirectoryPicker !== "function") {
    updateDeployStatus("Browser ini tidak menyokong simpan terus ke folder. Gunakan butang ZIP.");
    deployStatusCard.classList.add("is-error");
    return;
  }

  const rootHandle = await window.showDirectoryPicker();
  const targetFolder = await rootHandle.getDirectoryHandle(state.safeFolderName, { create: true });
  const entries = createDeployEntries(state);

  for (const entry of entries) {
    const relativePath = entry.path.replace(`${state.safeFolderName}/`, "");
    const parts = relativePath.split("/");
    const fileName = parts.pop();
    const folderHandle = parts.length ? await getOrCreateNestedDirectory(targetFolder, parts) : targetFolder;
    const fileHandle = await folderHandle.getFileHandle(fileName, { create: true });
    const writable = await fileHandle.createWritable();
    await writable.write(entry.content);
    await writable.close();
  }

  updateDeployStatus(getDeploymentSuccessMessage(state, "direct"));
}

function clearDeployBuilder() {
  deployHtmlInput.value = "";
  deployCssInput.value = "";
  deployJsInput.value = "";
  clearDeployAssets();
  syncDeployFolderName(true);
  deployStatusCard.classList.remove("is-error");
  updateDeployStatus();
}

function createInfoTip(helpText) {
  const wrapper = document.createElement("span");
  wrapper.className = "info-tip";

  const button = document.createElement("span");
  button.className = "info-button";
  button.textContent = "i";
  button.tabIndex = 0;
  button.setAttribute("role", "button");
  button.setAttribute("aria-label", helpText);

  const popup = document.createElement("span");
  popup.className = "info-popup";
  popup.textContent = helpText;

  wrapper.append(button, popup);
  return wrapper;
}

function enhanceFieldGuidance() {
  document.querySelectorAll(".field").forEach((field) => {
    if (field.dataset.enhanced === "true") {
      return;
    }

    const control = field.querySelector("input, select, textarea");
    const title = field.querySelector("span");

    if (!control || !title || !control.name) {
      return;
    }

    const guide = fieldGuidance[control.name];

    if (!guide) {
      return;
    }

    const titleRow = document.createElement("div");
    titleRow.className = "field-title-row";
    title.classList.add("field-title");
    title.replaceWith(titleRow);
    titleRow.append(title, createInfoTip(guide.help));

    const example = document.createElement("p");
    example.className = "field-example";
    example.textContent = `Contoh isi: ${guide.example}`;
    titleRow.insertAdjacentElement("afterend", example);

    if (control.type !== "file" && !control.placeholder && guide.example) {
      control.placeholder = `Contoh: ${guide.example}`;
    }

    field.dataset.enhanced = "true";
  });

  document.querySelectorAll(".toggle-card").forEach((card) => {
    if (card.dataset.enhanced === "true") {
      return;
    }

    const checkbox = card.querySelector('input[type="checkbox"]');
    const title = card.querySelector("span");

    if (!checkbox || !title || !checkbox.name) {
      return;
    }

    const guide = fieldGuidance[checkbox.name];

    if (!guide) {
      return;
    }

    const content = document.createElement("div");
    content.className = "toggle-content";
    title.replaceWith(content);

    const titleRow = document.createElement("div");
    titleRow.className = "toggle-title-row";
    title.classList.add("toggle-title");
    titleRow.append(title, createInfoTip(guide.help));

    const example = document.createElement("p");
    example.className = "toggle-example";
    example.textContent = `Contoh kegunaan: ${guide.example}`;

    content.append(titleRow, example);
    card.dataset.enhanced = "true";
  });
}

function normalizeList(value) {
  return value
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function readFormData() {
  const formData = new FormData(form);
  return {
    projectName: formData.get("projectName")?.trim() || "",
    outputType: formData.get("outputType")?.trim() || "",
    aiTarget: formData.get("aiTarget")?.trim() || "generic",
    promptStyle: formData.get("promptStyle")?.trim() || "produk lengkap",
    platform: formData.get("platform")?.trim() || "",
    targetUsers: formData.get("targetUsers")?.trim() || "",
    mainGoal: formData.get("mainGoal")?.trim() || "",
    problemSolved: formData.get("problemSolved")?.trim() || "",
    coreFeatures: formData.get("coreFeatures")?.trim() || "",
    modulesScreens: formData.get("modulesScreens")?.trim() || "",
    userRoles: formData.get("userRoles")?.trim() || "",
    workflow: formData.get("workflow")?.trim() || "",
    dataEntities: formData.get("dataEntities")?.trim() || "",
    reports: formData.get("reports")?.trim() || "",
    integrations: formData.get("integrations")?.trim() || "",
    security: formData.get("security")?.trim() || "",
    techStack: formData.get("techStack")?.trim() || "",
    designStyle: formData.get("designStyle")?.trim() || "",
    responseLanguage: formData.get("responseLanguage")?.trim() || "",
    detailLevel: formData.get("detailLevel")?.trim() || "",
    additionalDocsNotes: formData.get("additionalDocsNotes")?.trim() || "",
    constraints: formData.get("constraints")?.trim() || "",
    deliverables: formData.get("deliverables")?.trim() || "",
    deployment: formData.get("deployment")?.trim() || "",
    successCriteria: formData.get("successCriteria")?.trim() || "",
    includeSchema: formData.get("includeSchema") === "on",
    includeSampleData: formData.get("includeSampleData") === "on",
    includeTestCases: formData.get("includeTestCases") === "on",
    includeStepGuide: formData.get("includeStepGuide") === "on"
  };
}

function applyValues(values, shouldGenerate = true) {
  Object.entries(values).forEach(([key, value]) => {
    const field = form.elements.namedItem(key);

    if (!field) {
      return;
    }

    if (field.type === "checkbox") {
      field.checked = Boolean(value);
    } else {
      field.value = value;
    }
  });

  if (shouldGenerate) {
    generatePrompt();
  }
}

function buildSection(items, fallback) {
  if (!items.length) {
    return `- ${fallback}`;
  }

  return items.map((item) => `- ${item}`).join("\n");
}

function hasExplicitAuthenticationRequest(values) {
  const authKeywords = /\b(log\s?in|login|log masuk|sign\s?in|signin|authentication|auth|role-based access|rbac|kata laluan|password)\b/i;
  const authSources = [
    values.coreFeatures,
    values.modulesScreens,
    values.workflow,
    values.security,
    values.constraints,
    values.deliverables
  ];

  return authSources.some((value) => authKeywords.test(value || ""));
}

function getAiTargetLabel(target) {
  const labels = {
    generic: "Generic AI",
    chatgpt: "ChatGPT",
    gemini: "Gemini",
    claude: "Claude",
    codex: "Codex"
  };

  return labels[target] || "Generic AI";
}

function getAiTargetInstruction(target, promptStyle) {
  const baseInstruction = `Gaya prompt yang diminta: ${promptStyle}.`;
  const map = {
    generic: `${baseInstruction} Tulis arahan yang jelas, lengkap, dan neutral supaya boleh difahami oleh mana-mana AI umum.`,
    chatgpt: `${baseInstruction} Susun jawapan secara teratur dengan reasoning yang jelas, langkah binaan praktikal dan kod yang terus boleh digunakan.`,
    gemini: `${baseInstruction} Berikan struktur jawapan yang visual, jelas dan tersusun dengan penerangan yang mudah diikuti serta kod yang bersih.`,
    claude: `${baseInstruction} Utamakan ketelitian, struktur pemikiran, spesifikasi modul dan penerangan sistem yang mendalam tetapi kemas.`,
    codex: `${baseInstruction} Fokus pada implementasi kod yang production-ready, struktur fail yang jelas, dan arahan pembangunan yang terus boleh dilaksanakan.`
  };

  return map[target] || map.generic;
}

function buildAdditionalDocsPromptSection(values) {
  const docs = [];

  if (values.additionalDocsNotes) {
    docs.push(`- Nota tambahan pengguna: ${values.additionalDocsNotes}`);
  }

  additionalDocsState.files.forEach((file) => {
    docs.push(`- Dokumen "${file.name}": ${truncateText(file.summary, 240)}`);
  });

  if (!docs.length) {
    return `Dokumen tambahan:
- Tiada dokumen tambahan dibekalkan. Jika perlu, buat andaian munasabah berdasarkan konteks projek.`;
  }

  return `Dokumen tambahan:
${docs.join("\n")}
- Gunakan maklumat dokumen ini sebagai konteks penting semasa membina cadangan sistem, modul, laporan dan aliran kerja.`;
}

function buildDatasetPromptSection() {
  if (datasetAnalysis.error) {
    return `Sokongan upload data fail:
- Sistem mesti menyokong upload fail CSV dan Excel.
- Sediakan preview data sebelum import, validasi format fail dan mesej ralat yang jelas.
- Analisis fail contoh gagal dibaca dalam sesi ini. Jadi bina mekanisme import yang fleksibel untuk header dinamik dan struktur fail yang berbeza.`;
  }

  if (!datasetAnalysis.fileName) {
    return `Sokongan upload data fail:
- Sistem mesti menyokong upload fail CSV dan Excel oleh pengguna.
- Sistem perlu membaca header secara dinamik, memaparkan preview data dan membina table berdasarkan kolum fail yang dimuat naik.
- Sertakan validasi format fail, pengendalian ralat, semakan kolum wajib dan paparan mesej jika data tidak sah.
- Sediakan logik import yang boleh menyesuaikan diri dengan struktur fail pengguna tanpa perlu ubah kod besar.`;
  }

  const detectedColumns = datasetAnalysis.columnProfiles.map((column) => `${column.name} (${column.type})`);
  const promptSamples = datasetAnalysis.sampleRows
    .slice(0, datasetLimits.promptSampleRows)
    .map((row, index) => `- Contoh baris ${index + 1}: ${formatSampleRowForPrompt(row)}`)
    .join("\n");

  return `Sokongan upload data fail:
- Pengguna akan upload fail contoh bernama "${datasetAnalysis.fileName}" dalam format ${datasetAnalysis.fileType}.
- Sistem akhir mesti menyokong upload semula fail format yang sama tanpa masalah.
- Header dan struktur fail yang dikesan mesti dijadikan panduan untuk reka bentuk jadual, modul import dan paparan data.
- Bilangan lajur dikesan: ${datasetAnalysis.columnCount}
- Bilangan baris data dikesan: ${datasetAnalysis.rowCount}
${datasetAnalysis.sheetName ? `- Sheet utama dikesan: ${datasetAnalysis.sheetName}` : ""}
- Header dan jenis data yang dikesan:
${buildSection(detectedColumns, "tiada header dapat dipaparkan")}
- Sistem mesti membaca header secara dinamik, bina preview table, validasi kolum, dan terus memaparkan data ikut susunan kolum fail.
- Reka bentuk jadual dalam sistem hendaklah berpandukan struktur fail ini supaya apabila pengguna upload CSV atau Excel sebenar, data boleh terus dibaca dan dipaparkan.
- Sediakan mekanisme import yang menyokong mapping header, validasi baris rosak, pengendalian duplicate, dan mesej ralat yang mudah difahami.
${promptSamples || "- Tiada sample row tersedia selepas header."}`;
}

function buildPrompt(values) {
  const features = normalizeList(values.coreFeatures);
  const modules = normalizeList(values.modulesScreens);
  const roles = normalizeList(values.userRoles);
  const entities = normalizeList(values.dataEntities);
  const reports = normalizeList(values.reports);
  const integrations = normalizeList(values.integrations);
  const deliverables = normalizeList(values.deliverables);
  const solutionName = values.projectName || "projek digital pendidikan";
  const targetUsers = values.targetUsers || "guru, pentadbir dan pengguna berkaitan";
  const mainGoal = values.mainGoal || "membina penyelesaian digital yang menyelesaikan masalah kerja manual di sekolah";
  const problemSolved = values.problemSolved || "proses sedia ada masih manual, lambat dan sukar dipantau";
  const techStack = values.techStack || "pilihan teknologi terbaik yang sesuai, moden dan mudah diselenggara";
  const designStyle = values.designStyle || "moden, kemas, jelas dan mesra guru";
  const constraints = values.constraints || "pastikan penyelesaian praktikal, mesra pengguna dan sesuai untuk persekitaran sekolah";
  const deployment = values.deployment || "pilih cadangan deployment yang paling mudah dan stabil";
  const successCriteria = values.successCriteria || "sistem lengkap, berfungsi, responsif dan mudah dikembangkan";
  const requiresAuthentication = hasExplicitAuthenticationRequest(values);
  const aiTargetLabel = getAiTargetLabel(values.aiTarget);
  const aiTargetInstruction = getAiTargetInstruction(values.aiTarget, values.promptStyle || "produk lengkap");
  const securityRequirements = values.security || (
    requiresAuthentication
      ? "Sertakan authentication, role-based access control, validasi input, audit trail dan perlindungan data yang sesuai."
      : "Jangan sertakan login page, sign in, sign up atau keperluan log masuk. Anggap sistem ini terus boleh digunakan tanpa login melainkan saya nyatakan sebaliknya. Fokus pada validasi input, audit trail, backup data dan perlindungan data tanpa authentication."
  );

  const mustInclude = [
    values.includeSchema ? "sertakan reka bentuk pangkalan data atau schema yang sesuai" : "",
    values.includeSampleData ? "sertakan sample data realistik untuk memudahkan demo dan ujian" : "",
    values.includeTestCases ? "sertakan senarai test case penting dan semakan edge cases" : "",
    values.includeStepGuide ? "sertakan langkah demi langkah untuk setup, konfigurasi dan deployment" : ""
  ].filter(Boolean);

  return `Anda ialah pakar senior full-stack developer, system architect dan product designer yang sangat mahir membina produk digital yang lengkap, kemas dan boleh terus digunakan.

AI sasaran untuk prompt ini:
- Sasaran AI: ${aiTargetLabel}
- ${aiTargetInstruction}

Tugasan anda:
Bina ${values.outputType || "sistem digital"} bernama "${solutionName}" untuk ${targetUsers} pada platform ${values.platform || "web"}.

Matlamat utama projek:
${mainGoal}

Masalah yang perlu diselesaikan:
${problemSolved}

Konteks pengguna sasaran:
- Pengguna utama: ${targetUsers}
- Bahasa jawapan AI: ${values.responseLanguage || "Bahasa Melayu"}
- Tahap perincian: ${values.detailLevel || "sangat terperinci"}
- Gaya antaramuka: ${designStyle}

Ciri utama yang wajib ada:
${buildSection(features, "cadangkan ciri teras yang paling sesuai berdasarkan konteks projek")}

Halaman atau modul yang perlu dibina:
${buildSection(modules, "susun modul utama yang lengkap untuk projek ini")}

Peranan pengguna dan akses:
${buildSection(roles, "cadangkan role pengguna yang sesuai dan terangkan kebenaran akses setiap satu")}

Aliran kerja utama sistem:
${values.workflow || "Terangkan aliran kerja end-to-end yang jelas dari input pengguna sehingga laporan atau hasil akhir dijana."}

Entiti data atau maklumat utama:
${buildSection(entities, "cadangkan entiti utama, medan penting dan hubungan antara data")}

Laporan, analitik atau eksport yang diperlukan:
${buildSection(reports, "cadangkan laporan penting, penapis, graf dan format eksport yang relevan")}

Integrasi luar jika berkaitan:
${buildSection(integrations, "jika perlu, cadangkan integrasi praktikal yang memudahkan operasi sekolah")}

Keperluan keselamatan dan akses:
${securityRequirements}

Keperluan import data fail:
${buildDatasetPromptSection()}

${buildAdditionalDocsPromptSection(values)}

Teknologi yang diutamakan:
- Tech stack pilihan: ${techStack}
- Platform sasaran: ${values.platform || "web"}
- Cadangan deployment: ${deployment}

Kekangan atau arahan khas:
${constraints}

Hasil yang saya mahu daripada anda:
${buildSection(deliverables, "berikan penyelesaian lengkap dari perancangan sehingga kod dan panduan penggunaan")}

Perkara wajib dalam jawapan anda:
- Hasilkan sistem yang benar-benar lengkap, konsisten dan berfungsi, bukan sekadar idea umum.
- Terangkan struktur keseluruhan sistem, seni bina dan alasan pilihan teknologi.
- Berikan struktur folder yang jelas untuk frontend, backend dan komponen sokongan jika perlu.
- Tulis kod yang kemas, moden dan mudah diselenggara.
- Pastikan reka bentuk UI/UX responsif untuk desktop dan mudah alih jika sesuai.
- Terangkan flow pengguna utama dan logik di sebalik setiap modul.
- Sertakan validasi borang, pengendalian ralat dan mesej pengguna yang jelas.
- Pastikan modul import CSV/Excel benar-benar boleh membaca fail, menganalisis header dan memaparkan data ke dalam table yang relevan.
- ${requiresAuthentication ? "Authentication hanya dibina kerana saya menyatakan keperluan login atau akses tersebut secara jelas." : "Secara default, jangan bina login page, sign in atau keperluan log masuk kerana saya tidak meminta modul login."}
- Jika terdapat maklumat yang belum cukup lengkap, buat andaian terbaik yang munasabah dan nyatakan andaian tersebut secara jelas.
${buildSection(mustInclude, "sertakan elemen tambahan yang diperlukan untuk menjadikan sistem ini terus boleh dibina")}

Kriteria kejayaan:
${successCriteria}

Format jawapan yang saya mahu:
1. Ringkasan projek dan objektif.
2. Cadangan seni bina sistem.
3. Senarai modul dan fungsi utama.
4. Reka bentuk database atau data structure.
5. Wireframe atau huraian UI/UX bagi setiap halaman utama.
6. Struktur folder projek.
7. Kod lengkap yang diperlukan.
8. Langkah setup, konfigurasi dan deployment.
9. Sample data dan senarai test case.
10. Cadangan penambahbaikan masa depan.

Pastikan jawapan anda profesional, lengkap, praktikal dan terus boleh digunakan untuk membangunkan sistem sebenar.`;
}

function buildPromptVariants(values) {
  const full = buildPrompt(values);
  const concise = `Bina ${values.outputType || "sistem digital"} bernama "${values.projectName || "projek digital pendidikan"}" untuk ${values.targetUsers || "pengguna sekolah"} pada platform ${values.platform || "web"}.

Fokus utama:
- Matlamat: ${values.mainGoal || "selesaikan proses manual di sekolah"}
- Masalah: ${values.problemSolved || "proses semasa tidak efisien"}
- AI sasaran: ${getAiTargetLabel(values.aiTarget)}
- Gaya prompt: ${values.promptStyle || "produk lengkap"}
- Tanpa login secara default jika tidak diminta secara jelas
- Sokong import CSV/Excel dan baca header dinamik
- ${values.deployment ? `Sasaran deployment: ${values.deployment}` : "Jika deployment tidak dinyatakan, bina mod single HTML yang mudah deploy"}

Ciri utama:
${buildSection(normalizeList(values.coreFeatures), "cadangkan ciri utama terbaik")}

Modul:
${buildSection(normalizeList(values.modulesScreens), "cadangkan modul lengkap")}

Data:
${buildSection(normalizeList(values.dataEntities), "cadangkan entiti data utama")}

Output yang saya mahu:
${buildSection(normalizeList(values.deliverables), "berikan kod lengkap, struktur folder, setup, deployment dan test case")}
`;

  const production = `${full}

Arahan production tambahan:
- Utamakan kod yang bersih, modular dan mudah diselenggara.
- Sediakan fail berasingan jika sesuai seperti index.html, style.css, app.js, config deploy dan README.
- Jika deployment mengandungi Netlify, Vercel atau Firebase, sertakan konfigurasi yang sesuai.
- Pastikan fallback, validation, edge cases dan test scenario diterangkan dengan jelas.
- Tulis jawapan dengan fokus kepada implementasi sebenar, bukan idea umum sahaja.`;

  const checklist = `Checklist prompt untuk AI:
1. Bina ${values.outputType || "sistem digital"} bernama "${values.projectName || "projek digital pendidikan"}".
2. Sasarkan pengguna: ${values.targetUsers || "pengguna sekolah"}.
3. Platform: ${values.platform || "web"}.
4. Matlamat utama: ${values.mainGoal || "selesaikan proses manual sekolah"}.
5. Masalah semasa: ${values.problemSolved || "aliran kerja belum efisien"}.
6. AI sasaran: ${getAiTargetLabel(values.aiTarget)}.
7. Gaya prompt: ${values.promptStyle || "produk lengkap"}.
8. Jangan bina login jika tidak diminta.
9. Sokong import CSV/Excel dan baca header dinamik.
10. Gunakan modul berikut:
${buildSection(normalizeList(values.modulesScreens), "cadangkan modul utama")}
11. Gunakan ciri berikut:
${buildSection(normalizeList(values.coreFeatures), "cadangkan ciri teras")}
12. Gunakan data berikut:
${buildSection(normalizeList(values.dataEntities), "cadangkan struktur data")}
13. Gunakan dokumen tambahan jika ada:
${buildAdditionalDocsPromptSection(values)}
14. Sediakan output berikut:
${buildSection(normalizeList(values.deliverables), "kod lengkap, setup, deployment, testing")}
15. Jika deployment dinyatakan, sesuaikan pakej deploy dengan ${values.deployment || "mod single HTML"}.`;

  return { full, concise, production, checklist };
}

function getActivePromptText() {
  return promptVariants[promptVariantMode] || promptVariants.full || "";
}

function renderPromptTabs() {
  const tabLabels = {
    full: "Teks prompt penuh",
    concise: "Versi ringkas",
    production: "Versi production-ready",
    checklist: "Checklist prompt"
  };

  promptTabButtons.forEach((button) => {
    const isActive = button.dataset.promptTab === promptVariantMode;
    button.classList.toggle("is-active", isActive);
  });

  promptOutputLabel.textContent = tabLabels[promptVariantMode] || "Teks prompt";
  generatedPrompt.value = getActivePromptText();
}

function analyzePromptQuality(values) {
  let score = 35;
  const notes = [];
  const importantFields = [
    ["projectName", 6, "Nama projek belum diisi."],
    ["targetUsers", 8, "Pengguna utama belum dijelaskan."],
    ["mainGoal", 10, "Matlamat projek masih belum jelas."],
    ["problemSolved", 10, "Masalah sebenar belum dijelaskan."],
    ["coreFeatures", 10, "Ciri utama masih terlalu umum atau kosong."],
    ["modulesScreens", 8, "Modul atau halaman belum dinyatakan."],
    ["dataEntities", 8, "Entiti data utama belum dihuraikan."],
    ["deliverables", 8, "Hasil yang AI perlu berikan belum lengkap."],
    ["deployment", 5, "Sasaran deployment belum dinyatakan."],
    ["successCriteria", 5, "Kriteria kejayaan belum diterangkan."]
  ];

  importantFields.forEach(([field, weight, warning]) => {
    const content = String(values[field] || "").trim();

    if (content.length) {
      score += weight;
    } else {
      notes.push(warning);
    }
  });

  if (datasetAnalysis.fileName) {
    score += 6;
  } else {
    notes.push("Tambah fail CSV atau Excel jika sistem melibatkan data import sebenar.");
  }

  const docsCount = additionalDocsState.files.length + (values.additionalDocsNotes ? 1 : 0);

  if (docsCount) {
    score += 5;
  } else {
    notes.push("Tambah SOP atau dokumen konteks jika ada untuk tingkatkan ketepatan prompt.");
  }

  if ((values.coreFeatures || "").split(/\n|,/).filter(Boolean).length < 3) {
    notes.push("Senaraikan sekurang-kurangnya 3 ciri utama supaya AI tidak terlalu banyak membuat andaian.");
  }

  if ((values.modulesScreens || "").split(/\n|,/).filter(Boolean).length < 3) {
    notes.push("Tambahkan lebih banyak modul atau halaman utama untuk jadikan skop sistem lebih jelas.");
  }

  if (values.aiTarget === "generic") {
    notes.push("Pilih AI sasaran khusus seperti ChatGPT, Gemini, Claude atau Codex jika anda mahu gaya prompt yang lebih terarah.");
  }

  const deploymentTarget = detectDeploymentTarget(values.deployment);

  if (deploymentTarget.key === "custom") {
    notes.push("Deployment khas dikesan tetapi belum ada konfigurasi automatik. Anda mungkin perlu semak semula pakej deploy.");
  }

  if (!values.deployment) {
    notes.push("Tiada deployment khusus dinyatakan, jadi sistem akan kekalkan mod single HTML sahaja.");
  }

  if (score >= 95) {
    notes.unshift("Prompt ini sangat kuat dan mempunyai konteks yang hampir lengkap.");
  } else if (score >= 80) {
    notes.unshift("Prompt ini sudah baik, tetapi masih ada ruang untuk tambah kejelasan pada beberapa bahagian.");
  } else {
    notes.unshift("Prompt ini masih boleh diperkukuhkan supaya AI menghasilkan sistem yang lebih tepat.");
  }

  return {
    score: Math.min(100, score),
    notes: notes.slice(0, 8)
  };
}

function renderQualityAnalysis(values) {
  const quality = analyzePromptQuality(values);
  qualityCard.classList.remove("is-good", "is-mid", "is-low");

  if (quality.score >= 85) {
    qualityCard.classList.add("is-good");
  } else if (quality.score >= 65) {
    qualityCard.classList.add("is-mid");
  } else {
    qualityCard.classList.add("is-low");
  }

  qualityScore.textContent = String(quality.score);
  qualitySummary.textContent = quality.notes[0];
  qualityIssues.innerHTML = quality.notes
    .slice(1)
    .map((note) => `<span class="quality-issue-chip">${escapeHtml(note)}</span>`)
    .join("") || '<span class="empty-chip">Tiada isu kritikal dikesan.</span>';
}

function getHistoryItems() {
  try {
    return JSON.parse(localStorage.getItem(historyStorageKey) || "[]");
  } catch (error) {
    return [];
  }
}

function saveHistoryItems(items) {
  localStorage.setItem(historyStorageKey, JSON.stringify(items.slice(0, 20)));
}

function renderHistory() {
  const items = getHistoryItems();

  historyList.innerHTML = items.length
    ? items.map((item) => `
      <article class="history-item">
        <div>
          <strong>${escapeHtml(item.projectName)}</strong>
          <p>${escapeHtml(item.createdAtLabel)} | ${escapeHtml(item.aiTargetLabel)} | ${escapeHtml(item.promptVariantLabel)}</p>
        </div>
        <div class="history-actions">
          <button type="button" class="ghost-button history-load-btn" data-history-id="${item.id}">Buka</button>
          <button type="button" class="ghost-button history-delete-btn" data-history-id="${item.id}">Padam</button>
        </div>
      </article>
    `).join("")
    : '<p class="empty-note">Belum ada history projek disimpan.</p>';
}

function saveCurrentProjectToHistory() {
  const values = readFormData();
  const items = getHistoryItems();
  const snapshot = {
    id: `${Date.now()}`,
    createdAt: new Date().toISOString(),
    createdAtLabel: new Date().toLocaleString("ms-MY"),
    projectName: values.projectName || "Projek tanpa nama",
    aiTargetLabel: getAiTargetLabel(values.aiTarget),
    promptVariantLabel: getPromptVariantLabel(promptVariantMode),
    formValues: values,
    promptVariants,
    promptVariantMode,
    docsState: {
      files: additionalDocsState.files.map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
        summary: file.summary,
        content: file.content
      }))
    },
    datasetSnapshot: {
      ...datasetAnalysis
    }
  };

  items.unshift(snapshot);
  saveHistoryItems(items);
  renderHistory();
}

function restoreHistoryItem(id) {
  const item = getHistoryItems().find((entry) => entry.id === id);

  if (!item) {
    return;
  }

  applyValues(item.formValues, false);
  promptVariantMode = item.promptVariantMode || "full";
  additionalDocsState = item.docsState || createEmptyAdditionalDocsState();
  if (datasetFileInput) {
    datasetFileInput.value = "";
  }
  if (supportDocsFilesInput) {
    supportDocsFilesInput.value = "";
  }
  datasetAnalysis = item.datasetSnapshot
    ? {
      ...createEmptyDatasetAnalysis(),
      ...item.datasetSnapshot
    }
    : createEmptyDatasetAnalysis();
  renderDatasetPreview();
  renderSupportDocs();
  promptVariants = item.promptVariants || buildPromptVariants(item.formValues);
  syncDeployFolderName();
  generatePrompt();
}

function deleteHistoryItem(id) {
  const items = getHistoryItems().filter((item) => item.id !== id);
  saveHistoryItems(items);
  renderHistory();
}

function updateSummary(values) {
  const chips = [
    values.projectName || "Projek belum dinamakan",
    values.outputType || "Jenis hasil belum dipilih",
    getAiTargetLabel(values.aiTarget),
    values.platform || "Platform umum",
    values.techStack || "Tech stack fleksibel",
    values.responseLanguage || "Bahasa Melayu"
  ];

  if (datasetAnalysis.fileName) {
    chips.push(`Import ${datasetAnalysis.fileType}`);
    chips.push(`${datasetAnalysis.columnCount} kolum data`);
  }

  if (additionalDocsState.files.length || values.additionalDocsNotes) {
    chips.push("Dokumen tambahan");
  }

  summaryChips.innerHTML = chips
    .map((chip) => `<span class="summary-chip">${escapeHtml(chip)}</span>`)
    .join("");
}

function updateStats(promptText, values) {
  const trackedFields = Object.entries(values).filter(([key, value]) => {
    if (typeof value === "boolean") {
      return value;
    }

    return key !== "outputType" && key !== "platform" && key !== "responseLanguage" && key !== "detailLevel"
      ? String(value).trim().length > 0
      : true;
  });

  const totalCompletedFields = trackedFields.length
    + (datasetAnalysis.fileName ? 1 : 0)
    + (additionalDocsState.files.length || values.additionalDocsNotes ? 1 : 0);

  fieldCount.textContent = String(totalCompletedFields);
  charCount.textContent = String(promptText.length);
  lineCount.textContent = String(promptText.split("\n").length);
}

function saveDraft(values) {
  localStorage.setItem(storageKey, JSON.stringify(values));
}

function loadDraft() {
  const raw = localStorage.getItem(storageKey);

  if (!raw) {
    return;
  }

  try {
    const values = JSON.parse(raw);
    applyValues(values);
  } catch (error) {
    localStorage.removeItem(storageKey);
  }
}

function generatePrompt() {
  syncDeployFolderName();
  const values = readFormData();
  renderSupportDocs();
  promptVariants = buildPromptVariants(values);
  updateSummary(values);
  renderPromptTabs();
  renderQualityAnalysis(values);
  updateStats(getActivePromptText(), values);
  updateDeployStatus();
  saveDraft(values);
}

async function copyPrompt() {
  const text = getActivePromptText();

  if (!text) {
    return;
  }

  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
  } else {
    generatedPrompt.removeAttribute("readonly");
    generatedPrompt.select();
    document.execCommand("copy");
    generatedPrompt.setAttribute("readonly", "readonly");
    generatedPrompt.setSelectionRange(0, 0);
  }

  const originalLabel = copyBtn.textContent;
  copyBtn.textContent = "Prompt Disalin";

  window.setTimeout(() => {
    copyBtn.textContent = originalLabel;
  }, 1600);
}

function downloadPrompt() {
  const prompt = getActivePromptText();
  const fileName = `${sanitizeSystemName(readFormData().projectName || "coder-prompter-studio-prompt", "coder-prompter-studio-prompt")}.txt`;

  const blob = new Blob([prompt], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(url);
}

function resetForm() {
  form.reset();
  form.elements.namedItem("includeSchema").checked = true;
  form.elements.namedItem("includeSampleData").checked = true;
  form.elements.namedItem("includeTestCases").checked = true;
  form.elements.namedItem("includeStepGuide").checked = true;
  promptVariantMode = "full";
  clearPresetSelection();
  clearDatasetSelection();
  clearSupportDocs();
  clearDeployBuilder();
  clearExtractor();
  localStorage.removeItem(storageKey);
  generatePrompt();
}

function handlePresetSelection(button) {
  document.querySelectorAll(".preset-chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip === button);
  });
}

function clearPresetSelection() {
  document.querySelectorAll(".preset-chip").forEach((chip) => {
    chip.classList.remove("is-active");
  });
}

document.querySelectorAll(".preset-chip").forEach((button) => {
  button.addEventListener("click", () => {
    const preset = presets[button.dataset.preset];
    handlePresetSelection(button);
    applyValues(preset);
  });
});

themeOptions.forEach((button) => {
  button.addEventListener("click", () => {
    const nextTheme = button.dataset.themeOption || "dark";
    applyTheme(nextTheme);
    localStorage.setItem(themeStorageKey, nextTheme);
  });
});

migrateLegacyStorageKeys();
initializeTheme();
enhanceFieldGuidance();
renderDatasetPreview();
renderSupportDocs();
renderDeployAssets();
renderExtractedCode();
renderHistory();
updateDeployStatus();
form.addEventListener("input", generatePrompt);
generateBtn.addEventListener("click", generatePrompt);
promptTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    promptVariantMode = button.dataset.promptTab || "full";
    renderPromptTabs();
    updateStats(getActivePromptText(), readFormData());
  });
});
datasetFileInput.addEventListener("change", (event) => {
  handleDatasetUpload(event).catch(() => {
    datasetAnalysis = {
      ...createEmptyDatasetAnalysis(),
      error: "Berlaku ralat semasa memproses fail. Cuba semula dengan fail lain."
    };
    renderDatasetPreview();
    generatePrompt();
  });
});
clearFileBtn.addEventListener("click", () => {
  clearDatasetSelection();
  generatePrompt();
});
supportDocsFilesInput.addEventListener("change", (event) => {
  handleSupportDocsUpload(event).catch(() => {
    additionalDocsState = createEmptyAdditionalDocsState();
    renderSupportDocs();
    generatePrompt();
  });
});
clearDocsBtn.addEventListener("click", () => {
  clearSupportDocs();
  generatePrompt();
});
form.elements.namedItem("additionalDocsNotes")?.addEventListener("input", () => {
  renderSupportDocs();
});
getProjectNameField().addEventListener("input", () => {
  syncDeployFolderName();
});
packageFolderNameInput.addEventListener("input", () => {
  deployFolderSynced = false;
  updateDeployStatus();
});
deployHtmlInput.addEventListener("input", () => {
  updateDeployStatus();
});
deployCssInput.addEventListener("input", () => {
  updateDeployStatus();
});
deployJsInput.addEventListener("input", () => {
  updateDeployStatus();
});
deployAssetFilesInput.addEventListener("change", (event) => {
  handleDeployAssetsUpload(event).catch(() => {
    deployAssetsState = [];
    renderDeployAssets();
    updateDeployStatus("Berlaku ralat semasa membaca asset tambahan.");
    deployStatusCard.classList.add("is-error");
  });
});
syncFolderNameBtn.addEventListener("click", () => {
  syncDeployFolderName(true);
});
clearDeployBtn.addEventListener("click", clearDeployBuilder);
downloadFolderZipBtn.addEventListener("click", downloadDeployZip);
saveFolderDirectBtn.addEventListener("click", () => {
  saveDeployFolderDirect().catch(() => {
    deployStatusCard.classList.add("is-error");
    updateDeployStatus("Tidak berjaya menyimpan terus ke folder. Cuba lagi atau gunakan ZIP.");
  });
});
sampleBtn.addEventListener("click", () => {
  const defaultPreset = document.querySelector('[data-preset="dashboard-sekolah"]');
  handlePresetSelection(defaultPreset);
  applyValues(presets["dashboard-sekolah"]);
});
extractCodeBtn.addEventListener("click", () => {
  extractedCodeState = extractCodeFromAiResponse(aiResponseInput.value || "");
  renderExtractedCode();
});
clearExtractorBtn.addEventListener("click", clearExtractor);
useExtractedHtmlBtn.addEventListener("click", applyExtractedHtmlOnly);
useExtractedSplitBtn.addEventListener("click", applyExtractedSplitFiles);
copyBtn.addEventListener("click", () => {
  copyPrompt().catch(() => {
    copyBtn.textContent = "Salin Manual";
  });
});
downloadBtn.addEventListener("click", downloadPrompt);
resetBtn.addEventListener("click", resetForm);
saveHistoryBtn.addEventListener("click", () => {
  saveCurrentProjectToHistory();
  const originalText = saveHistoryBtn.textContent;
  saveHistoryBtn.textContent = "Tersimpan";

  window.setTimeout(() => {
    saveHistoryBtn.textContent = originalText;
  }, 1400);
});
historyList.addEventListener("click", (event) => {
  const loadButton = event.target.closest(".history-load-btn");
  const deleteButton = event.target.closest(".history-delete-btn");

  if (loadButton?.dataset.historyId) {
    restoreHistoryItem(loadButton.dataset.historyId);
    return;
  }

  if (deleteButton?.dataset.historyId) {
    deleteHistoryItem(deleteButton.dataset.historyId);
  }
});

loadDraft();
generatePrompt();

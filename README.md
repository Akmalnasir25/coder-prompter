# Coder Prompter Untuk Guru

Aplikasi web statik untuk membantu guru dan pengguna bukan teknikal menjana prompt yang lengkap, terperinci dan terus boleh digunakan pada mana-mana AI bagi membina sistem, aplikasi, dashboard atau portal sekolah.

## Cara guna

1. Buka `index.html` dalam browser.
2. Isi maklumat projek dalam borang utama.
3. Pilih AI sasaran dan gaya prompt yang dikehendaki.
4. Jika ada, upload fail CSV/Excel dan dokumen sokongan.
5. Salin prompt, muat turun `.txt`, atau simpan projek ke `History`.
6. Jika AI menghasilkan kod, paste semula ke bahagian deploy atau gunakan `Code Extractor`.

## Fungsi utama

- Mode prompt ikut AI: `Generic`, `ChatGPT`, `Gemini`, `Claude`, `Codex`
- Prompt quality checker dengan skor dan cadangan penambahbaikan
- Prompt variants: `Prompt Penuh`, `Versi Ringkas`, `Versi Production`, `Checklist`
- Preset projek pendidikan seperti dashboard sekolah, kehadiran guru, kokurikulum, PAJSK dan pinjaman buku
- Analisis fail CSV/Excel untuk membaca header, sample data dan struktur jadual
- Sokongan dokumen tambahan seperti SOP, nota, fail `.txt`, `.md`, `.json`, `.csv`
- History projek menggunakan `localStorage`
- Code extractor untuk asingkan `HTML`, `CSS` dan `JavaScript` daripada jawapan AI
- Builder deploy multi-file: `index.html`, `style.css`, `app.js`, folder `assets`
- Pakej deploy automatik untuk `single HTML`, `Netlify`, `Vercel` dan `Firebase Hosting`
- README automatik dalam pakej deploy jika diperlukan
- Theme switcher `dark` dan `light`
- Auto-save draf borang menggunakan `localStorage`

## Deploy builder

Jika ruang `Cadangan deployment` mengandungi:

- `Netlify`: sistem akan jana `netlify.toml`
- `Vercel`: sistem akan jana `vercel.json`
- `Firebase`: sistem akan jana `firebase.json` dan `.firebaserc`
- kosong: sistem kekalkan mod paling ringkas dengan `index.html` sahaja

## Nota

- Secara default, prompt akan mengelakkan `login page` atau `log masuk` kecuali pengguna benar-benar memintanya.
- Jika browser menyokong `showDirectoryPicker`, pilihan `Simpan Terus Ke Folder` lebih disyorkan berbanding ZIP.
- Fail Excel dibaca melalui library CDN dalam browser, jadi sokongan Excel memerlukan sambungan internet semasa library itu dimuatkan.

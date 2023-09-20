# Server Node.js Vanilla

Untuk membuat rute pada server vanilla node.js, kita hanya perlu untuk membuat logika apakah request akan masuk ke rute yang mana jadi simplenya kita hanya perlu untuk membuat potongan kode seperti

```js
if (req.url === "/namaRutenya") {
    res.end("balikan responsnya apa")
}
```

Kalau ingin mengecek juga requestnya menggunakan http method apa, kita tinggal gunakan kondisi tambahan ketika mengecek si request yang masuk

```js
if (req.url === "/namaRutenya" && req.method === "MethodnyaApa contohnya: GET") {
    res.end(balikannya apa)
}
```

Untuk HTTP method lainnya, kalian bisa juga implementasi logika logika terserah kalian tergantung bagaimana apa yang kalian pikirkan

```js
if (req.url === "/post" && req.method === "POST") {
    // logika untuk emnambahkan post
    // const db = fs.readFile(...)
    // db.post.push(req.body)
}
```
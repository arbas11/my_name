// //dengan menggunakan path untuk first name dan last name saya persiapkan untuk menggunakan query dibawah karena masih belum bisa menggunakan hanya  1 app.get untuk yang versi ini (/path/otherpath) saya menggunakan path dengan membuat 2 app.get yg satu untuk /name dan satu lg untuk /name/first atau last.
const express = require('express');
const app = express();

let first = 'Ario';
let last = 'Baskoro';

app.get('/name', (req, res) => {
    console.log(first, last)
})

app.get('/name/:namePath', (req, res) => {
    const fullName = req.params.name;
    const partName = req.params.namePath
    if (partName === 'first') {
        console.log(first)
    } else if (partName === 'last') {
        console.log(last);
    }
})
app.listen(3000, () => console.log('on port 3000 bro'));

// //dengan menggunakan query untuk first name dan last name
// //dapat dipanggil menggunakan query sebagai berikut http://localhost:3000/name?q=last or http://localhost:3000/name?q=first or for full name http://localhost:3000/name
// const express = require('express');
// const app = express();

// let first = 'Ario';
// let last = 'Baskoro';

// app.get('/name', (req, res) => {
//     const { q } = req.query;
//     if (!q) {
//         console.log(first, last);
//     }
//     if (q === 'first') {
//         console.log(first)
//     } else if (q === 'last') {
//         console.log(last);
//     }
// })
// app.listen(3000, () => console.log('on port 3000 coy'));
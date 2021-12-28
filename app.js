// //dengan menggunakan path untuk first name dan last name saya persiapkan untuk menggunakan query dibawah karena masih belum bisa menggunakan hanya  1 app.get untuk /path/otherpath saya menggunakan path dengan membuat 2 app.get yg satu untuk /name dan satu lg untuk /name/first atau last.
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
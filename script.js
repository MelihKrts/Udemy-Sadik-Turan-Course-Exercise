const ogrenci1 = "Ada Bilgi";
const dogumTarihi = 2012;
const matNot1 = 70;
const matNot2 = 70;
const matNot3 = 80;
const ortalama =  matNot1 + matNot2 + matNot3;
const bolum = ortalama / 3;
const basari = 50;
const tarih = new Date().getFullYear();
const ogrenciYas = tarih - dogumTarihi;



const ogrenci2 = "Yiğit Bilgi";
const ogrencidogumTarihi = 2010;
const not = 40;
const not2 = 40;
const not3 = 50;
const notOrtalama = not + not2 + not3;
const ortalamaSonuc = notOrtalama / 3;

const ogrenci2Yas = tarih - ogrencidogumTarihi;




if (bolum >= basari) {
    console.log(ogrenci1, bolum, "Ortalama ile Dersi Geçti");
}
else {
    console.log(ogrenci1, ortalamaSonuc, "Ortalama ile Dersten Kaldı")
}

if (ortalamaSonuc >= basari) {
    console.log(ogrenci2, ortalamaSonuc, "Ortalama ile Dersi Geçti");
}

else {
    console.log(ogrenci2, ortalamaSonuc, "Ortalama ile Dersten Kaldı");
}





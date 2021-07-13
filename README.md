## 112. Trendyol Front-End Bootcamp - 3. Hafta Ödevi

## Ödev Konusu

Rick and Morty API kullanarak karakterleri ve detay sayfalarını ekrana yazdıran bir React uygulaması geliştirmek.

## İstenilenler

- Rick and Morty API kullanarak 20 karakteri listele
- Kart içerisinde isim, cinsiyet, tür, durum, avatar ve lokasyon bilgileri olsun
- API kullanarak sayfa üzerinde cinsiyet ve durum bilgileri ile filtreleme yapılabilsin
- Aynı anda birden fazla filtre kullanılabilsin ve sonuç bulunamazsa ilgili sayfa görüntülensin
- Karakter kartlarına tıklandığında router ile detay sayfası açılsın ve aynı bilgilere ek karakterin oynadığı son 5 bölüm adları da görüntülensin
- Karakter detay sayfasından "Back" butonu ile tekrar anasayfaya dönülebilsin

## Klasör Yapısı

- **public**
  - **assets**: _Uygulamada kullanılan görseller_
- **src**
  - **components**
    - **characters**: _CharacterList.js ve CharacterItem.js içerir_
    - **layout**: _Navbar.js, Loading.js, Pagination.js içerir_
    - **pages**: _Home.js, CharacterDetail.js ve NotFound.js içerir_
    - **search**: _Search.js içerir_
  - **context**: _ContextAPI kullanılarak oluşturulan global state dosyalarını içerir_
  - **css**: _.scss ve .css dosyalarını içerir_

## Demo

[Rick and Morty Characters]() | [mehmetcanaygun.com](https://mehmetcanaygun.com)

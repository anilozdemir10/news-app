import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  categories = [{ code: 'EKONOMI', description: 'Ekonomi' },
  {code: 'GELISMEKTE_OLAN_ULKELER', description: 'Gelişmekte Olan ülkeler'},
  { code: 'TAHVIL_BONO', description: 'Tahvil Bono' },
  { code: 'FX', description: 'FX' }, { code: 'METAL', description: 'Metal' },
  { code: 'EMTIA', description: 'Emtia' },
  { code: 'MAKRO_VERILER', description: 'Makro Veriler' },
  { code: 'GENEL', description: 'Genel' },
  { code: 'SIRKET', description: 'Şirket' },
  { code: 'HISSE', description: 'Hisse' },
  { code: 'FLASH', description: 'Flash' },
  { code: 'GAZETE', description: 'Gazete' },
  { code: 'HAZINE', description: 'Hazine' },
  { code: 'GELISENPIY', description: 'Gelişen Piyasalar' },
  { code: 'SIYASI', description: 'Siyasi' },
  { code: 'YORUM', description: 'Yorum' },
  { code: 'AKTUEL', description: 'Aktüel' },
  { code: 'DIS_EKONOMI', description: 'Dış Ekonomi' },
  { code: 'INGILIZCE', description: 'ingilizce' },
  { code: 'ENERJI', description: 'Enerji' }];

  newsHeaders = [
    {
      date: '2018-03-06T11:31:27.399Z', category: 'FX', id: 1752189,
      headline: 'Yİ-ÜFE BAZLI REEL EFEKTİF DÖVİZ KURU ŞUBAT AYINDA: 84.73 (ÖNCEKİ: 85.53) - TCMB'
    },
    {
      date: '2018-03-06T11:28:44.289Z', category: 'ENERJI', id: 1752187,
      headline: 'AB KOMİSYONU: UKRAYNA ÜZERİNDEN AVRUPA BİRLİĞİNE DOĞALGAZ AKIŞI İSTİKRARLI VE NORMAL'
    },
    {
      date: '2018-03-06T11:27:00.413Z', category: 'DIS_EKONOMI', id: 1752184,
      headline: 'GÜNEY KORE ULUSAL GÜVENLİK BÜROSU BAŞKANI: KUZEY KORE-ABD GÖRÜŞMELERİNİN BAŞLAMASI İÇİN YETERLİ KOŞULLAR MEVCUT'
    },
    {
      date: '2018-03-06T11:23:43.759Z', category: 'EKONOMI', id: 1752176,
      headline: 'Türkiye ile Güney Kore Nükleer İş Birliği Anlaşması İmzaladı - Basın Açıklaması'
    },
    { date: '2018-03-06T11:22:02.104Z', category: 'SIRKET',
      headline: 'KAP: BRSAN [ ] BORUSAN MANNESMANN BORU SANAYİ VE TİCARET A.Ş. Esas Sözleşme Tadili' },
    {
      date: '2018-03-06T11:21:59.334Z', category: 'SIRKET', id: 1752171,
      headline: 'BDDK, \'Yeniden yapılandırma\' konulu bir genelge yayımladı'
    },
    {
      date: '2018-03-06T11:20:21.873Z', category: 'SIYASI', id: 1752170,
      headline: 'AB KOMİSYONU, TÜRKİYEDE TUTUKLANAN YUNAN ASKERLERİN DAVASINDA HIZLI VE OLUMLU SONUÇ UMUYOR'
    },
    {
      date: '2018-03-06T11:15:36.516Z', category: 'DIS_EKONOMI', id: 1752163,
      headline: 'UniCredit CEOsu: İtalyan bankacılık sektöründe hala riskler görüyorum'
    },
    {
      date: '2018-03-06T11:11:39.161Z', category: 'DIS_EKONOMI', id: 1752154,
      headline: 'KUZEY KORE, GÜNEY KOREYE KARŞI SİLAH KULLANMAMA SÖZÜ VERDİ-- BLOOMBERG HT'
    },
    {
      date: '2018-03-06T11:11:19.316Z', category: 'DIS_EKONOMI', id: 1752153,
      headline: 'KUZEY KORE VE GÜNEY KORE NİSANDA ZİRVE DÜZENLEYECEK- BLOOMBERG HT'
    },
    {
      date: '2018-03-06T11:09:51.184Z', category: 'EKONOMI', id: 1752152,
      headline: 'K. KORE GÜVENLİK GARANTİSİYLE NÜKLEER PROGRAMDAN VAZGEÇEBİLİR- BLOOMBERG HT'
    },
    {
      date: '2018-03-06T11:06:24.065Z', category: 'SIRKET', id: 1752143,
      headline: 'KSG Makina ile Les Ateliers de la Meuse iş birliği anlaşması imzaladı'
    },
    {
      date: '2018-03-06T11:06:18.993Z', category: 'EKONOMI', id: 1752142,
      headline: 'TarımBakanı Fakıbaba: Sertifikalı tohumluk üretimi 2017 yılında 1 milyon 50 bin tona çıktı'
    },
    {
      date: '2018-03-06T11:04:12.445Z', category: 'SIRKET', id: 1752137,
      headline: 'Carrefoursa: Bayrampaşadaki taşınmaz Re-Pie Gayrimenkul ve Girişim Sermayesi Portföy Yönetimi satılmıştır'
    },
    {
      date: '2018-03-06T11:02:59.193Z', category: 'SIRKET', id: 1752130,
      headline: 'KAP: CRFSA [ ] CARREFOURSA CARREFOUR SABANCI TİCARET MERKEZİ A.Ş. Haber veya Söylentilere İlişkin Açıklama'
    },
    {
      date: '2018-03-06T11:01:32.397Z', category: 'DIS_EKONOMI', id: 1752129,
      headline: 'LONDRA ALTIN SABİTLEMESİ (ÖĞLEDEN ÖNCE):1324.95 DOLAR/ONS (ÖNCEKİ: 1320.40 DOLAR/ONS) *'
    },
    {
      date: '2018-03-06T11:00:00.984Z', category: 'DIS_EKONOMI', id: 1752126,
      headline: 'OECD Bölgesinde, yıllık enflasyon Ocak ayında yavaşladı: % 2.2'
    },
    {
      date: '2018-03-06T10:59:19.330Z', category: 'DIS_EKONOMI', id: 1752125,
      headline: 'Bulgaristan’ın lojistik şirketi PİMK, Filibe –Türkiye arası seyahat edecek olan ilk intermodal trenini faaliyete alıyor'
    },
    {
      date: '2018-03-06T10:58:41.928Z', category: 'ENERJI', id: 1752124,
      headline: 'Romanya devlet nükleer santrali Nuclearelectricaya 2020 yılına kadar 1,8 milyar RON yatırım yapmayı planlıyor'
    },
    {
      date: '2018-03-06T10:56:56.395Z', category: 'SIRKET', id: 1752118,
      headline: 'DemirDöküm Üst Yöneticisi Avdel: İhracatımız 78 milyon dolara ulaştı'
    },
    {
      date: '2018-03-06T10:55:51.276Z', category: 'METAL', id: 1752113,
      headline: 'Malezya, boksit madenciliği yasağını uzattı, stoklar henüz tükenmedi'
    },
    {
      date: '2018-03-06T10:51:35.661Z', category: 'EKONOMI', id: 1752103,
      headline: 'Kadın çalışma oranı %28, %46lık kesim hayatında hiç çalışmamış'
    },
    {
      date: '2018-03-06T10:51:35.287Z', category: 'SIRKET', id: 1752104,
      headline: 'KAP: ALNTF [ ] ALTERNATİFBANK A.Ş. Özel Durum Açıklaması (Genel)'
    },
    {
      date: '2018-03-06T10:47:37.167Z', category: 'SIRKET', id: 1752095,
      headline: 'Skylabel 21 milyon TL’lik yatırımla ihracatını yüzde 20 artıracak'
    },
    {
      date: '2018-03-06T10:44:56.763Z', category: 'SIRKET', id: 1752086,
      headline: 'Borsa İstanbul, 4 şirketi uyardı'
    }
  ];

  constructor() { }

  getNewsCategories() {
    return this.categories;
  }

  getNewsHeaders() {
    return this.newsHeaders;
  }

  getNewsDetail(newsId: number) {
    return this.newsHeaders.find( x => x.id === newsId);
  }

}

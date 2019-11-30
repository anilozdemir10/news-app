import { Injectable } from '@angular/core';
import { NewsHeader } from '../model/news-header';
import { NewsCategory } from '../model/news-category';
import { NewsDetail } from '../model/news-detail';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  categories: NewsCategory[] = [{ code: 'EKONOMI', description: 'Ekonomi' },
  { code: 'GELISMEKTE_OLAN_ULKELER', description: 'Gelişmekte Olan ülkeler' },
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

  newsHeaders: NewsHeader[] = [
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
    {
      date: '2018-03-06T11:22:02.104Z', category: 'SIRKET', id: 1752172,
      headline: 'KAP: BRSAN [ ] BORUSAN MANNESMANN BORU SANAYİ VE TİCARET A.Ş. Esas Sözleşme Tadili'
    },
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

  newsDetails: NewsDetail[] = [
    {
      id: 1752189,
      date: '2018-03-06T11:31:27.399Z',
      category: 'FX',
      headline: 'Yİ-ÜFE BAZLI REEL EFEKTİF DÖVİZ KURU ŞUBAT AYINDA: 84.73 (ÖNCEKİ: 85.53) - TCMB',
      content: 'Bu haber için içerik bulunmamaktadır.'
    },
    {
      id: 1752184,
      date: '2018-03-06T11:27:00.413Z',
      category: 'DIS_EKONOMI',
      headline: 'GÜNEY KORE ULUSAL GÜVENLİK BÜROSU BAŞKANI: KUZEY KORE-ABD GÖRÜŞMELERİNİN BAŞLAMASI İÇİN YETERLİ KOŞULLAR MEVCUT',
      content: 'Bu haber için içerik bulunmamaktadır.'
    },
    {
      id: 1752187,
      date: '2018-03-06T11:28:44.289Z',
      category: 'ENERJI',
      headline: 'AB KOMİSYONU: UKRAYNA ÜZERİNDEN AVRUPA BİRLİĞİ\'NE DOĞALGAZ AKIŞI İSTİKRARLI VE NORMAL',
      content: 'Bu haber için içerik bulunmamaktadır.'
    },
    {
      id: 1752176,
      date: '2018-03-06T11:23:43.759Z',
      category: 'EKONOMI',
      headline: 'Türkiye ile Güney Kore Nükleer İş Birliği Anlaşması İmzaladı - Basın Açıklaması',
      content: '\nKuruluştan konuya ilişkin yapılan basın açıklaması aşağıda bulunuyor:\n\nNükleer enerji üretiminde dünya 5\'incisi Güney Kore\'nin bu alandaki en önemli derneği olan Kore Uluslararası İşbirliği Nükleer Derneği (Korea Nuclear Association for International Cooperation - KNA) ile Nükleer Mühendisler Derneği (NMD) 5. Uluslararası Nükleer Santraller Zirvesi ve Fuarı\'nda Uzlaşı Belgesi imzaladı. İmza töreninde, KNA\'dan Gihae Shin ve NMD Başkanı Dr. Erol Çubukçu yer aldı.\n\nGüney Kore ve Türkiye hedef pazarlar için birlikte hareket edecek\nKendi santralini ihraç edebilme kapasitesine sahip nadir ülkelerden biri olan Güney Kore ile yapılan iş birliğinin kapsamında; insan kaynakları, nükleer politika geliştirme, nükleer tedarik zincirinde iki ülkenin firmalarının birbirine destek olması, lokalizasyon ve teknoloji transferi gibi başlıklar yer alıyor.\n\nUzlaşı belgesine göre; NMD ve KNA Türkiye ve Güney Kore\'deki proje ve fırsatlarla ilgili birlikte çalışmalar yürütecek. İki derneğe üye şirket ve uzmanlara yönelik Türkiye ve Güney Kore\'de seminerler düzenlenecek. Anlaşma doğrultusunda, iki ülke arasındaki iş birliğini güçlendirmek için nükleer endüstrisi alanındaki uzmanların bilgi alışverişi yapması da sağlanacak.\n\nNükleer ekonomiye pozitif katkı\nİki örgüt arasındaki işbirliğinin ülkeler arasındaki ekonomiye olumlu yansıyacağını ifade eden NMD Başkanı Dr. Erol Çubukçu, Türkiye\'nin nükleer alanında ihracatçı bir yapı kazanması için Güney Kore\'nin önemli bir yapıda bulunduğuna dikkat çekti. Çubukçu, KNA\'nın Uluslararası Nükleer Santraller Zirvesi ve Fuarı\'na dört üye şirketiyle birlikte Türk firmalarıyla ikili görüşmelerde bulunmak için geldiğini de belirterek, ülkeler arasındaki iş birliğinin uzun süreli olacağını vurguladı.\n\n'
    },
    {
      id: 1752172,
      date: '2018-03-06T11:22:02.981Z',
      category: 'SIRKET',
      headline: 'KAP: BRSAN [ ] BORUSAN MANNESMANN BORU SANAYİ VE TİCARET A.Ş. Esas Sözleşme Tadili',
      content: '\n\n\n## Orjinal Link:\n[https://www.kap.org.tr/Bildirim/666036](https://www.kap.org.tr/Bildirim/666036)\n\n\n## Dosyalar:\n[https://www.kap.org.tr/ek-indir/4028328d61c475f00161fb08407f3c95](https://www.kap.org.tr/ek-indir/4028328d61c475f00161fb08407f3c95)\n\n\n\n| Esas Sözleşme Tadili | 2018-03-06 | \n|----|----|\n| Dil Seçimi | | \n| Dil seçimi | | \n| Türkçe | | \n| İngilizce | | \n| Yapılan Açıklama Güncelleme mi? | Hayır (No) | \n| Yapılan Açıklama Düzeltme mi? | Hayır (No) | \n| Konuya İlişkin Daha Önce Yapılan Açıklamanın Tarihi | - | \n| Yapılan Açıklama Ertelenmiş Bir Açıklama mı? | Hayır (No) | \n| Bildirim İçeriği | | \n| Açıklamalar | | \n| Açıklama | \nYönetim\nKurulumuz toplanarak;\n\n\n\n1. \nMerkezi Kayıt\nKuruluşu’nun bilgilendirme yazısı doğrultusunda borsada işlem gören Şirketimize\nait payların aynı nevi’e getirilmesi amacıyla Şirket Esas Sözleşmesinin “Sermaye”\nbaşlıklı 6. maddesinin tadili ile ilgili T.C. Başbakanlık Sermaye Piyasası\nKurulu’ndan gerekli izinlerin alınmasına;\n\n\n\n2. \nT.C. Başbakanlık Sermaye Piyasası Kurulu’ndan alınacak izinler sonrası\nGümrük ve Ticaret Bakanlığı İç Ticaret Genel Müdürlüğü’nden gerekli izinlerin\nalınarak Esas Sözleşme tadilinin yapılacak ilk Olağan Genel Kurul toplantısında\nortakların onayına sunulmasına,\n\n\n\n\n\n\n\n\n\nkatılanların oy birliği ile karar verilmiştir.\n\n | \n\n\n\n\n'
    },
    {
      id: 1752171,
      date: '2018-03-06T11:21:59.334Z',
      category: 'SIRKET',
      headline: 'BDDK, \"Yeniden yapılandırma\" konulu bir genelge yayımladı',
      content: '\nBankacılık Düzenleme ve Denetleme Kurumu(BDDK) internet sitesinde yayınlanan açıklama aşağıda bulunuyor:\n\nKredilerin Sınıflandırılması ve Bunlar İçin Ayrılacak Karşılıklara İlişkin Usul ve Esaslar Hakkında\nYönetmeliğin (Yönetmelik) 7 inci maddesinin birinci fıkrasında;\n “Canlı veya donuk alacaklar için uygulanabilen yeniden yapılandırma, kredi borçlusunun\nödemelerinde karşılaştığı veya karşılaşması muhtemel olan finansal güçlükler nedeniyle borçluya\ntanınan ve geri ödeme sıkıntısı çekmeyen bir borçluya tanınmayacak olan imtiyazları ifade eder.\nBorçluya sağlanan imtiyazlar, finansal güçlük nedeniyle yükümlülüklerini yerine getiremeyen ya da\ngetiremeyecek olan borçlu lehine;\n a) Kredi sözleşmesi koşullarının değiştirilmesi veya\n b) Kredinin kısmen veya tamamen yeniden finanse edilmesidir.”;\nikinci fıkrasında;\n “Aşağıdaki durumlarda, borçluya imtiyaz tanındığı kabul edilir:\n a) Yeniden yapılandırma öncesi ve sonrası sözleşme koşulları arasında finansal güçlük\nyaşayan veya yaşaması muhtemel olan borçlu lehine farklılıklar bulunması.\n b) Yeniden yapılandırma kapsamında yapılan yeni sözleşmede, yeniden yapılandırma\ntarihinde benzer risk profiline sahip diğer borçlulara sağlananlardan daha avantajlı koşulların yer\nalması.”;\nüçüncü fıkrasında ise;\n “Kredi sözleşmesinde yer alan ve finansal güçlük yaşayan borçluya imtiyaz tanınmasını\nsağlayan hükümlerin uygulanması da yeniden yapılandırma olarak kabul edilir.”\nhükümlerine yer verilmektedir.\n Yönetmeliğin yukarıdaki tanımından da anlaşılacağı üzere, yeniden yapılandırmadan bahsedebilmek\niçin finansal güçlük ve imtiyaz koşullarının birlikte gerçekleşmesi gerekmektedir. Dolayısıyla, finansal\ngüçlük yaşamayan borçlu için yapılan sözleşme değişiklikleri (ödeme planı uzatılanlar dâhil) veya yeniden\nfinansman durumları yeniden yapılandırma kapsamında değerlendirilemeyecektir. Söz konusu Yönetmelik\nhükümleri uyarınca finansal güçlük ve imtiyaz olarak değerlendirilmesi gereeken durumlara aşağıda yer\nverilmektedir. Ancak, uygulamada karşılaşılabilecek finansal güçlük ve imtiyaz durumlarının, aşağıda örnek\nolarak verilen hususlar dikkate alınarak bankalarca değerlendirilmesi gerekmektedir.\n Finansal güçlük durumları:\n a) Borçlunun gecikmiş anapara ve/veya faiz ödemesinin bulunması,\n b) Borçlunun gecikmiş herhangi bir ödemesi bulunmamakla birlikte, yeniden yapılandırma olmaması\nhalinde ödemelerde gecikme yaşanmasının muhtemel olması,\n c) Borçlunun beklenen nakit akımlarının kredilerini ve diğer borçlarını karşılamakta yetersiz olması,\n ç) Borçluya kullandırılmış kredilerin banka tarafından İkinci Grup altında sınıflandırılması veya banka\niçinde kullanılan kredi derecelendirme sisteminde borçlunun finansal güçlük içinde olduğunu gösteren bir\ndereceye düşmesi,\n d) Borçlunun kredilerinin banka tarafından donuk olarak sınıflandırılması veya yeniden yapılandırma\nolmaması halinde donuk olarak sınıflandırılacak olmasıı,\n e) Borçlunun diğer bankalardan da kredi temin etme konusunda güçlük yaşaması.\n\n İmtiyaz durumları:\n a) Kredinin vadesinin uzatılması,\n b) Anapara ve/veya faiz ödeme tarihleri değiştirilerek yeni bir ödeme planı yapılması,\n c) Yeni ödemesiz dönem verilmesi veya mevcut ödemesiz dönemin uzatılması,\n ç) Faiz oranının düşürülmesi,\n d) Faizlerin anaparaya eklenmesi,\n e) Anapara ve/veya faiz ödemelerinin ertelenmesi veya bunlardan kısmen vazgeçilmesi,\n f) Ödeme planının öncelikle sadece faiz ödemesi yapılacak şekilde değiştirilmesi,\n g) Teminatın serbest bırakılması veya teminat düzeyinin düşürülmesi,\n h) Tahsilata yönelik girişimlerin ertelenmesi,\n ı) Sözleşme koşullarının kolaylaştırılması.\n Yeni kredinin sözleşme koşulları herhangi bir imtiyaz içermese dahi, finansal güçlük yaşayan bir\nborçlunun mevcut kredisini ödeyebilmesi için yeni bir kredi kullandırılması imtiyaz olarak kabul eddilir.\n Ancak, piyasa faiz oranlarının düşmesi nedeniyle faize ilişkin sözleşme koşullarının yeniden\nbelirlenmesi imtiyaz olarak değerlendirilmez.\n\n\n[https://www.bddk.org.tr/WebSitesi/turkce/Mevzuat/Bankacilik_Kanununa_Iliskin_Duzenlemeler/16718genelge.pdf](https://www.bddk.org.tr/WebSitesi/turkce/Mevzuat/Bankacilik_Kanununa_Iliskin_Duzenlemeler/16718genelge.pdf)\n'
    },
    {
      id: 1752170,
      date: '2018-03-06T11:20:21.873Z',
      category: 'SIYASI',
      headline: 'AB KOMİSYONU, TÜRKİYE\'DE TUTUKLANAN YUNAN ASKERLERİN DAVASINDA HIZLI VE OLUMLU SONUÇ UMUYOR',
      content: 'Bu haber için içerik bulunmamaktadır.'
    },
    {
      id: 1752163,
      date: '2018-03-06T11:15:36.516Z',
      category: 'DIS_EKONOMI',
      headline: 'UniCredit CEO\'su: İtalyan bankacılık sektöründe hala riskler görüyorum',
      content: '\nUniCredit CEO\'su Jean Pierre Mustier, sorunlu krediler ve sermaye\nyetersizliğine dayalı olarak İtalyan bankacılık sektöründe hala riskler\ngördüğünü ancak bunların sistemetik olmadığını ifade etti.\n\n Mustier, \"İtalyan bankacılık sektöründe kısmi konsolidasyon olasılığını\ngözardı etmiyorum\" dedi.\n'
    },
    {
      id: 1752154,
      date: '2018-03-06T11:11:39.161Z',
      category: 'DIS_EKONOMI',
      headline: 'KUZEY KORE, GÜNEY KORE\'YE KARŞI SİLAH KULLANMAMA SÖZÜ VERDİ-- BLOOMBERG HT',
      content: 'Bu haber için içerik bulunmamaktadır.'
    },
    {
      id: 1752153,
      date: '2018-03-06T11:11:19.316Z',
      category: 'DIS_EKONOMI',
      headline: 'KUZEY KORE VE GÜNEY KORE NİSAN\'DA ZİRVE DÜZENLEYECEK- BLOOMBERG HT',
      content: 'Bu haber için içerik bulunmamaktadır.'
    },
    {
      id: 1752152,
      date: '2018-03-06T11:09:51.184Z',
      category: 'EKONOMI',
      headline: 'K. KORE GÜVENLİK GARANTİSİYLE NÜKLEER PROGRAMDAN VAZGEÇEBİLİR- BLOOMBERG HT',
      content: 'Bu haber için içerik bulunmamaktadır.'
    },
    {
      id: 1752143,
      date: '2018-03-06T11:06:24.065Z',
      category: 'SIRKET',
      headline: 'KSG Makina ile Les Ateliers de la Meuse iş birliği anlaşması imzaladı',
      content: '\nKuruluştan konuya ilişkin yapılan basın açıklaması aşağıda bulunuyor:\n\nTürkiye\'nin lider çelik ekipmanları üreticisi ve ihracatçısı KSG Makina ile Avrupa\'nın nükleer alanında lider tedarikçilerinden Les Ateliers de la Meuse (ALM) iş birliği anlaşması imzaladı. Anlaşmanın detayları ilk kez 5. Uluslararası Nükleer Santraller Zirvesi ve Fuarı\'nda açıklandı\n\nEnerji, savunma, otomotiv ve iş makinaları sektörlerine çelik ekipman ve bileşenleri sağlayan KSG Makina, Belçika\'da kökleri 16. yüzyıla uzanan ve 1835 yılında kurulmuş nükleer, medikal, yenilenebilir enerji sektörlerinin lider tedarikçisi Les Ateliers de la Meuse (ALM) ile güçlerini birleştirdi. KSG Makina\'nın nükleer alanında önemli bir tedarikçi olmasının önünü açan anlaşma, 6 Mart 2018 tarihinde 5. Uluslararası Nükleer Santraller Zirvesi ve Fuarı\'nda imzalandı.\n\nKSG ve ALM bu stratejik iş birliğiyle Türkiye, Avrupa, Kuzey Afrika, Orta Doğu, Çin, Hindistan, Brezilya ve Rusya\'daki nükleer santral projeleri için birlikte çalışacaklar.\n\n\"Nükleer, uzay ve savunma sanayide ihracatçı olacağız\"\nTürkiye\'nin nükleer alanında önemli ihracatçılarından biri olma hedefiyle bu iş birliğine imza attıklarını belirten KSG Makina Yönetim Kurulu Üyesi Dr. O. Şener Sezgin, anlaşmayla birlikte iki şirketin çalışanları arasında bilgi ve uzmanlıkların aktarılacağını ifade etti. Sezgin, iki şirketin nükleer, uzay, otomasyon, savunma, enerji ve petrokimya sektörlerindeki varlıklarını bu iş birliğiyle daha da güçlendirip artıracağını vurguladı.\n\nYeni sektörlere birlikte girecekler\nGaz, biyokütle, kriyojenik ve atık yönetimi gibi yeni sektörlere de açılmakta olan ALM şirketinin Genel Müdürü Jeremie Havart, KSG Makina ile nükleer enerji başta olmak üzere birçok sektörde iş birliği yapmak için güçlerini birleştirdiklerini söyledi. En üst düzeyde performans ve güvenliğin öncelikleri olacağını bildiren Havart, ele alacakları projelerde inovatif bakış açısıyla özel çözümler sunacaklarının altını çizdi. Havart, KSG Makina ile yapacakları işbirlliğinde Nükleer Enerji sektörü ile birlikte pek çok sektöre de girileceğini duyurdu.\n\n'
    },
    {
      id: 1752142,
      date: '2018-03-06T11:06:18.993Z',
      category: 'EKONOMI',
      headline: 'TarımBakanı Fakıbaba: Sertifikalı tohumluk üretimi 2017 yılında 1 milyon 50 bin tona çıktı',
      content: '\nGıda Tarım ve Hayvancılık Bakanı Dr. Ahmet Eşref Fakıbaba, sertifikalı tohum üretimiyle ilgili olarak aşağıdaki açıklamayı yaptı:\n \n“AK Parti Hükümetlerimiz döneminde, tarımın stratejik unsurlarından biri olarak gördüğümüz tohum konusuna gereken önem verildi. Bu doğrultuda ilk kez tohumluk desteğinin verilmeye başlandığı 2005’ten bugüne kadar;\n\n1,5 milyon çiftçimize 1 milyar TL sertifikalı tohum kullanım desteği,\n\nSertifikalı tohum üreticilerine 330 milyon TL sertifikalı tohum üretim desteği,\n\n86 bin çiftçimize 362 milyon TL sertifikalı fidan kullanım desteği,\n\nSertifikalı fidan üreticilerimize ise 3 milyon TL fidan üretimi desteği olmak üzere\ntoplam 1.7 milyar TL destekleme ödemesi yapıldı.\n\nBu desteklerimizle beraber tohumculuk üretiminde, veriminde, kalitesinde ve ihracatında ciddi artışlar gerçekleşti.\n\nNitekim 2002 yılında 145 bin ton olan sertifikalı tohumluk üretimi, 7 kat artış göstererek 2017 yılında 1 milyon 50 bin tona çıktı.\n\nBugün itibariyle ülkemizde, Bakanlığımızda yetkilendirilmiş sertifikalı tohum üretimi yapan 832 adet üretici firma bulunuyor. 50 bin üretim beyannamesi ile tarla, depo ve laboratuvar kontrolleri yapılmak suretiyle 3,8 milyon da alanda sertifikalı tohum üretimi yapılıyor.\nYine 2002 yılında 17 milyon dolar tohum ihracatımız 2017 yılında 8 kat artışla 136 milyon dolara (44 bin ton) yükseldi. 2017 yılında tohum ithalatımız ise son beş yılın en düşük değeri olarak 185 milyon dolar (40 bin ton) şeklinde gerçekleşti. İhracatın ithalatı karşılama oranı 2002 yılında % 31 iken 2017’de % 73 seviyesine çıktı. Bugün itibariyle Türkiye olarak 79 ülkeye tohum ihracatı yapıyoruz.\n2017 yılında 3,8 milyon adet asma, 101,7 milyon adet meyve ve 132,9 milyon adet çilek olmak üzere toplam 238,4 milyon adet sertifikalı fide/fidan üretimi gerçekleşti. Ayrıca 30,6 milyon dolarlık fidan ve fide ihracatı gerçekleştirildi.\n2017 yılında süs bitkileri ihracatımız da 57 milyon dolar olarak gerçekleşti.\nTohum üretimindeki çeşit sayıları da artış gösterdi. Bu çerrçevede bugün itibariyle milli çeşit listemizde tarla ve bahçe bitkileri türlerine ait 10 binden fazla çeşit kayıt altına alındı.\nTarla ve bahçe bitkileri türlerine ait mevcutta 8 binin üzerinde çeşit sertifikalı; tohum fide ve fidan üretiminde kullanılıyor. Bu çeşitler yeni ve pazar isteklerine uygun, üstün vasıflı olup gerek verim gerekse de kalite bakımından, tarımsal hasılaya ciddi oranda katkı sağladı.\nGörüldüğü gibi 2002’den bu yana sertifikalı tohum üretim ve ihracatımızda devamlı bir artış yaşanmıştır. Bugün artık Türkiye, tohum üreten ve ihraç eden bir ülkedir. 2023 hedefimiz ise; 2 milyon ton üretim ve 500 milyon dolarlık ihracattır.”\n\n'
    },
    {
      id: 1752137,
      date: '2018-03-06T11:04:12.445Z',
      category: 'SIRKET',
      headline: 'Carrefoursa: Bayrampaşa\'daki taşınmaz Re-Pie Gayrimenkul ve Girişim Sermayesi Portföy Yönetimi Avrupa Stratejik Gayrimenkul Yatırım Fonu\'na satılmıştır',
      content: 'nKamuoyu Aydınlatma Platformu\'nda (KAP) yayınlanan açıklama aşağıda bulunuyor:\n\n Şirketimiz CarrefourSA Carrefour Sabancı Ticaret Merkezi A.Ş. mülkiyetinde olan ve ilgili Tapu Sicil Müdürlüğü nezdinde İstanbul ili, Bayrampaşa İlçesi, Esenler Mahallesi, 4 pafta, 526 ada, 1 parselde kayıtlı bulunan taşınmaz (\"Taşınmaz\") 28.02.2018 tarihinde 134.011.091,00.-TL+KDV (toplam 145.000.000-TL) bedel ile Re-Pie Gayrimenkul ve Girişim Sermayesi Portföy Yönetimi A.Ş. Avrupa Stratejik Gayrimenkul Yatırım Fonu\'na satılmıştır.\n \nSPK lisanslı bir değerleme şirketi tarafından 08.01.2018 tarihinde ilgili gayrimekule ilişkin değerleme raporu düzenlenmiş olup; değerleme raporu ile belirlenen bedel KDV hariç 133.690.000-TL\'dir.\n \nTaşınmazın satış bedeli, 6362 sayılı Sermaye Piyasası Kanununun (\"Kanun\") 15\'inci maddesi ile II- 15.1 sayılı Özel Durumlar Tebliği\'nin 27\'nci maddesine dayanılarak düzenlenmiş olan Özel Durumlar Rehberi ile belirlenen sınırlar altında kaldığı için konuyla ilgili özel durum açıklaması yapılmamıştır. Fakat basında ve sosyal medyada çıkan haberlere istinaden karşılaşılan yoğun soru ve talebi karşılamak için işbu bildirimin yapılmasına karar verilmiştir.\n\n[https://www.kap.org.tr/tr/Bildirim/666035](https://www.kap.org.tr/tr/Bildirim/666035)\n'
    },
    {
      id: 1752130,
      date: '2018-03-06T11:02:59.002Z',
      category: 'SIRKET',
      headline: 'KAP: CRFSA [ ] CARREFOURSA CARREFOUR SABANCI TİCARET MERKEZİ A.Ş. Haber veya Söylentilere İlişkin Açıklama',
      content: '\n\n\n## Orjinal Link:\n[https://www.kap.org.tr/Bildirim/666035](https://www.kap.org.tr/Bildirim/666035)\n\n\n## Dosyalar:\n[](#)\n\n\n\n| Haber veya Söylentilere İlişkin Açıklama | 2018-03-06 | \n|----|----|\n| Dil Seçimi | | \n| Dil seçimi | | \n| Türkçe | | \n| İngilizce | | \n| Yapılan Açıklama Güncelleme mi? | Hayır (No) | \n| Yapılan Açıklama Düzeltme mi? | Hayır (No) | \n| Konuya İlişkin Daha Önce Yapılan Açıklamanın Tarihi | - | \n| Yapılan Açıklama Ertelenmiş Bir Açıklama mı? | Hayır (No) | \n| Bildirim İçeriği | | \n| Açıklamalar | | \n| Açıklama | Şirketimiz CarrefourSA Carrefour Sabancı Ticaret Merkezi A.Ş. mülkiyetinde olan ve ilgili Tapu Sicil Müdürlüğü nezdinde İstanbul ili, Bayrampaşa İlçesi, Esenler Mahallesi, 4 pafta, 526 ada, 1 parselde kayıtlı bulunan taşınmaz (“Taşınmaz”) 28.02.2018 tarihinde 134.011.091,00.-TL+KDV (toplam 145.000.000-TL) bedel ile Re-Pie Gayrimenkul ve Girişim Sermayesi Portföy Yönetimi A.Ş. Avrupa Stratejik Gayrimenkul Yatırım Fonu’na satılmıştır. SPK lisanslı bir değerleme şirketi tarafından 08.01.2018 tarihinde ilgili gayrimekule ilişkin değerleme raporu düzenlenmiş olup; değerleme raporu ile belirlenen bedel KDV hariç 133.690.000-TL’dir. Taşınmazın satış bedeli, 6362 sayılı Sermaye Piyasası Kanununun (“Kanun”) 15’inci maddesi ile II- 15.1 sayılı Özel Durumlar Tebliği’nin 27’nci maddesine dayanılarak düzenlenmiş olan Özel Durumlar Rehberi ile belirlenen sınırlar altında kaldığı için konuyla ilgili özel durum açıklaması yapılmamıştır. Fakat basında ve sosyal medyada çıkan haberlere istinaden karşılaşılan yoğun soru ve talebi karşılamak için işbu bildirimin yapılmasına karar verilmiştir.\n | \n\n\n\n\n'
    },
    {
      id: 1752129,
      date: '2018-03-06T11:01:32.397Z',
      category: 'DIS_EKONOMI',
      headline: 'LONDRA ALTIN SABİTLEMESİ (ÖĞLEDEN ÖNCE):1324.95 DOLAR/ONS (ÖNCEKİ: 1320.40 DOLAR/ONS) *',
      content: 'Bu haber için içerik bulunmamaktadır.'
    },
    {
      id: 1752126,
      date: '2018-03-06T11:00:00.984Z',
      category: 'DIS_EKONOMI',
      headline: 'OECD Bölgesinde, yıllık enflasyon Ocak ayında yavaşladı: % 2.2',
      content: '\nOECD Bölgesinde, Aralık ayında % 2.3 artan yıllık enflasyonun hızı Ocak ayında\nbir önceki aya göre yavaşlayarak % 2.2 arttı. OECD açıklamasına göre; bu gerileme\nenerji kaynaklı.\n\n Aralık ayında % 1.9 artan gıda ve enerji hariç yıllık enflasyon Ocak ayında\n% 1.8 oranında artış kaydetti.\n\n Ocak ayında; bölgede enerji fiyatlarındaki artış bir önceki aya göre azalarak\n% +4.7 (Aralık: % +6.2) olurken, gıda enflasyonu % +2.2 (Aralık: % +2.2) olarak\nölçüldü.\n'
    },
    {
      id: 1752125,
      date: '2018-03-06T10:59:19.330Z',
      category: 'DIS_EKONOMI',
      headline: 'Bulgaristan’ın lojistik şirketi PİMK, Filibe –Türkiye arası seyahat edecek olan ilk intermodal trenini faaliyete alıyor',
      content: '\nTren her Cuma günü Filibe yakınlarındaki intermodal terminalden kalkıp yükleri Cumartesi günler Çerkezköy’e teslim edecek. Aynı gün içinde Çerkezköy’den geri doğru çekilecek olan tren, Pazar günü Türkiye’den yüklediği yükleri Bulgaristan’a getirmiş olacak. PİMK şirketi sahiplerinden biri olan İliyan Filipov, Todor Kableşkov tren istasyonu yakınlarında olan intermodal terminalin kullanım hakkını 27 yıl için adlıklarını açıkladı. Filipov’un yaptığı açıklamaya göre, intermodal tren aracılığı ile bir seferde Türkiye’y e 34 dorse gönderilmesi mümkün olacak. Birkaç haftaya kadar Bulgaristan’dan Türkiye’ye gidecek intermodal tren seferleri sayısının ikiye çıkması bekleniyor.\n\nKaynak: Ekonomi Bakanlığı Bülteni\n'
    },
    {
      id: 1752124,
      date: '2018-03-06T10:58:41.928Z',
      category: 'ENERJI',
      headline: 'Romanya devlet nükleer santrali Nuclearelectrica\'ya 2020 yılına kadar 1,8 milyar RON yatırım yapmayı planlıyor',
      content: '\nRomanya devlet nükleer santrali olan Nuclearelectrica öz kaynkaları ile 2020 yılına kadar 1,8 milyar RON yatırım yapmayı planladığını açıklamıştır.\n\n2019 yılına kadar 642,3 milyon RON yapılması planlanırken 2020 yılı için tahmini yatırım bütçesinin 661,55 milyon RON olmasının öngörüldüğü ifade edilmiştir. Söz konusu yatırımların Cernavoda’d aki iki adet nükleer santrali ve firmanın merkez ofisini kapsamı planlanmaktadır. Fiziki koruma sisteminin iyileştirilmesi için önümüzdeki 3 yıl içinde ayrıca 100 milyon RON harcanması beklenmektedir.\n\nKaynak: Ekonomi Bakanlığı Bülteni\n'
    },
    {
      id: 1752118,
      date: '2018-03-06T10:56:56.395Z',
      category: 'SIRKET',
      headline: 'DemirDöküm Üst Yöneticisi Avdel: İhracatımız 78 milyon dolara ulaştı',
      content: '\nKuruluştan konuya ilişkin yapılan basın açıklaması aşağıda bulunuyor:\n\n \n'
    },
    {
      id: 1752113,
      date: '2018-03-06T10:55:51.276Z',
      category: 'METAL',
      headline: 'Malezya, boksit madenciliği yasağını uzattı, stoklar henüz tükenmedi',
      content: '\nMalezya boksit madenciliği için bir moratoryum uzatırken, iki yılı aşkın bir\nsüredir madencilik faaliyetlerinin resmi olarak durdurulmasına rağmen henüz\ntemizlenemeyen bir stokla karşı karşıya.\n\n Moratoryum, su kaynaklarının kirlenmesi nedeniyle Ocak 2016\'da yürürlüğe\ngirmişti.\n\n Doğal kaynaklar ve Çevre Bakanı Wan Junaidi Tuanku Jaafar, çevreye verilen\nhasarın tekrarını önlemek için bir düzenleyici çerçeve hazırlaması için\nhükümete zaman kazandırması amacıyla yasağın 30 Haziran\'a kadar uzatıldığını\nsöyledi.\n'
    },
    {
      id: 1752103,
      date: '2018-03-06T10:51:35.661Z',
      category: 'EKONOMI',
      headline: 'Kadın çalışma oranı %28, %46\'lık kesim hayatında hiç çalışmamış - Kadir Has Üniversitesi Toplumsal Cinsiyet ve Kadın Algısı Araştırması',
      content: '\nKuruluştan konuya ilişkin yapılan basın açıklaması aşağıda bulunuyor:\n\nKadir Has Üniversitesi Toplumsal Cinsiyet ve Kadın Çalışmaları Merkezi tarafından her yıl gerçekleştirilen “Toplumsal Cinsiyet ve Kadın Algısı Araştırması”nın 2018 sonuçları açıklandı. Araştırmaya göre 2018 yılında kadının en büyük sorunu: ‘Şiddet’. İkinci sırada ‘işsizlik’; üçüncü sırada ise ‘eğitimsizlik’ geliyor. Kadının toplumda yaşadığı en büyük dördüncü sorun ise ‘sokakta baskı ve taciz’. Türkiye’de kadınlık ve erkekliğe atfedilen özelliklerin ülkedeki aile, çalışma ve siyaset dünyasındaki yansımalarını değerlendiren araştırma birçok çarpıcı veriyi ortaya koyuyor.\nKadir Has Üniversitesi Toplumsal Cinsiyet ve Kadın Çalışmaları Merkezi’nin bu yıl dördüncüsünü gerçekleştirdiği “Toplumsal Cinsiyet ve Kadın Algısı Araştırması”nın 2018 yılı sonuçları, 6 Mart 2018 Salı günü Kadir Has Üniversitesi Cibali Kampüsü’nde, Kadir Has Üniversitesi Rektörü Prof. Dr. Mustafa Aydın, Kadir Has Üniversitesi Toplumsal Cinsiyet ve Kadın Çalışmaları Merkezi Müdürü Doç. Dr. Mary Lou O’Neil ve Kadir Has Üniversitesi İktisadi, İdari ve Sosyal Bilimler Fakültesi Öğretim Üyesi Yrd. Doç. Dr. Aslı Çarkoğlu’nun sunumlarıyla gerçekleşen bir basın toplantısıyla paylaşıldı.\n“Toplumsal Cinsiyet ve Kadın Algısı Araştırması”, Şubat ayında 23 ilde, kadın ve erkek bin 205 kişi ile gerçekleştirildi.\nEn büyük sorun şiddet diyenlerin oranı %61\nTürkiye genelinde kadınların en büyük sorunu yüzde 61 ile “şiddet” oldu. Araştırma yapıldığından bu yana en önemli sorun olarak belirtilen şiddet, giderek daha fazla bireyin sorunlar listesinde 1 numaraya oturuyor. Oran 2016’da yüzde 53, 2017’de ise yüzde 55 idi. Bu yıl ise yüzde 61’lik bir kesim tarafından “Kadının 1 numaralı sorunu” olarak belirtildi.Toplum, özellikle kadınlar,kadına yönelik şiddetle mücadele politikaları üretilmesinitalep ediyor.\nToplumda fikir birliği: ‘Aile içi şiddet boşanma sebebi’\nAraştırmada ortaya çıkan bir başka çarpıcı sonuç ise boşanma ve şiddet ilişkisi konusundda oldu.Katılımcıların yüzde 72’si aile içi şiddetin boşanmak için yeterli bir sebep olduğu konusunda fikir birliğine ulaştı.“Erkek, ailenin dirlik düzeni için zaman zaman şiddete başvurabilir” seçeneğine olumlu yaklaşan katılımcıların oranında ise düzenli bir düşüş sözkonusu.Oran 2016 yılında yüzde 14; geçen yıl ise yüzde 11 idi. Bu yıl bu ifadeye olumlu bakanların oranı yüzde 5’e düştü.\nKadınlar kadın lider istiyor, kadın sorunlarına yaklaşım oy verme eğilimlerini etkiliyor\nAnkette geçen yıl ilk kez sorulan “Bir kadın sizin görüşlerinizi savunan bir partinin lideri olsa, o partiye oy verir misiniz?” sorusuna kadın katılımcıların yüzde 81’i“evet” demiş;erkek katılımcılarda aynı oran yüzde 73 olmuştu. Bu yıl rakamlarda artış var. Aynı soruya bu yıl kadınlar yüzde 85, erkekler yüzde 74 oranında “Evet” dedi. “Diyelim ki bir seçim sezonunda çok benzer özelliklere sahip bir erkek ve bir kadın cumhurbaşkanı adayı var, hangisini tercih ederdiniz?” sorusuna geçen yıl kadın katılımcıların yüzdde 63’ü, bu yıl ise yüzde 70’i “Kadın adayı tercih ederdim” dedi. Erkek katılımcıların yüzde 30’u da kadın adayı tercih edeceği yönünde cevap verdi. Geçen yıl bu oran yüzde 36 olarak gözlemlenmişti.\nYerel veya genel seçimlerde oy verilecek partinin diğerlerine göre daha fazla kadın aday göstermesi ve kadına yönelik şiddetle mücadele edeceğini vadetmesi oy verme eğilimlerini etkiliyor. Bir partinin seçimlerde daha fazla kadın aday göstermesi geçen yıl yüzde 30, bu yıl ise yüzde 36’lık bir kesimin desteğini alıyor. Partinin kadına yönelik şiddete karşı çalışacağını söylemesikadınlar için büyük önem taşıyor. Kadın seçmenin yüzde 58’i bu vaadin oy verirken etkili olacağını belirtiyor. Oranda geçen yıla göre yüzde 10’luk artış gözlemleniyor.\nKadınların yüzde 28’i aktif olarak çalışıyor, yüzde 46’lık bir kesim hayatında hiç çalışmamış\nKadının çalışma hayatındaki varlığının da sorgulandığı araştırmada ortaya çıkan sonuç, yüzde 28’lik bir kesimin şu anda aktif olarak çalıştığını gösterdi. Katıllımcıların yüzde 35’i geçmişte çalıştığını, yüzde 46’sı ise hayatında hiç çalışmadığını ifade etti. “Kadınların iş hayatına katılımı ülkenin refahı açısından gereklidir” ifadesine katılma oranı kadınlarda yüzde 84; erkeklerde ise yüzde 73 olarak gerçekleşti.\nİmam ve Müftülerin Resmi Nikah Kıymasına Hayır Dedi\nResmi nikahın imamlar veya müftüler tarafından kıyılması konusunda erkekler kararsız kalırken, kadınlar “hayır” dedi. Erkeklerin yüzde 49’u “hayır”, yüzde 52’si ise “evet” dedi.Kadınların yüzde 64’ü “hayır” diyerek bu yetkilendirmeyi onaylamadıklarını gösterdi.\nToplumsalcinsiyetalgısıgüçleniyor\nAraştırmanın verdiği sonuçlardan biri de eşitlikçi toplumsal cinsiyet algısının güçlenmesi. Kadın ve erkeklerin kamusal ve özel hayatta eşit hak ve duruşlara sahip olmaları konusundaki tutumlar genelinin ölçüldüğü araştırmada; hem kadın hem erkekler arasında eşitlikçi toplumsal cinsiyet algısının güçlendiği gözleniyor. Ancak bu artışın genelde kadının kamusal alandaki hakları ve duruşu ile ssınırlı kalıp, özel hayata yansımaların daha geride kaldığıgörülüyor. Bir çeşit “muhafazakar feminizm” yükselişinden bahsetmek mümkün. Örneğin kürtaj, ev ve çocuk bakımında eşit sorumluluk paylaşımı, evlilik dışı çocuk sahibi olmak veya birlikte yaşamak gibi konularda tutumların olumsuzlaştığı görülürken, özellikle çalışma hayatına kadınların katılımı ve ekonomik özgürlükleri konusunda eşitlikçi tutumların arttığı gözlemleniyor\n\n'
    },
    {
      id: 1752104,
      date: '2018-03-06T10:51:35.713Z',
      category: 'SIRKET',
      headline: 'KAP: ALNTF [ ] ALTERNATİFBANK A.Ş. Özel Durum Açıklaması (Genel)',
      content: '\n\n\n## Orjinal Link:\n[https://www.kap.org.tr/Bildirim/666034](https://www.kap.org.tr/Bildirim/666034)\n\n\n## Dosyalar:\n[](#)\n\n\n\n| Özel Durum Açıklaması (Genel) | 2018-03-06 | \n|----|----|\n| Dil Seçimi | | \n| Dil seçimi | | \n| Türkçe | | \n| İngilizce | | \n| Yapılan Açıklama Güncelleme mi? | Hayır (No) | \n| Yapılan Açıklama Düzeltme mi? | Hayır (No) | \n| Konuya İlişkin Daha Önce Yapılan Açıklamanın Tarihi | - | \n| Yapılan Açıklama Ertelenmiş Bir Açıklama mı? | Hayır (No) | \n| Bildirim İçeriği | | \n| Açıklamalar | | \n| Açıklama | \n6 Mart 2018 tarihi itibarıyla bankamız adı ve logosu\ndeğişmiş olup diğer süreçler devam etmektedir.\n\n\n | \n\n\n\n\n'
    },
    {
      id: 1752095,
      date: '2018-03-06T10:47:37.167Z',
      category: 'SIRKET',
      headline: 'Skylabel 21 milyon TL’lik yatırımla ihracatını yüzde 20 artıracak',
      content: '\nSkylabel Yönetim Kurulu Başkanı Kurtuluş Yıldırım, 2018’de ihracatlarını yüzde 20 artırma hedeflerine ulaşmak için 21 milyon TL’lik ek tesis yatırımı yapacaklarını söyledi.\n\nYıldırım, franchise olarak başladıkları ambalaj üretiminde 2009’da 3 milyonluk yatırımla işe başladıklarını anlatarak “Bin 200 metrekare üretim alanımız var. Kapasite artırımı kapsamında 6 milyon TL’lik bir yer yatırımı yapıyoruz. Makinelerle beraber toplam yatırım 21 milyon TL’ye ulaşacak. 5 bin 700 metrekare ek kapalı alana sahip olacağız” dedi.\n\n2018 yılında ihracatlarını yüzde 20 artırma hedefi koyduklarını dile getiren Yıldırım, “2009 yılında 3 milyon TL’lik yatırımla üretime başladık. Sadece askı üretiyorduk. 2011’de etiket ve çanta üretmeye başladık. Üretimimizin yüzde 40’ını ihraç ediyoruz. 42 kişi çalışıyoruz. Yeni kapasite artırımımızla beraber sağladığımız istihdam da artacak. Tasarım ve Ür-Ge konusunda firmaların talepleri az. Standartlaşmış model kullanılıyor. Üretim kapasitemiz ürünün özelliğine göre değişiyor. Ayda 7 milyon etiket, 1,5 milyon plastik askı, 300 bin ahşap askı, 300 bin karton çanta yapabiliyoruz” ifadesini kullandı.\n\nMaliyette Avrupa’ya göre avantajlı\n\nEn büyük pazarlarının Avrupa olduğunu H&M, Ferre, Roberto Cavalli, Versace, Guess, Gucci gibi markalara ihracat yaptıklarını aktaran Yıldırım, “Başta Almanya, İngiltere, Hollanda, Katar, Dubai olmak üzere bir çok ülkeye ihracat yapıyoruz. Arap ülkelerinde baskı ve çanta daha çok rağbet görüyor. Orta Asya’daki Türk Cumhuriyetlerine de daha çok etiket veriyoruz. Amerika’ya ihracatı artırmaya çalışıyoruz, ama mümkün olmuyor. Amerika artık kendisi üretici olmak istiyor. Avrupa’ya göre de fiyatlarımız çok uygun” diye konuştu.\n\nEn büyük sıkıntı hammadde tedariği\n\n2017 yılında yüzde 10 büyüme oranını yakaladıklarını söyleyen Yıldırım, “Tekstil dünyada her zaman hareketli ve talebi olan bir sektör. Başka sektörlere açılmak istediğimizde de kendimizi yine bu sektörde buluyoruz. Hammadde tedariğinde yaşadığımız sıkıntılar hızlı büyümemizin önündeki en büyük engel. Hammadde fiyatlarında artış olduğunda üretim yavaşlıyor ve bu maliyetlerimizi artırıyor” şeklinde konuştu.\n'
    },
    {
      id: 1752086,
      date: '2018-03-06T10:44:56.763Z',
      category: 'SIRKET',
      headline: 'Borsa İstanbul, 4 şirketi uyardı',
      content: '\nKamuoyu Aydınlatma Platformu\'nda (KAP) yayınlanan açıklama aşağıda bulunuyor:\n\nBorsamız Kotasyon Yönergesi (Yönerge) gereğince bir yıl içinde ödenmesi gereken ve son ödeme tarihi 01/03/2017 olan kotta kalma ücretinin ödenmemesi nedeniyle, Egeli & Co Enerji Yatırımları A.Ş.\'nin Yönergenin 23. maddesinin birinci fıkrasının (e) bendi kapsamında uyarılmasına karar verilmiştir.\n\n[https://www.kap.org.tr/tr/Bildirim/666027](https://www.kap.org.tr/tr/Bildirim/666027)\n\nBorsamız Kotasyon Yönergesi (Yönerge) gereğince bir yıl içinde ödenmesi gereken ve son ödeme tarihi 01/03/2017 olan kotta kalma ücretinin ödenmemesi nedeniyle, Egeli & Co Tarım Girişim Sermayesi Yatırım Ortaklığı A.Ş.\'nin Yönergenin 23. maddesinin birinci fıkrasının (e) bendi kapsamında uyarılmasına karar verilmiştir.\n\n[https://www.kap.org.tr/tr/Bildirim/666028](https://www.kap.org.tr/tr/Bildirim/666028)\n\nBorsamız Kotasyon Yönergesi (Yönerge) gereğince bir yıl içinde ödenmesi gereken ve son ödeme tarihi 01/03/2017 olan kotta kalma ücretinin ödenmemesi nedeniyle, Egeli & Co Yatırım Holding A.Ş.\'nin Yönergenin 23. maddesinin birinci fıkrasının (e) bendi kapsamında uyarılmasına karar verilmiştir.\n\n[https://www.kap.org.tr/tr/Bildirim/666030](https://www.kap.org.tr/tr/Bildirim/666030)\n\nBorsamız Kotasyon Yönergesi (Yönerge) gereğince bir yıl içinde ödenmesi gereken ve son ödeme tarihi 01/03/2017 olan kotta kalma ücretinin ödenmemesi nedeniyle, Selçuk Gıda Endüstri İhracat İthalat A.Ş.\'nin Yönergenin 23. maddesinin birinci fıkrasının (e) bendi kapsamında uyarılmasına karar verilmiştir.\n\n[https://www.kap.org.tr/tr/Bildirim/666031](https://www.kap.org.tr/tr/Bildirim/666031)\n'
    },
  ];

  constructor() { }

  getNewsCategories() {
    return this.categories;
  }

  getNewsHeaders() {
    return this.newsHeaders;
  }

  getNewsDetail(newsId: number) {
    return this.newsDetails.find(x => x.id === newsId);
  }

}

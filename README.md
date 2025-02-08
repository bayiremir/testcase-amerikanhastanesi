# Amerikan Hastanesi Mobil Uygulama Geliştirme Case Çalışması

## Proje Açıklaması

Bu proje, Amerikan Hastanesi mobil uygulama geliştirme rolü için hazırlanan bir case çalışmasıdır. React Native kullanılarak geliştirilmiş olup TypeScript ile yazılmıştır. Proje kapsamında temel navigasyon, durum yönetimi ve animasyon gibi fonksiyonel özellikler hayata geçirilmiştir.

## Teknolojiler ve Araçlar

Proje, aşağıdaki teknolojiler ve kütüphaneler kullanılarak geliştirilmiştir:

### Kullanılan Teknolojiler

- **TypeScript**
- **React Native**: Mobil uygulama geliştirme

### Ana Kütüphaneler ve Araçlar

- `@react-navigation`: Navigasyon yapısı için kullanılmıştır.
- `@reduxjs/toolkit`: Durum yönetimi ve API çağrıları için kullanılmıştır.
- `react-native-mmkv`: Performanslı local storage yönetimi için tercih edilmiştir.
- `lottie-react-native`: Animasyonlar için kullanılmıştır.
- `react-native-heroicons`: Heroicons setindeki ikonları mobil uygulama arayüzüne dahil etmek için kullanılmıştır.
- `react-native-skeleton-placeholder`: Veri yüklenirken yer tutucu (placeholder) animasyonlar göstermek için kullanılır. Kullanıcıya yükleme sürecinin daha iyi hissettirilmesini sağlar.

## Projenin Kurulumu

Projenin kurulum adımları:

### Adım 1: Node Modules Kurulumu

Projeyi indirdikten sonra, gerekli kütüphaneleri yüklemek için:

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

### Adım 2: Native Klasörlerin Kurulumu

#### iOS

```bash
cd ios
pod install
cd ..
```

#### Android

Android otomatik olarak kurulacaktır, ekstra bir kurulum gerekmemektedir.

### Adım 3: Uygulamanın Çalıştırılması

#### iOS

```bash
# using Yarn
yarn ios
```

#### Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

## Projeye Özel Detaylar

- .env dosyası, mail yoluyla iletilecektir.
- Test işlemleri ve diğer detaylar README.md dosyasında ayrıntılı olarak açıklanmıştır.

## Troubleshooting

Eğer sorunla karşılaşırsanız, **bayiremir2@gmail.com** adresinden benimle iletişime geçebilirsiniz.

Bu proje, geliştirme sürecinde Node.js (>=18) ve gerekli React Native bağımlılıkları ile uyumlu olarak tasarlanmıştır.

Teşekkür ederim. Görüşlerinizi bekliyorum.

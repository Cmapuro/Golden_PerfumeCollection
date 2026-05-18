export const translations = {
  en: {
    // Topbar
    freeShipping: 'Free shipping on orders over',
    since: 'Since 1852',

    // Navigation
    home: 'Home',
    shop: 'Shop',
    about: 'About',
    cart: 'Cart',
    search: 'Search',

    // Language
    language: 'Language',
    english: 'English',
    arabic: 'العربية',

    // Home page - Hero
    newCollection: 'New Collection 2025',
    essenceOfArabianLuxury: 'The Essence of Arabian Luxury',
    discoverCenturies:
      'Discover centuries of perfumery mastery, blending rare ingredients into timeless elegance.',
    shopCollection: 'Shop Collection',

    // Home page - Featured
    featuredCreations: 'Featured Creations',

    // Home page - Brand Story
    legacyOfFragrance: 'A Legacy of Fragrance',
    sinceText:
      "Since 1852, Golden Collection has been the home of Arabia's finest perfumes. Every drop tells a story of heritage, passion, and unparalleled craftsmanship.",
    yearsOfHeritage: 'Years of Heritage',
    uniqueFragrances: 'Unique Fragrances',
    countriesServed: 'Countries Served',

    // Shop page
    shopAllProducts: 'Shop All Products',

    // Cart page
    shoppingCart: 'Shopping Cart',
    yourCartIsEmpty: 'Your cart is empty',
    subtotal: 'Subtotal',
    total: 'Total',
    checkout: 'Proceed to Checkout',
    removeFromCart: 'Remove',
    remove: 'Remove',
    orderSummary: 'Order Summary',
    shipping: 'Shipping',

    // About page
    aboutGoldenCollection: 'About Golden Collection',

    // Not Found page
    notFound: '404',
    pageNotFound: 'Page not found',
    goBackHome: 'Go back home',

    // Footer
    quickLinks: 'Quick Links',
    aboutUs: 'About Us',
    contact: 'Contact',
    blog: 'Blog',
    privacyPolicy: 'Privacy Policy',
    followUs: 'Follow Us',
    instagram: 'Instagram',
    facebook: 'Facebook',
    twitter: 'Twitter',
    copyright: '© 2025 Golden Collection. All rights reserved.',

    // Common
    addToCart: 'Add to Cart',
    sAR: 'SAR',
  },
  ar: {
    // Topbar
    freeShipping: 'شحن مجاني على الطلبات بقيمة',
    since: 'منذ 1852',

    // Navigation
    home: 'الرئيسية',
    shop: 'المتجر',
    about: 'حول',
    cart: 'السلة',
    search: 'بحث',

    // Language
    language: 'اللغة',
    english: 'English',
    arabic: 'العربية',

    // Home page - Hero
    newCollection: 'مجموعة جديدة 2025',
    essenceOfArabianLuxury: 'جوهر الفخامة العربية',
    discoverCenturies:
      'اكتشف قرونًا من براعة العطور، حيث تمزج المكونات النادرة الأناقة الخالدة.',
    shopCollection: 'تسوق المجموعة',

    // Home page - Featured
    featuredCreations: 'الإبداعات المميزة',

    // Home page - Brand Story
    legacyOfFragrance: 'إرث من العطور',
    sinceText:
      'منذ عام 1852، كانت Golden Collection موطن أفضل عطور العربية. كل قطرة تروي قصة من التراث والشغف والحرفية التي لا مثيل لها.',
    yearsOfHeritage: 'سنة من التراث',
    uniqueFragrances: 'عطور فريدة',
    countriesServed: 'دول مخدومة',

    // Shop page
    shopAllProducts: 'تسوق جميع المنتجات',

    // Cart page
    shoppingCart: 'سلة التسوق',
    yourCartIsEmpty: 'سلتك فارغة',
    subtotal: 'الإجمالي الفرعي',
    total: 'الإجمالي',
    checkout: 'متابعة الدفع',
    removeFromCart: 'إزالة',
    remove: 'إزالة',
    orderSummary: 'ملخص الطلب',
    shipping: 'التوصيل',

    // About page
    aboutGoldenCollection: 'حول Golden Collection',

    // Not Found page
    notFound: '404',
    pageNotFound: 'الصفحة غير موجودة',
    goBackHome: 'العودة إلى الرئيسية',

    // Footer
    quickLinks: 'روابط سريعة',
    aboutUs: 'من نحن',
    contact: 'اتصل بنا',
    blog: 'المدونة',
    privacyPolicy: 'سياسة الخصوصية',
    followUs: 'متابعة',
    instagram: 'إنستغرام',
    facebook: 'فيسبوك',
    twitter: 'تويتر',
    copyright: '© 2025 Golden Collection. جميع الحقوق محفوظة.',

    // Common
    addToCart: 'أضف إلى السلة',
    sAR: 'ريال سعودي',
  },
};

export function t(key, language = 'en') {
  return translations[language]?.[key] || translations.en[key] || key;
}

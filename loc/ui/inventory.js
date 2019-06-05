export default {

  name: {
    en: 'Inventory',
    ru: 'Инвентарь',
    hi: 'वस्तुसूची',
    es: 'Inventario',
    de: 'Inventar',
    fr: 'Inventaire',
    nl: 'Inventaris',
    pt: 'Inventário',
    tr: 'Enventer',
    it: 'Inventario',
    pl: 'Inwentarz',
    bg: 'Инвентар',
    cs: 'Inventář',
    el: 'Αποθήκευση',
    ja: '在庫',
    tl: 'Imbentaryo',
    ht: 'Envantè',
    ko: '목록',
    sv: 'Inventarium',
    ro: 'inventar',
    da: 'Opbevaring'
  },

  pick: {
    en: 'You have picked up $1',
    nl: 'Je hebt opgepikt $1',
    es: 'Ha recogido $1',
    pt: 'Você pegou $1',
    it: 'Hai preso $1',
    pl: 'Odebrałeś $1',
    de: 'Du hast $1 gesammelt',
    ro: 'Ai luat $1',
    fr: 'Vous avez ramassé $1',
    ru: 'Вы подобрали $1',
    hi: 'आपने $1 उठा लिया',
    bg: 'Взехте $1',
    cs: 'Zvedli jste $1',
    el: 'Έχετε πάρει $1',
    ja: '$1 を拾った',
    tl: 'Kinuha mo na $1',
    ht: 'Ou ranmase $1',
    ko: '당신은 $1 를 선택했습니다',
    sv: 'Du har plockat upp $1',
    da: 'Du har hentet $1'
  },

  throw: {
    en: 'You threw away $1',
    ru: 'Вы выбросили $1',
    ro: 'Ai aruncat $1',
    es: 'Tiró en la basura el $1',
    fr: 'Vous avez jeté $1',
    de: 'Du hast $1 weggeworfen',
    pt: 'Deitaste fora a $1',
    ko: '너는 버렸어 $1',
    nl: 'Je hebt $1 weggegooid',
    pl: 'Wyrzuciłeś $1',
    sv: 'Du kastade bort $1',
    tr: '$1 \'i attın',
    ht: 'Ou jete lwen $1',
    it: 'Hai gettato via $1',
    hi: 'आपने $1 को फेंक दिया',
    tl: 'Nagtapon ka ng $1',
    el: 'Πέσατε $1',
    bg: 'Изхвърлихте $1',
    cs: 'Odhodil jsi $1',
    ja: 'あなたは捨てました $1',
    da: 'Du smed $1 væk'
  },

  full: {
    en: 'Your inventory is full',
    nl: 'Uw inventaris is vol',
    es: 'Su inventario está lleno',
    pt: 'O seu inventário está cheio',
    it: 'Il tuo inventario è pieno',
    pl: 'Twój inwentarz jest pełny',
    de: 'Dein Inventar ist voll',
    ro: 'Inventarul tău este plin',
    fr: 'Votre inventaire est plein',
    ru: 'В инвентаре нет места',
    hi: 'आपकी वस्तुसूचि भर गयी है',
    bg: 'Инвентара е пълен',
    cs: 'Váš inventář je plný',
    el: 'Το απόθεμά σας είναι γεμάτο',
    ja: '在庫がいっぱいです',
    tl: 'Ang iyong imbentaryo ay puno',
    ht: 'Envantè ou plen',
    ko: '인벤토리가 가득 찼습니다',
    sv: 'Din inventering är full',
    da: 'Dit lager er fuldt'
  },

  sell: { // TODO: these are likely broken in many places
    en: 'You have sold $1',
    nl: 'U heeft verkocht $1',
    es: 'Ha vendido $1',
    pt: 'Você vendeu $1',
    it: 'Hai venduto $1',
    pl: 'Sprzedałeś $1',
    de: 'Du hast $1 verkauft',
    ro: 'Ai vândut $1',
    fr: 'Vous avez vendu $1',
    ru: 'Вы продали $1',
    hi: 'आपने $1 बेच दिया',
    bg: 'Продадохте $1',
    cs: 'Prodali jste $1 ',
    el: 'Πουλήσατε $1',
    ja: 'あなたは売りました $1',
    tl: 'Binebenta mo na $1',
    ht: 'Ou te vann $1',
    ko: '$1 에',
    sv: 'Du har sålt $1',
    da: 'Du har solgt $1'
  },

  receive: {
    en: 'You have received $1',
    de: 'Du hast $1 erhalten.',
    ru: 'Вы получили $1',
    fr: 'Vous avez reçu 1',
    nl: 'Je hebt 1 dollar ontvangen.',
    pl: 'Otrzymałeś 1 dolara.',
    pt: 'Você recebeu $1',
    es: 'Usted ha recibido $1',
    it: 'Hai ricevuto $1',
    hi: 'आपको $1 प्राप्त हुआ है',
    da: 'Du har modtaget $1',
    sv: 'Du har fått $1',
    ko: '$1 를 받았습니다.',
    ht: 'Ou te resevwa $1',
    cs: 'Obdrželi jste $1',
    tl: 'Nakatanggap ka ng $1',
    ja: '$1 を受け取りました',
    el: 'Έχετε λάβει $1',
    bg: 'Получихте $1',
    ro: 'Ați primit $1'
  },

  drop: {
    en: 'Drop item',
    ru: 'выбросить',
    hi: 'वस्तु गिरा दे',
    es: 'Dejar caer objeto',
    de: 'Item ablegen',
    fr: 'Déposer l\'objet',
    nl: 'Laat vallen',
    pt: 'Soltar item',
    tr: 'Öğe bırak',
    it: 'Elemento di goccia',
    pl: 'Pozycja zrzutowa',
    bg: 'Пуснете придмет',
    cs: 'Položka Drop',
    el: 'Βάλτε στοιχείο',
    ja: 'ドロップアイテム',
    tl: 'I-drop ang item',
    ht: 'Drop atik la',
    ko: '아이템 놓기',
    sv: 'Släpp objektet',
    ro: 'Aruncă obiectul',
    da: 'Slet genstand'
  },

  equip: {
    en: 'Equip item',
    ru: 'Надеть предмет',
    hi: 'वस्तु पहन लें',
    es: 'Equipar objeto',
    pt: 'Equipar item',
    pl: 'Wyposaż obiekt',
    it: 'Equipaggiare l\'oggetto',
    el: 'Εξοπλισμός αντικειμένου',
    bg: 'Оборудвайте придмет',
    cs: 'Vybavit položku',
    tl: 'Magbigay ng item',
    ht: 'Ekip atik la',
    ja: '装備アイテム',
    ko: '장비 아이템',
    sv: 'Utrusta föremål',
    da: 'Udstyr genstand',
    de: 'Statten Sie Ihren Items aus.',
    fr: 'Equipez votre item',
    nl: 'Rust uw item uit'
  },

  use: {
    en: 'Use item',
    ru: 'Использовать',
    hi: 'इस्तमाल करे',
    ro: 'Utilizează',
    es: 'Utilizar objeto',
    fr: 'Utiliser l\'article',
    de: 'Item verwenden',
    pt: 'Usar item',
    ko: '항목 사용',
    nl: 'Gebruik item',
    pl: 'Pozycja użytkowa',
    sv: 'Använd sak',
    tr: 'Öğe kullan',
    ht: 'Sèvi ak atik la',
    it: 'Utilizzare la voce',
    tl: 'Gamitin ang item',
    el: 'Χρησιμοποιήστε το στοιχείο',
    bg: 'Използвайте придмет',
    cs: 'Použijte přidmet',
    ja: 'アイテムを使う',
    da: 'Brug genstand'
  },

  spend: {
    en: 'You have spent $1 coins',
    ru: 'Вы потратили $1 монеты',
    es: 'Ha gastado $1 monedas',
    fr: 'Vous avez dépensé $1 pièces',
    de: 'Du hast $1 Münzen ausgegeben',
    pt: 'Você gastou $1 moedas',
    ko: '$1 동전을 보냈습니다',
    nl: 'U heeft $1 munten uitgegeven',
    pl: 'Wydałeś $1 monety',
    sv: 'Du har spenderat $1 mynt',
    tr: '$1 madeni para harcadınız',
    ht: 'Ou te pase $1 pyès monnen',
    it: 'Hai speso $1 monete',
    hi: 'आपने $1 सिक्के खर्च कर दिए हैं',
    tl: 'Ginugol mo ang $1 barya',
    el: 'Έχετε ξοδέψει $1 νομίσματα',
    bg: 'Прекарали сте $1 монети',
    cs: 'Strávili jste $1 mincí',
    ja: 'あなたは $1 コインを使った',
    ro: 'Ai cheltuit $1 de monede',
    da: 'Du har brugt $1 mønter'
  }
}

module.exports = {
  _: {
    storage_is_encrypted: 'Ваше сховище зашифроване. Введіть пароль для розшифровки',
    enter_password: 'Введіть пароль',
    bad_password: 'Невірний пароль, спробуйте ще раз',
    months_ago: 'місяців тому',
    days_ago: 'днів тому',
    hours_ago: 'часів тому',
    minutes_ago: 'мінут тому',
    never: 'ніколи',
  },
  wallets: {
    options: 'options',
    list: {
      app_name: 'BlueWallet',
      title: 'гаманці',
      header: 'Гаманець це секретний (приватний) ключ, і відповідна йому адреса на яку можна отримувати біткоїни',
      add: 'Додати Гаманець',
      create_a_wallet: 'Створити гаманець',
      create_a_wallet1: 'Це безкоштовно і можно',
      create_a_wallet2: 'створювати безліч',
      latest_transaction: 'остання транзакція',
      empty_txs1: "Транзакціі з'являться тут,",
      empty_txs2: 'поки що жодноі',
    },
    add: {
      title: 'Додати Гаманець',
      description:
        'Ви можете відсканувати QR код (у форматі WIF - Wallet Import Format), або створити новий гаманець. Segwit підтримується за умовчанням.',
      scan: 'Відсканувати',
      create: 'Створити',
      label_new_segwit: 'Новий SegWit',
      wallet_name: "ім'я гаманця",
      wallet_type: 'тип гаманця',
      or: 'чи',
      import_wallet: 'імпортувати гаманець',
      imported: 'імпортовано',
      coming_soon: 'Буде скоро',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
    },
    details: {
      title: 'Інформація про Гаманець',
      address: 'Адреса',
      type: 'Тип',
      label: 'Мітка',
      destination: 'destination',
      description: 'description',
      are_you_sure: 'Ви впевнені?',
      yes_delete: 'Так, видалити',
      no_cancel: 'Ні, відміна',
      delete_this_wallet: 'Видалити цей гаманець',
      export_backup: 'Експорт / резервна копія',
    },
    export: {
      title: 'Експорт Гаманця',
    },
    import: {
      title: 'імпорт',
      explanation: 'Мнемоніка, приватний ключ, чи будь що. BlueWallet спробуе вгадати вірний формат',
      imported: 'імпортовано',
      error: 'Невдача. Це взашалі валідно?',
      success: 'Успіх',
      do_import: 'імпорт',
      scan_qr: 'чи сканувати QR?',
    },
    scanQrWif: {
      go_back: 'Назад',
      cancel: 'Відміна',
      decoding: 'Декодую',
      input_password: 'Введіть пароль',
      password_explain: 'Приватний ключ зашифрований за стандартом Bip38',
      bad_password: 'Невірний пароль',
      wallet_already_exists: 'Такий гаманець вже існує',
      bad_wif: 'Некоректний WIF',
      imported_wif: 'Імпортовано WIF ',
      with_address: ' з адресою ',
      imported_segwit: 'Імпортований SegWit',
      imported_legacy: 'Імпортований Legacy',
      imported_watchonly: 'Імпортовано Watch-only',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Транзакції',
      title: 'Мої транзакції',
      description: 'Список вхідних або вихідних транзакцій ваших гаманців',
      conf: 'підтв.',
    },
    details: {
      title: 'Деталі транзакції',
      from: 'Від',
      to: 'Кому',
      copy: 'копія',
    },
  },
  send: {
    header: 'Переказ',
    details: {
      title: 'Створити Транзакцію',
      amount_field_is_not_valid: 'Поле не валідно',
      fee_field_is_not_valid: 'Поле `комісія` не валідно',
      address_field_is_not_valid: 'Поле `адреса` не валідно',
      receiver_placeholder: 'Адреса одержувача',
      amount_placeholder: 'скільки відправити (в BTC)',
      fee_placeholder: 'плюс комісія за переказ (в BTC)',
      note_placeholder: 'примітка платежу',
      cancel: 'Відміна',
      scan: 'Скан QR',
      send: 'Send',
      total_exceeds_balance: 'total_exceeds_balance',
      address: 'Address',
      create: 'Створити',
      remaining_balance: 'Залишок балансу',
    },
    create: {
      title: 'Створити Транзакцію',
      error: 'Помилка при створенні транзакції. Невiрна адреса призначення або недостатньо коштiв?',
      go_back: 'Назад',
      this_is_hex: 'Це дані транзакції. Транзакція підписана і готова бути трансльована в мережу. Продовжити?',
      to: 'Куди',
      amount: 'Скільки',
      fee: 'Комісія',
      tx_size: 'Розмір',
      satoshi_per_byte: 'Сатоші на байт',
      memo: 'Примітка',
      broadcast: 'Відправити',
      not_enough_fee: 'Недостатньо комісіі. Збільште комісію',
    },
  },
  receive: {
    header: 'Отримати',
    details: {
      title: 'Покажіть цю адресу платникові',
      share: 'Відправити',
      copiedToClipboard: 'Зкопіювано',
    },
  },
  settings: {
    tabBarLabel: 'Налаштування',
    header: 'Налаштування',
    plausible_deniability: 'Правдоподібне заперечення...',
    storage_not_encrypted: 'Сховище: не зашифровано',
    storage_encrypted: 'Сховище: зашифровано',
    password: 'Пароль',
    password_explain: 'Придумайте пароль для розшифровки сховища',
    retype_password: 'Наберіть пароль ще раз',
    passwords_do_not_match: 'Паролі не збігаються',
    encrypt_storage: 'Зашифрувати сховище',
    about: 'Про програму',
    language: 'Мова',
    currency: 'Валюта',
  },
  plausibledeniability: {
    title: 'Правдоподібне Заперечення',
    help:
      'При певних обставинах вас можуть змусити розкрити пароль. ' +
      'Щоб зберегти ваші біткоїни в безпеці, Bluewallet може створити ' +
      'ще одне зашифроване сховище, з іншим паролем. Під тиском, ' +
      'ви можете розкрити третім особам цей пароль. Якщо ввести цей пароль ' +
      "Bluewallet, розблоковується 'фальшиве' сховище. Це виглядатиме " +
      'правдоподібно для третіх осіб, але при цьому збереже ваше основне сховище ' +
      'з біткоїнамі в безпеці.',
    help2:
      'Нове сховище буде повністю функціональним і ви навіть можете зберігати на ньому небагато біткоїнов ' +
      'щоб це виглядало правдоподібніше.',
    create_fake_storage: 'Створити фальшиве сховище',
    go_back: 'Назад',
    create_password: 'Придумайте пароль',
    create_password_explanation: 'Пароль для фальшивого сховіща не має буті таким же як основній пароль',
    password_should_not_match: 'Пароль для фальшивого сховища не має бути таким же як основний пароль',
    retype_password: 'Наберіть пароль ще раз',
    passwords_do_not_match: 'Паролі не збігаються, спробуйте ще раз',
    success: 'Операція успішна',
  },
  lnd: {
    title: 'мої кошти',
    choose_source_wallet: 'Оберіть гаманець с якого слати',
    refill_lnd_balance: 'Збільшити баланс Lightning гаманця',
    refill: 'Поповнити',
    withdraw: 'Вивести',
  },
};

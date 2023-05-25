Feature: Пошук та купівля товару на Rozetka
  Користувач може здійснювати пошук та купівлю товарів на сайті магазину "Розетка".

  Scenario: Успішна покупка товару
    Given Користувач знаходиться на головній сторінці Rozetka
    When Користувач вводить "смартфон" у поле пошуку
    And Користувач натискає кнопку "Пошук"
    Then Користувач бачить результати пошуку з товарами, що відповідають запиту
    When Користувач вибирає перший товар з результатів пошуку
    And Користувач натискає кнопку "Додати в кошик"
    And Користувач переходить до сторінки кошика
    Then Користувач бачить обраний товар у списку товарів у кошику
    When Користувач натискає кнопку "Оформити замовлення"
    And Користувач вводить свої дані доставки та оплати
    And Користувач натискає кнопку "Підтвердити замовлення"
    Then Користувач бачить підтвердження успішної покупки
    And Користувач отримує підтвердження на електронну пошту

  Scenario: Невдала покупка товару
    Given Користувач знаходиться на головній сторінці Rozetka
    When Користувач вводить "неправильний товар" у поле пошуку
    And Користувач натискає кнопку "Пошук"
    Then Користувач не бачить результатів пошуку
    And Користувач отримує повідомлення про відсутність товарів

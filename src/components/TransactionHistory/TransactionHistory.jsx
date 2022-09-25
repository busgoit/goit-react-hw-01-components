<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>;

// import transactions from 'path/to/transactions.json';

// <TransactionHistory items={transactions} />;

// Данные для списка доступны в формате JSON в файле transactions.json. Это массив объектов, где каждый объект описывает одну транзакцию со следующими свойствами:

// id — уникальный идентификатор транзакции
// type — тип транзакции
// amount - сумма транзакции
// currency - тип валюты

// Необходимо создать компонент TransactionHistory принимающий один проп items - массив объектов транзакций из transactions.json. Компонент создает разметку таблицы. Каждая транзакция это строка таблицы. В примере приведена разметка двух транзакций.

import css from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
            <thead>
                <tr className={css.title}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

           <tbody>
               {items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr className={css.id} key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    );
                }
                )}

            </tbody>
         </table>

    )
}

export default TransactionHistory;

// id — унікальний ідентифікатор транзакції
// type — тип транзакції
// amount - сума транзакції
// currency - тип валюти
// Необхідно створити компонент < TransactionHistory >, який приймає один проп items - масив об'єктів транзакцій. Компонент створює розмітку таблиці. Кожна транзакція - це рядок таблиці. У прикладі наведена розмітка двох транзакцій.

// <table>
//     <thead>
//         <tr>
//             <th>Type</th>
//             <th>Amount</th>
//             <th>Currency</th>
//         </tr>
//     </thead>

//     <tbody>
//         <tr>
//             <td>Invoice</td>
//             <td>125</td>
//             <td>USD</td>
//         </tr>
//         <tr>
//             <td>Withdrawal</td>
//             <td>85</td>
//             <td>USD</td>
//         </tr>
//     </tbody>
// </table>
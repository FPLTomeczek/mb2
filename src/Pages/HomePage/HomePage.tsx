import Balance from './components/Balance/Balance';
import { TransactionsList } from './components/TransacionsList/TransactionsList';
import { transactionList } from './components/TransacionsList/mockData';

export const HomePage = () => {
   return (
      <>
         <Balance />
         <TransactionsList transactionList={transactionList} />
      </>
   );
};

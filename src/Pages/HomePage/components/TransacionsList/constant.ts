export type Transaction = {
   id: string;
   value: number;
   date: Date;
};

export type TransactionListProps = {
   transactionList: Transaction[];
};

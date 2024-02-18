import {
   Card,
   CardBody,
   Flex,
   Text
} from '@chakra-ui/react';
import { TransactionListProps } from './constant';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';

export const TransactionsList = ({ transactionList }: TransactionListProps) => {
   return (
      <>
         {transactionList.map((transaction) => (
            <Card key={transaction.id}>
               <CardBody>
                  <Flex>
                     <Text>{transaction.date.toString()}</Text>
                     <Text>{transaction.value} $</Text>
                     {transaction.value > 0 ? (
                <TriangleUpIcon color={'green'} />
              ) : (
                <TriangleDownIcon color={'red'} />
              )}
                  </Flex>
               </CardBody>
            </Card>
         ))}
      </>
   );
};

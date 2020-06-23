import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  private transactions: Transaction[]

  constructor(){
    super()
    this.transactions = [];
  }

  public all(): Transaction[]{
    return this.transactions
  }

  public async getBalance(): Promise<Balance> {
    const { income, outcome }
  }
}

export default TransactionsRepository;

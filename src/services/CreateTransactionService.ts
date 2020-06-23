import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
interface IRequest{

}

class CreateTransactionService {
  private transactions: Transaction

  constructor( transactions: Transaction ){
    this.transactions= transactions
  }

  public async execute(): Promise<Transaction> {
    return this.transactions
  }
}

export default CreateTransactionService;

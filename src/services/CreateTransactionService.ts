// import AppError from '../errors/AppError';
import { getCustomRepository } from 'typeorm';
import Transaction from '../models/Transaction';

import TransactionsRepository from '../repositories/TransactionsRepository';

interface Request {
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category: string;
}

class CreateTransactionService {
  public async execute({ title, value, type }: Request): Promise<Transaction> {
    // TypeOrm consegue instanciar o cadastro
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    // É uma entidade de repositorio, vait er algumas funcoes do banco
    const transaction = transactionsRepository.create({
      title,
      value,
      type,
    });
    await transactionsRepository.save(transaction);
    return transaction;
  }
}

export default CreateTransactionService;

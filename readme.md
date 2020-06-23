/temp : salvar os arquivos

Começar pelas migrations
/src/database/migration
  yarn typeorm migration:create -n CreateTransactions

  yarn typeorm migration:create -n CreateCategory

  yarn typeorm migration:run

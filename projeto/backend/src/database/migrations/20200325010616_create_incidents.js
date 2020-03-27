exports.up = function(knex) {

    return  knex.schema.createTable('incidents', function (table) {
  
          table.increments();
  
          table.string('title').notNullable();
          table.string('description').notNullable();
          table.decimal('value').notNullable();
  
          table.string('ong_id').notNullable();
  
          table.foreign('ong_id').references('id').inTable('ongs');   // Tabela chave estrangeira da tabela principal ong  
        });  
  }; 
  
  exports.down = function(knex) {
  
      return knex.schema.dropTable('incidents'); // Caso ocorrer algum erro o comando drop vai excluir a tabela
    
  };
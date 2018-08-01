'use strict';

class MysqlService  {
	constructor(mysql){
		this.mysql = mysql
	}
	async create(table,entity){
		try {
			const result = await this.mysql.insert(table,entity);
			return result;
		}
		catch(e) {
			return e 
		}
	}

	async findAll(table){
		try {
			const list = await this.mysql.select(table);
			return list;
		}
		catch(e){
			return e 
		}
	}

	async findOne(table,options){
		try {
			const entity = await this.mysql.select(table,options);
			return entity;
		}
		catch(e){
			return e 
		}
	}

	async update(table,row,options){
		try{
      const result = await this.mysql.update(table, row, options);
      return result;
    }catch(e){
      return { e };
    }
	}

	async execute(sql){
		try{
			const result = await this.mysql.query(sql);
			return result;
		}catch(e){
			return e
		}
	}
}

module.exports = MysqlService;
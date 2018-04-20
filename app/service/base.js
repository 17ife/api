'use strict';

const Server = require('egg').Service;

class BaseService extends Service {
	async create(table,entity){
		try {
			const result = await this.app.mysql.insert(table,entity);
			return { result };
		}
		catch(e) {
			return { e }
		}
	}

	async findAll(table){
		try {
			const list = await this.app.mysql.select(table);
			return { list };
		}
		catch(e){
			return { e }
		}
	}

	async findOne(table,options){
		try {
			const entity = await this.app.mysql.select(table,options);
			return { entity };
		}
		catch(e){
			return { e }
		}
	}

	async update(table,row,options){
		try{
      const result = await this.app.mysql.update(table, row, options);
      return result;
    }catch(e){
      return { e };
    }
	}

	async execute(sql){
		try{
			const result = await this.app.mysql.query(sql);
			return result;
		}catch(e){
			return { e }
		}
	}
}

module.exports = BaseService;
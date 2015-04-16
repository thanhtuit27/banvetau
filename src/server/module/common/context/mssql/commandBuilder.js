define(function(){
	var builder={
		createAddCommand:createAddCommand
	};
	return builder;
	function createAddCommand(dataItem){
		return AddCommand(dataItem);

		function AddCommand(dataItem){
			var self={
				dataItem:dataItem,
				asCommandText:asCommandText
			};
			return self;

			function asCommandText(){
				var data = self.dataItem;

				var sql=String.format("INSERT INTO {0}", data.schema.table);
				var fields="";
				var value="";
				for(var property in data){
					if(property==undefined || property=="schema"){continue;}
					fields=String.format("{0},{1}", fields, property);

					value=String.format("{0},'{1}'", value, !data[property]?"": data[property]);
				}
				fields=String.removeFirst(fields, ",");
				value=String.removeFirst(value, ",");
				sql=String.format("{0}({1}) VALUES({2})", sql, fields, value);
				return sql;
			}
		}
		
	}
});
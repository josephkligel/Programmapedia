# Pandas Guide
Legend:
>("): Same as above or before

## --------------------- Installation and Setup Steps ------------------------

1. pip3 install ipython pandas jupyter

2. jupyter notebook <name of notebook>

3. import pandas

## ------------------- Syntax and Semantics ------------------------

### Series
Creating a series with Pandas
#### Usage:
	* Series: pd.Series([1,2,3])
		* Arguments: First arg is data and second arg is indexes
		* Set index with 2nd Argument: pd.Series([1,2,3], ['a', 'b', 'c'])
	* Series from dictionary: pd.Series({'a': 1, 'b': 2})
	* Access an element: ser1[<index>]

### DataFrame
Array objects using Pandas
#### Common usage:
	* Creating a dataframe: pd.DataFrame(<datalist>, <index list>, <column list>)
	* Access by column: df[<column>] or df.<column>
		* Multiple columns: df[[column1, column2]]
	* Create new column: df[<new column>] = df['Y'] + df['Z']
	* Access by row: df.loc[<row1>]
		* Multiple rows: df.loc[<row1>, <row2>]
		* Access by row index: df.iloc(<index num>)
	* Access element: df.loc[<row>, <column>]
	* Access subset of elements: df.loc[[<row1>, <row2>], [<col1>, <col2>]]
	* Condition selection: df[df > 0]
		* Condition selection on subsets: df[df['W'] > 0]
	* Multiple conditions: df[(df['W'>0) & (df['Y']>1)]
		* Disclaimer: Use & symbol, not and word
		* Or: df[(df['W'>0]) | (df['Y'>1])]
	* Add column: df['States'] = ['CA', 'TN', 'IL']
	* Add row: Use traverse method
		step 1: dfn = df.T
		step 2: dfn[<last index>] = [<value for all fields>]
		step 3: df = dfn.T
	* update cell: df['Times'][0] = <new data>

#### Methods:
	* Delete a column: df.drop(<row or column>, axis=1, inplace=True)
		* Axis: 0 to delete rows or 1 to delete columns. 0 is default
		* Inplace: Delete permenantely. False for default
	* Reset index: df.reset_index() 
	 	* Permanent: df.reset_index(inplace=True)
	* Set index: df.set_index(<column name>)
		* Permanent: df.set_index('States', inplace=True)
		* Disclaimer: Column name must already be in the dataframe

## ------------------------------- Operations ------------------------

### Statistical Operations
Statistical operations performed on pandas objects
#### Usage:
	* max: '<dataframevar>.<columnname>.max()' 
	* mean: '(").mean()'
#### Examples:
	-dataframe: 'df1 = pandas.DataFrame([[5, 5000, 20], [10, 9800, 23], columns = ["Days", "Visitors", "BR"]])'
	-add row: 'df2 = df1.T', 'df2[10] = [11, 1200, 'USA']', 'df1 = df2.T'
	

## ------------------------------- File IO ------------------------

### Reading from Files
Read a file into Pandas	
### Usage:
	* CSV: pandas.read_csv(<filename>, sep=',')
	* JSON: pandas.read_json(<filename>)
	* Excel: pandas.read_excel(<filename>)

### Saving
Saving files using Pandas
#### Usage:
	* CSV: df.to_csv(<filename>)
	* JSON: df.to_json(<filename>)
	* Excel: df.to_excel(<filename>)

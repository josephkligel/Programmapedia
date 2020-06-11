# Pandas Guide
Legend:
>("): Same as above or before

## ---------------------Installation and Setup Steps------------------------

1. pip3 install ipython pandas jupyter

2. jupyter notebook

3. import pandas

## ----------------------Creating Dataframes------------------
DataFrame
### Usage:
	-dataframe: 'pandas.DataFrame([[]])'
	
### Methods:
	-index: set_index(<Column Name>)
	-max: '<dataframevar>.<columnname>.max()' 
	-mean: '(").mean()'
	-specific cells: '<df>.loc[<col/rowindex>, <col/rownames>]'
			'<df>.iloc[("), <col/row indexes only>]'
	-delete column: '<df>.drop(<columnname>, 1)'
	-delete row: '<df>.drop(<rowindex>, 0)'
	-specific column label: 'df.columns[<num>]'
	-specific row label: 'df.index[5]'
	-add row: Use traverse method
		step 1: dfn = df.T
		step 2: dfn[<last index>] = [<value for all fields>]
		step 3: df = dfn.T
	-update cell: df['Times'][0] = <new data>

### Examples:
	-dataframe: 'df1 = pandas.DataFrame([[5, 5000, 20], [10, 9800, 23], columns = ["Days", "Visitors", "BR"]])'
	-add row: 'df2 = df1.T', 'df2[10] = [11, 1200, 'USA']', 'df1 = df2.T'
	

## -------------------------------Types of files------------------------
Types	
### Read:
	-pandas.read_csv(<filename>, sep=',')
	-pandas.read_json(<filename>)
	-pandas.read_excel(<filename>)

### Save to:
	-<df>.to_csv(<filename>)
	-<df>.to_json(<fn>)
	-<df>.to_excel(<fn>)

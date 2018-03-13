<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<title>Your Results | TABLEIZER! Spreadsheets to HTML Tables Tool</title>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	</script>			
</head>
<body>
	<div id="header">
		<h1 id="site-name">TABLEIZER!</h1>
		<h2 id="site-label">A Quick Spreadsheets-to-HTML &lt;Table&gt; Tool</h2>
	</div>	
	<div id="container">	
		<div class="options-buttons-area">
			<a href="/" class="options-button">< Tableize Again</a>
		</div>
		<div id="wrapper">			
			<p class="site-instruction">Copy the HTML code below:</p>			
			<textarea id="table-code" onClick="SelectAll('table-code');" title="Copy the table HTML code here">
&lt;style type=&quot;text/css&quot;&gt;
	table.tableizer-table {
		font-size: ;
		border: 1px solid #CCC; 
		font-family: ;
	} 
	.tableizer-table td {
		padding: 4px;
		margin: 3px;
		border: 1px solid #CCC;
	}
	.tableizer-table th {
		background-color: #; 
		color: #FFF;
		font-weight: bold;
	}
&lt;/style&gt;
&lt;table class=&quot;tableizer-table&quot;&gt;
&lt;thead&gt;&lt;tr class=&quot;tableizer-firstrow&quot;&gt;&lt;th&gt;&lt;/th&gt;&lt;/tr&gt;
&lt;/tbody&gt;&lt;/table&gt;</textarea>

			<div class="options-buttons-area">
				<button class="options-button clipboard-button" data-copytarget="#table-code">Copy HTML to Clipboard</button>
			</div>
 
			<script>
				//Hide the copy to clipboard button for Safari
				var uagent = navigator.userAgent.toLowerCase();
				if(/safari/.test(uagent) && !/chrome/.test(uagent))
				{
					document.write("<style type='text/css'>.options-button, .options-buttons-area {display: none !important;}</style>");	
				}
			</script>  
			  
			  
			<script>
				//Copy to Clipboard script by Craig Buckler @craigbuckler
				  (function () {
				'use strict';
				document.body.addEventListener('click', copy, true);
				function copy(e) {
					var t = e.target, c = t.dataset.copytarget, inp = c ? document.querySelector(c) : null;
					if (inp && inp.select) {
						inp.select();
						try {
							document.execCommand('copy');
							inp.blur();
							t.classList.add('copied');
							setTimeout(function () {
								t.classList.remove('copied');
							}, 1500);
						} catch (err) {
							alert('please press Ctrl/Cmd+C to copy');
						}
					}
				}
			}());
			</script>
			<div class="samplearea">
	
				<style type="text/css">table.tableizer-table {border: 1px solid #CCC; font-family:; font-size: ;} .tableizer-table td {padding: 4px; margin: 3px; border: 1px solid #ccc;} .tableizer-table th {background-color: #; color: #FFF; font-weight: bold;} </style>
				<table class="tableizer-table"><thead><tr class="tableizer-firstrow"><th></th></tr></tbody></table>
			</div>
</body>
</html>
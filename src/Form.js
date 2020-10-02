import React, { useState } from 'react';

function Form(props) {
    const [data,setData] = useState(JSON.parse(localStorage.getItem("dataList")))
    return (
        <div>
            <div class="container">
	<div class="row">
		<h1>All Feedback</h1>
		
		<table class="points_table">
			<thead>
				<tr>
					<th class="col-xs-2">FormName</th>
					<th class="col-xs-2">Name</th>
					<th class="col-xs-2">Phone</th>
					<th class="col-xs-2">Email</th>
					<th class="col-xs-1">Rating</th>
					<th class="col-xs-3">TextField</th>
				</tr>
			</thead>

			<tbody class="points_table_scrollbar">
                 {data && data.map((e)=>
				<tr class="odd">
					<td class="col-xs-2">Aromatic bar</td>
					<td class="col-xs-2">{e.Name_Field}</td>
                    <td class="col-xs-2">{e.Phone_Field}</td>
					<td class="col-xs-2">{e.Email_Field}</td>
					<td class="col-xs-1">{e.inlineRadioOptions}</td>
					<td class="col-xs-3">{e.Comments}</td>
				</tr>
                )}
                
			</tbody>
		</table>
	</div>
</div>
        </div>
    );
}

export default Form;
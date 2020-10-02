import React from 'react';



const initialFormData = Object.freeze({
  Name_Field: "",
  Email_Field: "",
  Phone_Field: "",
  inlineRadioOptions: "",
  Comments: ""

});
const ContactForm = () => {
  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    const arr = [{
      Comments: formData.Comments,
      Email_Field: formData.Email_Field,
      Name_Field: formData.Name_Field,
      Phone_Field: formData.Phone_Field,
      inlineRadioOptions: formData.inlineRadioOptions
    }]
    let newArr = JSON.parse(localStorage.getItem("dataList"));
    if(newArr && newArr.length > 0){
      newArr.push({
        Comments: formData.Comments,
        Email_Field: formData.Email_Field,
        Name_Field: formData.Name_Field,
        Phone_Field: formData.Phone_Field,
        inlineRadioOptions: formData.inlineRadioOptions
      })
      localStorage.setItem("dataList",JSON.stringify(newArr));
    }else{
      localStorage.setItem("dataList",JSON.stringify(arr));
    }
    // ... submit to API or something
  };

  
  
  return (
            <div>
            <div className="panel panel-default well">
            <div className="panel-body">
              <h3>Aromatic Bar</h3>
              <p style={{color:"grey", fontSize:"15px"}}>We are committed to providing you with the best dinig exprience possible, so we welcome your comments. Please fill out this questionnaire. Thank You </p>
              <form action="" className="form-horizontal track-event-form bv-form" data-goaltype="”General”" data-formname="”ContactUs”" method="post" id="contact-us-all" validate="validate">
              <div className="form-group">               
                <div className="col-sm-6">
                  <div className="input-group">
                    <div className="input-group-addon">
                      <i className="fa fa-user"/>
                        </div>
                    <input type="text" className="form-control" id="exampleInputText" required="true" placeholder="Your Name" name="Name_Field" data-bv-field="Name_Field" onChange={handleChange} />
                    </div><br/>
                    <small data-bv-validator="notEmpty" data-bv-validator-for="Name_Field" className="help-block" style={{display: "none"}}>Required</small></div>                
                    <div className="col-sm-6">
                    <div className="input-group">
                    <div className="input-group-addon">
                      <i className="fa fa-envelope"/>
                    </div>
                        <input type="text" className="form-control" id="exampleInputEmail" required="true" placeholder="Enter Your Email " name="Email_Field" data-bv-field="Email_Field" onChange={handleChange}/></div>
                        <small data-bv-validator="notEmpty" data-bv-validator-for="Email_Field" className="help-block" style={{display: "none"}}>Required</small></div>
                        </div>

                        <div className="form-group">               
                          <div className="col-sm-6">
                            <div className="input-group">
                              <div className="input-group-addon">
                                <i className="fa fa-phone"/>
                            </div>
                            <input type="text" className="form-control" id="exampleInputPhone" required="true" placeholder="Enter Mobile Number" name="Phone_Field" data-bv-field="Phone_Field" onChange={handleChange}/>
                        </div><br/>
                        <small data-bv-validator="notEmpty" data-bv-validator-for="Phone_Field" className="help-block" style={{display: "none"}}>Required</small></div>                
                            <div className="col-sm-6">
                            <p>Please rate your overall dining experience.</p>
                            </div>
                            <div className="col-sm-6">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Excellent" onChange={handleChange}/>
                            <label>Excellent</label> 
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Good" onChange={handleChange}/>
                            <label class="form-check-label" for="inlineRadio2">Good</label>
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Fair" onChange={handleChange}/>
                            <label class="form-check-label" for="inlineRadio2">Fair</label>
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Bad" onChange={handleChange}/>
                            <label class="form-check-label" for="inlineRadio2">Bad</label>
                            </div>
                            </div>  
                            
                      <div className="form-group">
                        <div className="col-sm-6">
                        <div className="input-group">
                        <div className="input-group-addon">
                      <i className="fa fa-comment fa-2"/>               
                    </div>                  
                    <textarea className="form-control" name="Comments" id="Comments" rows="5" style={{width:"99.9%"}} placeholder="Enter your message here" onChange={handleChange}></textarea>
                  </div>                                    
                </div>
                      </div>
                      
                      <div className="form-group ">
                        <div className="col-sm-12 ">
                        <button id="contacts-submit" type="submit" style={{float:'right'}} 
                        className="btn btn-default btn-success"
                        onClick={handleSubmit}
                        
                        
                        >SUBMIT</button>
                        
                        </div>
                      </div>
            <input type="hidden" value=""/>
            <form/>
            <div className="col-md-2"> </div>
            </form>
          </div>
        </div>
        </div>         
    )
}

export default ContactForm;







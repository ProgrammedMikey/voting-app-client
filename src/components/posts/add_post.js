import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addPost} from  '../../actions/index';
import {reduxForm} from 'redux-form';
import {browserHistory} from 'react-router';

class AddPost extends Component {
    static contextTypes = {
        router:React.PropTypes.object
};

handleFormSubmit(formProps){
    // console.log(formProps);
this.props.addPost(formProps);
this.context.router.push('/');
}
    render(){
      const {handleSubmit,fields:{title,options}} = this.props;
        return (
          <div className="row topSpacer">
          <div className="col-md-12">
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                  <label>Poll Title:</label>
                  <input {...title} className="form-control" placeholder="Enter title of poll"/>
                  {title.touched && title.error && <div className="text-danger">{title.error}</div>}
                  </fieldset>

                    <button className="btn btn-primary" onClick={(event) => {
                    event.preventDefault()
                    options.addField()}}>Add Option</button>

                        <ul className="list-unstyled mildTopSpacer">
                            {options.map((option, index) => (index < 5 ) ? <li className="mildTopSpacer" key={index}>
                                <div className="input-group">
                                <label htmlFor="award">Option #{index + 1}</label>
                                <input type="text" {...option} className="form-control" placeholder="Enter vote option"/>
                                    {option.touched && option.error && <div className="text-danger">Must choose at least 2 options!</div>}
                                <span className="input-group-btn">
                                    <button className="btn btn-danger topSpacer" onClick={(event) => {
                                    event.preventDefault()
                                     options.removeField(index)
                                     }}>Remove Option</button>
                                </span>

                                    </div>

                            </li> : "")}
                        </ul>


                 <button className="btn btn-success">Create Poll</button>
                </form>
          </div>
          </div>
        );

    }

}

function validate(formProps){
const errors = {};
if(! formProps.title){
 errors.title = "Title is required";
}
if(formProps.options.length < 2){
    errors.options = "Option is required";
}
return errors;
}

function mapStateToProps(state){
  return {
    posts:state.post
  }
}

export default reduxForm({
form:'post',
fields:['title','options[]'],
validate:validate,
},mapStateToProps,{addPost})(AddPost);

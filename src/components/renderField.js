import React, { Component, PropTypes } from 'react';


const RenderField = ({ input, label, type, arial,meta: { touched, error, invalid, warning } }) => (
  <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
    <div>
      <input {...input} className="form-control"  placeholder={label} type={type}  />
       <div className="help-block">
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  </div>
)

export default RenderField;

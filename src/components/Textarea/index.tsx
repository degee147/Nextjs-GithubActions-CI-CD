import React, {HTMLAttributes, TextareaHTMLAttributes} from 'react';
import {FieldProps} from "formik";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  meta?: FieldProps["meta"];
}

function Textarea({label, containerProps, meta, className, ...props}: IProps) {
  return (
    <div {...containerProps}>
      <label>
        <p className="body mb-2">{label}</p>
        <textarea className={`input ${className}`} {...props}/>
        {
          !!meta && meta.touched && meta.error && (
            <p className="small text-red-500 mt-1">{meta.error}</p>
          )
        }
      </label>
    </div>
  );
}

export default Textarea;

"use client"
import React from 'react';
import {Field, FieldProps, Form, Formik, FormikHelpers} from "formik";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Button from "@/components/Button";

interface IProps {
}

interface FormValues {
  name: string,
  email: string,
  message: string,
}

function ContactForm(props: IProps) {
  const initialValues: FormValues = {
    name: "",
    email: "",
    message: "",
  }

  const onSubmit = (values: FormValues, helpers: FormikHelpers<FormValues>) => {
  }

  return (
    <div className="bg-white border border-black-5 rounded-xl px-5 md:px-8 py-10 w-full max-w-lg mx-auto">
      <h3 className="font-semibold text-primary-500 tracking-tight">Send us a message</h3>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {() => (
          <Form className="mt-10 flex flex-col gap-5">
            <Field name="name">
              {({field, meta}: FieldProps) => (
                <Input
                  label="Full Name"
                  placeholder="Full Name"
                  meta={meta}
                  {...field}
                />
              )}
            </Field>

            <Field name="email">
              {({field, meta}: FieldProps) => (
                <Input
                  label="Email Address"
                  placeholder="Email Address"
                  meta={meta}
                  {...field}
                />
              )}
            </Field>

            <Field name="message">
              {({field, meta}: FieldProps) => (
                <Textarea
                  label="Message"
                  placeholder="Message"
                  rows={6}
                  meta={meta}
                  {...field}
                />
              )}
            </Field>

            <div>
              <Button variant="PRIMARY" className="w-full">
                Send
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;

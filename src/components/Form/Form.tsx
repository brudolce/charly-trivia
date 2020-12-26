import React from "react";
import CardStyles from "./Form.styles";
import { useForm } from "react-hook-form";
import Loading from "../Loading/Loading";

interface FormProps {
  question?: string;
  category?: string;
  action?: any;
}

const Form: React.FC<FormProps> = ({
  question = "",
  category = "",
  action = (arg: string) => console.log(arg),
}: FormProps) => {
  const CSS = CardStyles.factory();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data: any) => {
    action(data);
    reset();
  };
  return (
    <div style={CSS.cardContainer()}>
      <Loading loading={question === ""}>
        <form onSubmit={handleSubmit(onSubmit)} style={CSS.cardForm()}>
          <div
            style={{
              ...CSS.formInfo(),
              borderBottom: `solid ${CSS.black} 1px`,
            }}
          >
            Category: {category}
          </div>
          <div style={CSS.formInfo()}>{question}</div>
          <input
            name="answer"
            ref={register}
            placeholder=" Your answer here"
            style={CSS.formInput()}
          />
          <input type="submit" style={CSS.formButtom()} value="Check" />
        </form>
      </Loading>
    </div>
  );
};

export default Form;

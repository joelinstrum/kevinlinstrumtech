import { useForm } from "react-hook-form";
import { useRef } from "react";
import FormStyled from "./FormStyled";
import { IForm } from "types";
import emailjs from "@emailjs/browser";
import { forms } from "../../constants";

const AssessmentForm: React.FC<IForm> = ({ onCancel, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const form = useRef<HTMLFormElement | null>(null);

  const submitHandler = (data: any) => {
    console.log(data);
    sendEmail();
    onSubmit<any>(data);
  };

  const sendEmail = () => {
    const formObject = form.current || "";

    emailjs
      .sendForm(
        forms.AssessmentForm.serviceId,
        forms.AssessmentForm.templateId,
        formObject,
        forms.AssessmentForm.publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <FormStyled onSubmit={handleSubmit(submitHandler)} ref={form}>
      <div>
        <div>First name: </div>
        <div>
          <input
            defaultValue=""
            {...register("firstName", { required: "true" })}
          />
          {errors.firstName && <span>First name is required</span>}
        </div>
      </div>
      <div>
        <div>Last name</div>
        <div>
          <input {...register("lastName", { required: "true" })} />
          {errors.lastName && <span>Last name is required</span>}
        </div>
      </div>
      <div>
        <div>Phone or Email</div>
        <div>
          <input {...register("phoneOrEmail", { required: "true" })} />
          {errors.lastName && <span>Phone or email is required</span>}
        </div>
      </div>
      <div>
        <div>Building Address</div>
        <div>
          <input {...register("buildingAddress")} style={{ width: "300px" }} />
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div>Number of untis</div>
        <div>
          <input {...register("numberOfUnits")} style={{ width: "50px" }} />
        </div>
      </div>
      <div>
        <div />
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </FormStyled>
  );
};

export default AssessmentForm;

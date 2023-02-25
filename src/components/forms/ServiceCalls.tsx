import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import FormStyled from "./FormStyled";
import { IForm } from "types";
import { forms } from "../../constants";

const ServiceCalls: React.FC<IForm> = ({ onSubmit, onCancel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = () => {
    const formObject = form.current || "";
    console.log(form.current);

    emailjs
      .sendForm(
        forms.ServiceForm.serviceId,
        forms.ServiceForm.templateId,
        formObject,
        forms.ServiceForm.publicKey
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

  const submitHandler = (data: any) => {
    onSubmit<any>(data);
    sendEmail();
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
        <div>Description of problem</div>
        <div>
          <textarea
            {...register("problem", { required: "true" })}
            rows={3}
            cols={60}
            style={{ marginTop: "3px" }}
          />
          {errors.lastName && (
            <span>A description of the problem is required</span>
          )}
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

export default ServiceCalls;

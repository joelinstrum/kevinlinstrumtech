import { useForm } from "react-hook-form";
import FormStyled from "./FormStyled";
import { IForm } from "types";

const ServiceCalls: React.FC<IForm> = ({ onSubmit, onCancel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data: any) => {
    console.log(data);
    onSubmit<any>(data);
  };

  return (
    <FormStyled onSubmit={handleSubmit(submitHandler)}>
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
        <div>Number of tenants (approx)</div>
        <div>
          <input {...register("numberOfTenants")} style={{ width: "50px" }} />
        </div>
      </div>
      <div>
        <div />
        <div>
          <button type="submit">Submit</button>
          <span>&nbsp;</span>
          <button type="button" onClick={onCancel}>
            &larr; Cancel
          </button>
        </div>
      </div>
    </FormStyled>
  );
};

export default ServiceCalls;

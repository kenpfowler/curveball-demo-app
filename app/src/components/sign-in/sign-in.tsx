import { useForm, useWatch } from "react-hook-form";
import "./sign-in.css";

interface FormInputs {
  firstName: string;
  lastName: string;
  age: number;
}

const CustomButton = ({
  children,
  type,
}: {
  children: any;
  type: "submit";
}) => {
  return (
    <button className="custom-button" type={type}>
      {children}
    </button>
  );
};

export default function SignIn() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: any) => console.log(data);

  const { firstName, lastName, age } = useWatch({
    control,
  });

  return (
    <div className="sign-in">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="group">
          <label
            className={`${firstName?.length ? "shrink" : ""} form-input-label`}
          >
            First Name
          </label>
          <input className="form-input" {...register("firstName")} />
        </div>
        <div className="group">
          <label
            className={`${lastName?.length ? "shrink" : ""} form-input-label`}
          >
            Last Name
          </label>
          <input className="form-input" {...register("lastName")} />
        </div>
        <div className="group">
          <label className={`${age ? "shrink" : ""} form-input-label`}>
            Age
          </label>
          <input
            className="form-input"
            {...register("age", { pattern: /\d+/ })}
          />
        </div>
        {errors.age && <p>Please enter number for age.</p>}
        {errors.lastName && <p>Last name is required.</p>}

        <CustomButton type="submit"> Sign In </CustomButton>
      </form>
    </div>
  );
}

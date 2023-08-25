"use client";
import { Button } from "@components/AIChat/button";
import { useMultiStepForm } from "@hooks/use-multi-step-form-hook";
import { cn } from "@utils/tailwind";
import React, { FormEvent, useState } from "react";

type Props = {};
type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

const Onboarding = (props: Props) => {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { step, currentStepIndex, steps, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation");
    // API Post call goes here
  }

  return (
    <div className="p-5">
      <div className="mx-4 p-4 mt-20">
        <div className="flex items-center">
          <StepperIcon
            heading="Personal"
            done={currentStepIndex > 0}
            active={currentStepIndex === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-bookmark "
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </StepperIcon>
          <StepperLine done={currentStepIndex > 0} />
          <StepperIcon
            heading="Account"
            done={currentStepIndex > 1}
            active={currentStepIndex === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-user-plus "
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <line x1="20" y1="8" x2="20" y2="14"></line>
              <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg>
          </StepperIcon>
          <StepperLine done={currentStepIndex > 1} />
          <StepperIcon
            heading=" Message"
            done={currentStepIndex > 2}
            active={currentStepIndex === 2}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-mail "
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </StepperIcon>
          <StepperLine done={currentStepIndex > 2} />
          <StepperIcon
            heading="Confirm"
            done={currentStepIndex > 3}
            active={currentStepIndex === 3}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-database "
            >
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
          </StepperIcon>
        </div>
      </div>

      <form className="mt-8 p-4" onSubmit={onSubmit}>
        {/* Forms */}
        {step}
        {/* Forms */}

        <section className="flex p-2 mt-4">
          {!isFirstStep && (
            <Button
              className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-gray-200 bg-gray-100  text-gray-700  border duration-200 ease-in-out border-gray-600 transition"
              type="button"
              onClick={back}
            >
              Previous
            </Button>
          )}
          <div className="flex-auto flex flex-row-reverse">
            <Button
              className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
            hover:bg-teal-600  
            bg-teal-600 
            text-teal-100 
            border duration-200 ease-in-out 
            border-teal-600 transition"
              type="submit"
            >
              {isLastStep ? "Finish" : "Next"}
            </Button>
            <Button
              className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
            hover:bg-teal-200  
            bg-teal-100 
            text-teal-700 
            border duration-200 ease-in-out 
            border-teal-600 transition"
              type="button"
              onClick={() => next()}
            >
              Skip
            </Button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Onboarding;

type StepperLineProps = {
  done?: boolean;
};

const StepperLine = (props: StepperLineProps) => {
  return (
    <div
      className={cn(
        "flex-auto border-t-2 transition duration-500 ease-in-out border-white",
        {
          "border-teal-600": props.done,
        }
      )}
    ></div>
  );
};

type StepperIconProps = {
  done?: boolean;
  active: boolean;
  heading: string;
  children: React.ReactNode;
};

const StepperIcon: React.FC<StepperIconProps> = (props) => {
  return (
    <div
      className={cn("flex items-center  relative", {
        "text-teal-600": props.active || props.done,
      })}
    >
      <div
        className={cn(
          "rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-white text-white",
          {
            "bg-teal-600 border-teal-600 text-white": props.active,
            "border-teal-600 text-teal-600": props.done,
          }
        )}
      >
        {props.children}
      </div>
      <div
        className={cn(
          "absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-white",
          { "text-teal-600": props.active || props.done }
        )}
      >
        {props.heading}
      </div>
    </div>
  );
};

type FormWrapperProps = {
  title: string;
  children: React.ReactNode;
};

function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: 0, marginBottom: "2rem" }}>
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto, 400px)",
        }}
      >
        {children}
      </div>
    </>
  );
}

type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

function AddressForm({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Address">
      <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label>City</label>
      <input
        required
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label>State</label>
      <input
        required
        type="text"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label>Zip</label>
      <input
        required
        type="text"
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </FormWrapper>
  );
}

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

function UserForm({ firstName, lastName, age, updateFields }: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <label className="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">
        First Name
      </label>

      <div className="w-full flex-1 mx-2 svelte-1l8159u bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
        <input
          autoFocus
          required
          type="text"
          value={firstName}
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          onChange={(e) => updateFields({ firstName: e.target.value })}
        />{" "}
      </div>

      <label className="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">
        Last Name
      </label>

      <div className="w-full flex-1 mx-2 svelte-1l8159u bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
        <input
          required
          type="text"
          value={lastName}
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          onChange={(e) => updateFields({ lastName: e.target.value })}
        />
      </div>
      <label className="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">
        Age
      </label>
      <div className="w-full flex-1 mx-2 svelte-1l8159u bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
        <input
          required
          min={1}
          type="number"
          value={age}
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          onChange={(e) => updateFields({ age: e.target.value })}
        />
      </div>
    </FormWrapper>
  );
}

type AccountData = {
  email: string;
  password: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

function AccountForm({ email, password, updateFields }: AccountFormProps) {
  return (
    <FormWrapper title="Account Creation">
      <label>Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
}

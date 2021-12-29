import { useSWRConfig } from "swr";
import { Button, Input, Spacer } from "@geist-ui/react";
import { useToasts } from "@geist-ui/react";
import type { Toast } from "@geist-ui/react";
import { useForm } from "../lib/hooks";

type Contact = {
  firstName: string;
  lastName: string;
  email: string;
};

const formDefaults = {
  firstName: "",
  lastName: "",
  email: "",
};

const createContact = async (
  contact: Contact,
  fireToast: (t: Toast) => void
) => {
  const req = await fetch(`${process.env.API}/api/contacts`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(contact),
  });
  await req.json();
  if (req.status === 200) {
    return fireToast({
      type: "success",
      text: `Contact was successfully created`,
    });
  }
  return fireToast({ type: "error", text: `Issue with creating contact` });
};

export const AddContacts: React.FC = () => {
  const { mutate } = useSWRConfig();
  const { values, handleInputChange } = useForm<Contact>({
    ...formDefaults,
  });
  const [_, setToast] = useToasts();
  const submitHandler = async () => {
    const { firstName, lastName, email } = values;
    await createContact({ firstName, lastName, email }, setToast);
    mutate(`/api/contacts`);
  };
  return (
    <>
      <div className="form_container">
        <Input
          name="firstName"
          type="success"
          placeholder="John"
          value={values.firstName}
          onChange={handleInputChange}
        >
          First Name
        </Input>
        <Input
          name="lastName"
          type="success"
          placeholder="Doe"
          value={values.lastName}
          onChange={handleInputChange}
        >
          Last Name
        </Input>
        <Input
          name="email"
          type="success"
          placeholder="email@email.com"
          value={values.email}
          onChange={handleInputChange}
        >
          Email
        </Input>
      </div>
      <Spacer h={3} />
      <div className="form_controls">
        <Button onClick={submitHandler} auto type="success" scale={2 / 3}>
          Submit
        </Button>
      </div>
      <style jsx>{`
        .form_container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 40px;
        }
        .form_controls {
          padding: 8px;
        }
      `}</style>
    </>
  );
};

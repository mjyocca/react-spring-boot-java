import { Card, Divider, Grid, Spacer, Text } from "@geist-ui/react";
import useSWR from "swr";

type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export const ContactList: React.FC = () => {
  const { data } = useSWR<Contact[]>("/api/contacts");
  return (
    <>
      <Spacer inline w={0.35} />
      <Grid.Container gap={2} justify="center">
        {data?.map((contact) => {
          return (
            <Grid xs={10} key={contact.id}>
              <Card key={contact.id} width="350px">
                <Card.Content>
                  <Text b>
                    {contact.firstName} {contact.lastName}
                  </Text>
                </Card.Content>
                <Divider />
                <Card.Content>
                  Email: <Text>{contact.email}</Text>
                </Card.Content>
              </Card>
            </Grid>
          );
        })}
      </Grid.Container>
    </>
  );
};

import { DUB_WORDMARK } from "@dub/utils";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { Footer } from "../components/footer";

export default function PasswordUpdated({
  email = "panic@thedis.co",
  verb = "updated",
}: {
  email: string;
  verb?: "reset" | "updated";
}) {
  return (
    <Html>
      <Head />
      <Preview>Your password has been {verb}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-10 max-w-[600px] rounded border border-solid border-neutral-200 px-10 py-5">
            <Section className="mt-8">
              <Img src={DUB_WORDMARK} height="32" alt="Dub" />
            </Section>
            <Heading className="mx-0 my-7 p-0 text-xl font-medium text-black">
              Password has been {verb}
            </Heading>
            <Text className="text-sm leading-6 text-black">
              The password for your Dub account has been successfully {verb}.
            </Text>
            <Text className="text-sm leading-6 text-black">
              If you did not make this change or you believe an unauthorised
              person has accessed your account, please contact us immediately to
              secure your account.
            </Text>
            <Footer email={email} />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

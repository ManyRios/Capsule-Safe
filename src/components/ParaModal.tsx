import { OAuthMethod, ParaModal, AuthLayout } from "@getpara/react-sdk";
import para from "../clients/Para";

interface IParaModal {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}
export default function ParaModalCapsule({
  isModalOpen,
  setIsModalOpen,
}: IParaModal) {
  return (
    <ParaModal
      para={para}
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(!isModalOpen)}
      logo={""}
      theme={{}}
      oAuthMethods={
        [
          OAuthMethod.GOOGLE,
          OAuthMethod.FARCASTER,
          OAuthMethod.TELEGRAM,
          OAuthMethod.DISCORD,
          OAuthMethod.TWITTER,
        ]
      }
      authLayout={[AuthLayout.AUTH_FULL ,AuthLayout.EXTERNAL_FULL]}
      recoverySecretStepEnabled={true}
    />
  );
}

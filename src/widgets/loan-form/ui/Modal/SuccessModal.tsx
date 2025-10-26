import { Modal } from "~/shared/ui/modal";
import { type LoanFormValues } from "~/entities/loan";
import { useNavigate } from "react-router-dom";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: LoanFormValues;
}

export const SuccessModal = ({ isOpen, onClose, data }: SuccessModalProps) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    navigate("/");
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Заявка успешно отправлена!">
      Поздравляем, {data.lastName} {data.firstName}. Вам одобрена{" "}
      ${data.loanAmount} на {data.loanTerm} дней.
    </Modal>
  );
};

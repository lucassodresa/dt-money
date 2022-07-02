import Modal from "react-modal";
import { Container } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Transaction Register</h2>
        <input placeholder="Title" />
        <input placeholder="Price" type="number" />
        <input placeholder="Category" />
        <button type="submit">Create</button>
      </Container>
    </Modal>
  );
};

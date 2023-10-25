import { Modal } from "reactstrap";
import PropTypes from "prop-types";

const ModalConvenio = ({
  showModalConvenio,
  setShowModalConvenio,
  toggle,
  children,
}) => {
  return (
    <Modal
      isOpen={showModalConvenio}
      toggle={toggle}
      className="modal-convenio"
      onClosed={() => setShowModalConvenio(false)}
    >
      {children}
    </Modal>
  );
};

export default ModalConvenio;

ModalConvenio.propTypes = {
  showModalConvenio: PropTypes.bool.isRequired,
  toggle: PropTypes.bool.isRequired,
  setShowModalConvenio: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

{
  /* <QrCodeScan props={props} modeQr={setModeQrCode} />
{modeQrCode === "Scan" && (
<Button onClick={() => setShowModalQrCode(false)}>Cancelar</Button>
)} */
}

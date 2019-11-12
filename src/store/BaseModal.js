import React, {useState, cloneElement} from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";

function BaseModal({trigger, open = false}) {

  const [openStatus, setOpen] = useState(open);

  const handleClose = () => {
    setOpen(false);
  };

  const renderTrigger = () => {
    return trigger && cloneElement(trigger, {onClick: () => setOpen(true)})
  };

  return (
    <div>
      {renderTrigger()}
      <Dialog onClose={handleClose} open={openStatus}>
        <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );

}

export default BaseModal

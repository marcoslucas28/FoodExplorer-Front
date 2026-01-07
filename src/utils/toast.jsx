import { toast } from "react-toastify";

import { Button } from "../components/Button";

export const notifySuccess = (msg) => toast.success(msg);
export const notifyError = (msg) => toast.error(msg);
export const notifyInfo = (msg) => toast.info(msg);

export const notifyLoading = (msg) => toast.loading(msg);
export const updateToast = (id, msg, type = "success") =>
  toast.update(id, {
    render: msg,
    type,
    isLoading: false,
    autoClose: 3000,
  });

export const confirmToast = (message) => {
  return new Promise((resolve) => {
    toast(
      ({ closeToast }) => (
        <div>
          <p>{message}</p>

          <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
            <Button
              title='Confirmar'
              onClick={() => {
                resolve(true);
                closeToast();
              }}
            />

            <Button
              title='Cancelar'
              onClick={() => {
                resolve(false);
                closeToast();
              }}
            />
          </div>
        </div>
      ),
      {
        autoClose: false,
        closeOnClick: false,
        draggable: false,
      }
    );
  });
};


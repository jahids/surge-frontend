import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// export const notifySuccess = message : any =>
//   toast(<p style={{ fontSize: 16 }}>{message}</p>, {
//     position: 'top-right',
//     autoClose: 5000,
//     hideProgressBar: false,
//     newestOnTop: false,
//     closeOnClick: true,
//     rtl: false,
//     pauseOnFocusLoss: true,
//     draggable: true,
//     pauseOnHover: true,
//     type: 'success',
//   });

export const notifySuccess = (message: string) => {
  toast(message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

export const notifyError = (message: string) => {
  toast.error(message, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

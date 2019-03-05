import { Toast } from 'antd-mobile';

export default class CustomToast {
  static info = (content, duration, onClose, mask) => {
    Toast.info(content, duration, onClose, mask);
    const toastElement = document.getElementsByClassName('am-toast-mask')[0];
    toastElement &&
      toastElement.addEventListener('click', () => {
        Toast.hide();
      });
  };
  static success = (content, duration, onClose, mask) => {
    Toast.success(content, duration, onClose, mask);
  };
  static fail = (content, duration, onClose, mask) => {
    Toast.fail(content, duration, onClose, mask);
  };
  static loading = (content, duration, onClose, mask) => {
    Toast.loading(content, duration, onClose, mask);
  };
  static offline = (content, duration, onClose, mask) => {
    Toast.offline(content, duration, onClose, mask);
  };
  static hide = () => {
    Toast.hide();
  };
}

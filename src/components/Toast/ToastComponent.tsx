import React, {
  forwardRef,
  RefObject,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import * as s from './toastStyle';

export class Toast {
  static ref: RefObject<TToastRef>;
  static setRef = (ref: any) => {
    this.ref = ref;
  };

  static show = (props: TToastProps) => {
    this.ref.current?.show?.(props);
  };

  static hide = () => {
    this.ref.current?.hide?.();
  };
}

type TToastProps = {
  content: string;
};

type TToastRef = {
  show: (props: TToastProps) => void;
  hide: () => void;
};

const ToastComponent = forwardRef((_props: any, _ref: any) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [props, setProps] = useState<TToastProps>();

  const toastRef = useRef<TToastRef>();

  useImperativeHandle(toastRef, () => ({
    show: params => {
      setProps(params);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 3000);
    },
    hide: () => {
      setVisible(false);
    },
  }));

  useLayoutEffect(() => {
    Toast.setRef(toastRef);
  });

  return (
    <>
      {isVisible && (
        <s.ToastContainer>
          <s.ToastText>{props?.content || ''}</s.ToastText>
        </s.ToastContainer>
      )}
    </>
  );
});

export default ToastComponent;

import React from 'react';

interface AlertProps {
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss?: () => void;
  children: React.ReactNode;
}

const Alert:React.FC<AlertProps> = ({ type, onDismiss, children }) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      <span>{children}</span>
      {onDismiss && <button onClick={onDismiss}>Закрыть</button>}
    </div>
  );
};

export default Alert;
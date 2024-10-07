import React from 'react';
import './Alert.css';

interface AlertProps {
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss?: () => void;
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ type, onDismiss, children }) => {
  return (
    <div className={`alert alert-${type}`}>
      {children}
      {onDismiss && (
        <button className="alert-close" onClick={onDismiss}>
          Закрыть
        </button>
      )}
    </div>
  );
};

export default Alert;
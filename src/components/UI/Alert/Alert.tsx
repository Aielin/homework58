import React from 'react';

interface AlertProps {
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss?: () => void;
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ type, onDismiss, children }) => {
  const alertClasses = `alert alert-${type} d-flex justify-content-between align-items-center mt-4`;

  return (
    <div className={alertClasses}>
      <span>{children}</span>
      {onDismiss && (
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onDismiss}
        ></button>
      )}
    </div>
  );
};

export default Alert;

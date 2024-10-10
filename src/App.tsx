import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import Alert from './components/UI/Alert/Alert';

interface AlertType {
  id: number;
  type: 'primary' | 'success' | 'danger' | 'warning';
  text: string;
}

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [alerts, setAlerts] = useState<AlertType[]>([]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const addAlert = () => {
    const alertTypes = ['primary', 'success', 'danger', 'warning'] as const;
    const randomType = alertTypes[Math.floor(Math.random() * alertTypes.length)];
    const newAlert: AlertType = {
      id: Date.now(),
      type: randomType,
      text: 'Это новый предупреждающий алерт!',
    };
    setAlerts([...alerts, newAlert]);
  };

  const removeAlert = (id: number) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-primary me-2" onClick={addAlert}>
        Показать Alert
      </button>
      <button className="btn btn-primary" onClick={openModal}>
        Открыть модальное окно
      </button>

      {alerts.map(alert => (
        <Alert
          key={alert.id}
          type={alert.type}
          onDismiss={() => removeAlert(alert.id)}
        >
          {alert.text}
        </Alert>
      ))}

      <Modal show={showModal} onClose={closeModal} title="Заголовок модального окна">
        <p>Modal content</p>
      </Modal>
    </div>
  );
};

export default App;
